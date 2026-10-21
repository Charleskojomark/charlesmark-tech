import { NextResponse } from "next/server";
import { z } from "zod";
import { query } from "@/lib/db";
import {
  renderSubscriberWaitlistEmail,
  renderOwnerWaitlistNotification,
  AIResearchResponses,
} from "@/lib/email-templates";

const waitlistSchema = z.object({
  email: z.string().optional().default(""),
  name: z.string().optional().default(""),
  q1_goal: z.string().optional().default(""),
  q2_current_learning: z.string().optional().default(""),
  q3_biggest_challenge: z.string().optional().default(""),
  q4_interactive_3d: z.string().optional().default(""),
  q5_pricing_preference: z.string().optional().default(""),
  q6_early_access_email: z.string().optional().default(""),
  interests: z.string().optional().default("3D Story-Based Virtual AI Learning"),
  // Honeypot field for bot spam detection
  botField: z.string().max(0, "Bot detected").optional().default(""),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate request body
    const validation = waitlistSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid submission data.",
          errors: validation.error.format(),
        },
        { status: 400 }
      );
    }

    const data = validation.data;
    const finalEmail = (data.q6_early_access_email || data.email || "").trim().toLowerCase();
    const finalName = data.name.trim();

    // Optional email validation if provided
    if (finalEmail) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(finalEmail)) {
        return NextResponse.json(
          {
            success: false,
            message: "Please enter a valid email address.",
          },
          { status: 400 }
        );
      }
    }

    const researchAnswers: AIResearchResponses = {
      q1_goal: data.q1_goal,
      q2_current_learning: data.q2_current_learning,
      q3_biggest_challenge: data.q3_biggest_challenge,
      q4_interactive_3d: data.q4_interactive_3d,
      q5_pricing_preference: data.q5_pricing_preference,
      q6_early_access_email: finalEmail || "Not provided",
    };

    // 1. Persist to PostgreSQL database (Supabase)
    try {
      // Ensure ai_learning_research table exists
      await query(`
        CREATE TABLE IF NOT EXISTS public.ai_learning_research (
          id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
          email TEXT,
          name TEXT,
          q1_goal TEXT,
          q2_current_learning TEXT,
          q3_biggest_challenge TEXT,
          q4_interactive_3d TEXT,
          q5_pricing_preference TEXT,
          responses JSONB,
          created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
        );
      `);

      await query(
        `
        INSERT INTO public.ai_learning_research (
          email, name, q1_goal, q2_current_learning, q3_biggest_challenge, q4_interactive_3d, q5_pricing_preference, responses
        ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8);
      `,
        [
          finalEmail || null,
          finalName || null,
          data.q1_goal || null,
          data.q2_current_learning || null,
          data.q3_biggest_challenge || null,
          data.q4_interactive_3d || null,
          data.q5_pricing_preference || null,
          JSON.stringify(researchAnswers),
        ]
      );

      // If early access email is provided, also sync into waitlist table
      if (finalEmail) {
        await query(`
          CREATE TABLE IF NOT EXISTS public.waitlist (
            id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
            email TEXT NOT NULL UNIQUE,
            name TEXT,
            interests TEXT,
            created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
          );
        `);

        await query(
          `
          INSERT INTO public.waitlist (email, name, interests)
          VALUES ($1, $2, $3)
          ON CONFLICT (email)
          DO UPDATE SET
            name = CASE WHEN EXCLUDED.name <> '' THEN EXCLUDED.name ELSE public.waitlist.name END,
            interests = EXCLUDED.interests;
        `,
          [
            finalEmail,
            finalName,
            data.q1_goal || "3D Story-Based Virtual AI Learning",
          ]
        );

        await query(`
          CREATE TABLE IF NOT EXISTS public.ai_learning_waitlist (
            id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
            email TEXT NOT NULL UNIQUE,
            name TEXT,
            interests TEXT,
            created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
          );
        `);

        await query(
          `
          INSERT INTO public.ai_learning_waitlist (email, name, interests)
          VALUES ($1, $2, $3)
          ON CONFLICT (email)
          DO UPDATE SET
            name = CASE WHEN EXCLUDED.name <> '' THEN EXCLUDED.name ELSE public.ai_learning_waitlist.name END,
            interests = EXCLUDED.interests;
        `,
          [
            finalEmail,
            finalName,
            data.q1_goal || "3D Story-Based Virtual AI Learning",
          ]
        );
      }
    } catch (dbErr) {
      console.error("[WAITLIST_DATABASE_ERROR]:", dbErr);
    }

    // Query total count and recent signups to include in owner notification
    let totalCount = 1;
    let allMembers: { name?: string | null; email: string; created_at: string | Date }[] = [];

    try {
      const countRes = await query(
        "SELECT COUNT(*)::int AS count FROM public.waitlist;"
      );
      if (countRes && countRes.rows && countRes.rows[0]) {
        totalCount = countRes.rows[0].count;
      }

      const membersRes = await query(
        "SELECT name, email, created_at FROM public.waitlist ORDER BY created_at DESC LIMIT 50;"
      );
      if (membersRes && membersRes.rows) {
        allMembers = membersRes.rows;
      }
    } catch (countErr) {
      console.error("[WAITLIST_COUNT_ERROR]:", countErr);
    }

    // 2. Dispatch emails via Resend exclusively
    const resendApiKey = process.env.RESEND_API_KEY;
    const ownerEmailAddress = "markcharleskojo@gmail.com";

    const timestamp =
      new Date().toLocaleString("en-US", {
        timeZone: "UTC",
        dateStyle: "full",
        timeStyle: "medium",
      }) + " (UTC)";

    let subscriberDelivery = "pending";
    let ownerDelivery = "pending";

    if (resendApiKey) {
      // Email A: Confirmation to Subscriber thanking them for joining (only if email was provided)
      if (finalEmail) {
        try {
          const subscriberTemplate = renderSubscriberWaitlistEmail(
            finalName,
            finalEmail
          );

          const subRes = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${resendApiKey}`,
            },
            body: JSON.stringify({
              from: "Charles Mark <waitlist@charlesmark.tech>",
              to: [finalEmail],
              reply_to: ownerEmailAddress,
              subject: subscriberTemplate.subject,
              html: subscriberTemplate.html,
              text: subscriberTemplate.text,
            }),
          });

          if (subRes.ok) {
            subscriberDelivery = "delivered";
          } else {
            const errData = await subRes.text();
            console.error("[RESEND_SUBSCRIBER_ERROR]:", subRes.status, errData);
            subscriberDelivery = "failed_" + subRes.status;
          }
        } catch (subErr) {
          console.error("[RESEND_SUBSCRIBER_EXCEPTION]:", subErr);
          subscriberDelivery = "exception";
        }
      } else {
        subscriberDelivery = "skipped_no_email";
      }

      // Email B: Notification to Owner (markcharleskojo@gmail.com) upon every fill
      try {
        const ownerTemplate = renderOwnerWaitlistNotification(
          finalName,
          finalEmail,
          data.q1_goal || "3D Story-Based Virtual AI Learning",
          timestamp,
          totalCount,
          allMembers,
          researchAnswers
        );

        const ownerRes = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${resendApiKey}`,
          },
          body: JSON.stringify({
            from: "Charles Mark Waitlist <waitlist@charlesmark.tech>",
            to: [ownerEmailAddress],
            reply_to: finalEmail || ownerEmailAddress,
            subject: ownerTemplate.subject,
            html: ownerTemplate.html,
            text: ownerTemplate.text,
          }),
        });

        if (ownerRes.ok) {
          ownerDelivery = "delivered";
        } else {
          const errData = await ownerRes.text();
          console.error("[RESEND_OWNER_ERROR]:", ownerRes.status, errData);
          ownerDelivery = "failed_" + ownerRes.status;
        }
      } catch (ownerErr) {
        console.error("[RESEND_OWNER_EXCEPTION]:", ownerErr);
        ownerDelivery = "exception";
      }
    }

    // 3. Record audit log
    try {
      await query(`
        CREATE TABLE IF NOT EXISTS public.waitlist_email_log (
          id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
          recipient TEXT NOT NULL DEFAULT 'markcharleskojo@gmail.com',
          signup_email TEXT,
          signup_name TEXT,
          interests TEXT,
          delivery_status TEXT NOT NULL,
          created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
        );
      `);

      await query(
        `
        INSERT INTO public.waitlist_email_log (recipient, signup_email, signup_name, interests, delivery_status)
        VALUES ($1, $2, $3, $4, $5);
      `,
        [
          ownerEmailAddress,
          finalEmail || "anonymous",
          finalName,
          data.q1_goal || "AI Research",
          `sub:${subscriberDelivery},owner:${ownerDelivery}`,
        ]
      );
    } catch (auditErr) {
      console.error("[WAITLIST_AUDIT_ERROR]:", auditErr);
    }

    return NextResponse.json({
      success: true,
      message: finalEmail
        ? "Thank you! Your research responses were recorded and your waitlist spot is reserved."
        : "Thank you! Your research responses have been recorded.",
    });
  } catch (err: unknown) {
    console.error("[WAITLIST_API_ERROR]:", err);
    return NextResponse.json(
      {
        success: false,
        message:
          "An unexpected error occurred. Please try again or reach out on WhatsApp.",
      },
      { status: 500 }
    );
  }
}

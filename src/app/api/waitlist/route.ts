import { NextResponse } from "next/server";
import { z } from "zod";
import { query } from "@/lib/db";
import {
  renderSubscriberWaitlistEmail,
  renderOwnerWaitlistNotification,
} from "@/lib/email-templates";

const waitlistSchema = z.object({
  email: z.string().email("Please provide a valid email address"),
  name: z.string().optional().default(""),
  interests: z.string().optional().default("3D Virtual AI Learning"),
  // Honeypot field for bot spam detection
  botField: z.string().max(0, "Bot detected").optional().default(""),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate request body
    const validation = waitlistSchema.safeParse(body);
    if (!validation.success) {
      const fieldErrors: Record<string, string> = {};
      validation.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0].toString()] = err.message;
        }
      });
      return NextResponse.json(
        {
          success: false,
          message: "Please provide a valid email address.",
          errors: fieldErrors,
        },
        { status: 400 }
      );
    }

    const { email, name, interests } = validation.data;
    const cleanEmail = email.trim().toLowerCase();
    const cleanName = name.trim();
    const cleanInterests = interests.trim() || "3D Story-Based Virtual AI Learning";

    // 1. Persist applicant details to Supabase PostgreSQL database
    try {
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
          interests = CASE WHEN EXCLUDED.interests <> '' THEN EXCLUDED.interests ELSE public.waitlist.interests END;
      `,
        [cleanEmail, cleanName, cleanInterests]
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
          interests = CASE WHEN EXCLUDED.interests <> '' THEN EXCLUDED.interests ELSE public.ai_learning_waitlist.interests END;
      `,
        [cleanEmail, cleanName, cleanInterests]
      );
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

    const timestamp = new Date().toLocaleString("en-US", {
      timeZone: "UTC",
      dateStyle: "full",
      timeStyle: "medium",
    }) + " (UTC)";

    const subscriberTemplate = renderSubscriberWaitlistEmail(
      cleanName,
      cleanEmail
    );
    const ownerTemplate = renderOwnerWaitlistNotification(
      cleanName,
      cleanEmail,
      cleanInterests,
      timestamp,
      totalCount,
      allMembers
    );

    let subscriberDelivery = "pending";
    let ownerDelivery = "pending";

    if (resendApiKey) {
      // Email A: Confirmation to Subscriber thanking them for joining
      try {
        const subRes = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${resendApiKey}`,
          },
          body: JSON.stringify({
            from: "Charles Mark <waitlist@charlesmark.tech>",
            to: [cleanEmail],
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

      // Email B: Notification to Owner (markcharleskojo@gmail.com)
      try {
        const ownerRes = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${resendApiKey}`,
          },
          body: JSON.stringify({
            from: "Charles Mark Waitlist <waitlist@charlesmark.tech>",
            to: [ownerEmailAddress],
            reply_to: cleanEmail,
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
          signup_email TEXT NOT NULL,
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
          cleanEmail,
          cleanName,
          cleanInterests,
          `sub:${subscriberDelivery},owner:${ownerDelivery}`,
        ]
      );
    } catch (auditErr) {
      console.error("[WAITLIST_AUDIT_ERROR]:", auditErr);
    }

    return NextResponse.json({
      success: true,
      message:
        "You're on the waitlist! We have sent a confirmation email to your inbox.",
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

import { NextResponse } from "next/server";
import { z } from "zod";
import { query } from "@/lib/db";

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
    const cleanInterests = interests.trim();

    // 1. Save details to Supabase PostgreSQL database
    try {
      // Ensure waitlist table exists
      await query(`
        CREATE TABLE IF NOT EXISTS public.waitlist (
          id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
          email TEXT NOT NULL UNIQUE,
          name TEXT,
          interests TEXT,
          created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
        );
      `);

      // Upsert into waitlist
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

      // Also ensure secondary table exists and store for redundancy
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
      // If DB error, log but continue so we can still notify the user
    }

    // 2. Email notification to markcharleskojo@gmail.com
    const recipientEmail = "markcharleskojo@gmail.com";
    const resendApiKey = process.env.RESEND_API_KEY;

    const emailSubject = `🚀 [New Waitlist Signup] 3D AI Learning App: ${cleanName || cleanEmail}`;
    const emailBody = `
New 3D Story-Based Virtual AI Learning Waitlist Signup!
======================================================
Email: ${cleanEmail}
Name: ${cleanName || "Not provided"}
Interests / Focus: ${cleanInterests || "3D Virtual AI Learning"}
Timestamp: ${new Date().toISOString()}

Storage Status:
- Supabase PostgreSQL: Saved in public.waitlist and public.ai_learning_waitlist
- Host: aws-0-eu-west-1.pooler.supabase.com:6543
======================================================
    `.trim();

    let deliveryStatus = "logged_for_notification";

    // Attempt delivery via Resend if API key is provided
    if (resendApiKey) {
      try {
        const resendRes = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${resendApiKey}`,
          },
          body: JSON.stringify({
            from: "Charles Mark Platform <inquiries@charlesmark.tech>",
            to: [recipientEmail],
            reply_to: cleanEmail,
            subject: emailSubject,
            text: emailBody,
          }),
        });
        if (resendRes.ok) {
          deliveryStatus = "delivered_via_resend";
        } else {
          deliveryStatus = "resend_error_" + resendRes.status;
        }
      } catch (emailErr) {
        console.error("[WAITLIST_EMAIL_ERROR]:", emailErr);
        deliveryStatus = "resend_fetch_failed";
      }
    }

    // Direct automated email delivery to markcharleskojo@gmail.com via FormSubmit
    try {
      const fsRes = await fetch(`https://formsubmit.co/ajax/${recipientEmail}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Referer: "https://www.charlesmark.tech",
          Origin: "https://www.charlesmark.tech",
        },
        body: JSON.stringify({
          _subject: emailSubject,
          _replyto: cleanEmail,
          "Applicant Name": cleanName || "Not provided",
          "Applicant Email": cleanEmail,
          "Selected Interest": cleanInterests || "3D Virtual AI Learning",
          "Submitted At": new Date().toISOString(),
          "Database Status": "Saved in Supabase public.waitlist",
        }),
      });

      if (fsRes.ok) {
        deliveryStatus =
          deliveryStatus === "delivered_via_resend"
            ? "delivered_resend_and_formsubmit"
            : "delivered_via_formsubmit";
      }
    } catch (fsErr) {
      console.error("[FORMSUBMIT_DELIVERY_ERROR]:", fsErr);
    }

    // Record notification in Supabase log table for complete auditability
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
        [recipientEmail, cleanEmail, cleanName, cleanInterests, deliveryStatus]
      );
    } catch (auditErr) {
      console.error("[WAITLIST_AUDIT_ERROR]:", auditErr);
    }

    return NextResponse.json({
      success: true,
      message: "You're on the waitlist! We'll reach out as soon as closed beta opens.",
    });
  } catch (err: unknown) {
    console.error("[WAITLIST_API_ERROR]:", err);
    return NextResponse.json(
      {
        success: false,
        message: "An unexpected error occurred. Please try again or reach out on WhatsApp.",
      },
      { status: 500 }
    );
  }
}

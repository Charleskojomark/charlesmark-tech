import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters long"),
  email: z.string().email("Please provide a valid email address"),
  company: z.string().optional(),
  whatToBuild: z
    .string()
    .min(5, "Please tell me a little about what you want to automate or build"),
  budget: z.string().optional(),
  howHeard: z.string().optional(),
  // Honeypot field for spam protection: must be empty
  botField: z.string().max(0, "Bot detected"),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate body against Zod schema
    const validationResult = contactSchema.safeParse(body);

    if (!validationResult.success) {
      const fieldErrors: Record<string, string> = {};
      validationResult.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0].toString()] = err.message;
        }
      });

      return NextResponse.json(
        {
          success: false,
          message: "Please correct the highlighted form errors.",
          errors: fieldErrors,
        },
        { status: 400 }
      );
    }

    const validData = validationResult.data;

    // Check for optional configured email notification API (Resend via fetch)
    const resendApiKey = process.env.RESEND_API_KEY;
    const recipientEmail =
      process.env.CONTACT_EMAIL || "kcharlesmark@gmail.com";

    if (resendApiKey) {
      // In production with Resend API key configured:
      const resendResponse = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${resendApiKey}`,
        },
        body: JSON.stringify({
          from: process.env.RESEND_FROM_EMAIL || "Charles Mark Inquiries <onboarding@resend.dev>",
          to: [recipientEmail],
          reply_to: validData.email,
          subject: `[New Inquiry] ${validData.name}${validData.company ? ` (${validData.company})` : ""}`,
          text: `
New Business Inquiry Received:
------------------------------
Name: ${validData.name}
Email: ${validData.email}
Company: ${validData.company || "Not provided"}
Budget Range: ${validData.budget || "Not specified"}
How Heard: ${validData.howHeard || "Not specified"}

What They Want to Automate / Build:
${validData.whatToBuild}

Submitted at: ${new Date().toISOString()}
Origin: charlesmark.tech
          `,
        }),
      });

      if (!resendResponse.ok) {
        console.error("Resend API error:", await resendResponse.text());
        return NextResponse.json(
          {
            success: false,
            message:
              "We encountered an issue submitting your inquiry. Please reach out directly on WhatsApp or email markcharleskojo@gmail.com.",
          },
          { status: 500 }
        );
      }
    } else {
      // Direct email dispatch to recipient via FormSubmit
      try {
        await fetch(`https://formsubmit.co/ajax/${recipientEmail}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Origin: "https://charlesmark.tech",
            Referer: "https://charlesmark.tech/contact",
            "User-Agent":
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
          },
          body: JSON.stringify({
            _captcha: "false",
            _template: "table",
            _subject: `[New Inquiry] ${validData.name}${validData.company ? ` (${validData.company})` : ""}`,
            _replyto: validData.email,
            Name: validData.name,
            Email: validData.email,
            Company: validData.company || "Not provided",
            Budget: validData.budget || "Not specified",
            "What to Build": validData.whatToBuild,
            "Submitted At": new Date().toISOString(),
          }),
        });
      } catch (e) {
        console.error("FormSubmit contact dispatch error:", e);
      }
    }

    return NextResponse.json(
      {
        success: true,
        message:
          "Thank you for reaching out! Your brief has been received. Charles will review your requirements and respond within 24 hours.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API exception:", error);
    return NextResponse.json(
      {
        success: false,
        message:
          "An unexpected server error occurred. Please contact Charles directly via markcharleskojo@gmail.com or WhatsApp.",
      },
      { status: 500 }
    );
  }
}

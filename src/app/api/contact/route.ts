import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters long"),
  email: z.string().email("Please provide a valid email address"),
  company: z.string().optional(),
  service: z.enum([
    "ai-workflow-automation",
    "custom-ai-agents",
    "backend-and-ai-integration",
    "other",
  ], {
    errorMap: () => ({ message: "Please select a valid service option" }),
  }),
  description: z
    .string()
    .min(10, "Project description must be at least 10 characters long"),
  budget: z.string().optional(),
  preferredContact: z.string().optional(),
  // Honeypot field for spam bots
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

    // Check for optional configured email notification API (e.g. Resend)
    const resendApiKey = process.env.RESEND_API_KEY;
    const recipientEmail =
      process.env.CONTACT_EMAIL || "markcharleskojo@gmail.com";

    if (resendApiKey) {
      // In production with Resend configured:
      const resendResponse = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${resendApiKey}`,
        },
        body: JSON.stringify({
          from: "Charles Mark Website <inquiries@charlesmark.tech>",
          to: [recipientEmail],
          subject: `[New Inquiry] ${validData.service}: ${validData.name}`,
          text: `
Name: ${validData.name}
Email: ${validData.email}
Company: ${validData.company || "N/A"}
Service: ${validData.service}
Budget: ${validData.budget || "Not specified"}
Preferred Contact: ${validData.preferredContact || "Email"}

Project Details:
${validData.description}
          `,
        }),
      });

      if (!resendResponse.ok) {
        console.error("Resend API error:", await resendResponse.text());
        return NextResponse.json(
          {
            success: false,
            message:
              "We encountered an issue submitting your inquiry. Please use the direct email link below.",
          },
          { status: 500 }
        );
      }
    } else {
      // Development / unconfigured environment: log securely without exposing to client
      console.log("[INQUIRY_RECEIVED_SIMULATION]", {
        name: validData.name,
        email: validData.email,
        service: validData.service,
        timestamp: new Date().toISOString(),
      });
    }

    return NextResponse.json(
      {
        success: true,
        message:
          "Thank you for reaching out! Your project brief has been received. Charles will review your requirements and respond within 24–48 hours.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API exception:", error);
    return NextResponse.json(
      {
        success: false,
        message:
          "An unexpected server error occurred. Please reach out directly via markcharleskojo@gmail.com.",
      },
      { status: 500 }
    );
  }
}

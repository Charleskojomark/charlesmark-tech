/**
 * Clean, modern email templates for Charles Mark platform.
 * Fully responsive, cross-client compatible HTML with fallback plain text.
 * No database strings or sensitive internal infrastructure exposed.
 */

export function renderSubscriberWaitlistEmail(name: string, email: string) {
  const displayName = name && name.trim() ? name.trim() : "there";
  const subject = "✨ You're on the waitlist | 3D Story-Based Virtual AI Learning";

  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${subject}</title>
</head>
<body style="margin: 0; padding: 0; background-color: #0f0a07; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #F5F0E8; -webkit-font-smoothing: antialiased;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #0f0a07; padding: 32px 16px;">
    <tr>
      <td align="center">
        <!-- Main Email Container -->
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width: 580px; background-color: #1A120E; border: 1px solid #4A3428; border-radius: 20px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
          
          <!-- Top Accent Bar -->
          <tr>
            <td style="height: 4px; background: linear-gradient(90deg, #B58A64, #D8C5AF, #B58A64);"></td>
          </tr>

          <!-- Header / Brand -->
          <tr>
            <td style="padding: 32px 32px 20px 32px;">
              <span style="font-family: 'Courier New', Courier, monospace; font-size: 11px; font-weight: 700; letter-spacing: 2px; color: #B58A64; text-transform: uppercase;">
                3D VIRTUAL AI LEARNING • EARLY ACCESS
              </span>
              <h1 style="margin: 12px 0 0 0; font-size: 24px; font-weight: 700; color: #FFFFFF; line-height: 1.3;">
                You&rsquo;re officially on the waitlist!
              </h1>
            </td>
          </tr>

          <!-- Main Body -->
          <tr>
            <td style="padding: 0 32px 24px 32px; font-size: 14px; line-height: 1.7; color: #D8C5AF;">
              <p style="margin: 0 0 16px 0;">
                Hi <strong style="color: #FFFFFF;">${displayName}</strong>,
              </p>
              <p style="margin: 0 0 16px 0;">
                Thank you for reserving your spot for our upcoming <strong style="color: #FFFFFF;">3D Story-Based Virtual AI Learning</strong> platform. We are thrilled to have you with us early.
              </p>
              <p style="margin: 0 0 20px 0;">
                We are building a new experiential way to master AI systems—combining immersive spatial environments with narrative-driven engineering quests. Instead of watching static tutorials, you will solve hands-on architectural challenges, explore neural topologies, and deploy intelligent agents in a virtual world.
              </p>

              <!-- What to Expect Box -->
              <div style="background-color: #241A15; border: 1px solid #4A3428; border-radius: 12px; padding: 20px; margin: 24px 0;">
                <span style="display: block; font-family: 'Courier New', Courier, monospace; font-size: 11px; font-weight: 700; color: #B58A64; letter-spacing: 1px; text-transform: uppercase; margin-bottom: 12px;">
                  WHAT HAPPENS NEXT
                </span>
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                  <tr>
                    <td style="padding-bottom: 10px; font-size: 13px; color: #F5F0E8; line-height: 1.5;">
                      <strong style="color: #FFFFFF;">1. Closed Beta Access:</strong> You will be invited to the private testing phase before public release.
                    </td>
                  </tr>
                  <tr>
                    <td style="padding-bottom: 10px; font-size: 13px; color: #F5F0E8; line-height: 1.5;">
                      <strong style="color: #FFFFFF;">2. Founder Office Hours:</strong> Opportunities to test interactive 3D modules and shape upcoming quest storylines.
                    </td>
                  </tr>
                  <tr>
                    <td style="font-size: 13px; color: #F5F0E8; line-height: 1.5;">
                      <strong style="color: #FFFFFF;">3. Zero Spam:</strong> We will only email you with major milestone updates and your direct invitation link.
                    </td>
                  </tr>
                </table>
              </div>

              <p style="margin: 0 0 24px 0;">
                Have questions, ideas, or feedback on what you would love to see inside the virtual learning world? Feel free to connect with Charles directly:
              </p>

              <!-- CTA Buttons -->
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" style="margin: 0 0 24px 0;">
                <tr>
                  <td style="padding-right: 12px;">
                    <a href="https://wa.me/2347082367382?text=Hi%20Charles%2C%20I%20just%20joined%20the%203D%20AI%20learning%20waitlist%21" target="_blank" style="display: inline-block; background-color: #25D366; color: #FFFFFF; font-size: 12px; font-weight: 700; text-decoration: none; padding: 12px 20px; border-radius: 10px; text-transform: uppercase; letter-spacing: 1px;">
                      Connect on WhatsApp &rarr;
                    </a>
                  </td>
                  <td>
                    <a href="https://charlesmark.tech" target="_blank" style="display: inline-block; background-color: #241A15; border: 1px solid #4A3428; color: #F5F0E8; font-size: 12px; font-weight: 700; text-decoration: none; padding: 12px 20px; border-radius: 10px; text-transform: uppercase; letter-spacing: 1px;">
                      Visit Platform
                    </a>
                  </td>
                </tr>
              </table>

              <!-- Sign-off -->
              <p style="margin: 24px 0 0 0; color: #D8C5AF; font-size: 13px; line-height: 1.6;">
                Warm regards,<br>
                <strong style="color: #FFFFFF; font-size: 14px;">Charles Mark</strong><br>
                <span style="font-size: 12px; color: #B58A64;">Business Solutions Architect &amp; Applied AI Engineer</span><br>
                <a href="https://charlesmark.tech" style="color: #B58A64; text-decoration: none; font-size: 12px;">charlesmark.tech</a>
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 20px 32px; background-color: #140D09; border-top: 1px solid #2E1F17; text-align: center; font-size: 11px; color: #8F7B6B;">
              You received this email because you signed up for early access at <a href="https://charlesmark.tech/waitlist" style="color: #B58A64; text-decoration: none;">charlesmark.tech/waitlist</a> with ${email}.
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();

  const text = `
Hi ${displayName},

Thank you for joining the early access waitlist for our upcoming 3D Story-Based Virtual AI Learning platform. Your spot is officially reserved.

We are building a new experiential way to master AI systems—combining immersive spatial environments with narrative-driven engineering quests. Instead of watching static tutorials, you will solve hands-on architectural challenges, explore neural topologies, and deploy intelligent agents in a virtual world.

WHAT HAPPENS NEXT:
1. Closed Beta Access: You will be invited to the private testing phase before public release.
2. Founder Office Hours: Opportunities to test interactive 3D modules and shape upcoming quest storylines.
3. Zero Spam: We will only email you with major milestone updates and your direct invitation link.

Connect directly with Charles:
- WhatsApp: https://wa.me/2347082367382?text=Hi%20Charles%2C%20I%20just%20joined%20the%203D%20AI%20learning%20waitlist%21
- Website: https://charlesmark.tech

Warm regards,
Charles Mark
Business Solutions Architect & Applied AI Engineer
https://charlesmark.tech
  `.trim();

  return { subject, html, text };
}

export function renderOwnerWaitlistNotification(
  name: string,
  email: string,
  interests: string,
  timestamp: string
) {
  const displayName = name && name.trim() ? name.trim() : "Not provided";
  const subject = `🚀 New Waitlist Signup: ${name && name.trim() ? name.trim() : email}`;

  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${subject}</title>
</head>
<body style="margin: 0; padding: 0; background-color: #0f0a07; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #F5F0E8;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #0f0a07; padding: 24px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width: 540px; background-color: #1A120E; border: 1px solid #4A3428; border-radius: 16px; overflow: hidden;">
          <tr>
            <td style="height: 4px; background: #B58A64;"></td>
          </tr>
          <tr>
            <td style="padding: 24px 28px 16px 28px;">
              <span style="font-family: 'Courier New', Courier, monospace; font-size: 11px; font-weight: 700; color: #B58A64; letter-spacing: 1.5px; text-transform: uppercase;">
                WAITLIST NOTIFICATION
              </span>
              <h2 style="margin: 8px 0 0 0; font-size: 20px; font-weight: 700; color: #FFFFFF;">
                New Subscriber Joined
              </h2>
            </td>
          </tr>
          <tr>
            <td style="padding: 0 28px 24px 28px; font-size: 13px; color: #D8C5AF; line-height: 1.6;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #241A15; border: 1px solid #4A3428; border-radius: 10px; margin: 12px 0 20px 0;">
                <tr>
                  <td style="padding: 12px 16px; border-bottom: 1px solid #33241C; font-weight: 600; color: #B58A64; width: 100px;">Applicant:</td>
                  <td style="padding: 12px 16px; border-bottom: 1px solid #33241C; color: #FFFFFF; font-weight: 600;">${displayName}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 16px; border-bottom: 1px solid #33241C; font-weight: 600; color: #B58A64;">Email:</td>
                  <td style="padding: 12px 16px; border-bottom: 1px solid #33241C; color: #FFFFFF;">
                    <a href="mailto:${email}" style="color: #FFFFFF; text-decoration: underline;">${email}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 16px; border-bottom: 1px solid #33241C; font-weight: 600; color: #B58A64;">Interest:</td>
                  <td style="padding: 12px 16px; border-bottom: 1px solid #33241C; color: #D8C5AF;">${interests || "3D Story-Based Virtual AI Learning"}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 16px; font-weight: 600; color: #B58A64;">Timestamp:</td>
                  <td style="padding: 12px 16px; color: #D8C5AF;">${timestamp}</td>
                </tr>
              </table>

              <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td>
                    <a href="mailto:${email}?subject=Welcome%20to%20the%203D%20AI%20Learning%20Waitlist" style="display: inline-block; background-color: #B58A64; color: #150F0B; font-size: 11px; font-weight: 700; text-decoration: none; padding: 10px 18px; border-radius: 8px; text-transform: uppercase; letter-spacing: 1px;">
                      Reply to ${displayName}
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();

  const text = `
NEW WAITLIST SIGNUP
====================
Name: ${displayName}
Email: ${email}
Interest: ${interests || "3D Story-Based Virtual AI Learning"}
Timestamp: ${timestamp}

Reply directly: mailto:${email}
  `.trim();

  return { subject, html, text };
}

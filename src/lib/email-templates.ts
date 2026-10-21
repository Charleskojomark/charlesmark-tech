/**
 * Clean, modern email templates for Charles Mark platform.
 * Fully responsive, cross-client compatible HTML with fallback plain text.
 * No database strings or sensitive internal infrastructure exposed.
 */

export interface WaitlistMemberSummary {
  name?: string | null;
  email: string;
  created_at: string | Date;
}

export interface AIResearchResponses {
  q1_goal?: string;
  q2_current_learning?: string;
  q3_biggest_challenge?: string;
  q4_interactive_3d?: string;
  q5_pricing_preference?: string;
  q6_early_access_email?: string;
}

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
                Thank you for completing our AI learning research and reserving your spot for the upcoming <strong style="color: #FFFFFF;">3D Story-Based Virtual AI Learning</strong> platform. Your insights directly shape how we build!
              </p>
              <p style="margin: 0 0 20px 0;">
                We are building a new experiential way to master AI systems—combining immersive spatial environments with narrative-driven engineering quests. Instead of watching passive tutorials, you will solve hands-on architectural challenges, explore neural topologies, and deploy intelligent agents in a virtual world.
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

              <p style="margin: 0 0 20px 0;">
                Have questions, ideas, or feedback on what you would love to see inside the virtual learning world? Feel free to connect with Charles directly:
              </p>

              <!-- CTA Buttons -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="margin: 0 0 28px 0;">
                <tr>
                  <td style="padding-bottom: 12px;">
                    <a href="https://wa.me/2347082367382?text=Hi%20Charles%2C%20I%20just%20completed%20the%20AI%20learning%20research%20and%20joined%20the%20waitlist%21" target="_blank" style="display: block; width: 100%; box-sizing: border-box; text-align: center; background-color: #25D366; color: #FFFFFF; font-size: 13px; font-weight: 700; text-decoration: none; padding: 14px 20px; border-radius: 12px; text-transform: uppercase; letter-spacing: 0.5px;">
                      Connect on WhatsApp &rarr;
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="https://charlesmark.tech" target="_blank" style="display: block; width: 100%; box-sizing: border-box; text-align: center; background-color: #241A15; border: 1px solid #4A3428; color: #F5F0E8; font-size: 13px; font-weight: 700; text-decoration: none; padding: 13px 20px; border-radius: 12px; text-transform: uppercase; letter-spacing: 0.5px;">
                      Visit Platform &rarr;
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
              You received this email because you signed up at <a href="https://charlesmark.tech/waitlist" style="color: #B58A64; text-decoration: none;">charlesmark.tech/waitlist</a> with ${email}.
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

Thank you for completing our AI learning research and joining the early access waitlist for our upcoming 3D Story-Based Virtual AI Learning platform. Your spot is officially reserved.

We are building a new experiential way to master AI systems—combining immersive spatial environments with narrative-driven engineering quests. Instead of watching static tutorials, you will solve hands-on architectural challenges, explore neural topologies, and deploy intelligent agents in a virtual world.

WHAT HAPPENS NEXT:
1. Closed Beta Access: You will be invited to the private testing phase before public release.
2. Founder Office Hours: Opportunities to test interactive 3D modules and shape upcoming quest storylines.
3. Zero Spam: We will only email you with major milestone updates and your direct invitation link.

Connect directly with Charles:
- WhatsApp: https://wa.me/2347082367382?text=Hi%20Charles%2C%20I%20just%20completed%20the%20AI%20learning%20research%20and%20joined%20the%20waitlist%21
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
  timestamp: string,
  totalCount: number,
  allMembers: WaitlistMemberSummary[] = [],
  researchResponses?: AIResearchResponses
) {
  const displayName = name && name.trim() ? name.trim() : "Respondent";
  const displayEmail = email && email.trim() ? email.trim() : (researchResponses?.q6_early_access_email || "Not provided");
  const subject = `🧠 AI Research & Waitlist (#${totalCount}): ${displayName} (${displayEmail})`;

  // Research answers HTML breakdown
  let researchHtml = "";
  let researchText = "";

  if (researchResponses) {
    researchHtml = `
      <!-- AI Learning Research Answers Table -->
      <span style="font-family: 'Courier New', Courier, monospace; font-size: 11px; font-weight: 700; color: #B58A64; letter-spacing: 1px; text-transform: uppercase; display: block; margin: 20px 0 8px 0;">
        AI LEARNING RESEARCH RESPONSES (6 QUESTIONS)
      </span>
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #241A15; border: 1px solid #B58A64; border-radius: 12px; margin-bottom: 24px; font-size: 13px;">
        <tr>
          <td style="padding: 12px 16px; border-bottom: 1px solid #3A2920; color: #B58A64; font-weight: 700; width: 45%;">
            1. What do you most want to achieve with AI?
          </td>
          <td style="padding: 12px 16px; border-bottom: 1px solid #3A2920; color: #FFFFFF; font-weight: 600;">
            ${researchResponses.q1_goal || "Not answered"}
          </td>
        </tr>
        <tr>
          <td style="padding: 12px 16px; border-bottom: 1px solid #3A2920; color: #B58A64; font-weight: 700;">
            2. How do you currently learn AI?
          </td>
          <td style="padding: 12px 16px; border-bottom: 1px solid #3A2920; color: #FFFFFF; font-weight: 600;">
            ${researchResponses.q2_current_learning || "Not answered"}
          </td>
        </tr>
        <tr>
          <td style="padding: 12px 16px; border-bottom: 1px solid #3A2920; color: #B58A64; font-weight: 700;">
            3. What's your biggest challenge when learning AI?
          </td>
          <td style="padding: 12px 16px; border-bottom: 1px solid #3A2920; color: #FFFFFF; font-weight: 600;">
            ${researchResponses.q3_biggest_challenge || "Not answered"}
          </td>
        </tr>
        <tr>
          <td style="padding: 12px 16px; border-bottom: 1px solid #3A2920; color: #B58A64; font-weight: 700;">
            4. Would you try learning AI through an interactive 3D world with stories, missions, and challenges?
          </td>
          <td style="padding: 12px 16px; border-bottom: 1px solid #3A2920; color: #FFFFFF; font-weight: 600;">
            ${researchResponses.q4_interactive_3d || "Not answered"}
          </td>
        </tr>
        <tr>
          <td style="padding: 12px 16px; border-bottom: 1px solid #3A2920; color: #B58A64; font-weight: 700;">
            5. If it helped you learn faster and apply AI skills, what would you prefer?
          </td>
          <td style="padding: 12px 16px; border-bottom: 1px solid #3A2920; color: #FFFFFF; font-weight: 600;">
            ${researchResponses.q5_pricing_preference || "Not answered"}
          </td>
        </tr>
        <tr>
          <td style="padding: 12px 16px; color: #B58A64; font-weight: 700;">
            6. Want early access when we launch?
          </td>
          <td style="padding: 12px 16px; color: #FFFFFF; font-weight: 600;">
            ${researchResponses.q6_early_access_email || displayEmail}
          </td>
        </tr>
      </table>
    `;

    researchText = `
AI LEARNING RESEARCH RESPONSES:
1. What do you most want to achieve with AI?
   -> ${researchResponses.q1_goal || "Not answered"}

2. How do you currently learn AI?
   -> ${researchResponses.q2_current_learning || "Not answered"}

3. What's your biggest challenge when learning AI?
   -> ${researchResponses.q3_biggest_challenge || "Not answered"}

4. Would you try learning AI through an interactive 3D world?
   -> ${researchResponses.q4_interactive_3d || "Not answered"}

5. If it helped you learn faster and apply AI skills, what would you prefer?
   -> ${researchResponses.q5_pricing_preference || "Not answered"}

6. Early Access Email:
   -> ${researchResponses.q6_early_access_email || displayEmail}
    `;
  }

  // Format members rows
  const memberRowsHtml =
    allMembers.length > 0
      ? allMembers
          .map((m, idx) => {
            const mName = m.name && m.name.trim() ? m.name.trim() : "Subscriber";
            const joinedDate =
              new Date(m.created_at).toLocaleString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                timeZone: "UTC",
              }) + " UTC";

            return `
            <tr style="border-bottom: 1px solid #33241C;">
              <td style="padding: 10px 12px; color: #B58A64; font-family: monospace; font-size: 11px;">#${allMembers.length - idx}</td>
              <td style="padding: 10px 12px; color: #FFFFFF;">
                <strong>${mName}</strong><br>
                <span style="color: #D8C5AF; font-size: 11px;">${m.email}</span>
              </td>
              <td align="right" style="padding: 10px 12px; color: #D8C5AF; font-size: 11px; white-space: nowrap;">
                ${joinedDate}
              </td>
            </tr>
          `;
          })
          .join("")
      : `
        <tr>
          <td colspan="3" style="padding: 12px; text-align: center; color: #D8C5AF;">
            ${displayName} (${displayEmail}) joined at ${timestamp}
          </td>
        </tr>
      `;

  const memberListText =
    allMembers.length > 0
      ? allMembers
          .map((m, idx) => {
            const mName = m.name && m.name.trim() ? m.name.trim() : "Subscriber";
            const joinedDate = new Date(m.created_at).toLocaleString("en-US", {
              timeZone: "UTC",
            });
            return `${allMembers.length - idx}. ${mName} (${m.email}) - Joined: ${joinedDate} UTC`;
          })
          .join("\n")
      : `${displayName} (${displayEmail}) - Joined: ${timestamp}`;

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
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width: 600px; background-color: #1A120E; border: 1px solid #4A3428; border-radius: 16px; overflow: hidden;">
          <tr>
            <td style="height: 4px; background: #B58A64;"></td>
          </tr>
          <tr>
            <td style="padding: 24px 28px 16px 28px;">
              <span style="font-family: 'Courier New', Courier, monospace; font-size: 11px; font-weight: 700; color: #B58A64; letter-spacing: 1.5px; text-transform: uppercase;">
                RESEARCH &amp; WAITLIST UPDATE • CHARLES MARK
              </span>
              <h2 style="margin: 8px 0 0 0; font-size: 20px; font-weight: 700; color: #FFFFFF;">
                New AI Learning Research Fill Received
              </h2>

              <!-- Big Total Milestone Box -->
              <div style="background-color: #241A15; border: 1px solid #B58A64; border-radius: 12px; padding: 16px 20px; margin: 18px 0 12px 0; text-align: center;">
                <span style="font-family: 'Courier New', Courier, monospace; font-size: 11px; font-weight: 700; color: #B58A64; letter-spacing: 1px; text-transform: uppercase; display: block; margin-bottom: 4px;">
                  TOTAL MEMBERS ON WAITLIST
                </span>
                <span style="font-size: 34px; font-weight: 800; color: #FFFFFF; letter-spacing: -0.5px;">
                  ${totalCount}
                </span>
              </div>
            </td>
          </tr>

          <tr>
            <td style="padding: 0 28px 24px 28px; font-size: 13px; color: #D8C5AF; line-height: 1.6;">
              <!-- Latest Subscriber Card -->
              <span style="font-family: 'Courier New', Courier, monospace; font-size: 11px; font-weight: 700; color: #B58A64; letter-spacing: 1px; text-transform: uppercase; display: block; margin-bottom: 8px;">
                RESPONDENT DETAILS
              </span>
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #241A15; border: 1px solid #4A3428; border-radius: 10px; margin-bottom: 20px;">
                <tr>
                  <td style="padding: 10px 16px; border-bottom: 1px solid #33241C; font-weight: 600; color: #B58A64; width: 110px;">Respondent:</td>
                  <td style="padding: 10px 16px; border-bottom: 1px solid #33241C; color: #FFFFFF; font-weight: 600;">${displayName}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 16px; border-bottom: 1px solid #33241C; font-weight: 600; color: #B58A64;">Email:</td>
                  <td style="padding: 10px 16px; border-bottom: 1px solid #33241C; color: #FFFFFF;">
                    ${
                      displayEmail !== "Not provided"
                        ? `<a href="mailto:${displayEmail}" style="color: #FFFFFF; text-decoration: underline;">${displayEmail}</a>`
                        : "Not provided"
                    }
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 16px; font-weight: 600; color: #B58A64;">Submitted At:</td>
                  <td style="padding: 10px 16px; color: #FFFFFF; font-weight: 600;">${timestamp}</td>
                </tr>
              </table>

              ${researchHtml}

              <!-- Reply Action Button -->
              ${
                displayEmail !== "Not provided"
                  ? `
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" style="margin-bottom: 24px;">
                <tr>
                  <td>
                    <a href="mailto:${displayEmail}?subject=Regarding%20your%203D%20AI%20learning%20research%20response" style="display: inline-block; background-color: #B58A64; color: #150F0B; font-size: 12px; font-weight: 700; text-decoration: none; padding: 12px 22px; border-radius: 8px; text-transform: uppercase; letter-spacing: 0.5px;">
                      Reply to ${displayName} &rarr;
                    </a>
                  </td>
                </tr>
              </table>
              `
                  : ""
              }

              <!-- All Waitlist Members List -->
              <span style="font-family: 'Courier New', Courier, monospace; font-size: 11px; font-weight: 700; color: #B58A64; letter-spacing: 1px; text-transform: uppercase; display: block; margin-bottom: 8px;">
                WAITLIST DIRECTORY (${totalCount})
              </span>
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #241A15; border: 1px solid #4A3428; border-radius: 10px; overflow: hidden; font-size: 12px;">
                <tr style="background-color: #140D09; border-bottom: 1px solid #33241C;">
                  <th align="left" style="padding: 10px 12px; color: #B58A64; font-weight: 700;">#</th>
                  <th align="left" style="padding: 10px 12px; color: #B58A64; font-weight: 700;">Applicant</th>
                  <th align="right" style="padding: 10px 12px; color: #B58A64; font-weight: 700;">Joined When</th>
                </tr>
                ${memberRowsHtml}
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
NEW AI RESEARCH & WAITLIST SIGNUP (#${totalCount})
==================================================
Total On Waitlist: ${totalCount}

RESPONDENT:
Name: ${displayName}
Email: ${displayEmail}
Submitted At: ${timestamp}

${researchText}

ALL MEMBERS ON WAITLIST:
${memberListText}

${displayEmail !== "Not provided" ? `Reply directly: mailto:${displayEmail}` : ""}
  `.trim();

  return { subject, html, text };
}

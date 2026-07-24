/**
 * Branded HTML email builders for contact form notify + confirmation.
 * Absolute asset URLs required for email clients.
 */

function escapeHtml(s) {
  return String(s ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function siteBaseUrl() {
  const raw = (process.env.NEXT_PUBLIC_SITE_URL || "https://www.completeaiitservices.ai").trim();
  return raw.replace(/\/$/, "") || "https://www.completeaiitservices.ai";
}

function formatReceivedAt(iso) {
  try {
    return new Intl.DateTimeFormat("en-US", {
      dateStyle: "long",
      timeStyle: "short",
      timeZone: "America/Los_Angeles",
    }).format(new Date(iso));
  } catch {
    return iso;
  }
}

function detailRow(label, value, { last = false } = {}) {
  if (!value) return "";
  const border = last ? "none" : "1px solid #e8eef5";
  return `<tr>
  <td style="padding:12px 0;border-bottom:${border};width:34%;vertical-align:top;font-size:13px;font-weight:600;letter-spacing:0.04em;text-transform:uppercase;color:#64748b;">${escapeHtml(label)}</td>
  <td style="padding:12px 0 12px 16px;border-bottom:${border};vertical-align:top;font-size:15px;line-height:1.45;color:#0f172a;">${value}</td>
</tr>`;
}

function noteBlock(title, body) {
  if (!body) return "";
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:0 0 14px;border-collapse:collapse;">
  <tr><td style="padding:0 0 8px;font-size:12px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#475569;">${escapeHtml(title)}</td></tr>
  <tr><td style="padding:14px 16px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:10px;font-size:14px;line-height:1.55;color:#0f172a;white-space:pre-wrap;">${escapeHtml(body)}</td></tr>
</table>`;
}

/**
 * Shared branded chrome (logo header + footer). Email-safe table layout + inline CSS.
 */
function emailShell({ preheader, title, eyebrow, bodyHtml }) {
  const base = siteBaseUrl();
  const logoUrl = `${base}/complete-ai-it-services-logo.png`;
  const iconUrl = `${base}/icon-192.png`;
  const safePre = escapeHtml(preheader || title || "");

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="color-scheme" content="light" />
  <title>${escapeHtml(title || "Complete AI IT Services")}</title>
</head>
<body style="margin:0;padding:0;background:#eef2f7;font-family:Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;-webkit-font-smoothing:antialiased;">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;">${safePre}</div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#eef2f7;padding:28px 12px;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:100%;max-width:600px;border-collapse:collapse;">
          <tr>
            <td style="background:#0b1220;border-radius:14px 14px 0 0;padding:22px 28px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="vertical-align:middle;">
                    <a href="${escapeHtml(base)}" style="text-decoration:none;">
                      <img src="${escapeHtml(logoUrl)}" width="168" alt="Complete AI IT Services" style="display:block;width:168px;max-width:55%;height:auto;border:0;" />
                    </a>
                  </td>
                  <td align="right" style="vertical-align:middle;">
                    <img src="${escapeHtml(iconUrl)}" width="40" height="40" alt="" style="display:block;width:40px;height:40px;border-radius:8px;border:0;" />
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="height:3px;background:#14b8a6;font-size:0;line-height:0;">&nbsp;</td>
          </tr>
          <tr>
            <td style="background:#ffffff;padding:28px 28px 8px;">
              ${
                eyebrow
                  ? `<p style="margin:0 0 8px;font-size:12px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:#0d9488;">${escapeHtml(eyebrow)}</p>`
                  : ""
              }
              <h1 style="margin:0 0 18px;font-size:22px;line-height:1.25;font-weight:700;color:#0f172a;">${escapeHtml(title)}</h1>
              ${bodyHtml}
            </td>
          </tr>
          <tr>
            <td style="background:#f8fafc;border-top:1px solid #e2e8f0;border-radius:0 0 14px 14px;padding:20px 28px;">
              <p style="margin:0 0 6px;font-size:13px;font-weight:600;color:#0f172a;">Complete AI IT Services</p>
              <p style="margin:0 0 10px;font-size:12px;line-height:1.5;color:#64748b;">Pleasanton, CA · Custom AI architecture, n8n workflows &amp; RAG systems</p>
              <p style="margin:0;font-size:12px;line-height:1.5;">
                <a href="${escapeHtml(base)}" style="color:#0f766e;text-decoration:none;font-weight:600;">completeaiitservices.ai</a>
                <span style="color:#cbd5e1;">&nbsp;·&nbsp;</span>
                <a href="mailto:info@completeaiitservices.ai" style="color:#0f766e;text-decoration:none;">info@completeaiitservices.ai</a>
              </p>
            </td>
          </tr>
          <tr>
            <td style="padding:16px 8px 0;text-align:center;font-size:11px;line-height:1.45;color:#94a3b8;">
              You received this email because of a submission on completeaiitservices.ai.
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

/**
 * @param {{
 *   inquiryLabel: string;
 *   name?: string;
 *   email: string;
 *   company?: string;
 *   jobTitle?: string;
 *   industry?: string;
 *   teamSize?: string;
 *   timeline?: string;
 *   currentStack?: string;
 *   workflowFocus?: string;
 *   message?: string;
 *   receivedAt: string;
 * }} data
 */
export function buildNotifyEmail(data) {
  const when = formatReceivedAt(data.receivedAt);
  const emailCell = `<a href="mailto:${escapeHtml(data.email)}" style="color:#0f766e;text-decoration:none;font-weight:600;">${escapeHtml(data.email)}</a>`;

  const rows = [
    detailRow("Inquiry", escapeHtml(data.inquiryLabel)),
    detailRow("Name", escapeHtml(data.name || "(not provided)")),
    detailRow("Email", emailCell),
    detailRow("Company", escapeHtml(data.company || "")),
    detailRow("Role", escapeHtml(data.jobTitle || "")),
    detailRow("Industry", escapeHtml(data.industry || "")),
    detailRow("Team size", escapeHtml(data.teamSize || "")),
    detailRow("Timeline", escapeHtml(data.timeline || ""), { last: true }),
  ].join("");

  const bodyHtml = `
<p style="margin:0 0 6px;font-size:14px;color:#64748b;">Received ${escapeHtml(when)} (PT)</p>
<p style="margin:0 0 20px;font-size:15px;line-height:1.55;color:#334155;">A new inquiry was submitted from the website contact form. Reply to this email to respond directly to the sender.</p>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;margin:0 0 22px;">
${rows}
</table>
${noteBlock("Tools & systems", data.currentStack)}
${noteBlock("Workflow focus", data.workflowFocus)}
${noteBlock("Message / notes", data.message)}
<table role="presentation" cellpadding="0" cellspacing="0" style="margin:8px 0 20px;">
  <tr>
    <td style="border-radius:10px;background:#0f766e;">
      <a href="mailto:${escapeHtml(data.email)}" style="display:inline-block;padding:12px 20px;font-size:14px;font-weight:700;color:#ffffff;text-decoration:none;">Reply to ${escapeHtml(data.name || "sender")}</a>
    </td>
  </tr>
</table>`;

  const html = emailShell({
    preheader: `New contact: ${data.inquiryLabel}${data.name ? ` — ${data.name}` : ""}`,
    eyebrow: "Website contact",
    title: "New inquiry received",
    bodyHtml,
  });

  const text = [
    "New website contact",
    `Received: ${when} (PT)`,
    "",
    `Inquiry: ${data.inquiryLabel}`,
    `Name: ${data.name || "(not provided)"}`,
    `Email: ${data.email}`,
    data.company && `Company: ${data.company}`,
    data.jobTitle && `Role: ${data.jobTitle}`,
    data.industry && `Industry: ${data.industry}`,
    data.teamSize && `Team size: ${data.teamSize}`,
    data.timeline && `Timeline: ${data.timeline}`,
    data.currentStack && `Tools/systems:\n${data.currentStack}`,
    data.workflowFocus && `Workflow focus:\n${data.workflowFocus}`,
    data.message && `Message / notes:\n${data.message}`,
    "",
    "Reply to this email to respond to the sender.",
  ]
    .filter(Boolean)
    .join("\n");

  return { html, text };
}

/**
 * @param {{
 *   inquiryLabel: string;
 *   name?: string;
 *   company?: string;
 * }} data
 */
export function buildConfirmEmail(data) {
  const first = (data.name || "").trim().split(/\s+/)[0] || "there";
  const base = siteBaseUrl();

  const bodyHtml = `
<p style="margin:0 0 14px;font-size:16px;line-height:1.55;color:#0f172a;">Hi ${escapeHtml(first)},</p>
<p style="margin:0 0 18px;font-size:15px;line-height:1.6;color:#334155;">Thanks for contacting <strong style="color:#0f172a;">Complete AI IT Services</strong>. We received your message and will follow up shortly—usually within one business day.</p>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;margin:0 0 20px;background:#f0fdfa;border:1px solid #ccfbf1;border-radius:12px;">
  <tr>
    <td style="padding:16px 18px;">
      <p style="margin:0 0 10px;font-size:12px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#0f766e;">Your submission</p>
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
        ${detailRow("Inquiry", escapeHtml(data.inquiryLabel), { last: !data.company })}
        ${data.company ? detailRow("Company", escapeHtml(data.company), { last: true }) : ""}
      </table>
    </td>
  </tr>
</table>
<p style="margin:0 0 18px;font-size:14px;line-height:1.55;color:#475569;">Need to add details? Reply to this email or write to <a href="mailto:info@completeaiitservices.ai" style="color:#0f766e;font-weight:600;text-decoration:none;">info@completeaiitservices.ai</a>.</p>
<table role="presentation" cellpadding="0" cellspacing="0" style="margin:0 0 8px;">
  <tr>
    <td style="border-radius:10px;background:#0b1220;">
      <a href="${escapeHtml(base)}/services" style="display:inline-block;padding:12px 20px;font-size:14px;font-weight:700;color:#ffffff;text-decoration:none;">Explore our services</a>
    </td>
  </tr>
</table>
<p style="margin:18px 0 20px;font-size:14px;line-height:1.55;color:#64748b;">We look forward to speaking with you.</p>`;

  const html = emailShell({
    preheader: "We received your message and will follow up shortly.",
    eyebrow: "Message received",
    title: "Thanks — we got your note",
    bodyHtml,
  });

  const text = [
    `Hi ${first},`,
    "",
    "Thanks for contacting Complete AI IT Services. We received your message and will follow up shortly—usually within one business day.",
    "",
    `Inquiry: ${data.inquiryLabel}`,
    data.company ? `Company: ${data.company}` : null,
    "",
    "Need to add details? Reply to this email or write to info@completeaiitservices.ai.",
    "",
    `Services: ${base}/services`,
    "",
    "— Complete AI IT Services",
    "Pleasanton, CA",
  ]
    .filter((line) => line !== null)
    .join("\n");

  return { html, text };
}

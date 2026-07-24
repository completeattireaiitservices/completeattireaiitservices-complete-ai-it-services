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

/** Build detail rows and mark the last non-empty row without a bottom border. */
function detailRows(entries) {
  const filled = entries.filter(([, value]) => Boolean(value));
  return filled
    .map(([label, value], i) =>
      detailRow(label, value, { last: i === filled.length - 1 }),
    )
    .join("");
}

function noteBlock(title, body) {
  if (!body) return "";
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:0 0 14px;border-collapse:collapse;">
  <tr><td style="padding:0 0 8px;font-size:12px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#475569;">${escapeHtml(title)}</td></tr>
  <tr><td style="padding:14px 16px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:10px;font-size:14px;line-height:1.55;color:#0f172a;white-space:pre-wrap;">${escapeHtml(body)}</td></tr>
</table>`;
}

/**
 * Shared branded chrome (logo header + website-matching footer).
 */
function emailShell({ preheader, title, eyebrow, bodyHtml }) {
  const base = siteBaseUrl();
  const logoUrl = `${base}/complete-ai-it-services-logo.png`;
  const safePre = escapeHtml(preheader || title || "");
  const year = new Date().getFullYear();

  const legalLink = (href, label) =>
    `<a href="${escapeHtml(base)}${href}" style="color:#a3a3a3;text-decoration:underline;text-underline-offset:2px;">${label}</a>`;

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
              <a href="${escapeHtml(base)}" style="text-decoration:none;">
                <img src="${escapeHtml(logoUrl)}" width="168" alt="Complete AI IT Services" style="display:block;width:168px;max-width:55%;height:auto;border:0;" />
              </a>
            </td>
          </tr>
          <tr>
            <td style="height:3px;background:#14b8a6;font-size:0;line-height:0;">&nbsp;</td>
          </tr>
          <tr>
            <td style="background:#ffffff;padding:28px 28px 24px;">
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
            <td style="background:#1c1c1c;border-radius:0 0 14px 14px;padding:28px 24px;text-align:center;">
              <p style="margin:0 0 14px;font-size:13px;line-height:1.7;">
                ${legalLink("/legal/privacy-policy", "Privacy Policy")}
                <span style="color:#525252;">&nbsp;&nbsp;·&nbsp;&nbsp;</span>
                ${legalLink("/legal/terms-of-service", "Terms of Service")}
                <span style="color:#525252;">&nbsp;&nbsp;·&nbsp;&nbsp;</span>
                ${legalLink("/legal/satisfaction-refund-policy", "Satisfaction &amp; Refund Policy")}
              </p>
              <p style="margin:0;font-size:13px;line-height:1.5;color:#a3a3a3;">
                Copyright © ${year} Complete AI IT Services - All rights reserved.
              </p>
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

  const rows = detailRows([
    ["Inquiry", escapeHtml(data.inquiryLabel)],
    ["Name", escapeHtml(data.name || "(not provided)")],
    ["Email", emailCell],
    ["Company", escapeHtml(data.company || "")],
    ["Role", escapeHtml(data.jobTitle || "")],
    ["Industry", escapeHtml(data.industry || "")],
    ["Team size", escapeHtml(data.teamSize || "")],
    ["Timeline", escapeHtml(data.timeline || "")],
  ]);

  const bodyHtml = `
<p style="margin:0 0 6px;font-size:14px;color:#64748b;">Received ${escapeHtml(when)} (PT)</p>
<p style="margin:0 0 20px;font-size:15px;line-height:1.55;color:#334155;">A new inquiry was submitted from the website contact form.</p>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;margin:0 0 22px;">
${rows}
</table>
${noteBlock("Tools & systems", data.currentStack)}
${noteBlock("Workflow focus", data.workflowFocus)}
${noteBlock("Message / notes", data.message)}
<table role="presentation" cellpadding="0" cellspacing="0" style="margin:4px 0 0;">
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

  const year = new Date().getFullYear();
  const text = [
    "New inquiry received",
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
    "",
    `Copyright © ${year} Complete AI IT Services - All rights reserved.`,
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

  const summaryRows = detailRows([
    ["Inquiry", escapeHtml(data.inquiryLabel)],
    ["Company", escapeHtml(data.company || "")],
  ]);

  const bodyHtml = `
<p style="margin:0 0 14px;font-size:16px;line-height:1.55;color:#0f172a;">Hi ${escapeHtml(first)},</p>
<p style="margin:0 0 18px;font-size:15px;line-height:1.6;color:#334155;">Thanks for reaching out. We received your message and will follow up shortly—usually within one business day.</p>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;margin:0 0 20px;background:#f0fdfa;border:1px solid #ccfbf1;border-radius:12px;">
  <tr>
    <td style="padding:16px 18px;">
      <p style="margin:0 0 10px;font-size:12px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#0f766e;">Your submission</p>
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
        ${summaryRows}
      </table>
    </td>
  </tr>
</table>
<p style="margin:0 0 18px;font-size:14px;line-height:1.55;color:#475569;">Need to add details? Just reply to this email.</p>
<table role="presentation" cellpadding="0" cellspacing="0" style="margin:0;">
  <tr>
    <td style="border-radius:10px;background:#0b1220;">
      <a href="${escapeHtml(base)}/services" style="display:inline-block;padding:12px 20px;font-size:14px;font-weight:700;color:#ffffff;text-decoration:none;">Explore our services</a>
    </td>
  </tr>
</table>`;

  const html = emailShell({
    preheader: "We received your message and will follow up shortly.",
    eyebrow: "Message received",
    title: "Thanks — we got your note",
    bodyHtml,
  });

  const year = new Date().getFullYear();
  const text = [
    `Hi ${first},`,
    "",
    "Thanks for reaching out. We received your message and will follow up shortly—usually within one business day.",
    "",
    `Inquiry: ${data.inquiryLabel}`,
    data.company ? `Company: ${data.company}` : null,
    "",
    "Need to add details? Just reply to this email.",
    `Services: ${base}/services`,
    "",
    `Copyright © ${year} Complete AI IT Services - All rights reserved.`,
  ]
    .filter((line) => line !== null)
    .join("\n");

  return { html, text };
}

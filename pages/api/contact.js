import { Resend } from "resend";
import { isValidEmail, trimToMax } from "../../lib/validators";

const MAX_MESSAGE = 12_000;
const MAX_NAME = 200;
const MAX_COMPANY = 200;
const MAX_TITLE = 150;
const MAX_INDUSTRY = 200;
const MAX_STACK = 2_000;
const MAX_WORKFLOW = 2_000;
const MAX_SHORT = 40;

const DEFAULT_TO = "kavitha@completeaiitservices.ai";
/** Resend test sender until completeaiitservices.ai is verified in Resend. */
const DEFAULT_FROM = "Complete AI IT Services <onboarding@resend.dev>";

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function row(label, value) {
  if (!value) return "";
  return `<tr><td style="padding:6px 12px 6px 0;color:#64748b;vertical-align:top;white-space:nowrap;">${escapeHtml(label)}</td><td style="padding:6px 0;color:#0f172a;">${escapeHtml(value)}</td></tr>`;
}

/**
 * Accepts contact inquiries and emails them to CONTACT_TO_EMAIL (default Kavitha),
 * then sends a confirmation to the submitter.
 * Optional CONTACT_WEBHOOK_URL still receives a JSON copy.
 *
 * Production requires:
 * - RESEND_API_KEY
 * - CONTACT_FROM_EMAIL on a Resend-verified domain (e.g. Complete AI IT Services <info@completeaiitservices.ai>)
 *   Using onboarding@resend.dev only delivers to the Resend account owner — not visitors' Gmail.
 */
export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }

  const raw = req.body;
  const body =
    raw && typeof raw === "object" && !Array.isArray(raw) ? raw : {};

  const email = trimToMax(body?.email ?? "", 320);
  const name = trimToMax(body?.name ?? "", MAX_NAME);
  const message = trimToMax(body?.message ?? "", MAX_MESSAGE);
  const company = trimToMax(body?.company ?? "", MAX_COMPANY);
  const jobTitle = trimToMax(body?.jobTitle ?? "", MAX_TITLE);
  const industry = trimToMax(body?.industry ?? "", MAX_INDUSTRY);
  const teamSize = trimToMax(body?.teamSize ?? "", MAX_SHORT);
  const currentStack = trimToMax(body?.currentStack ?? "", MAX_STACK);
  const workflowFocus = trimToMax(body?.workflowFocus ?? "", MAX_WORKFLOW);
  const timeline = trimToMax(body?.timeline ?? "", MAX_SHORT);
  const rawInquiry = String(body?.inquiryType ?? "").toLowerCase().replace(/\s+/g, "_");
  const inquiryType =
    rawInquiry === "enterprise_rfp" || rawInquiry === "enterprise"
      ? "enterprise_rfp"
      : "general";

  if (!isValidEmail(email)) {
    return res.status(400).json({ ok: false, error: "A valid email is required." });
  }

  const workflow = {
    company: company || undefined,
    jobTitle: jobTitle || undefined,
    industry: industry || undefined,
    teamSize: teamSize || undefined,
    currentStack: currentStack || undefined,
    workflowFocus: workflowFocus || undefined,
    timeline: timeline || undefined,
  };
  const hasWorkflow = Object.values(workflow).some((v) => v !== undefined);
  const workflowSummary = hasWorkflow
    ? [
        company && `Company: ${company}`,
        jobTitle && `Role: ${jobTitle}`,
        industry && `Industry: ${industry}`,
        teamSize && `Team size: ${teamSize}`,
        currentStack && `Tools/systems: ${currentStack}`,
        workflowFocus && `Workflow focus: ${workflowFocus}`,
        timeline && `Timeline: ${timeline}`,
        message && `Notes: ${message}`,
      ]
        .filter(Boolean)
        .join("\n")
    : null;

  const payload = {
    type: "contact",
    inquiryType,
    email,
    name: name || undefined,
    message: message || undefined,
    workflow: hasWorkflow ? workflow : undefined,
    workflowSummary: workflowSummary || undefined,
    receivedAt: new Date().toISOString(),
  };

  if (process.env.NODE_ENV === "development") {
    // eslint-disable-next-line no-console
    console.info("[api/contact]", payload);
  }

  const webhook = process.env.CONTACT_WEBHOOK_URL;
  if (webhook) {
    void fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    }).catch(() => {});
  }

  const apiKey = (process.env.RESEND_API_KEY || "").trim();
  const toEmail = (process.env.CONTACT_TO_EMAIL || DEFAULT_TO).trim();
  const fromEmail = (process.env.CONTACT_FROM_EMAIL || DEFAULT_FROM).trim();

  if (!apiKey) {
    if (process.env.NODE_ENV === "production") {
      // eslint-disable-next-line no-console
      console.error("[api/contact] RESEND_API_KEY is not set");
      return res.status(503).json({
        ok: false,
        error: "Contact form is temporarily unavailable. Please email info@completeaiitservices.ai.",
      });
    }
    return res.status(200).json({
      ok: true,
      message: "Thanks — we received your message and will follow up shortly.",
    });
  }

  const inquiryLabel =
    inquiryType === "enterprise_rfp" ? "Larger / custom project" : "General question";
  const subject = `[Website contact] ${inquiryLabel}${name ? ` — ${name}` : ""}${company ? ` (${company})` : ""}`;

  const textLines = [
    `New contact form submission (${payload.receivedAt})`,
    "",
    `Inquiry type: ${inquiryLabel}`,
    `Name: ${name || "(not provided)"}`,
    `Email: ${email}`,
    company && `Company: ${company}`,
    jobTitle && `Role: ${jobTitle}`,
    industry && `Industry: ${industry}`,
    teamSize && `Team size: ${teamSize}`,
    timeline && `Timeline: ${timeline}`,
    currentStack && `Tools/systems:\n${currentStack}`,
    workflowFocus && `Workflow focus:\n${workflowFocus}`,
    message && `Message / notes:\n${message}`,
  ].filter(Boolean);

  const html = `<!DOCTYPE html><html><body style="font-family:system-ui,Segoe UI,sans-serif;max-width:640px;margin:16px;color:#0f172a;">
<h1 style="font-size:18px;margin:0 0 12px;">New website contact</h1>
<p style="color:#64748b;margin:0 0 16px;">${escapeHtml(payload.receivedAt)}</p>
<table style="border-collapse:collapse;font-size:14px;width:100%;">
${row("Inquiry", inquiryLabel)}
${row("Name", name || "(not provided)")}
${row("Email", email)}
${row("Company", company)}
${row("Role", jobTitle)}
${row("Industry", industry)}
${row("Team size", teamSize)}
${row("Timeline", timeline)}
</table>
${
  currentStack
    ? `<h2 style="font-size:14px;margin:20px 0 8px;">Tools &amp; systems</h2><pre style="white-space:pre-wrap;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;padding:12px;font-size:13px;">${escapeHtml(currentStack)}</pre>`
    : ""
}
${
  workflowFocus
    ? `<h2 style="font-size:14px;margin:20px 0 8px;">Workflow focus</h2><pre style="white-space:pre-wrap;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;padding:12px;font-size:13px;">${escapeHtml(workflowFocus)}</pre>`
    : ""
}
${
  message
    ? `<h2 style="font-size:14px;margin:20px 0 8px;">Message / notes</h2><pre style="white-space:pre-wrap;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;padding:12px;font-size:13px;">${escapeHtml(message)}</pre>`
    : ""
}
<p style="margin-top:24px;font-size:13px;color:#64748b;">Reply to this email to respond to the sender.</p>
</body></html>`;

  try {
    const resend = new Resend(apiKey);
    const { data: notifyData, error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: email,
      subject,
      text: textLines.join("\n"),
      html,
    });

    if (error) {
      // eslint-disable-next-line no-console
      console.error("[api/contact] Resend notify error", {
        error,
        fromEmail,
        toEmail,
      });
      const msg = String(error?.message || "").toLowerCase();
      const domainHint =
        msg.includes("domain") ||
        msg.includes("not verified") ||
        msg.includes("from")
          ? " Email sending domain is not verified in Resend yet — verify completeaiitservices.ai and set CONTACT_FROM_EMAIL."
          : "";
      return res.status(502).json({
        ok: false,
        error: `We could not deliver your message.${domainHint} Please try again or email info@completeaiitservices.ai.`,
      });
    }

    const greet = name ? escapeHtml(name.split(/\s+/)[0]) : "there";
    const confirmSubject = "We received your message — Complete AI IT Services";
    const confirmText = [
      `Hi ${name ? name.split(/\s+/)[0] : "there"},`,
      "",
      "Thanks for contacting Complete AI IT Services. We received your message and will follow up shortly.",
      "",
      `Inquiry type: ${inquiryLabel}`,
      company ? `Company: ${company}` : null,
      "",
      "If you need to add anything, reply to this email or write to info@completeaiitservices.ai.",
      "",
      "— Complete AI IT Services",
      "Pleasanton, CA · https://www.completeaiitservices.ai",
    ]
      .filter((line) => line !== null)
      .join("\n");

    const confirmHtml = `<!DOCTYPE html><html><body style="font-family:system-ui,Segoe UI,sans-serif;max-width:640px;margin:16px;color:#0f172a;">
<p style="font-size:15px;line-height:1.55;margin:0 0 14px;">Hi ${greet},</p>
<p style="font-size:15px;line-height:1.55;margin:0 0 14px;">Thanks for contacting <strong>Complete AI IT Services</strong>. We received your message and will follow up shortly.</p>
<table style="border-collapse:collapse;font-size:14px;width:100%;margin:0 0 16px;">
${row("Inquiry", inquiryLabel)}
${row("Company", company)}
</table>
<p style="font-size:14px;line-height:1.55;color:#475569;margin:0 0 14px;">If you need to add anything, reply to this email or write to <a href="mailto:info@completeaiitservices.ai" style="color:#1d4ed8;">info@completeaiitservices.ai</a>.</p>
<p style="font-size:14px;line-height:1.55;margin:24px 0 0;color:#0f172a;">— Complete AI IT Services<br/><span style="color:#64748b;">Pleasanton, CA · <a href="https://www.completeaiitservices.ai" style="color:#1d4ed8;">completeaiitservices.ai</a></span></p>
</body></html>`;

    const { data: confirmData, error: confirmError } = await resend.emails.send({
      from: fromEmail,
      to: [email],
      replyTo: toEmail,
      subject: confirmSubject,
      text: confirmText,
      html: confirmHtml,
    });

    if (confirmError) {
      // eslint-disable-next-line no-console
      console.error("[api/contact] confirmation email failed", {
        confirmError,
        fromEmail,
        to: email,
        notifyId: notifyData?.id,
      });
    } else if (process.env.NODE_ENV === "development") {
      // eslint-disable-next-line no-console
      console.info("[api/contact] confirmation sent", confirmData?.id);
    }
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error("[api/contact] send failed", err);
    return res.status(502).json({
      ok: false,
      error: "We could not deliver your message. Please try again or email info@completeaiitservices.ai.",
    });
  }

  return res.status(200).json({
    ok: true,
    message: "Thanks — we received your message and will follow up shortly.",
  });
}

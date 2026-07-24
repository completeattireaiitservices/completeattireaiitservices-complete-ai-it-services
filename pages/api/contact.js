import { Resend } from "resend";
import { buildConfirmEmail, buildNotifyEmail } from "../../lib/contactEmails";
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
/** Prefer verified domain sender in production via CONTACT_FROM_EMAIL. */
const DEFAULT_FROM = "Complete AI IT Services <info@completeaiitservices.ai>";

/**
 * Accepts contact inquiries and emails them to CONTACT_TO_EMAIL (default Kavitha),
 * then sends a confirmation to the submitter.
 * Optional CONTACT_WEBHOOK_URL still receives a JSON copy.
 *
 * Production requires:
 * - RESEND_API_KEY
 * - CONTACT_FROM_EMAIL on a Resend-verified domain (e.g. Complete AI IT Services <info@completeaiitservices.ai>)
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

  const notify = buildNotifyEmail({
    inquiryLabel,
    name,
    email,
    company,
    jobTitle,
    industry,
    teamSize,
    timeline,
    currentStack,
    workflowFocus,
    message,
    receivedAt: payload.receivedAt,
  });

  const confirm = buildConfirmEmail({
    inquiryLabel,
    name,
    company,
  });

  try {
    const resend = new Resend(apiKey);
    const { data: notifyData, error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: email,
      subject,
      text: notify.text,
      html: notify.html,
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

    const { data: confirmData, error: confirmError } = await resend.emails.send({
      from: fromEmail,
      to: [email],
      replyTo: toEmail,
      subject: "We received your message — Complete AI IT Services",
      text: confirm.text,
      html: confirm.html,
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

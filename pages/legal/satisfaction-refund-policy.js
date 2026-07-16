import React from "react";
import { BadgeCheck } from "lucide-react";
import LegalPageShell, {
  legalSectionHeading as sectionHeading,
  legalBody as body,
  legalList as list,
  legalSubHeading as subHeading,
} from "../../components/LegalPageShell";
import FaqAccordion from "../../components/FaqAccordion";

const EFFECTIVE_DATE = "July 16, 2026";

const FAQ_ITEMS = [
  {
    q: "Why can’t I get a full refund after the AI system is built?",
    a: "Custom AI workflows and n8n pipelines are highly tailored software products engineered specifically for your company's API endpoints, data structures, and processes. Once built, this custom architecture cannot be \"restocked\" or resold to another business. The milestone system ensures you approve our direction before the custom build begins.",
  },
  {
    q: "What happens if an API change (like an OpenAI or QuickBooks update) breaks my automation?",
    a: "This is exactly why we have monthly retainers. Public APIs update frequently. Under our monthly maintenance, we perform bi-weekly audits and actively monitor your workflows to patch, update, and fix any external API changes so your business operations run uninterrupted.",
  },
  {
    q: "If I cancel my retainer, do I still get to keep the automation we built?",
    a: "Yes. Once the one-time setup fee is fully paid and the system is deployed, you own the Client-specific workflow configurations, knowledge-base assets, and documentation created uniquely for you (Provider keeps preexisting tools and frameworks). If you cancel your maintenance retainer, we hand over / export those Client-specific n8n pipelines and related configs. After cancellation, you are responsible for hosting, API updates, error monitoring, and continuous QA testing unless you re-engage us.",
  },
  {
    q: 'How do we handle "Scope Creep" if I want to add features mid-build?',
    a: 'During the Discovery phase, we finalize a strict "Scope of Work". If you would like to add new features or platforms mid-build, we will draft a simple "Change Order" outlining any adjustment to the setup cost before writing the code, keeping pricing transparent.',
  },
  {
    q: "Who is financially responsible for third-party API usage or hosting fees?",
    a: "This depends on the Billing Option you choose (also described in our Terms of Service and on the Services page). Under Option A (Direct Pass-Through), you connect your own billing details to OpenAI, Pinecone, or n8n, paying raw costs directly. Under Option B (Flat-Rate Retainer), we absorb technical hosting and standard token costs within your predictable monthly retainer invoice, subject to the fair-use ceiling in your SOW.",
  },
];

export default function SatisfactionRefundPolicyPage() {
  return (
    <LegalPageShell
      metaTitle="Satisfaction & Refund Policy | Complete AI IT Services"
      metaDescription="Milestone-based refund policy for Complete AI IT Services — setup fees, monthly retainers, QA sign-off, and FAQ on custom AI automation investments."
      breadcrumbCurrent="Satisfaction & Refund Policy"
      title="Satisfaction & Refund Policy"
      badge="Quality Assurance"
      accent="amber"
      activeLegal="refund"
      icon={<BadgeCheck className="h-6 w-6" strokeWidth={2} />}
      subtitle={
        <>
          Complete AI IT Services · completeaiitservices.ai · Pleasanton, California ·
          Effective {EFFECTIVE_DATE}
        </>
      }
      relatedHref="/legal/terms-of-service"
      relatedLabel="Terms of Service"
    >
      <h2 className={sectionHeading}>Overview</h2>
      <p className={body}>
        At Complete AI IT Services, we back our systems with over 18 years of executive
        Quality Assurance (QA) leadership and rigorous testing frameworks. We are committed
        to engineering secure, resilient automation workflows—validated through structured
        testing—that solve real operational bottlenecks.
      </p>
      <p className={body}>
        Because custom AI development, n8n orchestration, and private database integration
        require substantial upfront engineering and dedicated technical resources, we do not
        offer traditional retail &quot;money-back guarantees.&quot; Instead, we protect your
        investment through a clear, milestone-based quality assurance process and transparent
        service agreements. This policy works together with our{" "}
        <a href="/legal/terms-of-service">Terms of Service</a>. AI outputs remain
        probabilistic; the Retainer Guarantee below covers major integration failures caused
        by our codebase, not hallucinations or business-result warranties.
      </p>

      <h2 className={sectionHeading}>1. One-Time Setup &amp; Implementation Fees</h2>
      <p className={body}>
        To ensure complete alignment and peace of mind, all custom builds are structured
        around a clear <strong>Milestone Sign-Off</strong> process:
      </p>

      <h3 className={subHeading}>
        Phase 1: Discovery &amp; Audit (100% Refundable)
      </h3>
      <p className={body}>
        We begin by mapping your technical stack and delivering a comprehensive visual System
        Map and Scope Definition. If you choose not to proceed before we begin custom
        development or database synchronization, you are entitled to a{" "}
        <strong>100% refund</strong> of your setup deposit.
      </p>

      <h3 className={subHeading}>Phase 2: Custom Development (Non-Refundable)</h3>
      <p className={body}>
        Once custom n8n pipeline engineering, proprietary API routing, or private vector
        knowledge base configurations have begun, setup fees become{" "}
        <strong>non-refundable</strong>. This covers the specialized engineering hours
        dedicated to your business.
      </p>

      <h3 className={subHeading}>Phase 3: QA &amp; Production Sign-Off</h3>
      <p className={body}>
        We do not push any workflow live until it passes strict functional and integration
        testing. You will test and approve the staging environment before we officially
        deploy it to your production systems.
      </p>

      <h2 className={sectionHeading}>2. Monthly Retainer &amp; Maintenance Fees</h2>
      <p className={body}>
        Our continuous optimization retainers are built on active, month-to-month
        partnerships to keep your business agile.
      </p>
      <ul className={list}>
        <li>
          <strong>Month-to-Month Flexibility:</strong> You are never locked into restrictive
          yearly contracts. You may cancel your monthly maintenance retainer at any time with
          a <strong>30-day written notice</strong>.
        </li>
        <li>
          <strong>The Retainer Guarantee:</strong> We charge our monthly retainer to actively
          prevent model drift, monitor API uptimes, and perform bi-weekly logic audits. If a
          major integration fails due to our codebase (not due to your content, instructions,
          systems, or third-party API/platform outages or changes), and we cannot resolve that
          logic issue within <strong>5 business days</strong> of your written alert, your
          retainer fee for that month will be <strong>100% refunded</strong>. This does not
          guarantee error-free AI answers or specific business outcomes.
        </li>
        <li>
          <strong>Pre-Paid Discounts:</strong> If you choose to pre-pay quarterly or annually
          for a discount, any remaining, unused full months are fully refundable upon
          cancellation.
        </li>
      </ul>

      <h2 className={sectionHeading}>Frequently Asked Questions</h2>
      <p className={body}>
        Clear answers on custom builds, retainers, ownership, scope changes, and API billing.
      </p>
      <div className="mt-6">
        <FaqAccordion
          items={FAQ_ITEMS}
          itemClassName="rounded-xl border-slate-200/90 bg-slate-50/80 hover:border-amber-200/80 hover:bg-amber-50/40"
          questionClassName="text-[16px] text-slate-900 sm:text-[17px]"
          answerClassName="border-slate-200/70 text-slate-600"
        />
      </div>

      <h2 className={sectionHeading}>Need further clarification?</h2>
      <p className={body}>
        If you have any questions regarding our quality standards, development milestones, or
        retainer structures, please reach out to us at{" "}
        <a
          href="mailto:info@completeaiitservices.ai"
          className="font-semibold text-neutral-900 underline decoration-neutral-300 underline-offset-2 hover:decoration-neutral-900"
        >
          info@completeaiitservices.ai
        </a>
        .
      </p>
    </LegalPageShell>
  );
}

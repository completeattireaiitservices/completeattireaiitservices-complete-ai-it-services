import React from "react";
import { Share } from "next/font/google";
import Head from "next/head";
import Link from "next/link";
import {
  Layers,
  CreditCard,
  KeyRound,
  Receipt,
  Target,
  Settings2,
  ShieldCheck,
} from "lucide-react";
import clsx from "clsx";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import TieredMethodologySection from "../components/TieredMethodologySection";
import FaqAccordion from "../components/FaqAccordion";

const servicesShareFont = Share({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Arial", "sans-serif"],
  adjustFontFallback: false,
});

const TIER_PILL = {
  Small: "bg-emerald-100 text-emerald-900 ring-emerald-200/60",
  Medium: "bg-sky-100 text-sky-900 ring-sky-200/60",
  Enterprise: "bg-violet-100 text-violet-900 ring-violet-200/60",
};

const OFFERING_ACCENTS = [
  {
    border: "border-l-indigo-500",
    badge: "from-indigo-600 to-indigo-500",
    glow: "bg-indigo-500/10",
  },
  {
    border: "border-l-violet-500",
    badge: "from-violet-600 to-violet-500",
    glow: "bg-violet-500/10",
  },
  {
    border: "border-l-sky-500",
    badge: "from-sky-600 to-sky-500",
    glow: "bg-sky-500/10",
  },
  {
    border: "border-l-teal-500",
    badge: "from-teal-600 to-teal-500",
    glow: "bg-teal-500/10",
  },
  {
    border: "border-l-rose-500",
    badge: "from-rose-600 to-rose-500",
    glow: "bg-rose-500/10",
  },
  {
    border: "border-l-amber-500",
    badge: "from-amber-600 to-amber-500",
    glow: "bg-amber-500/10",
  },
  {
    border: "border-l-fuchsia-500",
    badge: "from-fuchsia-600 to-fuchsia-500",
    glow: "bg-fuchsia-500/10",
  },
];

const SERVICE_OFFERINGS = [
  {
    num: 1,
    title: "AI Knowledge Assistant (Your 24/7 Website Expert)",
    blurb:
      "Convert website visitors immediately with accurate, hallucination-free answers grounded securely in your proprietary data.",
    tiers: [
      {
        size: "Small",
        scope:
          "Basic RAG: Internal Knowledge Base (up to 100 PDFs/Docs) + Airtable sync. Single-channel deployment (Website widget).",
        investment: "Setup: $1,500 – $2,200  ·  Retainer: $290/mo",
      },
      {
        size: "Medium",
        scope:
          "Advanced RAG: Full CRM integration (HubSpot/Salesforce) + internal ticketing system. Multi-channel deployment (Website, Slack, Discord).",
        investment: "Setup: $3,500 – $5,000  ·  Retainer: $550/mo",
      },
      {
        size: "Enterprise",
        scope:
          "Full Data Warehouse sync (Snowflake/BigQuery), real-time API lookups, high-volume redundancy, complex permissions management.",
        investment: "Setup: $7,500+  ·  Retainer: Custom",
      },
    ],
  },
  {
    num: 2,
    title: "Autonomous Content Engine (Web Blog Publishing)",
    blurb:
      "Scale organic traffic without a full content team. Automated research, branded image generation, and direct SEO-optimized publishing.",
    tiers: [
      {
        size: "Small",
        scope:
          "4 Long-form SEO articles + 4 branded images per month. Automated keyword research (low-competition focus).",
        investment: "Setup: $1,800 – $2,500  ·  Retainer: $490/mo",
      },
      {
        size: "Medium",
        scope:
          "12 Long-form SEO articles + 12 branded images per month. Automated technical SEO audits + competitor content gap analysis.",
        investment: "Setup: $4,000 – $6,000  ·  Retainer: $950/mo",
      },
      {
        size: "Enterprise",
        scope:
          "High-volume daily publishing (30+ articles/mo). Automated translation, localization, complex topic clustering, and backlink analysis.",
        investment: "Setup: $9,500+  ·  Retainer: Custom",
      },
    ],
  },
  {
    num: 3,
    title: "OmniChannel Content Distributor (Social Media Multiplier)",
    blurb:
      "Stop manually copy-pasting across platforms. Give the system one link or idea, and it instantly rewrites, reformats, and schedules the post across channels.",
    tiers: [
      {
        size: "Small",
        scope:
          "Automated scheduling and distribution across 2 primary platforms (e.g., LinkedIn & X / Twitter). Basic text optimization.",
        investment: "Setup: $1,200 – $1,800  ·  Retainer: $250/mo",
      },
      {
        size: "Medium",
        scope:
          "Multi-platform routing across up to 5 platforms (e.g., LinkedIn, X, Facebook, Instagram, Pinterest, Threads). Branded template formatting.",
        investment: "Setup: $3,000 – $4,500  ·  Retainer: $550/mo",
      },
      {
        size: "Enterprise",
        scope:
          "Global syndication across all platforms including YouTube Shorts, TikTok, and Instagram Reels. Features automated video clipping, translations, and forum distribution (Reddit / Discord).",
        investment: "Setup: $7,000+  ·  Retainer: Custom",
      },
    ],
  },
  {
    num: 4,
    title: "Receipt Capture & Bookkeeping Intelligence",
    blurb:
      "Stop losing tax deductions. Forward digital receipts or snap physical photos on WhatsApp to parse, categorize, and sync data instantly into your accounting platform.",
    tiers: [
      {
        size: "Small",
        scope:
          "Processes up to 50 invoices/receipts per month from digital uploads or WhatsApp. Basic QuickBooks/Xero ledger mapping.",
        investment: "Setup: $1,500 – $2,000  ·  Retainer: $250/mo",
      },
      {
        size: "Medium",
        scope:
          "Processes up to 250 documents/mo. Handles complex multi-line items, multi-currency conversions, and matches to Stripe payouts.",
        investment: "Setup: $3,500 – $5,000  ·  Retainer: $590/mo",
      },
      {
        size: "Enterprise",
        scope:
          "High-volume processing (1,000+ files/mo). Full NetSuite or SAP integration. Automated invoice reconciliation and ledger matching.",
        investment: "Setup: $8,000+  ·  Retainer: Custom",
      },
    ],
  },
  {
    num: 5,
    title: "Autonomous Brand Guardian (Reputation Engine)",
    blurb:
      "Protect your brand identity around the clock. AI monitors reviews and socials, analyzes sentiment, auto-drafts responses, and flags risks instantly.",
    tiers: [
      {
        size: "Small",
        scope:
          "Monitors Google Reviews and G2. Processes up to 50 feedback alerts/mo. Human-in-the-loop review queue.",
        investment: "Setup: $1,200 – $1,800  ·  Retainer: $250/mo",
      },
      {
        size: "Medium",
        scope:
          "Monitors 5+ platforms including social (X, LinkedIn). Sentiment-driven routing and automatic notification alerts for high-risk topics.",
        investment: "Setup: $2,800 – $4,000  ·  Retainer: $490/mo",
      },
      {
        size: "Enterprise",
        scope:
          "Real-time cross-platform scraping. Direct ticketing integration (Zendesk/Jira) with predictive crisis-alert dashboards.",
        investment: "Setup: $6,500+  ·  Retainer: Custom",
      },
    ],
  },
  {
    num: 6,
    title: "The Monday Morning Executive Briefing (Unified Dashboard)",
    blurb:
      "Stop flying blind. A systematic backend cron job that pulls data across your entire tech stack and drops a clean executive summary to your inbox.",
    tiers: [
      {
        size: "Small",
        scope:
          "Core data aggregation (Stripe, HubSpot, Google Analytics). Weekly summary of key baseline metrics (Revenue, Leads, Traffic).",
        investment: "Setup: $1,500 – $2,200  ·  Retainer: $290/mo",
      },
      {
        size: "Medium",
        scope:
          "5+ complex data sources (adds Advertising platforms and ERPs). AI-generated comparative metrics (Week-over-Week analysis).",
        investment: "Setup: $3,500 – $5,000  ·  Retainer: $650/mo",
      },
      {
        size: "Enterprise",
        scope:
          "Consolidated dashboard across global departments. Custom KPIs (Churn prediction, LTV modeling, and interactive visual charts).",
        investment: "Setup: $7,500+  ·  Retainer: Custom",
      },
    ],
  },
  {
    num: 7,
    title: 'Custom "Record & Automate" Audit (The Process Blueprint)',
    blurb:
      "Record any repetitive computer task you or your team performs. We will thoroughly audit your screen recording, diagnose the operational leaks, and design a custom, secure n8n automation to handle it for you.",
    tiers: [
      {
        size: "Small",
        scope:
          "Single-Task Video Audit: Send us a screen recording (up to 10 mins) of any repetitive task (e.g., manual CRM data entry, daily copy-paste reports). We provide a visual workflow architecture map and a fully functional, QA-tested n8n pipeline.",
        investment: "Setup: $1,200 – $1,800  ·  Retainer: $250/mo",
      },
      {
        size: "Medium",
        scope:
          "Team Process Audit: Send up to 3 separate operational task videos (totaling under 30 mins). We analyze the cross-app transitions and deliver a multi-step, connected automation ecosystem linking your team's tools with built-in error handling.",
        investment: "Setup: $3,000 – $4,500  ·  Retainer: $490/mo",
      },
      {
        size: "Enterprise",
        scope:
          "Departmental Workflow Mapping: Full-scale video documentation audit across a department (Sales, HR, or Ops). Custom logic handling, API bridging, and complete zero-fault architecture setup.",
        investment: "Setup: $7,000+  ·  Retainer: Custom",
      },
    ],
  },
];

const FAQ_ITEMS = [
  {
    q: "What does the monthly retainer include for QA?",
    a: "As part of the retainer we perform a bi-weekly logic audit: reviewing AI execution logs, verifying vector retrieval accuracy, and tuning system prompts to reduce hallucinations and keep outputs aligned with your brand.",
  },
  {
    q: "Who pays for OpenAI, Pinecone, and other API usage?",
    a: "You choose: Option A (Direct Pass-Through) keeps API accounts and wholesale usage charges on your card; Option B (Flat-Rate Retainer) folds hosting and raw API usage into one all-inclusive monthly invoice from us, subject to a fair-use transaction ceiling.",
  },
  {
    q: "How do you handle data privacy with LLMs?",
    a: "We implement enterprise-grade handling through our n8n orchestration and provider APIs. Under current OpenAI API terms, data submitted via the API is not used to train global models, helping keep proprietary information private.",
  },
  {
    q: "What is your termination and refund policy?",
    a: "Either party may end the monthly retainer with 30 days written notice. Implementation fees are non-refundable once the knowledge base sync has been established and tested successfully.",
  },
];

function BillingOptionsNote() {
  return (
    <aside
      className="mx-auto w-full max-w-5xl overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm"
      role="note"
      aria-labelledby="billing-options-heading"
    >
      <div className="border-b border-slate-200/80 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 px-5 py-5 text-white sm:px-7 sm:py-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:gap-4">
          <div
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/15"
            aria-hidden
          >
            <CreditCard className="h-5 w-5" strokeWidth={2} />
          </div>
          <div className="min-w-0">
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-white/70">
              Note · Billing options
            </p>
            <h3
              id="billing-options-heading"
              className="mt-1 text-[1.15rem] font-bold leading-snug sm:text-[1.3rem]"
            >
              Designed for Complete Predictability
            </h3>
            <p className="mt-2 text-[15px] leading-relaxed text-white/85 sm:text-[16px]">
              We offer two flexible billing models to match your company&apos;s preferred
              software-expense structure. Whether you prefer to control your own API keys or
              want a completely hands-off, all-inclusive subscription, we have you covered.
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-0 md:grid-cols-2 md:divide-x md:divide-slate-200/80">
        <div className="border-b border-slate-200/80 p-5 sm:p-6 md:border-b-0">
          <div className="flex items-start gap-3">
            <div
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-100 text-indigo-700"
              aria-hidden
            >
              <KeyRound className="h-5 w-5" strokeWidth={2} />
            </div>
            <div>
              <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-indigo-700">
                Option A
              </p>
              <h4 className="mt-0.5 text-[17px] font-bold text-slate-900 sm:text-[18px]">
                Direct Pass-Through (Pay-At-Cost)
              </h4>
            </div>
          </div>
          <p className="mt-4 text-[16px] italic leading-relaxed text-slate-600 sm:text-[17px]">
            &quot;You maintain absolute ownership and pay raw, wholesale infrastructure
            costs.&quot;
          </p>
          <p className="mt-3 text-[16px] leading-relaxed text-slate-700 sm:text-[17px]">
            Under this model, you pay our standard one-time setup fee and maintenance
            retainer. During onboarding, we guide you step-by-step to connect your own
            platform billing accounts.
          </p>
          <ul className="mt-4 space-y-3 text-[15px] leading-relaxed text-slate-700 sm:text-[16px]">
            <li className="flex gap-2.5">
              <Target
                className="mt-0.5 h-4 w-4 shrink-0 text-indigo-600"
                strokeWidth={2.25}
                aria-hidden
              />
              <span>
                <strong className="font-bold text-slate-900">Best for: </strong>
                Companies with highly volatile or extremely large transaction volumes who
                want direct control over their digital infrastructure.
              </span>
            </li>
            <li className="flex gap-2.5">
              <Settings2
                className="mt-0.5 h-4 w-4 shrink-0 text-indigo-600"
                strokeWidth={2.25}
                aria-hidden
              />
              <span>
                <strong className="font-bold text-slate-900">How it works: </strong>
                You maintain active accounts directly with the API providers (OpenAI,
                Pinecone, n8n, etc.). They bill your card directly and only for the exact,
                raw data tokens your team consumes.
              </span>
            </li>
          </ul>
        </div>

        <div className="p-5 sm:p-6">
          <div className="flex items-start gap-3">
            <div
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-100 text-teal-700"
              aria-hidden
            >
              <Receipt className="h-5 w-5" strokeWidth={2} />
            </div>
            <div>
              <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-teal-700">
                Option B
              </p>
              <h4 className="mt-0.5 text-[17px] font-bold text-slate-900 sm:text-[18px]">
                Flat-Rate Retainer (All-Inclusive)
              </h4>
            </div>
          </div>
          <p className="mt-4 text-[16px] italic leading-relaxed text-slate-600 sm:text-[17px]">
            &quot;One predictable monthly invoice. Zero technical setup or API billing
            hurdles.&quot;
          </p>
          <p className="mt-3 text-[16px] leading-relaxed text-slate-700 sm:text-[17px]">
            Under this model, we handle all technical hosting, database subscriptions, and
            raw API usage fees under a single, straightforward monthly invoice.
          </p>
          <ul className="mt-4 space-y-3 text-[15px] leading-relaxed text-slate-700 sm:text-[16px]">
            <li className="flex gap-2.5">
              <Target
                className="mt-0.5 h-4 w-4 shrink-0 text-teal-600"
                strokeWidth={2.25}
                aria-hidden
              />
              <span>
                <strong className="font-bold text-slate-900">Best for: </strong>
                Small and mid-market companies who want a premium, &quot;done-for-you&quot;
                automation experience with zero billing complexity.
              </span>
            </li>
            <li className="flex gap-2.5">
              <Settings2
                className="mt-0.5 h-4 w-4 shrink-0 text-teal-600"
                strokeWidth={2.25}
                aria-hidden
              />
              <span>
                <strong className="font-bold text-slate-900">How it works: </strong>
                Your custom monthly retainer fully absorbs all raw LLM token costs, vector
                database hosting, and system API transactions. You only pay us.
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-amber-200/70 bg-amber-50/90 px-5 py-4 sm:px-7 sm:py-5">
        <div className="flex gap-3">
          <ShieldCheck
            className="mt-0.5 h-5 w-5 shrink-0 text-amber-800"
            strokeWidth={2}
            aria-hidden
          />
          <p className="m-0 text-[15px] leading-relaxed text-amber-950 sm:text-[16px]">
            <strong className="font-bold">Fair-Use Cap Guarantee: </strong>
            To ensure continuous system performance, prevent accidental backend loop
            charges, and maintain security, all Flat-Rate Retainers include a highly
            generous monthly transaction ceiling (e.g., up to 2,500 AI queries/month for
            Medium Tiers). If your operations naturally scale past this threshold, we will
            transition you smoothly to a customized, high-volume tier.
          </p>
        </div>
      </div>

      <div className="border-t border-slate-200/80 bg-slate-50/80 px-5 py-3.5 text-[14px] leading-relaxed text-slate-600 sm:px-7 sm:text-[15px]">
        <strong className="font-semibold text-slate-800">Also note: </strong>
        Tier definitions are based on our setup and maintenance complexity. Under Option A,
        usage-based API fees remain a direct pass-through billed at cost by the providers.
      </div>
    </aside>
  );
}

function TierTable({ rows }) {
  return (
    <div className="mt-6 w-full overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-50/40 shadow-[0_1px_0_0_rgba(15,23,42,0.05)] ring-1 ring-slate-200/50">
      <div className="w-full overflow-x-auto">
        <table className="min-w-[640px] w-full border-collapse text-left text-[16px] leading-relaxed sm:text-[17px]">
          <thead>
            <tr className="bg-slate-900/95 text-white">
              <th className="w-[7.5rem] px-4 py-3.5 font-bold tracking-wide sm:px-5">
                Size
              </th>
              <th className="px-4 py-3.5 font-bold sm:px-5">
                Scope &amp; Capabilities
              </th>
              <th className="w-[14rem] min-w-[12rem] px-4 py-3.5 font-bold sm:px-5">
                Investment
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {rows.map((r, i) => (
              <tr
                key={r.size}
                className={clsx(
                  "border-t border-slate-100",
                  i % 2 === 0 ? "bg-white" : "bg-slate-50/70",
                )}
              >
                <td className="whitespace-nowrap align-top sm:px-5 sm:py-4 sm:pl-4">
                  <span
                    className={clsx(
                      "inline-flex rounded-full px-3 py-1 text-sm font-bold ring-1 ring-inset",
                      TIER_PILL[r.size] || "bg-slate-100 text-slate-800 ring-slate-200/80",
                    )}
                  >
                    {r.size}
                  </span>
                </td>
                <td className="align-top text-slate-700 sm:px-4 sm:py-4 sm:pl-0">
                  {r.scope}
                </td>
                <td className="align-top font-medium text-slate-800 sm:pr-5 sm:py-4 sm:pl-0">
                  {r.investment}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function ServiceOfferingCard({ item, index }) {
  const accent = OFFERING_ACCENTS[index % OFFERING_ACCENTS.length];
  const { num, title, blurb, tiers } = item;

  return (
    <article
      className={clsx(
        "group relative overflow-hidden rounded-2xl border border-slate-200/90 bg-white pl-0 shadow-sm transition-shadow duration-300 hover:shadow-md",
        "border-l-[5px]",
        accent.border,
      )}
    >
      <div
        className={clsx(
          "pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-50 blur-3xl transition group-hover:opacity-70",
          accent.glow,
        )}
        aria-hidden
      />
      <div className="relative px-5 py-6 sm:px-7 sm:py-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-5">
          <div
            className={clsx(
              "flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br text-sm font-bold text-white shadow-sm sm:h-14 sm:w-14 sm:text-base",
              accent.badge,
            )}
            aria-hidden
          >
            {String(num).padStart(2, "0")}
          </div>
          <div className="min-w-0 flex-1">
            <h2 className="text-[1.2rem] font-bold leading-snug text-slate-900 sm:text-[1.35rem]">
              {title}
            </h2>
            <p className="mt-2 text-[17px] leading-relaxed text-slate-600 sm:text-[18px]">
              {blurb}
            </p>
            <TierTable rows={tiers} />
          </div>
        </div>
      </div>
    </article>
  );
}

export default function ServicesPage() {
  return (
    <>
      <Head>
        <title>Our Services | Complete AI IT Services</title>
        <meta
          name="description"
          content="High-performance AI scaled to your business: RAG assistants, content engines, omnichannel distribution, receipt capture, brand guardian, executive briefings, and custom Record & Automate audits. Pleasanton, CA."
        />
      </Head>
      <div
        className={clsx(
          "min-h-screen bg-slate-50 font-sans text-slate-800",
          servicesShareFont.className,
        )}
      >
        <div className="bg-[#1c1c1c] text-white">
          <SiteHeader activeNav="services" />
        </div>

        <main className="text-[18px] font-normal leading-relaxed text-slate-800 sm:text-[19px]">
          <section
            className="relative bg-gradient-to-b from-slate-100 via-white to-slate-50"
            aria-labelledby="services-hero"
          >
            <div
              className="pointer-events-none absolute inset-0 overflow-hidden"
              aria-hidden
            >
              <div className="absolute -left-32 top-0 h-64 w-64 rounded-full bg-indigo-200/30 blur-3xl" />
              <div className="absolute -right-24 top-20 h-56 w-56 rounded-full bg-violet-200/25 blur-3xl" />
            </div>
            <div className="relative mx-auto max-w-5xl px-4 pt-14 pb-5 text-center sm:px-6 sm:pt-16 sm:pb-6 md:px-10 md:pt-20 md:pb-7">
              <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-slate-200/90 bg-white/85 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-slate-600 shadow-md shadow-slate-300/25 ring-1 ring-white/60 backdrop-blur-sm sm:px-5 sm:text-xs">
                <Layers className="h-3.5 w-3.5 shrink-0 text-indigo-600 sm:h-4 sm:w-4" strokeWidth={2.25} aria-hidden />
                <span>Tiered AI implementation</span>
              </div>

              <h1
                id="services-hero"
                className="mx-auto mt-6 max-w-4xl text-balance font-extrabold uppercase leading-[1.12] tracking-tight text-slate-900 sm:leading-[1.1]"
                style={{ fontSize: "clamp(1.35rem, 2.1vw + 0.35rem, 2rem)" }}
              >
                <span className="block">High-Performance AI,</span>
                <span className="mt-1 block bg-gradient-to-r from-indigo-600 via-violet-600 to-teal-600 bg-clip-text text-transparent sm:mt-1.5">
                  Scaled to Your Business Size
                </span>
              </h1>

              <div className="mx-auto mt-6 w-full max-w-5xl rounded-[1.25rem] border border-slate-200/80 bg-white/85 px-6 pt-6 pb-4 text-left shadow-[0_22px_55px_-28px_rgba(15,23,42,0.18)] ring-1 ring-white/70 backdrop-blur-sm sm:mt-7 sm:px-8 sm:pt-8 sm:pb-5 md:px-10 md:pt-8 md:pb-6">
                <p className="m-0 w-full text-left text-[17px] font-normal leading-relaxed text-slate-700 sm:text-[18px] md:text-[19px]">
                  <span className="font-semibold text-slate-800">Generic AI fails</span> when it meets business complexity. We build sophisticated,{" "}
                  <span className="font-medium text-slate-800">private RAG architectures</span>—powered by n8n orchestration and vector knowledge bases—that grow as you do.{" "}
                  <span className="font-bold tracking-tight text-slate-900 sm:text-[18px] md:text-[19px]">
                    Choose your tier, scale your operations, and upgrade whenever you’re ready
                  </span>
                </p>
              </div>
            </div>
          </section>

          <div className="mx-auto max-w-5xl space-y-8 px-4 pb-12 pt-4 sm:space-y-10 sm:px-6 sm:pb-14 sm:pt-5 md:px-10 md:pb-16 md:pt-6">
            {SERVICE_OFFERINGS.map((o, i) => (
              <React.Fragment key={o.num}>
                <ServiceOfferingCard item={o} index={i} />
                {o.num === 7 ? <BillingOptionsNote /> : null}
              </React.Fragment>
            ))}
          </div>

          <TieredMethodologySection
            headingId="services-methodology-heading"
            showCta
            ctaHref="/contact-us#inquiries-rfp"
            ctaLabel="Start with a message"
          />

          <section
            className="border-t border-slate-200 bg-white px-4 py-16 sm:px-6 md:px-10 md:py-20"
            aria-labelledby="faq-heading"
          >
            <div className="mx-auto max-w-3xl">
              <h2
                id="faq-heading"
                className="text-center text-[1.25rem] font-bold uppercase tracking-wide text-slate-900"
              >
                Frequently asked questions
              </h2>
              <p className="mt-2 text-center text-[16px] text-slate-600 sm:text-[17px]">
                Clear answers on retainers, usage, privacy, and engagement.
              </p>
              <div className="mt-10">
                <FaqAccordion items={FAQ_ITEMS} />
              </div>
            </div>
          </section>
        </main>

        <SiteFooter />
      </div>
    </>
  );
}

import React from "react";
import Head from "next/head";
import { Share, Squada_One } from "next/font/google";
import SafeImage from "../components/SafeImage";
import Link from "next/link";
import clsx from "clsx";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import ThoughtLeadershipSection from "../components/ThoughtLeadershipSection";
import SubscribeForm from "../components/SubscribeForm";
import {
  Layers,
  Workflow,
  Clock,
  Zap,
  ShieldCheck,
  ClipboardCheck,
  Star,
} from "lucide-react";

const heroTitleFont = Squada_One({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

/** Reviews heading: 48px Squada One, sans-serif stack (design spec). */
const reviewsHeadingFont = Squada_One({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  fallback: ["sans-serif"],
  adjustFontFallback: false,
});

const heroSubtitleFont = Share({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  fallback: ["Arial", "sans-serif"],
  adjustFontFallback: false,
});

const aboutUsColumnTitleFont = Share({
  weight: "700",
  subsets: ["latin"],
  display: "swap",
  fallback: ["Arial", "sans-serif"],
  adjustFontFallback: false,
});

/**
 * “SOCIAL” heading only: 27px + Share with explicit stack (avoids next/font’s
 * size-adjusted “Share Fallback” label in devtools; use with inline fontSize).
 */
const socialHeaderFont = Share({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  fallback: ["Arial", "sans-serif"],
  adjustFontFallback: false,
});

const HERO_IMAGE = "/images/complete-ai-hero-conference-tv-team.png";

function SocialIconLink({ href, label, children, sizeClassName }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={clsx(
        "flex items-center justify-center rounded-full bg-white text-[#1c1c1c] transition hover:bg-neutral-200",
        sizeClassName ?? "h-12 w-12",
      )}
    >
      {children}
    </a>
  );
}

function SocialMediaIcons({ compact = false }) {
  const ring = compact ? "h-10 w-10" : "h-12 w-12";
  const ico = (className) =>
    clsx(className, compact ? "h-4 w-4" : "h-5 w-5");

  return (
    <>
      <SocialIconLink
        href="https://www.facebook.com/completeaiitservices"
        label="Facebook"
        sizeClassName={ring}
      >
        <svg className={ico("h-5 w-5")} viewBox="0 0 24 24" aria-hidden>
          <path
            fill="currentColor"
            d="M24 12.073C24 5.446 18.627.073 12 .073S0 5.446 0 12.073c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
          />
        </svg>
      </SocialIconLink>
      <SocialIconLink href="https://x.com/completeaiit" label="X" sizeClassName={ring}>
        <svg className={ico("h-4 w-4")} viewBox="0 0 24 24" aria-hidden>
          <path
            fill="currentColor"
            d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117l12.966 15.644z"
          />
        </svg>
      </SocialIconLink>
      <SocialIconLink
        href="https://www.instagram.com/completeaiitservices/"
        label="Instagram"
        sizeClassName={ring}
      >
        <svg className={ico("h-5 w-5")} viewBox="0 0 24 24" aria-hidden>
          <path
            fill="currentColor"
            d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.98-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.98-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"
          />
        </svg>
      </SocialIconLink>
      <SocialIconLink
        href="https://www.linkedin.com/in/complete-ai-it-services/"
        label="LinkedIn"
        sizeClassName={ring}
      >
        <svg className={ico("h-5 w-5")} viewBox="0 0 24 24" aria-hidden>
          <path
            fill="currentColor"
            d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1-.004-4.125 2.062 2.062 0 0 1 .004 4.125zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
          />
        </svg>
      </SocialIconLink>
      <SocialIconLink
        href="https://www.youtube.com/@completeaiitservices"
        label="YouTube"
        sizeClassName={ring}
      >
        <svg className={ico("h-5 w-5")} viewBox="0 0 24 24" aria-hidden>
          <path
            fill="currentColor"
            d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
          />
        </svg>
      </SocialIconLink>
    </>
  );
}

const GALLERY_IMAGES = [
  "/images/tech-gallery/complete-ai-gallery-01-workflows.png",
  "/images/tech-gallery/complete-ai-gallery-02-rag-vectors.png",
  "/images/tech-gallery/complete-ai-gallery-03-servers.png",
  "/images/tech-gallery/complete-ai-gallery-04-code-editor.png",
  "/images/tech-gallery/complete-ai-gallery-05-ai-software-metrics.png",
  "/images/tech-gallery/complete-ai-gallery-06-qa-security.png",
  "/images/tech-gallery/complete-ai-gallery-07-ai-compute-hardware.png",
  "/images/tech-gallery/complete-ai-gallery-08-network-cloud.png",
];

const GALLERY_ALT = [
  "Abstract workflow orchestration diagram representing AI pipelines and integrations",
  "Concept art for retrieval-augmented generation with vectors and knowledge retrieval",
  "Close-up of data center server hardware with status indicator lights",
  "Dark-themed code editor showing automation-oriented software development",
  "Dark-mode AI operations dashboard with KPIs, throughput metrics, and charts in cyan and blue",
  "Cybersecurity and quality assurance visualization with shield and checklist motifs",
  "Macro close-up of AI compute hardware on a circuit board with cool blue and cyan lighting",
  "Abstract network topology illustrating cloud APIs and system connectivity",
];

const REVIEWS_BG = "/images/tech-gallery/complete-ai-gallery-05-dashboard.png";

const REVIEWS = [
  {
    initial: "M",
    title: "Knowledge assistant",
    body: "Our site chatbot pulls from our PDFs and Airtable—customers get accurate answers 24/7 and our team spends far less time on first-line questions.",
    attribution: "Marketing lead - 2026",
  },
  {
    initial: "F",
    title: "Quote-to-cash",
    body: "Invoices draft in QuickBooks from email threads and call notes. Billing cycles are faster with fewer manual line-item mistakes.",
    attribution: "Finance director - 2026",
  },
  {
    initial: "O",
    title: "Executive briefing",
    body: "Monday morning one-pager from Stripe, HubSpot, and Ads keeps leadership aligned. Clear narrative instead of spreadsheet archaeology.",
    attribution: "Operations - 2026",
  },
];

function StarRating() {
  return (
    <div
      className="flex justify-center gap-0.5 text-amber-400"
      role="img"
      aria-label="5 out of 5 stars"
    >
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className="h-4 w-4 fill-amber-400 stroke-amber-500"
          strokeWidth={1}
        />
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Complete AI IT Services | AI-Powered Automation</title>
        <meta
          name="description"
          content="Complete AI IT Services in Pleasanton, CA — custom AI architecture, n8n workflows, RAG knowledge assistants, and QA-backed automation for business growth."
        />
      </Head>
      <div className="font-sans text-gray-800">
      {/* Hero: nav + image + CTA (reference layout) */}
      <section className="bg-[#1c1c1c] text-white">
        <SiteHeader activeNav="home" />

        <div className="relative aspect-[16/9] w-full min-h-[200px] max-h-[min(70vh,560px)] sm:min-h-[260px] md:aspect-[21/9] md:min-h-[300px] lg:min-h-[320px]">
          <SafeImage
            src={HERO_IMAGE}
            alt="Team in a conference room reviewing a presentation on a wall-mounted TV screen"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>

        <div className="px-4 py-10 text-center sm:px-6 sm:py-12 md:px-8 md:py-16">
          <h1
            className={`${heroTitleFont.className} mx-auto max-w-4xl text-[30px] font-normal uppercase leading-[1.08] text-neutral-200 sm:text-[34px] md:text-[38px] lg:text-[42px]`}
          >
            AI-Powered Automation for Business Growth
          </h1>
          <p
            className={`${heroSubtitleFont.className} mx-auto mt-4 max-w-3xl text-[20px] font-normal leading-relaxed text-neutral-300`}
          >
            Less manual. More growth.
          </p>
          <div className="mt-10 flex justify-center">
            <Link
              href="/contact-us"
              className={`${heroSubtitleFont.className} inline-flex items-center gap-4 border border-white px-6 py-3 text-[18px] font-normal uppercase text-white transition hover:bg-white/10 md:px-10`}
            >
              <span className="h-px w-6 bg-white md:w-10" aria-hidden />
              Book online
              <span className="h-px w-6 bg-white md:w-10" aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      {/* About Us — three columns (reference layout) */}
      <section
        id="about"
        className="scroll-mt-20 bg-white px-4 py-14 text-gray-900 sm:px-6 sm:py-16 md:py-20"
      >
        <h2
          className={`${aboutUsColumnTitleFont.className} mx-auto w-fit text-center text-[25px] font-bold tracking-normal text-black`}
        >
          <Link href="/about" className="transition hover:opacity-80">
            ABOUT US
          </Link>
        </h2>
        <div className="mx-auto mt-10 grid w-full max-w-6xl grid-cols-1 justify-items-center gap-y-10 sm:gap-y-12 md:mt-16 md:grid-cols-3 md:justify-items-stretch md:gap-x-6 md:gap-y-0 lg:gap-x-10">
          <article className="flex w-full flex-col items-center text-center md:items-start md:text-left">
            <h3
              className={`${aboutUsColumnTitleFont.className} w-full text-center text-[20px] text-gray-900`}
            >
              AI Architecture &amp; Workflows
            </h3>
            <div
              className="relative mt-6 flex h-24 w-24 items-center justify-center self-center text-gray-900"
              aria-hidden
            >
              <Layers className="absolute h-20 w-20" strokeWidth={1.15} />
              <Workflow
                className="relative h-9 w-9 translate-y-0.5"
                strokeWidth={1.25}
              />
            </div>
            <p
              className={`${heroSubtitleFont.className} mt-6 text-[18px] font-normal leading-relaxed text-gray-700`}
            >
              We design and deploy custom AI systems using n8n orchestration,
              large language models, and vector databases (e.g. Pinecone) with
              retrieval-augmented generation (RAG) so answers stay grounded in
              your PDFs, Airtable bases, and internal documentation.
            </p>
          </article>

          <article className="flex w-full flex-col items-center text-center md:items-start md:text-left">
            <h3
              className={`${aboutUsColumnTitleFont.className} w-full text-center text-[20px] text-gray-900`}
            >
              10+ Hours Back Weekly
            </h3>
            <div
              className="relative mt-6 flex h-24 w-24 items-center justify-center self-center text-gray-900"
              aria-hidden
            >
              <Clock className="h-16 w-16 opacity-90" strokeWidth={1.1} />
              <Zap
                className="absolute -bottom-1 -right-1 h-11 w-11 rounded-full bg-white p-0.5"
                strokeWidth={1.2}
              />
            </div>
            <p
              className={`${heroSubtitleFont.className} mt-6 text-[18px] font-normal leading-relaxed text-gray-700`}
            >
              Our automations are engineered to reclaim substantial time each
              week—from inbox triage and quote-to-cash billing to SEO content
              and executive reporting—so your team can focus on growth instead of
              repetitive manual work.
            </p>
          </article>

          <article className="flex w-full flex-col items-center text-center md:items-start md:text-left">
            <h3
              className={`${aboutUsColumnTitleFont.className} w-full text-center text-[20px] text-gray-900`}
            >
              QA-Guaranteed Delivery
            </h3>
            <div
              className="relative mt-6 flex h-24 w-24 items-center justify-center self-center text-gray-900"
              aria-hidden
            >
              <ShieldCheck className="h-16 w-16 opacity-90" strokeWidth={1.1} />
              <ClipboardCheck
                className="absolute -bottom-1 -right-1 h-11 w-11 rounded-full bg-white"
                strokeWidth={1.2}
              />
            </div>
            <p
              className={`${heroSubtitleFont.className} mt-6 text-[18px] font-normal leading-relaxed text-gray-700`}
            >
              Every engagement follows a clear roadmap: discovery audit,
              architecture build, QA testing for brand alignment, then go-live
              with a managed retainer that includes a bi-weekly logic audit of AI
              execution logs, retrieval accuracy, and system prompts.
            </p>
          </article>
        </div>
      </section>

      {/* Social */}
      <section
        id="social"
        className="bg-[#1c1c1c] px-4 py-12 text-white sm:px-6 sm:py-14 md:py-16"
        aria-labelledby="social-heading"
      >
        <h2
          id="social-heading"
          className={`${socialHeaderFont.className} m-0 text-center font-normal uppercase leading-normal tracking-wide text-white antialiased`}
          style={{ fontSize: "27px", lineHeight: 1.2 }}
        >
          Social
        </h2>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 md:gap-8">
          <SocialMediaIcons />
        </div>
      </section>

      <section className="bg-black" aria-label="Technology gallery">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {GALLERY_IMAGES.map((src, i) => (
            <div
              key={src}
              className="relative aspect-[4/3] w-full md:aspect-[5/4]"
            >
              <SafeImage
                src={src}
                alt={GALLERY_ALT[i] ?? ""}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 25vw"
                priority={i < 4}
              />
            </div>
          ))}
        </div>
      </section>

      <ThoughtLeadershipSection />

      <section
        className="bg-white px-4 py-12 sm:px-6 sm:py-14 md:py-16"
        aria-labelledby="subscribe-heading"
      >
        <SubscribeForm
          titleFontClassName={heroTitleFont.className}
          signUpButtonFontClassName={heroSubtitleFont.className}
        />
        <p className="mx-auto mt-6 max-w-5xl text-center text-sm text-neutral-500">
          Get 10% off your initial visit when you sign up for our newsletter!
        </p>
      </section>

      <section
        className="relative min-h-[420px] overflow-hidden py-12 sm:min-h-[480px] sm:py-14 md:min-h-[520px] md:py-20"
        aria-labelledby="reviews-heading"
      >
        <SafeImage
          src={REVIEWS_BG}
          alt=""
          fill
          className="object-cover blur-md brightness-[0.35]"
          sizes="100vw"
          aria-hidden
        />
        <div className="absolute inset-0 bg-black/55" aria-hidden />
        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
          <h2
            id="reviews-heading"
            className={`${reviewsHeadingFont.className} m-0 text-center font-normal uppercase leading-tight tracking-normal text-white`}
            style={{ fontSize: "48px", lineHeight: 1.1 }}
          >
            Reviews
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3 md:gap-5">
            {REVIEWS.map((review) => (
              <article
                key={review.title}
                className="flex flex-col bg-white px-6 py-8 text-center shadow-sm"
              >
                <div
                  className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-neutral-200 text-xl font-semibold text-neutral-600"
                  aria-hidden
                >
                  {review.initial}
                </div>
                <div className="mt-4">
                  <StarRating />
                </div>
                <h3 className="mt-4 text-base font-bold text-neutral-900">
                  {review.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral-800">
                  {review.body}
                </p>
                <p className="mt-5 text-[11px] text-neutral-500">
                  {review.attribution}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
    </>
  );
}

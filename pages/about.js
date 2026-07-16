import React from "react";
import { Share } from "next/font/google";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import {
  Shield,
  FlaskConical,
  Search,
  Quote,
  ArrowRight,
} from "lucide-react";
import clsx from "clsx";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

const FOUNDER_PHOTO = "/images/kavitha-raman.png";

const pageFont = Share({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Arial", "sans-serif"],
  adjustFontFallback: false,
});

const PILLARS = [
  {
    num: "01",
    title: "Strict Data Governance",
    icon: Shield,
    accent: {
      border: "border-l-indigo-500",
      badge: "from-indigo-600 to-indigo-500",
      glow: "bg-indigo-500/10",
      icon: "text-indigo-600",
    },
    body: "We enforce rigorous data security standards. By building on secure vector databases (like Pinecone) and leveraging zero-data-retention API structures, your company's proprietary data (PDFs, CRMs, and internal documents) remains entirely private. Your data is never used to train public foundation models.",
  },
  {
    num: "02",
    title: "QA-Guaranteed Delivery",
    icon: FlaskConical,
    accent: {
      border: "border-l-teal-500",
      badge: "from-teal-600 to-teal-500",
      glow: "bg-teal-500/10",
      icon: "text-teal-600",
    },
    body: "Every system we deploy goes through rigorous functional, integration, and performance stress-testing. Because of our founder's QA background, we guarantee that your AI system is completely aligned with your brand standards and operating criteria before it ever goes live.",
  },
  {
    num: "03",
    title: "Managed Continuity (Bi-Weekly Logic Audits)",
    icon: Search,
    accent: {
      border: "border-l-violet-500",
      badge: "from-violet-600 to-violet-500",
      glow: "bg-violet-500/10",
      icon: "text-violet-600",
    },
    body: "AI systems require continuous care to prevent performance drift. Every client engagement includes a proactive, managed retainer where we perform bi-weekly logic audits—meticulously reviewing AI execution logs, verifying vector database retrieval accuracy, and updating prompt structures.",
  },
];

const FOUNDER_CREDENTIALS = [
  {
    label: "18+ Years in Quality Engineering",
    detail:
      "Leading test automation, risk validation, and release gates across complex industries, including Electric Vehicles, Enterprise SaaS, State Government, Retail, and Financial Services.",
  },
  {
    label: "Academic Foundation",
    detail:
      "Post-Graduate Program in Artificial Intelligence & Machine Learning (Business Applications) from The University of Texas at Austin and an MBA in IT from Golden Gate University, San Francisco.",
  },
  {
    label: "Zero-Fault Focus",
    detail:
      "Dedicated to enforcing rigorous data governance, quality metrics, and best practices to ensure continuous traceability and audit readiness.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Us | Complete AI IT Services</title>
        <meta
          name="description"
          content="We build bulletproof Agentic AI backbones with private RAG and n8n orchestration—engineered by founder Kavitha Raman with 18+ years of QA precision."
        />
      </Head>
      <div
        className={clsx(
          "min-h-screen bg-slate-50 font-sans text-slate-800",
          pageFont.className,
        )}
      >
        <div className="bg-[#1c1c1c] text-white">
          <SiteHeader activeNav="about" />
        </div>

        <main className="text-[18px] font-normal leading-relaxed text-slate-800 sm:text-[19px]">
          {/* Hero */}
          <section
            className="relative overflow-hidden border-b border-slate-200/60 bg-gradient-to-b from-slate-100 via-white to-slate-50"
            aria-labelledby="about-hero"
          >
            <div
              className="pointer-events-none absolute inset-0"
              aria-hidden
            >
              <div className="absolute -left-32 top-0 h-72 w-72 rounded-full bg-indigo-200/30 blur-3xl" />
              <div className="absolute -right-24 top-16 h-64 w-64 rounded-full bg-teal-200/25 blur-3xl" />
              <div className="absolute bottom-0 left-1/2 h-px w-[min(90%,48rem)] -translate-x-1/2 bg-gradient-to-r from-transparent via-indigo-200/60 to-transparent" />
            </div>

            <div className="relative mx-auto max-w-4xl px-4 pb-12 pt-14 text-center sm:px-6 sm:pb-14 sm:pt-16 md:px-10 md:pb-16 md:pt-20">
              <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500 sm:text-xs">
                About Us
              </p>
              <h1
                id="about-hero"
                className="mx-auto max-w-3xl text-balance font-extrabold leading-[1.15] tracking-tight text-slate-900"
                style={{
                  fontSize: "clamp(1.45rem, 2.4vw + 0.4rem, 2.35rem)",
                }}
              >
                We Don&apos;t Build Simple AI.{" "}
                <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-teal-600 bg-clip-text text-transparent">
                  We Build Bulletproof Agentic Backbones.
                </span>
              </h1>
              <div className="mx-auto mt-8 max-w-3xl space-y-5 text-left text-[17px] leading-relaxed text-slate-700 sm:mt-10 sm:text-[18px] md:text-[19px]">
                <p className="m-0">
                  Most business owners are hesitant to fully adopt AI, and for
                  good reason. They are tired of generic, off-the-shelf chatbots
                  that break, hallucinate, or risk leaking sensitive proprietary
                  data.
                </p>
                <p className="m-0">
                  At Complete AI IT Services, we do things differently. We
                  don&apos;t just deploy technology; we build high-stakes
                  Agentic AI Backbones using secure, private
                  Retrieval-Augmented Generation (RAG) and n8n orchestration to
                  safely automate your company&apos;s most complex operations.
                </p>
                <p className="m-0">
                  Every automation we design is engineered to do one thing:
                  reclaim{" "}
                  <span className="font-bold text-slate-900">
                    10+ hours for your team every single week
                  </span>
                  —while operating with the zero-fault stability of
                  enterprise-grade software.
                </p>
              </div>
            </div>
          </section>

          {/* Founder */}
          <section
            className="border-b border-slate-200/60 bg-white px-4 py-14 sm:px-6 sm:py-16 md:px-10 md:py-20"
            aria-labelledby="founder-heading"
          >
            <div className="mx-auto max-w-4xl">
              <h2
                id="founder-heading"
                className="text-center text-[1.2rem] font-bold uppercase tracking-wide text-slate-900 sm:text-[1.35rem]"
              >
                Meet the Founder
              </h2>
              <p className="mt-2 text-center text-[16px] text-slate-600 sm:text-[17px]">
                Engineered with 18+ Years of QA Precision
              </p>

              <div className="mt-10 rounded-2xl border border-slate-200/90 bg-slate-50/50 p-6 shadow-sm sm:p-8 md:p-10">
                <div className="flex flex-col items-center gap-6 border-b border-slate-200/80 pb-8 sm:flex-row sm:items-center sm:gap-8">
                  <div className="relative h-40 w-40 shrink-0 overflow-hidden rounded-2xl ring-1 ring-slate-200/80 shadow-md sm:h-44 sm:w-44 md:h-48 md:w-48">
                    <Image
                      src={FOUNDER_PHOTO}
                      alt="Kavitha Raman, Founder and AI Integration Architect at Complete AI IT Services"
                      fill
                      unoptimized
                      className="object-cover object-top"
                      sizes="(max-width: 640px) 160px, 192px"
                      priority
                    />
                  </div>
                  <div className="min-w-0 text-center sm:text-left">
                    <p className="m-0 text-[1.35rem] font-bold tracking-tight text-slate-900 sm:text-[1.5rem]">
                      Kavitha Raman
                    </p>
                    <p className="mt-1 text-[15px] font-medium uppercase tracking-[0.1em] text-indigo-700 sm:text-[16px]">
                      Founder &amp; AI Integration Architect
                    </p>
                  </div>
                </div>

                <ul className="mt-8 space-y-6">
                  {FOUNDER_CREDENTIALS.map((item) => (
                    <li key={item.label}>
                      <h3 className="text-[17px] font-bold text-slate-900 sm:text-[18px]">
                        {item.label}
                      </h3>
                      <p className="mt-1.5 text-[16px] leading-relaxed text-slate-600 sm:text-[17px]">
                        {item.detail}
                      </p>
                    </li>
                  ))}
                </ul>

                <blockquote className="relative mt-10 rounded-xl border border-indigo-100 bg-white px-5 py-6 sm:px-7 sm:py-7">
                  <Quote
                    className="absolute left-4 top-4 h-6 w-6 text-indigo-200 sm:left-5 sm:top-5"
                    strokeWidth={1.5}
                    aria-hidden
                  />
                  <p className="relative pl-8 text-[16px] italic leading-relaxed text-slate-700 sm:pl-9 sm:text-[17px]">
                    Throughout my career, I&apos;ve watched organizations lose
                    thousands of hours and critical revenue to repetitive
                    operational bottlenecks. Having spent nearly two decades
                    stress-testing enterprise software, I founded this agency
                    with a simple promise: we design AI systems built to a
                    strict standard of flawless logic, absolute data governance,
                    and verified security.
                  </p>
                  <footer className="relative mt-4 pl-8 text-[14px] font-semibold text-slate-500 sm:pl-9">
                    — Kavitha Raman
                  </footer>
                </blockquote>
              </div>
            </div>
          </section>

          {/* Three pillars */}
          <section
            className="bg-slate-50 px-4 py-14 sm:px-6 sm:py-16 md:px-10 md:py-20"
            aria-labelledby="standard-heading"
          >
            <div className="mx-auto max-w-4xl">
              <h2
                id="standard-heading"
                className="text-center text-[1.2rem] font-bold uppercase tracking-wide text-slate-900 sm:text-[1.35rem]"
              >
                The Complete AI IT Services Standard
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-center text-[16px] leading-relaxed text-slate-600 sm:text-[17px]">
                We bridge the gap between complex AI-driven code and reliable,
                everyday business operations. When you partner with us, you
                benefit from our three-pillar implementation framework:
              </p>

              <div className="mt-10 space-y-6 sm:mt-12 sm:space-y-8">
                {PILLARS.map((pillar) => {
                  const Icon = pillar.icon;
                  return (
                    <article
                      key={pillar.num}
                      className={clsx(
                        "group relative overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm transition-shadow duration-300 hover:shadow-md",
                        "border-l-[5px]",
                        pillar.accent.border,
                      )}
                    >
                      <div
                        className={clsx(
                          "pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-50 blur-3xl transition group-hover:opacity-70",
                          pillar.accent.glow,
                        )}
                        aria-hidden
                      />
                      <div className="relative flex flex-col gap-4 px-5 py-6 sm:flex-row sm:items-start sm:gap-5 sm:px-7 sm:py-8">
                        <div
                          className={clsx(
                            "flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br text-white shadow-sm sm:h-14 sm:w-14",
                            pillar.accent.badge,
                          )}
                          aria-hidden
                        >
                          <Icon className="h-6 w-6" strokeWidth={2} />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-slate-400">
                            Pillar {pillar.num}
                          </p>
                          <h3 className="mt-1 text-[1.15rem] font-bold leading-snug text-slate-900 sm:text-[1.25rem]">
                            {pillar.title}
                          </h3>
                          <p className="mt-2 text-[16px] leading-relaxed text-slate-600 sm:text-[17px]">
                            {pillar.body}
                          </p>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Beyond bottlenecks + CTA */}
          <section
            className="border-t border-slate-200 bg-white px-4 py-14 sm:px-6 sm:py-16 md:px-10 md:py-20"
            aria-labelledby="beyond-heading"
          >
            <div className="mx-auto max-w-3xl text-center">
              <h2
                id="beyond-heading"
                className="text-[1.2rem] font-bold uppercase tracking-wide text-slate-900 sm:text-[1.35rem]"
              >
                Moving Beyond Repetitive Bottlenecks
              </h2>
              <div className="mt-6 space-y-5 text-left text-[17px] leading-relaxed text-slate-700 sm:text-[18px]">
                <p className="m-0">
                  Whether you are looking to deploy a 24/7 AI Knowledge
                  Assistant to capture late-night website leads, automate your
                  Quote-to-Cash billing process, or run an Autonomous Content
                  Engine to drive organic traffic, we build systems that scale
                  with you.
                </p>
                <p className="m-0">
                  Stop forcing your team to waste their talent on manual,
                  boring, repetitive computer tasks. Let us help you build a
                  reliable, high-performance digital workforce.
                </p>
              </div>

              <div className="mt-10 sm:mt-12">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 via-violet-600 to-teal-600 px-7 py-3.5 text-[15px] font-bold uppercase tracking-wide text-white shadow-md shadow-indigo-500/25 transition hover:scale-[1.02] hover:shadow-lg active:scale-[0.98] sm:px-9 sm:text-[16px]"
                >
                  Book Your Free AI Audit Call Today
                  <ArrowRight className="h-4 w-4" strokeWidth={2.5} aria-hidden />
                </Link>
              </div>
            </div>
          </section>
        </main>

        <SiteFooter />
      </div>
    </>
  );
}

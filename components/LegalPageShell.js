import React from "react";
import Head from "next/head";
import Link from "next/link";
import { Share } from "next/font/google";
import { ArrowRight, FileText, Home } from "lucide-react";
import clsx from "clsx";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";

const pageFont = Share({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Arial", "sans-serif"],
  adjustFontFallback: false,
});

export const legalSectionHeading =
  "scroll-mt-24 border-t border-slate-200/90 pt-10 text-[1.15rem] font-bold tracking-tight text-slate-900 first:border-t-0 first:pt-0 sm:text-[1.3rem]";

export const legalBody =
  "mt-4 text-pretty text-[16px] leading-relaxed text-slate-600 sm:text-[17px]";

export const legalList =
  "mt-4 list-disc space-y-2.5 pl-6 text-pretty text-[16px] leading-relaxed text-slate-600 marker:text-indigo-400 sm:text-[17px]";

export const legalSubHeading =
  "mt-7 text-[15px] font-bold tracking-tight text-slate-900 sm:text-[16px]";

const LEGAL_NAV = [
  {
    href: "/legal/privacy-policy",
    label: "Privacy Policy",
    id: "privacy",
  },
  {
    href: "/legal/terms-of-service",
    label: "Terms of Service",
    id: "terms",
  },
  {
    href: "/legal/satisfaction-refund-policy",
    label: "Satisfaction & Refund",
    id: "refund",
  },
];

/**
 * Shared layout for legal documents.
 *
 * @param {{
 *   metaTitle: string;
 *   metaDescription: string;
 *   breadcrumbCurrent: string;
 *   title: string;
 *   subtitle: React.ReactNode;
 *   relatedHref: string;
 *   relatedLabel: string;
 *   children: React.ReactNode;
 *   icon?: React.ReactNode;
 *   badge?: string;
 *   activeLegal?: "privacy" | "terms" | "refund";
 *   accent?: "indigo" | "violet" | "teal" | "amber";
 * }} props
 */
export default function LegalPageShell({
  metaTitle,
  metaDescription,
  breadcrumbCurrent,
  title,
  subtitle,
  relatedHref,
  relatedLabel,
  children,
  icon,
  badge = "Legal",
  activeLegal,
  accent = "indigo",
}) {
  const accents = {
    indigo: {
      glow: "rgba(99,102,241,0.16)",
      glow2: "rgba(20,184,166,0.1)",
      badge: "border-indigo-200/80 bg-indigo-50 text-indigo-800",
      iconWrap: "from-indigo-600 to-violet-600 shadow-indigo-500/25",
      bar: "from-indigo-500 via-violet-500 to-teal-500",
      pillActive: "bg-slate-900 text-white shadow-md shadow-slate-900/20",
      cardHover: "hover:border-indigo-200 hover:shadow-indigo-500/10",
    },
    violet: {
      glow: "rgba(124,58,237,0.16)",
      glow2: "rgba(99,102,241,0.1)",
      badge: "border-violet-200/80 bg-violet-50 text-violet-800",
      iconWrap: "from-violet-600 to-fuchsia-600 shadow-violet-500/25",
      bar: "from-violet-500 via-fuchsia-500 to-indigo-500",
      pillActive: "bg-slate-900 text-white shadow-md shadow-slate-900/20",
      cardHover: "hover:border-violet-200 hover:shadow-violet-500/10",
    },
    teal: {
      glow: "rgba(20,184,166,0.14)",
      glow2: "rgba(99,102,241,0.1)",
      badge: "border-teal-200/80 bg-teal-50 text-teal-900",
      iconWrap: "from-teal-600 to-cyan-600 shadow-teal-500/25",
      bar: "from-teal-500 via-cyan-500 to-indigo-500",
      pillActive: "bg-slate-900 text-white shadow-md shadow-slate-900/20",
      cardHover: "hover:border-teal-200 hover:shadow-teal-500/10",
    },
    amber: {
      glow: "rgba(245,158,11,0.14)",
      glow2: "rgba(99,102,241,0.1)",
      badge: "border-amber-200/80 bg-amber-50 text-amber-950",
      iconWrap: "from-amber-500 to-orange-500 shadow-amber-500/25",
      bar: "from-amber-500 via-orange-500 to-rose-500",
      pillActive: "bg-slate-900 text-white shadow-md shadow-slate-900/20",
      cardHover: "hover:border-amber-200 hover:shadow-amber-500/10",
    },
  };
  const a = accents[accent] || accents.indigo;

  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
      </Head>
      <div
        className={clsx(
          "min-h-screen bg-slate-50 font-sans text-slate-800",
          pageFont.className,
        )}
      >
        <div className="bg-[#1c1c1c] text-white">
          <SiteHeader />
        </div>

        <div className="relative overflow-hidden border-b border-slate-200/60">
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background: `radial-gradient(ellipse 100% 80% at 50% -30%, ${a.glow}, transparent 55%), radial-gradient(circle at 85% 20%, ${a.glow2}, transparent 40%)`,
            }}
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -left-24 top-0 h-64 w-64 rounded-full bg-indigo-300/15 blur-3xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -right-16 bottom-0 h-56 w-56 rounded-full bg-teal-300/15 blur-3xl"
            aria-hidden
          />

          <div className="relative mx-auto max-w-3xl px-4 pb-10 pt-8 sm:px-6 sm:pb-12 sm:pt-10 lg:max-w-[52rem]">
            <nav
              className="flex flex-wrap items-center gap-x-1.5 gap-y-1 text-[14px] text-slate-500"
              aria-label="Breadcrumb"
            >
              <Link
                href="/"
                className="inline-flex items-center gap-1.5 rounded-lg px-2 py-1 font-medium text-slate-700 transition hover:bg-white/80 hover:text-slate-900"
              >
                <Home className="h-3.5 w-3.5" strokeWidth={2} aria-hidden />
                Home
              </Link>
              <span className="text-slate-300" aria-hidden>
                /
              </span>
              <span className="rounded-lg px-2 py-1 text-slate-500">Legal</span>
              <span className="text-slate-300" aria-hidden>
                /
              </span>
              <span className="rounded-lg px-2 py-1 font-medium text-slate-800">
                {breadcrumbCurrent}
              </span>
            </nav>

            <header className="relative mt-7 overflow-hidden rounded-[1.35rem] border border-slate-200/90 bg-white/90 p-7 shadow-[0_22px_55px_-28px_rgba(15,23,42,0.2)] ring-1 ring-white/70 backdrop-blur-sm sm:p-9 md:p-10">
              <div
                className={clsx(
                  "absolute inset-x-0 top-0 h-1 bg-gradient-to-r",
                  a.bar,
                )}
                aria-hidden
              />
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:gap-6">
                {icon ? (
                  <div
                    className={clsx(
                      "flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br text-white shadow-lg",
                      a.iconWrap,
                    )}
                    aria-hidden
                  >
                    {icon}
                  </div>
                ) : (
                  <div
                    className={clsx(
                      "flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br text-white shadow-lg",
                      a.iconWrap,
                    )}
                    aria-hidden
                  >
                    <FileText className="h-6 w-6" strokeWidth={2} />
                  </div>
                )}
                <div className="min-w-0 flex-1">
                  <p
                    className={clsx(
                      "inline-flex items-center rounded-full border px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em]",
                      a.badge,
                    )}
                  >
                    {badge}
                  </p>
                  <h1 className="mt-3 text-balance text-[1.75rem] font-extrabold tracking-tight text-slate-900 sm:text-[2.1rem] sm:leading-[1.15]">
                    {title}
                  </h1>
                  <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-slate-600 sm:text-[16px]">
                    {subtitle}
                  </p>
                </div>
              </div>
            </header>

            <nav
              className="mt-6 flex flex-wrap gap-2"
              aria-label="Legal documents"
            >
              {LEGAL_NAV.map((item) => {
                const active = activeLegal === item.id;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={clsx(
                      "rounded-full px-3.5 py-2 text-[13px] font-semibold transition sm:text-[14px]",
                      active
                        ? a.pillActive
                        : "border border-slate-200/90 bg-white/80 text-slate-600 hover:border-slate-300 hover:bg-white hover:text-slate-900",
                    )}
                    aria-current={active ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>

        <main className="relative mx-auto max-w-3xl px-4 pb-16 pt-8 sm:px-6 sm:pb-20 sm:pt-10 lg:max-w-[52rem]">
          <article
            className={clsx(
              "rounded-[1.35rem] border border-slate-200/90 bg-white px-6 py-8 shadow-[0_18px_50px_-30px_rgba(15,23,42,0.18)] sm:px-10 sm:py-11",
              "[&_strong]:font-semibold [&_strong]:text-slate-900",
              "[&_a]:font-semibold [&_a]:text-indigo-700 [&_a]:underline [&_a]:decoration-indigo-200 [&_a]:underline-offset-2 hover:[&_a]:decoration-indigo-500",
            )}
          >
            {children}
          </article>

          <nav
            className="mt-8 grid gap-3 sm:grid-cols-2"
            aria-label="Related legal documents"
          >
            <Link
              href={relatedHref}
              className={clsx(
                "group flex items-center justify-between gap-3 rounded-2xl border border-slate-200/90 bg-white px-5 py-4 shadow-sm transition",
                a.cardHover,
                "hover:shadow-md",
              )}
            >
              <div>
                <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-slate-400">
                  Related
                </p>
                <p className="mt-1 text-[15px] font-bold text-slate-900 sm:text-[16px]">
                  {relatedLabel}
                </p>
              </div>
              <ArrowRight
                className="h-4 w-4 shrink-0 text-slate-400 transition group-hover:translate-x-0.5 group-hover:text-slate-700"
                strokeWidth={2.25}
                aria-hidden
              />
            </Link>
            <Link
              href="/contact-us"
              className={clsx(
                "group flex items-center justify-between gap-3 rounded-2xl border border-slate-200/90 bg-white px-5 py-4 shadow-sm transition",
                a.cardHover,
                "hover:shadow-md",
              )}
            >
              <div>
                <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-slate-400">
                  Questions?
                </p>
                <p className="mt-1 text-[15px] font-bold text-slate-900 sm:text-[16px]">
                  Contact us
                </p>
              </div>
              <ArrowRight
                className="h-4 w-4 shrink-0 text-slate-400 transition group-hover:translate-x-0.5 group-hover:text-slate-700"
                strokeWidth={2.25}
                aria-hidden
              />
            </Link>
          </nav>
        </main>

        <SiteFooter />
      </div>
    </>
  );
}

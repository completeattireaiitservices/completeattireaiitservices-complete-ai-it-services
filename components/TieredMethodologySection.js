import React from "react";
import Link from "next/link";
import clsx from "clsx";

const METHODOLOGY_PHASES = [
  {
    phase: "Phase 1: Discovery & Audit",
    short: "Discovery",
    icon: "discovery",
    items: [
      "System Map & Workflow Review: We map your existing workflows and technical stack.",
      "Scope Definition: For all tiers, we identify the specific high-ROI automation targets.",
    ],
  },
  {
    phase: "Phase 2: Architecture & Development",
    short: "Build",
    icon: "build",
    items: [
      "Custom build & orchestration — Small/Medium: Standard n8n workflows and private knowledge base setup.",
      "Enterprise: Complex API design, large-scale data ingestion, and custom vector search optimization.",
    ],
  },
  {
    phase: "Phase 3: QA, Go-Live & Optimization",
    short: "Launch & scale",
    icon: "launch",
    items: [
      "Rigorous Audits: After launch, the retainer includes bi-weekly logic audits to ensure accuracy and prevent model drift.",
      "Scaling Review: Periodic reviews (especially for Enterprise) ensure the AI performance matches increasing data volume.",
    ],
  },
];

const METHODOLOGY_ACCENTS = [
  {
    stepGradient: "from-indigo-500 to-violet-600",
    cardTop: "border-t-indigo-500",
    cardLeft: "border-l-indigo-500",
    lineGradient: "from-indigo-400 via-violet-400 to-slate-200/90",
    listBefore: "before:bg-indigo-400",
    chip: "bg-indigo-100/90 text-indigo-900 ring-indigo-200/60",
  },
  {
    stepGradient: "from-cyan-500 to-teal-600",
    cardTop: "border-t-teal-500",
    cardLeft: "border-l-teal-500",
    lineGradient: "from-teal-400 via-cyan-400 to-slate-200/90",
    listBefore: "before:bg-teal-400",
    chip: "bg-cyan-100/90 text-teal-900 ring-cyan-200/60",
  },
  {
    stepGradient: "from-amber-500 to-rose-500",
    cardTop: "border-t-amber-500",
    cardLeft: "border-l-amber-500",
    lineGradient: "from-amber-400 via-rose-400/90 to-slate-200/90",
    listBefore: "before:bg-amber-400",
    chip: "bg-amber-100/90 text-amber-950 ring-amber-200/60",
  },
];

function MethodologyGlyph({ type, className }) {
  const c = clsx("h-6 w-6", className);
  if (type === "discovery") {
    return (
      <svg
        className={c}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M10.5 18a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15Z" />
        <path d="M16.5 16.5 21 21" />
      </svg>
    );
  }
  if (type === "build") {
    return (
      <svg
        className={c}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M9 3H5a2 2 0 0 0-2 2v4" />
        <path d="M9 21H5a2 2 0 0 1-2-2v-4" />
        <path d="M15 3h4a2 2 0 0 1 2 2v4" />
        <path d="M15 21h4a2 2 0 0 0 2-2v-4" />
        <path d="M9.5 9.5h5v5h-5z" />
      </svg>
    );
  }
  return (
    <svg
      className={c}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M3 3v18h18" />
      <path d="m19 9-5 5-4-4-3 3" />
    </svg>
  );
}

/**
 * Tiered Methodology section (e.g. Services page).
 *
 * @param {{
 *  headingId?: string;
 *  showCta?: boolean;
 *  ctaHref?: string;
 *  ctaLabel?: string;
 *  className?: string;
 * }} props
 */
export default function TieredMethodologySection({
  headingId = "methodology-heading",
  showCta = false,
  ctaHref = "/contact-us",
  ctaLabel = "Get Your AI Roadmap",
  className,
}) {
  return (
    <section
      className={clsx(
        "relative overflow-hidden border-t border-slate-200 bg-slate-50 px-4 py-16 sm:px-6 sm:py-20 md:px-10 md:py-24",
        className,
      )}
      aria-labelledby={headingId}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40 [background-image:radial-gradient(circle_at_1px_1px,rgb(148_163_184/0.35)_1px,transparent_0)] [background-size:20px_20px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-indigo-200/30 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-16 bottom-0 h-64 w-64 rounded-full bg-teal-200/25 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl">
        <h2
          id={headingId}
          className="text-center text-[1.4rem] font-bold uppercase leading-snug tracking-wide text-slate-900 sm:text-[1.5rem]"
        >
          Our tiered methodology
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-[16px] text-slate-600 sm:text-[17px]">
          How implementation scales with your complexity—from discovery through ongoing optimization.
        </p>

        <div className="mt-3 flex justify-center">
          <div
            className="h-1 w-16 rounded-full bg-gradient-to-r from-indigo-500 via-violet-500 to-amber-400"
            aria-hidden
          />
        </div>

        {/* Desktop: connected stepper + cards */}
        <div className="mt-10 hidden lg:block">
          <div className="relative mb-8 px-4 lg:px-6">
            <div
              className="absolute left-[10%] right-[10%] top-7 h-[3px] rounded-full bg-gradient-to-r from-indigo-300 via-violet-400 to-amber-300"
              aria-hidden
            />
            <ol className="relative z-10 flex w-full list-none items-start justify-between gap-2 p-0">
              {METHODOLOGY_PHASES.map((block, i) => {
                const a = METHODOLOGY_ACCENTS[i % METHODOLOGY_ACCENTS.length];
                return (
                  <li
                    key={block.phase}
                    className="flex min-w-0 max-w-[30%] flex-1 flex-col items-center text-center"
                  >
                    <div
                      className={clsx(
                        "flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br text-white shadow-lg shadow-slate-900/15 ring-4 ring-white",
                        a.stepGradient,
                      )}
                      aria-hidden
                    >
                      <MethodologyGlyph type={block.icon} className="h-7 w-7" />
                    </div>
                    <span
                      className={clsx(
                        "mt-3 inline-flex rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider ring-1 ring-inset",
                        a.chip,
                      )}
                    >
                      Step {i + 1} · {block.short}
                    </span>
                  </li>
                );
              })}
            </ol>
          </div>

          <ol className="grid list-none grid-cols-3 gap-5 p-0 lg:gap-6">
            {METHODOLOGY_PHASES.map((block, i) => {
              const a = METHODOLOGY_ACCENTS[i % METHODOLOGY_ACCENTS.length];
              return (
                <li
                  key={block.phase}
                  className={clsx(
                    "flex flex-col rounded-2xl border border-slate-200/90 bg-white p-6 shadow-[0_12px_40px_-12px_rgba(15,23,42,0.12)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_50px_-15px_rgba(15,23,42,0.18)]",
                    "border-t-4",
                    a.cardTop,
                  )}
                >
                  <h3 className="text-left text-base font-bold leading-snug text-slate-900 lg:text-[1.1rem]">
                    {block.phase}
                  </h3>
                  <ul className="mt-3 flex-1 list-none space-y-3 p-0 text-left text-[15px] leading-relaxed text-slate-600 sm:text-[16px]">
                    {block.items.map((line) => (
                      <li
                        key={line}
                        className={clsx(
                          "relative pl-3.5",
                          "before:absolute before:left-0 before:top-2.5 before:h-1.5 before:w-1.5 before:rounded-full",
                          a.listBefore,
                        )}
                      >
                        {line}
                      </li>
                    ))}
                  </ul>
                </li>
              );
            })}
          </ol>
        </div>

        {/* Mobile: vertical timeline */}
        <ol className="mt-10 list-none space-y-0 p-0 lg:hidden">
          {METHODOLOGY_PHASES.map((block, i) => {
            const a = METHODOLOGY_ACCENTS[i % METHODOLOGY_ACCENTS.length];
            const isLast = i === METHODOLOGY_PHASES.length - 1;
            return (
              <li key={block.phase} className="relative pb-10 pl-0 last:pb-0">
                <div
                  className="absolute left-[22px] top-[3.35rem] bottom-0 w-px sm:left-[25px] sm:top-14"
                  style={{ display: isLast ? "none" : "block" }}
                  aria-hidden
                >
                  <div className={clsx("h-full w-px bg-gradient-to-b", a.lineGradient)} />
                </div>
                <div className="flex gap-4 sm:gap-5">
                  <div className="relative z-10 flex w-12 shrink-0 flex-col items-center sm:w-14">
                    <div
                      className={clsx(
                        "flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br text-white shadow-md ring-2 ring-white sm:h-14 sm:w-14",
                        a.stepGradient,
                      )}
                      aria-hidden
                    >
                      <MethodologyGlyph type={block.icon} className="h-6 w-6 sm:h-7 sm:w-7" />
                    </div>
                  </div>
                  <div
                    className={clsx(
                      "min-w-0 flex-1 rounded-2xl border border-slate-200/90 bg-white p-5 shadow-md",
                      "border-l-4",
                      a.cardLeft,
                    )}
                  >
                    <span
                      className={clsx(
                        "inline-flex rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ring-1 ring-inset",
                        a.chip,
                      )}
                    >
                      Step {i + 1} · {block.short}
                    </span>
                    <h3 className="mt-2 text-[1.05rem] font-bold leading-snug text-slate-900">
                      {block.phase}
                    </h3>
                    <ul className="mt-2 list-none space-y-2 p-0 text-[15px] leading-relaxed text-slate-600">
                      {block.items.map((line) => (
                        <li
                          key={line}
                          className={clsx(
                            "relative pl-3.5",
                            "before:absolute before:left-0 before:top-2.5 before:h-1.5 before:w-1.5 before:rounded-full",
                            a.listBefore,
                          )}
                        >
                          {line}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>

        {showCta ? (
          <div className="mt-12 text-center sm:mt-14">
            <Link
              href={ctaHref}
              className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-8 py-3.5 text-[16px] font-bold uppercase tracking-wide text-white shadow-lg shadow-slate-900/20 transition hover:bg-slate-800 hover:shadow-xl"
            >
              {ctaLabel}
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}


"use client";

import React, { useRef } from "react";
import { Share, Squada_One } from "next/font/google";
import SafeImage from "./SafeImage";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

const thoughtLeadershipTitleFont = Squada_One({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  fallback: ["sans-serif"],
  adjustFontFallback: false,
});

const thoughtLeadershipDescriptionFont = Share({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  fallback: ["Arial", "sans-serif"],
  adjustFontFallback: false,
});

/** Card titles: 20px, Share bold (matches “layout” article titles) */
const thoughtLeadershipCardTitleFont = Share({
  weight: "700",
  subsets: ["latin"],
  display: "swap",
  fallback: ["Arial", "sans-serif"],
  adjustFontFallback: false,
});

/** Card date line: Share with Next’s size-matched fallback (often shown in devtools as “Share Fallback”). */
const thoughtLeadershipDateFont = Share({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  fallback: ["Arial", "sans-serif"],
  adjustFontFallback: true,
});

const THOUGHT_LEADERSHIP = [
  {
    slug: "designing-ai-knowledge-assistant-seo",
    title: "Designing a 24/7 AI Knowledge Assistant for Your Website",
    date: "January 2, 2026",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=640&q=80",
    href: "/blog/designing-ai-knowledge-assistant-seo",
    excerpt:
      "Your website is a 24/7 asset—but if it cannot engage visitors instantly, it is a missed opportunity. Modern SEO is about intent satisfaction and dwell time. A 24/7 AI Knowledge Assistant keeps people on your site while automating the customer journey.",
  },
  {
    slug: "gmail-copilots-governance-seo",
    title: "Mastering Gmail Copilots: Approvals, Tone, and Audit Trails",
    date: "December 18, 2025",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=640&q=80",
    href: "/blog/gmail-copilots-governance-seo",
    excerpt:
      'As organizations rush to integrate Generative AI into their daily operations, the focus has shifted from "can it write emails?" to "can we trust what it sends?" Deploying a Gmail Copilot requires more than just smart drafting—it demands a robust framework for approvals, consistent tone, and bulletproof audit trails. Standard AI plugins can draft a reply, but in a professional setting, an unvetted AI response is a liability.',
  },
  {
    slug: "brand-guardian-playbooks-multi-location-seo",
    title: "Brand Guardian Playbooks: Managing Multi-Location Reviews at Scale",
    date: "December 4, 2025",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=640&q=80",
    href: "/blog/brand-guardian-playbooks-multi-location-seo",
    excerpt:
      "For franchises and multi-unit enterprises, online reviews are the new digital currency. However, maintaining a consistent brand voice across 50, 500, or 5,000 locations is an operational nightmare. A Brand Guardian Playbook is the essential tool to ensure every response—whether in New York or Los Angeles—aligns with your global identity while winning local trust.",
  },
  {
    slug: "monday-briefings-unified-business-narrative-seo",
    title: "Monday Briefings: Unifying Ads, CRM, and Billing into One Narrative",
    date: "November 20, 2025",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=640&q=80",
    href: "/blog/monday-briefings-unified-business-narrative-seo",
    excerpt:
      "In the modern enterprise, data is everywhere, but insight is rare. Most executives spend their Monday mornings jumping between Google Ads dashboards, CRM pipelines, and billing reports. This fragmented view hides the most critical metric of all: the cohesive story of your business growth.",
  },
];

export default function ThoughtLeadershipSection() {
  const scrollerRef = useRef(null);

  const scrollByDir = (dir) => {
    const el = scrollerRef.current;
    if (!el) return;
    const step = Math.min(el.clientWidth * 0.85, 320);
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <section
      id="blog"
      className="scroll-mt-20 bg-white px-4 py-16 md:px-10 md:py-24"
      aria-labelledby="thought-leadership-heading"
    >
      <h2
        id="thought-leadership-heading"
        className={`${thoughtLeadershipTitleFont.className} m-0 text-center font-normal uppercase leading-tight text-neutral-900`}
        style={{ fontSize: "clamp(1.75rem, 4vw + 0.5rem, 3rem)", lineHeight: 1.1 }}
      >
        Thought Leadership
      </h2>

      <div className="relative mx-auto mt-14 w-full max-w-[1252px]">
        <button
          type="button"
          onClick={() => scrollByDir(-1)}
          className="absolute left-0 top-[42%] z-10 hidden min-h-11 min-w-11 -translate-y-1/2 items-center justify-center rounded-full border border-neutral-300 bg-white text-neutral-500 shadow-sm transition hover:bg-neutral-50 hover:text-neutral-800 md:flex lg:hidden"
          aria-label="Previous articles"
        >
          <ChevronLeft className="h-6 w-6" strokeWidth={1.5} />
        </button>
        <button
          type="button"
          onClick={() => scrollByDir(1)}
          className="absolute right-0 top-[42%] z-10 hidden min-h-11 min-w-11 -translate-y-1/2 items-center justify-center rounded-full border border-neutral-300 bg-white text-neutral-500 shadow-sm transition hover:bg-neutral-50 hover:text-neutral-800 md:flex lg:hidden"
          aria-label="Next articles"
        >
          <ChevronRight className="h-6 w-6" strokeWidth={1.5} />
        </button>

        <div
          ref={scrollerRef}
          className="flex gap-8 overflow-x-auto scroll-smooth px-1 pb-4 pt-2 [-ms-overflow-style:none] [scrollbar-width:none] snap-x snap-mandatory md:px-12 lg:grid lg:max-w-[1252px] lg:grid-cols-2 lg:gap-6 lg:overflow-visible lg:px-0 xl:grid-cols-4 [&::-webkit-scrollbar]:hidden"
        >
          {THOUGHT_LEADERSHIP.map((post) => (
            <article
              key={post.slug ?? post.title}
              className="w-[min(100%,min(92vw,300px))] shrink-0 snap-center min-w-0 md:w-[280px] lg:w-full lg:shrink"
            >
              <Link
                href={post.href}
                className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-2"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-200 xl:aspect-[313/481] xl:max-h-[481px]">
                  <SafeImage
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition duration-300 group-hover:scale-[1.02]"
                    sizes="(max-width: 1023px) 92vw, (max-width: 1279px) 45vw, 313px"
                  />
                </div>
                <p
                  className={`${thoughtLeadershipDateFont.className} mt-4 text-center text-[14px] font-normal text-neutral-500`}
                >
                  {post.date}
                </p>
                <h3
                  className={`${thoughtLeadershipCardTitleFont.className} mt-3 line-clamp-2 break-words text-center text-[20px] leading-snug text-neutral-900 [overflow-wrap:anywhere]`}
                  title={post.title}
                >
                  {post.title}
                </h3>
              </Link>
              {post.excerpt ? (
                <p
                  className={`${thoughtLeadershipDescriptionFont.className} mt-3 min-h-[5.5rem] line-clamp-3 text-left text-[18px] font-normal leading-relaxed text-neutral-600`}
                  title={post.excerpt}
                >
                  {post.excerpt}
                </p>
              ) : null}
              <Link
                href={post.href}
                className={`${thoughtLeadershipDescriptionFont.className} mt-4 block text-center text-[18px] font-medium text-neutral-600 underline-offset-2 transition hover:text-neutral-900 hover:underline`}
                aria-label={`Read full article: ${post.title}`}
              >
                Read more
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-2 flex justify-center gap-4 min-[1280px]:hidden md:hidden">
          <button
            type="button"
            onClick={() => scrollByDir(-1)}
            className="rounded-full border border-neutral-300 bg-white p-2 text-neutral-500"
            aria-label="Previous articles"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => scrollByDir(1)}
            className="rounded-full border border-neutral-300 bg-white p-2 text-neutral-500"
            aria-label="Next articles"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}

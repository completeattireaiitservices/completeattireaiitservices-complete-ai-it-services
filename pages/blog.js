import React from "react";
import Head from "next/head";
import { Share, Squada_One } from "next/font/google";
import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import { BLOG_POSTS } from "../lib/blogPosts";

const CTA_BG =
  "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1920&q=80";

const IMG_FALLBACK = "/placeholders/photo-fallback.svg?v=2";

/** Native img fallback (blog index stays server-only; avoids `use client` hydration edge cases). */
function BlogCardImg({ src, alt, className }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      className={className}
      onError={(e) => {
        const el = e.currentTarget;
        if (el.src && !el.src.includes("photo-fallback")) {
          el.src = IMG_FALLBACK;
        }
      }}
    />
  );
}

/** Blog index: 20px Share, Arial, sans-serif (body + UI copy). */
const blogShareFont = Share({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Arial", "sans-serif"],
  adjustFontFallback: false,
});

/** Matches article kicker typography (`/blog/designing-ai-knowledge-assistant-seo`). */
const blogSquadaFont = Squada_One({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function BlogPage() {
  return (
    <>
      <Head>
        <title>THE BLOG | Complete AI IT Services</title>
        <meta
          name="description"
          content="Insights on AI automation, 24/7 AI knowledge assistants, SEO, RAG, quote-to-cash, and intelligent operations from Complete AI IT Services, Pleasanton, CA."
        />
      </Head>
      <div className="min-h-screen bg-white text-neutral-900">
        <div className="bg-black text-white">
          <SiteHeader endAction="search" activeNav="blog" hideLogo={true} />
        </div>

        <div
          className={`${blogShareFont.className} text-[20px] font-normal leading-relaxed text-neutral-800`}
        >
          <main>
            <h1
              className={`${blogSquadaFont.className} m-0 px-4 pb-2 pt-12 text-center text-[48px] font-normal uppercase leading-none tracking-wide text-neutral-900 sm:px-6 sm:pt-16 md:pt-20`}
            >
              THE BLOG
            </h1>

            <div className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-8 sm:py-14 md:px-10 md:py-20 lg:max-w-7xl lg:px-14">
              <div className="grid grid-cols-1 gap-x-14 gap-y-14 md:grid-cols-2 md:gap-x-16 md:gap-y-20">
                {BLOG_POSTS.map((post) => (
                  <article id={post.slug} key={post.slug}>
                    <Link href={`/blog/${post.slug}`} className="group block">
                      <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-200">
                        <BlogCardImg
                          src={post.image}
                          alt={post.title}
                          className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                        />
                      </div>
                      <p className="mt-4 text-[18px] font-normal text-neutral-500">
                        {post.date}
                      </p>
                      <h2 className="font-share mt-2 text-left text-[20px] font-semibold leading-snug text-neutral-900">
                        {post.title}
                      </h2>
                      <span className="mt-4 inline-block text-left text-[18px] font-normal text-neutral-600 transition group-hover:text-neutral-900">
                        Continue Reading
                      </span>
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          </main>

          <section
            className="relative min-h-[260px] overflow-hidden border-y border-slate-200/90 md:min-h-[300px]"
            aria-label="Services call to action"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={CTA_BG}
              alt=""
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover opacity-[0.18] blur-[1px] saturate-75"
              aria-hidden
              onError={(e) => {
                const el = e.currentTarget;
                if (el.src && !el.src.includes("photo-fallback.svg")) {
                  el.src = IMG_FALLBACK;
                }
              }}
            />
            <div
              className="absolute inset-0 bg-gradient-to-br from-slate-100 via-sky-50 to-teal-50/90"
              aria-hidden
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-white/50 via-transparent to-white/40"
              aria-hidden
            />
            <div className="relative z-10 flex flex-col items-center justify-center px-6 py-16 text-center text-[20px] md:py-20">
              <h2 className="font-bold uppercase tracking-wide text-slate-900">
                See our services
              </h2>
              <Link
                href="/services"
                className="mt-8 inline-block border border-slate-800 bg-white/80 px-8 py-2.5 font-semibold uppercase tracking-wide text-slate-900 shadow-sm transition hover:border-teal-700 hover:bg-teal-700 hover:text-white"
              >
                View services
              </Link>
            </div>
          </section>

          <SiteFooter blogListingTypography />
        </div>
      </div>
    </>
  );
}

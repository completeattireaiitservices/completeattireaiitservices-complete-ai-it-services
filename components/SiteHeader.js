import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import { Share } from "next/font/google";
import { ShoppingCart } from "lucide-react";
import { SiteHeaderFallbackCss } from "./CssChunkFallback";
import SiteHeaderSearchButton from "./SiteHeaderSearchButton";

const navFont = Share({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const NAV_DESKTOP = [
  { id: "home", href: "/", label: "Home" },
  { id: "services", href: "/services", label: "Services" },
  { id: "blog", href: "/blog", label: "Blog" },
  { id: "about", href: "/about", label: "About" },
  { id: "contact", href: "/contact-us", label: "Contact us" },
];

const NAV_MOBILE = [
  { id: "home", href: "/", label: "Home" },
  { id: "services", href: "/services", label: "Services" },
  { id: "blog", href: "/blog", label: "Blog" },
  { id: "about", href: "/about", label: "About" },
  { id: "contact", href: "/contact-us", label: "Contact" },
];

/**
 * @param {{ endAction?: "cart" | "search"; activeNav?: string; hideLogo?: boolean }} props
 * Default `endAction` is "search" (site-wide search modal). Use "cart" for the placeholder cart icon.
 */
export default function SiteHeader({ endAction = "search", activeNav, hideLogo = false }) {
  /** Hide logo when prop is true (e.g. blog article pages). */
  const showLogo = !hideLogo;

  return (
    <header
      className={clsx(
        "caits-hdr relative mx-auto flex max-w-7xl flex-wrap items-center gap-3 px-3 py-3 sm:flex-nowrap sm:gap-4 sm:px-5 sm:py-4 md:gap-6 md:px-8",
        showLogo ? "caits-hdr--withLogo justify-between" : "justify-end",
      )}
    >
      <SiteHeaderFallbackCss />
      {showLogo ? (
        <Link
          href="/"
          className="relative block h-[52px] w-[132px] shrink-0 overflow-hidden sm:h-[58px] sm:w-[148px] md:h-[66px] md:w-[166px]"
          aria-label="Complete AI IT Services, home"
        >
          <Image
            src="/complete-ai-it-services-logo.png"
            alt="Complete AI IT Services"
            fill
            unoptimized
            className="object-contain object-left"
            priority
            sizes="(max-width: 768px) 132px, 166px"
          />
        </Link>
      ) : null}

      <nav
        className={`caits-hdr-desktop ${navFont.className} absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 text-[16px] font-normal uppercase tracking-widest text-white/95 md:flex`}
        aria-label="Primary"
      >
        {NAV_DESKTOP.map(({ id, href, label }) => {
          const active = activeNav === id;
          return (
            <Link
              key={id}
              href={href}
              className={clsx(
                "transition",
                active ? "text-white" : "hover:text-white/70",
              )}
            >
              {active && (
                <span className="mr-1.5 font-light text-white/90" aria-hidden>
                  —
                </span>
              )}
              {label}
            </Link>
          );
        })}
      </nav>

      <div
        className={clsx(
          "caits-hdr-tools flex items-center gap-3 md:gap-4",
          !showLogo && "ml-auto",
        )}
      >
        <nav
          className={`caits-hdr-mobile ${navFont.className} flex max-w-[min(100%,calc(100vw-11rem))] flex-wrap items-center justify-end gap-x-2 gap-y-1 text-[12px] font-normal uppercase tracking-wider text-white/90 sm:gap-x-3 sm:text-[14px] md:hidden`}
        >
          {NAV_MOBILE.map(({ id, href, label }) => {
            const active = activeNav === id;
            return (
              <Link
                key={id}
                href={href}
                className={clsx(
                  active ? "text-white" : "hover:text-white/70",
                )}
              >
                {active && (
                  <span className="mr-0.5 font-light opacity-90" aria-hidden>
                    —
                  </span>
                )}
                {label}
              </Link>
            );
          })}
        </nav>
        {endAction === "search" ? (
          <SiteHeaderSearchButton />
        ) : (
          <button
            type="button"
            className="rounded p-2 text-white transition hover:bg-white/10"
            aria-label="Cart"
          >
            <ShoppingCart className="h-5 w-5" strokeWidth={1.75} />
          </button>
        )}
      </div>
    </header>
  );
}

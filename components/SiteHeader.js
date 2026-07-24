"use client";

import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import { Share } from "next/font/google";
import { Menu, ShoppingCart, X } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";
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
  const [menuOpen, setMenuOpen] = useState(false);
  const menuId = useId();
  const headerRef = useRef(null);

  useEffect(() => {
    if (!menuOpen) return undefined;

    const onKeyDown = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    const onPointerDown = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [menuOpen]);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const onChange = () => {
      if (mq.matches) setMenuOpen(false);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <header
      ref={headerRef}
      className={clsx(
        "caits-hdr relative z-40 mx-auto flex max-w-7xl flex-wrap items-center gap-3 px-3 py-3 sm:flex-nowrap sm:gap-4 sm:px-5 sm:py-4 md:gap-6 md:px-8",
        showLogo ? "caits-hdr--withLogo justify-between" : "justify-end",
      )}
    >
      <SiteHeaderFallbackCss />
      {showLogo ? (
        <Link
          href="/"
          className="relative block h-[52px] w-[132px] shrink-0 overflow-hidden sm:h-[58px] sm:w-[148px] md:h-[66px] md:w-[166px]"
          aria-label="Complete AI IT Services, home"
          onClick={() => setMenuOpen(false)}
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
          "caits-hdr-tools flex items-center gap-2 sm:gap-3 md:gap-4",
          !showLogo && "ml-auto",
        )}
      >
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

        <button
          type="button"
          className="caits-hdr-burger inline-flex items-center justify-center rounded p-2 text-white transition hover:bg-white/10 md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls={menuId}
          onClick={() => setMenuOpen((o) => !o)}
        >
          {menuOpen ? (
            <X className="h-6 w-6" strokeWidth={1.75} aria-hidden />
          ) : (
            <Menu className="h-6 w-6" strokeWidth={1.75} aria-hidden />
          )}
        </button>
      </div>

      <nav
        id={menuId}
        className={clsx(
          "caits-hdr-mobile",
          navFont.className,
          "absolute left-0 right-0 top-full z-50 origin-top border-t border-white/10 bg-slate-950/95 px-3 py-4 shadow-xl backdrop-blur-md md:hidden",
          menuOpen ? "block" : "hidden",
        )}
        aria-label="Mobile"
        hidden={!menuOpen}
      >
        <ul className="mx-auto flex max-w-7xl flex-col gap-1">
          {NAV_MOBILE.map(({ id, href, label }) => {
            const active = activeNav === id;
            return (
              <li key={id}>
                <Link
                  href={href}
                  className={clsx(
                    "flex items-center rounded-lg px-3 py-3 text-[15px] font-normal uppercase tracking-widest transition",
                    active
                      ? "bg-white/10 text-white"
                      : "text-white/90 hover:bg-white/5 hover:text-white",
                  )}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setMenuOpen(false)}
                >
                  {active && (
                    <span className="mr-2 font-light text-white/90" aria-hidden>
                      —
                    </span>
                  )}
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

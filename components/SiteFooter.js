import React from "react";
import Link from "next/link";
import clsx from "clsx";

/**
 * @param {{ blogListingTypography?: boolean }} props
 * When true, legal links and copyright use 20px to match the blog index spec.
 */
export default function SiteFooter({ blogListingTypography = false }) {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#1c1c1c] px-4 py-10 text-center sm:px-6">
      <nav
        className={clsx(
          "mb-5 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 font-share text-neutral-400",
          blogListingTypography ? "text-[20px]" : "text-[15px]",
        )}
        aria-label="Legal"
      >
        <Link
          href="/legal/privacy-policy"
          className="underline-offset-2 transition hover:text-white hover:underline"
        >
          Privacy Policy
        </Link>
        <Link
          href="/legal/terms-of-service"
          className="underline-offset-2 transition hover:text-white hover:underline"
        >
          Terms of Service
        </Link>
        <Link
          href="/legal/satisfaction-refund-policy"
          className="underline-offset-2 transition hover:text-white hover:underline"
        >
          Satisfaction &amp; Refund Policy
        </Link>
      </nav>
      <p
        className={clsx(
          "font-normal normal-case tracking-normal text-neutral-400 font-share",
          blogListingTypography ? "text-[20px]" : "text-[16px]",
        )}
        suppressHydrationWarning
      >
        Copyright © {year} Complete AI IT Services - All rights reserved.
      </p>
    </footer>
  );
}

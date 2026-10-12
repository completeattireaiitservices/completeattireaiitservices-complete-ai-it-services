"use client";

import React, { useState } from "react";
import { Search } from "lucide-react";
import SiteSearchModal from "./SiteSearchModal";

export default function SiteHeaderSearchButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg text-white transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/80"
        aria-label="Search the site"
        aria-expanded={open}
        aria-haspopup="dialog"
        onClick={() => setOpen(true)}
      >
        <Search className="h-5 w-5" strokeWidth={1.75} />
      </button>
      <SiteSearchModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}

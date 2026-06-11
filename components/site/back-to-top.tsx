"use client";

import { ArrowUp } from "lucide-react";

export function BackToTop() {
  return (
    <button
      type="button"
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
            ? "auto"
            : "smooth",
        })
      }
      className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 text-xs font-medium uppercase tracking-wider text-fg-subtle transition-colors hover:border-brand-red/50 hover:text-white"
    >
      Back to top
      <ArrowUp className="h-3.5 w-3.5 text-brand-red transition-transform duration-300 group-hover:-translate-y-0.5" />
    </button>
  );
}

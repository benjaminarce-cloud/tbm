"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Mail, Phone, Truck } from "lucide-react";
import { NavLinks } from "./nav-links";
import { MobileNav } from "./mobile-nav";
import { ContactSalesLink, TrackShipmentLink } from "./site-links";
import { OFFICES } from "@/lib/content/site";
import { cn, telHref } from "@/lib/utils";

export function Header() {
  const usPhone = OFFICES[0].phones[0];
  const mxPhone = OFFICES[1].phones[0];
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-[background-color,box-shadow] duration-500",
        scrolled
          ? "bg-brand-indigo/80 shadow-[0_10px_40px_-16px_rgba(0,0,0,0.7)] backdrop-blur-xl backdrop-saturate-150"
          : "bg-brand-indigo/95 backdrop-blur-md"
      )}
    >
      {/* Utility bar — collapses on scroll for a sleeker bar */}
      <div
        className={cn(
          "overflow-hidden border-white/[0.06] bg-brand-indigo-deep/70 transition-all duration-500",
          scrolled ? "max-h-0 opacity-0" : "max-h-12 border-b opacity-100"
        )}
      >
        <div className="mx-auto flex h-9 w-full max-w-screen-2xl items-center gap-6 px-6 text-[11px] text-fg-subtle md:px-12">
          <div className="hidden items-center gap-6 md:flex">
            <a
              href={telHref(usPhone)}
              className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
            >
              <Phone className="h-3 w-3 text-brand-red" aria-hidden="true" />
              <span className="font-semibold tracking-wider">US</span>
              <span className="tabular-nums">{usPhone}</span>
            </a>
            <a
              href={telHref(mxPhone)}
              className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
            >
              <Phone className="h-3 w-3 text-brand-red" aria-hidden="true" />
              <span className="font-semibold tracking-wider">MX</span>
              <span className="tabular-nums">{mxPhone}</span>
            </a>
          </div>
          <ContactSalesLink className="group/cs ml-auto inline-flex items-center gap-1.5 font-medium uppercase tracking-[0.18em] transition-colors hover:text-brand-red">
            <Mail
              className="h-3 w-3 text-brand-red transition-transform duration-300 group-hover/cs:-translate-y-0.5"
              aria-hidden="true"
            />
            Contact Sales
          </ContactSalesLink>
        </div>
      </div>

      {/* Main bar */}
      <div className="relative border-b border-white/10">
        {/* Animated brand hairline that fades in once scrolled */}
        <div
          aria-hidden="true"
          className={cn(
            "pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand-red/70 to-transparent transition-opacity duration-700",
            scrolled ? "opacity-100" : "opacity-0"
          )}
        />
        <div
          className={cn(
            "mx-auto flex w-full max-w-screen-2xl items-center justify-between gap-6 px-6 transition-[height] duration-500 md:px-12",
            scrolled ? "h-14 md:h-16" : "h-16 md:h-20"
          )}
        >
          <Link
            href="/"
            className="flex items-center"
            aria-label="TBM Carriers — home"
          >
            <Image
              src="/brand/TBM-2.png"
              alt="TBM Carriers"
              width={663}
              height={204}
              sizes="(max-width: 768px) 160px, 200px"
              className={cn(
                "w-auto transition-all duration-500",
                scrolled ? "h-8 md:h-9" : "h-9 md:h-11"
              )}
              loading="eager"
              fetchPriority="high"
            />
          </Link>

          <NavLinks />

          <TrackShipmentLink className="shine-hover group/cta hidden h-10 items-center justify-center gap-2 rounded-full border border-white/30 bg-white/[0.04] px-5 text-sm font-medium uppercase tracking-wider text-white transition-colors hover:border-brand-red hover:bg-brand-red md:inline-flex">
            <Truck
              className="h-4 w-4 transition-transform duration-300 group-hover/cta:translate-x-0.5"
              aria-hidden="true"
            />
            Track Shipment
          </TrackShipmentLink>

          <MobileNav />
        </div>
      </div>
    </header>
  );
}

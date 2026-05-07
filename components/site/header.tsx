import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, Truck } from "lucide-react";
import { NavLinks } from "./nav-links";
import { MobileNav } from "./mobile-nav";
import { OFFICES, SITE } from "@/lib/content/site";

export function Header() {
  const usPhone = OFFICES[0].phones[0];
  const mxPhone = OFFICES[1].phones[0];

  return (
    <header className="sticky top-0 z-50 w-full bg-brand-indigo/95 backdrop-blur-md">
      {/* Utility bar */}
      <div className="border-b border-white/[0.06] bg-brand-indigo-deep/70">
        <div className="mx-auto flex h-9 w-full max-w-screen-2xl items-center gap-6 px-6 text-[11px] text-fg-subtle md:px-12">
          <div className="hidden items-center gap-6 md:flex">
            <a
              href={`tel:${usPhone.replace(/\D/g, "")}`}
              className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
            >
              <Phone className="h-3 w-3 text-brand-red" aria-hidden="true" />
              <span className="font-semibold tracking-wider">US</span>
              <span className="tabular-nums">{usPhone}</span>
            </a>
            <a
              href={`tel:${mxPhone.replace(/\D/g, "")}`}
              className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
            >
              <Phone className="h-3 w-3 text-brand-red" aria-hidden="true" />
              <span className="font-semibold tracking-wider">MX</span>
              <span className="tabular-nums">{mxPhone}</span>
            </a>
            <a
              href={`mailto:${SITE.email}`}
              className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
            >
              <Mail className="h-3 w-3 text-brand-red" aria-hidden="true" />
              <span>{SITE.email}</span>
            </a>
          </div>
          <a
            href={SITE.trackingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto inline-flex items-center gap-1.5 font-medium uppercase tracking-[0.18em] transition-colors hover:text-brand-red"
          >
            <Truck className="h-3 w-3 text-brand-red" aria-hidden="true" />
            Track Shipment
          </a>
        </div>
      </div>

      {/* Main bar */}
      <div className="border-b border-white/10">
        <div className="mx-auto flex h-16 w-full max-w-screen-2xl items-center justify-between gap-6 px-6 md:h-20 md:px-12">
          <Link
            href="/"
            className="flex items-center"
            aria-label="TBM Carriers — home"
          >
            <Image
              src="/brand/TBM-2.png"
              alt="TBM Carriers"
              width={1200}
              height={324}
              sizes="(max-width: 768px) 160px, 200px"
              className="h-9 w-auto md:h-11"
              priority
            />
          </Link>

          <NavLinks />

          <Link
            href="/get-a-quote"
            className="hidden h-10 items-center justify-center rounded-full border border-white/30 bg-white/[0.04] px-6 text-sm font-medium uppercase tracking-wider text-white transition-colors hover:border-brand-red hover:bg-brand-red lg:inline-flex"
          >
            Free Quote
          </Link>

          <MobileNav />
        </div>
      </div>
    </header>
  );
}

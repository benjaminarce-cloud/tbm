import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { NavLinks } from "./nav-links";
import { MobileNav } from "./mobile-nav";
import { cn } from "@/lib/utils";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-brand-indigo/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 md:h-20 md:px-8">
        <Link
          href="/"
          className="flex items-center"
          aria-label="TBM Carriers — home"
        >
          <Image
            src="/brand/TBM-Carriers-Logo-1.png"
            alt="TBM Carriers"
            width={160}
            height={56}
            className="h-10 w-auto md:h-12"
            style={{ width: "auto", height: "auto" }}
            priority
          />
        </Link>

        <NavLinks />

        <Link
          href="/get-a-quote"
          className={cn(
            buttonVariants(),
            "hidden h-10 rounded-full px-6 hover:bg-primary/85 lg:inline-flex"
          )}
        >
          Free Quote
        </Link>

        <MobileNav />
      </div>
    </header>
  );
}

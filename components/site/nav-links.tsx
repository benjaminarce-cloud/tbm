"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "@/lib/content/site";
import { cn } from "@/lib/utils";

export function NavLinks() {
  const pathname = usePathname();

  return (
    <nav aria-label="Main" className="hidden lg:flex lg:items-center lg:gap-8 xl:gap-10">
      {NAV_ITEMS.map((item) => {
        const isActive =
          !item.external &&
          (item.href === "/" ? pathname === "/" : pathname.startsWith(item.href));

        const baseClass =
          "text-sm font-medium uppercase tracking-wider transition-colors";

        if (item.external) {
          return (
            <a
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(baseClass, "text-white/85 hover:text-brand-red")}
            >
              {item.label}
            </a>
          );
        }

        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={isActive ? "page" : undefined}
            className={cn(
              baseClass,
              isActive ? "text-brand-red" : "text-white/85 hover:text-brand-red"
            )}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "@/lib/content/site";
import { cn } from "@/lib/utils";

export function NavLinks() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Main"
      className="hidden lg:flex lg:items-center lg:gap-7 xl:gap-9"
    >
      {NAV_ITEMS.map((item) => {
        const isActive =
          !item.external &&
          (item.href === "/" ? pathname === "/" : pathname.startsWith(item.href));

        const baseClass =
          "group/nav relative py-1.5 text-sm font-medium uppercase tracking-wider transition-colors duration-200";

        const underline = (
          <span
            aria-hidden="true"
            className={cn(
              "absolute inset-x-0 -bottom-0.5 h-0.5 origin-left rounded-full bg-gradient-to-r from-brand-red to-[#ff8a6e] transition-transform duration-300 ease-out",
              isActive ? "scale-x-100" : "scale-x-0 group-hover/nav:scale-x-100"
            )}
          />
        );

        if (item.external) {
          return (
            <a
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(baseClass, "text-white/85 hover:text-white")}
            >
              {item.label}
              {underline}
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
              isActive ? "text-white" : "text-white/85 hover:text-white"
            )}
          >
            {item.label}
            {underline}
          </Link>
        );
      })}
    </nav>
  );
}

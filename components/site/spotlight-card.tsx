"use client";

import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type SpotlightCardProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "li" | "article";
  /** CSS color for the spotlight glow. Defaults to brand red. */
  glow?: string;
  /** Spotlight radius. Default 360px. */
  radius?: number;
};

/**
 * Card surface with a pointer-following radial spotlight and a top highlight
 * line that lights up on hover. No state — just CSS custom properties updated
 * on pointer move, so it stays cheap and React-Compiler friendly.
 */
export function SpotlightCard({
  children,
  className,
  as = "div",
  glow = "color-mix(in oklab, var(--color-brand-red) 22%, transparent)",
  radius = 360,
}: SpotlightCardProps) {
  const ref = useRef<HTMLElement>(null);
  const Tag = as;

  function handlePointerMove(event: React.PointerEvent<HTMLElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    el.style.setProperty("--my", `${event.clientY - rect.top}px`);
  }

  return (
    <Tag
      // @ts-expect-error — ref type narrows per tag but is structurally fine
      ref={ref}
      onPointerMove={handlePointerMove}
      className={cn("group/spot relative overflow-hidden", className)}
    >
      {/* Pointer-following spotlight */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-0 opacity-0 transition-opacity duration-300 group-hover/spot:opacity-100"
        style={{
          background: `radial-gradient(${radius}px circle at var(--mx, 50%) var(--my, 0%), ${glow}, transparent 62%)`,
        }}
      />
      {/* Top highlight line */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-red/50 to-transparent opacity-0 transition-opacity duration-300 group-hover/spot:opacity-100"
      />
      <div className="relative z-10 flex h-full flex-col">{children}</div>
    </Tag>
  );
}

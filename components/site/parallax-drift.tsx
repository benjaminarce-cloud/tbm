"use client";

import { useRef, type ReactNode } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { cn } from "@/lib/utils";

type ParallaxDriftProps = {
  children: ReactNode;
  /** Position in the row — even indices drift down→up, odd up→down */
  index?: number;
  /** Max drift in px (default 22) */
  amount?: number;
  className?: string;
};

/**
 * Subtle scroll-linked drift for cards in a row: alternating columns travel
 * in opposite directions as the row passes through the viewport, so grids
 * feel alive without pinning. Desktop-only (mobile rows are snap carousels);
 * disabled under reduced motion.
 */
export function ParallaxDrift({
  children,
  index = 0,
  amount = 22,
  className,
}: ParallaxDriftProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const dir = index % 2 === 0 ? 1 : -1;
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [amount * dir, -amount * dir]
  );

  if (reduce) {
    return <div className={cn("h-full", className)}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      data-drift
      style={{ y }}
      className={cn("h-full max-md:transform-none!", className)}
    >
      {children}
    </motion.div>
  );
}

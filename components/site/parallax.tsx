"use client";

import { useRef, type ReactNode } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { cn } from "@/lib/utils";

type ParallaxLayerProps = {
  children: ReactNode;
  /** Total vertical drift in px across the scroll range (default 48) */
  amount?: number;
  /**
   * Overscale so the drifting layer never reveals container edges.
   * Default 1.15 — pair with an `overflow-hidden` parent.
   */
  scale?: number;
  className?: string;
};

/**
 * Scroll-linked parallax for imagery. Place inside a `relative overflow-hidden`
 * box; the layer drifts as the box moves through the viewport. Never wrap
 * sticky/fixed content (the transform creates a containing block).
 */
export function ParallaxLayer({
  children,
  amount = 48,
  scale = 1.15,
  className,
}: ParallaxLayerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-amount, amount]);

  if (reduce) {
    return (
      <div ref={ref} className={cn("absolute inset-0", className)}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      style={{ y, scale }}
      className={cn("absolute inset-0 will-change-transform", className)}
    >
      {children}
    </motion.div>
  );
}

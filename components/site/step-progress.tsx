"use client";

import { useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
} from "motion/react";
import { cn } from "@/lib/utils";

/**
 * A thin progress rail under a row of process steps: the brand line draws
 * left→right as the row scrolls through view, lighting a dot per step.
 * Desktop-only flourish; static under reduced motion.
 */
export function StepProgress({
  steps,
  className,
}: {
  steps: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const [lit, setLit] = useState(0);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.92", "start 0.45"],
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    let count = 0;
    for (let i = 0; i < steps; i++) {
      if (v >= (i + 0.5) / steps) count = i + 1;
    }
    setLit(count);
  });

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={cn("relative hidden h-px bg-white/10 md:block", className)}
    >
      <motion.div
        style={{ scaleX: reduce ? 1 : scaleX }}
        className="absolute inset-0 origin-left bg-gradient-to-r from-brand-red via-[#ff8a6e] to-brand-red"
      />
      {Array.from({ length: steps }, (_, i) => {
        const left = ((i + 0.5) / steps) * 100;
        const on = reduce || i < lit;
        return (
          <span
            key={i}
            style={{ left: `${left}%` }}
            className={cn(
              "absolute top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 transition-all duration-500",
              on
                ? "border-brand-red bg-brand-red shadow-[0_0_12px_2px_rgba(228,67,46,0.5)]"
                : "border-white/25 bg-brand-indigo"
            )}
          />
        );
      })}
    </div>
  );
}

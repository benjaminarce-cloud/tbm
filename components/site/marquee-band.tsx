"use client";

import { useRef } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "motion/react";
import { useContent } from "@/lib/i18n-client";
import { cn } from "@/lib/utils";

type MarqueeBandProps = {
  words: readonly string[];
  className?: string;
  /** Base drift in %/s of one content copy. Default 4.5. */
  baseSpeed?: number;
};

function wrapRange(min: number, max: number, v: number) {
  const range = max - min;
  return ((((v - min) % range) + range) % range) + min;
}

/**
 * Kinetic typography strip that reacts to scrolling: it drifts on its own,
 * accelerates with scroll velocity, and follows the scroll direction.
 * Reduced motion renders the strip static.
 */
export function MarqueeBand({ words, className, baseSpeed = 4.5 }: MarqueeBandProps) {
  const reduce = useReducedMotion();
  const { ui } = useContent();
  const items = [...words, ...words];

  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const velocity = useVelocity(scrollY);
  const smooth = useSpring(velocity, { damping: 50, stiffness: 380 });
  const boost = useTransform(smooth, [-1400, 0, 1400], [-4, 0, 4], {
    clamp: false,
  });

  const dirRef = useRef(1);

  useAnimationFrame((_, delta) => {
    if (reduce) return;
    const b = boost.get();
    if (b < -0.1) dirRef.current = -1;
    else if (b > 0.1) dirRef.current = 1;
    const move =
      dirRef.current * baseSpeed * (delta / 1000) * (1 + Math.abs(b));
    baseX.set(wrapRange(-50, 0, baseX.get() - move));
  });

  const x = useTransform(baseX, (v) => `${v}%`);

  return (
    <section
      aria-label={ui.highlights}
      className={cn(
        "relative isolate overflow-hidden border-y border-white/10 bg-brand-indigo-deep py-5 md:py-6",
        "[mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]",
        className
      )}
    >
      <motion.div
        style={reduce ? undefined : { x }}
        className="flex w-max items-center gap-8 md:gap-12"
      >
        {items.map((w, i) => (
          <span
            key={`${w}-${i}`}
            aria-hidden={i >= words.length}
            className="flex shrink-0 items-center gap-8 md:gap-12"
          >
            <span className="font-heading text-2xl font-extrabold uppercase tracking-wider text-white/90 md:text-4xl">
              {w}
            </span>
            <span
              aria-hidden="true"
              className="h-2 w-2 rounded-full bg-brand-red md:h-2.5 md:w-2.5"
            />
          </span>
        ))}
      </motion.div>
    </section>
  );
}

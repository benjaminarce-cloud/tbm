"use client";

import { Fragment } from "react";
import { motion, useReducedMotion, type Variants } from "motion/react";

type Tag = "h1" | "h2" | "h3" | "p" | "span";

type TextRevealProps = {
  text: string;
  as?: Tag;
  className?: string;
  /** Delay before the first word, in seconds */
  delay?: number;
  /** Per-word stagger, in seconds */
  stagger?: number;
};

const MOTION_TAGS = {
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  p: motion.p,
  span: motion.span,
} as const;

const word: Variants = {
  hidden: { opacity: 0, y: "0.6em", filter: "blur(8px)" },
  shown: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  },
};

/**
 * Scroll-triggered headline reveal: words rise, unblur, and settle with a
 * stagger. Text stays in the DOM as real words (SEO/AT friendly).
 */
export function TextReveal({
  text,
  as = "h2",
  className,
  delay = 0,
  stagger = 0.045,
}: TextRevealProps) {
  const reduce = useReducedMotion();
  const Plain = as;

  if (reduce) {
    return <Plain className={className}>{text}</Plain>;
  }

  const MotionTag = MOTION_TAGS[as];
  const words = text.split(" ");

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="shown"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ staggerChildren: stagger, delayChildren: delay }}
      aria-label={text}
    >
      {words.map((w, i) => (
        <Fragment key={`${w}-${i}`}>
          <motion.span
            variants={word}
            className="inline-block will-change-transform"
            aria-hidden="true"
          >
            {w}
          </motion.span>
          {i < words.length - 1 ? " " : null}
        </Fragment>
      ))}
    </MotionTag>
  );
}

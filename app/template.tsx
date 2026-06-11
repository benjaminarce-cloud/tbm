"use client";

import { motion, useReducedMotion } from "motion/react";
import { type ReactNode } from "react";

/**
 * Route-change transition. `template.tsx` remounts on every navigation, so a
 * simple enter animation plays per route — no AnimatePresence needed.
 *
 * Intentionally opacity-only: a transform/filter on this wrapper would create a
 * CSS containing block and break the `lg:sticky` sidebars used on several pages
 * (compliance, legal). The richer per-element motion comes from the
 * scroll-triggered <Reveal> components, which re-fire on each mount.
 */
export default function Template({ children }: { children: ReactNode }) {
  const reduce = useReducedMotion();

  if (reduce) return <>{children}</>;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-1 flex-col"
    >
      {children}
    </motion.div>
  );
}

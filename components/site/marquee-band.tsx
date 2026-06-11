import { cn } from "@/lib/utils";

type MarqueeBandProps = {
  words: readonly string[];
  className?: string;
  /** One full loop duration. Default "32s". */
  speed?: string;
};

/**
 * Kinetic typography strip — oversized uppercase claims scrolling on a dark
 * band. CSS-only (reuses the marquee keyframes), pauses on hover, disabled
 * under prefers-reduced-motion via globals.css.
 */
export function MarqueeBand({ words, className, speed = "32s" }: MarqueeBandProps) {
  const items = [...words, ...words];

  return (
    <section
      aria-label="TBM highlights"
      className={cn(
        "group relative isolate overflow-hidden border-y border-white/10 bg-brand-indigo-deep py-5 md:py-6",
        "[mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]",
        className
      )}
    >
      <div
        className="flex w-max items-center gap-8 animate-marquee group-hover:[animation-play-state:paused] md:gap-12"
        style={{ ["--marquee-duration" as string]: speed }}
      >
        {items.map((w, i) => (
          <span
            key={`${w}-${i}`}
            aria-hidden={i >= words.length}
            className="flex shrink-0 items-center gap-8 md:gap-12"
          >
            <span className="font-display text-2xl font-extrabold uppercase tracking-wider text-white/90 md:text-4xl">
              {w}
            </span>
            <span
              aria-hidden="true"
              className="h-2 w-2 rounded-full bg-brand-red md:h-2.5 md:w-2.5"
            />
          </span>
        ))}
      </div>
    </section>
  );
}

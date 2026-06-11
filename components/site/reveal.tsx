"use client";

import {
  motion,
  useReducedMotion,
  type HTMLMotionProps,
  type Variants,
} from "motion/react";
import { type ReactNode } from "react";

type RevealVariant = "up" | "down" | "left" | "right" | "scale" | "fade" | "blur";

type RevealProps = {
  children: ReactNode;
  /** Delay in seconds before animation starts */
  delay?: number;
  /** Travel distance in px for directional/up variants (default 24) */
  y?: number;
  /** Entrance style (default "up") */
  variant?: RevealVariant;
  /** Add a brief blur-in on top of the chosen variant */
  blur?: boolean;
  /** Fraction of the element that must be visible to trigger (default 0.2) */
  amount?: number;
  className?: string;
  as?: "div" | "section" | "li" | "ol" | "ul" | "span";
} & Pick<HTMLMotionProps<"div">, "id" | "role" | "aria-label">;

const EASING = [0.16, 1, 0.3, 1] as const;

function buildVariants(variant: RevealVariant, dist: number, blur: boolean): Variants {
  const hidden: Record<string, number> = { opacity: 0 };
  const shown: Record<string, number> = { opacity: 1 };

  switch (variant) {
    case "up":
      hidden.y = dist;
      shown.y = 0;
      break;
    case "down":
      hidden.y = -dist;
      shown.y = 0;
      break;
    case "left":
      hidden.x = dist;
      shown.x = 0;
      break;
    case "right":
      hidden.x = -dist;
      shown.x = 0;
      break;
    case "scale":
      hidden.scale = 0.92;
      shown.scale = 1;
      break;
    case "fade":
    case "blur":
      break;
  }

  if (blur || variant === "blur") {
    hidden.filter = "blur(12px)" as unknown as number;
    shown.filter = "blur(0px)" as unknown as number;
  }

  return { hidden, shown };
}

export function Reveal({
  children,
  delay = 0,
  y = 24,
  variant = "up",
  blur = false,
  amount = 0.2,
  className,
  as = "div",
  ...rest
}: RevealProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    const Tag = as;
    return (
      <Tag className={className} {...rest}>
        {children}
      </Tag>
    );
  }

  const Comp = motion[as];
  const variants = buildVariants(variant, y, blur);

  return (
    <Comp
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="shown"
      viewport={{ once: true, amount }}
      transition={{ duration: 0.7, delay, ease: EASING }}
      {...rest}
    >
      {children}
    </Comp>
  );
}

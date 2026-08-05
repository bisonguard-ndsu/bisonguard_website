"use client";

import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Seconds to wait before animating — use to stagger siblings. */
  delay?: number;
  /** Distance in px the element travels on the way in. */
  y?: number;
  className?: string;
  /** Render as a different element when the parent needs a semantic child. */
  as?: "div" | "li" | "section";
};

/**
 * Scroll-triggered reveal. Replaces the repeated
 * `useRef` + `useInView` + `motion.div` boilerplate across sections so every
 * section eases identically.
 *
 * Animation is deliberately not disabled here for reduced-motion users — the
 * global `prefers-reduced-motion` rule in globals.css collapses the duration,
 * which leaves the element at its final opacity rather than stuck at 0.
 */
export default function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
  as = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const MotionTag = motion[as];

  return (
    <MotionTag
      // @ts-expect-error — ref type varies with the polymorphic `as` tag
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}

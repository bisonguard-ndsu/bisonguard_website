"use client";

import { animate, motion, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export const EASE = [0.22, 1, 0.36, 1] as const;

/** Fades content up a short distance, once, when it scrolls into view. */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 16,
  as = "div",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  as?: "div" | "li" | "section" | "article";
}) {
  const reduce = useReducedMotion();
  const M = motion[as];
  return (
    <M
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay, ease: EASE }}
    >
      {children}
    </M>
  );
}

/** A heading that fades up with its section. */
export function Heading({
  as = "h2",
  text,
  className,
  delay = 0,
  inView = true,
}: {
  as?: "h1" | "h2" | "h3";
  text: string;
  className?: string;
  delay?: number;
  inView?: boolean;
}) {
  const reduce = useReducedMotion();
  const M = motion[as];
  const from = reduce ? false : { opacity: 0, y: 14 };
  const to = { opacity: 1, y: 0 };
  const transition = { duration: 0.65, delay, ease: EASE };
  return inView ? (
    <M className={className} initial={from} whileInView={to} viewport={{ once: true, amount: 0.3 }} transition={transition}>
      {text}
    </M>
  ) : (
    <M className={className} initial={from} animate={to} transition={transition}>
      {text}
    </M>
  );
}

/** Counts up to a figure such as "2,267", "27,000+" or "5" once it is on screen. */
export function CountUp({ value, className }: { value: string; className?: string }) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const seen = useInView(ref, { once: true, amount: 0.6 });
  const m = value.match(/^([^\d]*)([\d,.]+)(.*)$/);
  const target = m ? parseFloat(m[2].replace(/,/g, "")) : NaN;
  const [shown, setShown] = useState(reduce || isNaN(target) ? value : `${m![1]}0${m![3]}`);

  useEffect(() => {
    if (!seen || reduce || isNaN(target) || !m) return;
    const controls = animate(0, target, {
      duration: 1.2,
      ease: EASE,
      onUpdate: (v) => setShown(`${m[1]}${Math.round(v).toLocaleString("en-US")}${m[3]}`),
    });
    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [seen]);

  return (
    <span ref={ref} className={cn("tabular-nums", className)} aria-label={value}>
      <span aria-hidden>{shown}</span>
    </span>
  );
}

/** A photo that fades in and settles from a slight zoom. */
export function ImageReveal({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={cn("overflow-clip", className)}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
    >
      <motion.div
        className="relative h-full w-full"
        initial={{ scale: 1.05 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 1.6, delay, ease: EASE }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

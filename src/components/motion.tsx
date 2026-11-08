"use client";

import { animate, motion, useInView, useReducedMotion } from "motion/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export const EXPO = [0.16, 1, 0.3, 1] as const;
export const WIPE_EASE = [0.77, 0, 0.175, 1] as const;

/** Fades and lifts its content in once, the first time it scrolls into view. */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 28,
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
      initial={reduce ? false : { opacity: 0, y, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.9, delay, ease: EXPO }}
    >
      {children}
    </M>
  );
}

/** Headline whose words rise out of a mask one after another; the accent phrase gets the brand gradient. */
export function WordRise({
  as = "h2",
  text,
  accent,
  className,
  delay = 0,
  inView = false,
}: {
  as?: "h1" | "h2" | "h3";
  text: string;
  accent?: string;
  className?: string;
  delay?: number;
  /** Wait until scrolled into view instead of animating on mount */
  inView?: boolean;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLHeadingElement>(null);
  const seen = useInView(ref, { once: true, amount: 0.4 });
  const go = !inView || seen;
  const Tag = as;
  const cut = accent && text.endsWith(accent) ? text.length - accent.length : text.length;
  const words = [
    ...text.slice(0, cut).split(" ").filter(Boolean).map((w) => ({ w, a: false })),
    ...text.slice(cut).split(" ").filter(Boolean).map((w) => ({ w, a: true })),
  ];
  return (
    <Tag ref={ref} aria-label={text} className={className}>
      {words.map(({ w, a }, i) => (
        <Fragment key={i}>
          <span aria-hidden className="-mb-[0.12em] inline-block overflow-clip pb-[0.12em] align-top">
            <motion.span
              className={cn("inline-block", a && "text-gradient")}
              initial={reduce ? false : { y: "110%", rotate: 4 }}
              animate={go ? { y: "0%", rotate: 0 } : undefined}
              transition={{ duration: 0.9, delay: delay + i * 0.055, ease: EXPO }}
            >
              {w}
            </motion.span>
          </span>
          {i < words.length - 1 && " "}
        </Fragment>
      ))}
    </Tag>
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
      duration: 1.6,
      ease: EXPO,
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

/**
 * A photo uncovered by a sideways wipe with a teal scan line on its edge — the
 * site's signature reveal. Runs on mount, or when scrolled into view.
 */
export function ScanReveal({
  children,
  className,
  inView = true,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  inView?: boolean;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const seen = useInView(ref, { once: true, amount: 0.25 });
  const go = !inView || seen;
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <div ref={ref} className={cn("relative", className)}>
      <motion.div
        className="absolute inset-0"
        initial={{ clipPath: "inset(0% 0% 0% 100%)" }}
        animate={go ? { clipPath: "inset(0% 0% 0% 0%)" } : undefined}
        transition={{ duration: 1.2, delay, ease: WIPE_EASE }}
      >
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.15 }}
          animate={go ? { scale: 1 } : undefined}
          transition={{ duration: 2.2, delay, ease: EXPO }}
        >
          {children}
        </motion.div>
      </motion.div>
      <motion.span
        aria-hidden
        className="pointer-events-none absolute inset-y-0 z-[1] w-px bg-primary-strong shadow-[0_0_18px_3px_var(--color-primary)]"
        initial={{ left: "100%", opacity: 0 }}
        animate={go ? { left: "0%", opacity: [0, 1, 1, 0] } : undefined}
        transition={{ left: { duration: 1.2, delay, ease: WIPE_EASE }, opacity: { duration: 1.45, delay, times: [0, 0.05, 0.8, 1] } }}
      />
    </div>
  );
}

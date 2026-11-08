"use client";

import { animate, motion, useInView, useReducedMotion, useScroll, useTransform, type MotionValue } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export const EXPO = [0.16, 1, 0.3, 1] as const;
export const EASE = [0.22, 1, 0.36, 1] as const;

/** Fades its content in with a short rise, the first time it scrolls into view. */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 24,
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
      transition={{ duration: 0.8, delay, ease: EASE }}
    >
      {children}
    </M>
  );
}

/**
 * A heading that fades up as one block when it enters the viewport.
 * (`accent` is accepted for older call sites and ignored: headlines are one colour.)
 */
export function WordRise({
  as = "h2",
  text,
  className,
  delay = 0,
  inView = false,
}: {
  as?: "h1" | "h2" | "h3";
  text: string;
  accent?: string;
  className?: string;
  delay?: number;
  inView?: boolean;
}) {
  const reduce = useReducedMotion();
  const M = motion[as];
  const from = reduce ? false : { opacity: 0, y: 20 };
  const to = { opacity: 1, y: 0 };
  const t = { duration: 0.85, delay, ease: EASE };
  return inView ? (
    <M className={className} initial={from} whileInView={to} viewport={{ once: true, amount: 0.5 }} transition={t}>
      {text}
    </M>
  ) : (
    <M className={className} initial={from} animate={to} transition={t}>
      {text}
    </M>
  );
}

/** A statement whose words go from faint to full ink as the reader scrolls through it. */
export function ScrollText({ text, className, as = "p" }: { text: string; className?: string; as?: "p" | "h2" }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.45"] });
  const words = text.split(" ");
  const Tag = as;
  if (reduce) return <Tag className={className}>{text}</Tag>;
  return (
    <Tag ref={ref} className={className} aria-label={text}>
      {words.map((w, i) => (
        <Word key={i} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]}>
          {w}
          {i < words.length - 1 ? " " : ""}
        </Word>
      ))}
    </Tag>
  );
}

function Word({ children, progress, range }: { children: React.ReactNode; progress: MotionValue<number>; range: [number, number] }) {
  const opacity = useTransform(progress, range, [0.18, 1]);
  return (
    <motion.span aria-hidden style={{ opacity }}>
      {children}
    </motion.span>
  );
}

/** Moves its child slower than the page, for depth. The child should be larger than the frame. */
export function Parallax({ children, className, amount = 12 }: { children: React.ReactNode; className?: string; amount?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [`-${amount}%`, `${amount}%`]);
  return (
    <div ref={ref} className={cn("relative overflow-clip", className)}>
      <motion.div className="absolute -inset-y-[15%] inset-x-0" style={reduce ? undefined : { y }}>
        {children}
      </motion.div>
    </div>
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
 * A full-bleed photo for page openings: fades in and settles from a slight zoom,
 * then drifts with the scroll while the page moves over it.
 */
export function ScanReveal({ children, className }: { children: React.ReactNode; className?: string; inView?: boolean; delay?: number }) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <div ref={ref} className={cn("overflow-clip", className)}>
      <motion.div className="absolute inset-0" style={{ y }}>
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ opacity: { duration: 0.9 }, scale: { duration: 2.4, ease: EXPO } }}
        >
          {children}
        </motion.div>
      </motion.div>
    </div>
  );
}

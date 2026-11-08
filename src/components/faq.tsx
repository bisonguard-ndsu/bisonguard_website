"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Plus } from "lucide-react";
import { useId, useState } from "react";
import type { Faq } from "@/content/faqs";
import { cn } from "@/lib/utils";

/** Ruled accordion of questions; several can be open at once. */
export function FaqList({ items, className, defaultOpen = 0 }: { items: Faq[]; className?: string; defaultOpen?: number | null }) {
  const [open, setOpen] = useState<Set<number>>(() => new Set(defaultOpen === null ? [] : [defaultOpen]));
  const reduce = useReducedMotion();
  const base = useId();
  const toggle = (i: number) =>
    setOpen((cur) => {
      const next = new Set(cur);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });

  return (
    <ul className={cn("border-t border-line", className)}>
      {items.map((f, i) => {
        const isOpen = open.has(i);
        const id = `${base}-${i}`;
        return (
          <li key={f.q} className="border-b border-line">
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={id}
                onClick={() => toggle(i)}
                className="group flex w-full cursor-pointer items-start justify-between gap-6 py-6 text-left"
              >
                <span className="font-display text-[1.125rem] leading-snug font-medium tracking-[-0.02em] text-fg transition-colors group-hover:text-primary sm:text-[1.25rem]">
                  {f.q}
                </span>
                <Plus
                  size={20}
                  aria-hidden
                  className={cn("mt-1 shrink-0 text-fg-3 transition-transform duration-300 group-hover:text-primary", isOpen && "rotate-45 text-primary")}
                />
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={id}
                  role="region"
                  initial={reduce ? false : { height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={reduce ? undefined : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="max-w-[62ch] pb-7 text-[1rem] leading-relaxed text-fg-2">{f.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        );
      })}
    </ul>
  );
}

/** FAQPage structured data for search engines */
export function FaqJsonLd({ items }: { items: Faq[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

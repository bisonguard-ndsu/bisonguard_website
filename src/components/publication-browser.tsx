"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useMemo, useState } from "react";
import { EXPO } from "@/components/motion";
import { venueShort, type Area, type Publication } from "@/content/publications";
import { cn } from "@/lib/utils";

const areaLabel: Record<Area | "all", string> = {
  all: "All",
  pavement: "Pavement analysis",
  "traffic-safety": "Traffic safety",
  multimodal: "Multimodal AI",
  mobility: "Mobility",
};

export default function PublicationBrowser({ items }: { items: Publication[] }) {
  const reduce = useReducedMotion();
  const [area, setArea] = useState<Area | "all">("all");
  const [q, setQ] = useState("");
  const shown = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return items
      .filter((p) => area === "all" || p.areas.includes(area))
      .filter((p) => !needle || `${p.title} ${p.authors} ${p.venue}`.toLowerCase().includes(needle))
      .sort((a, b) => (b.year ?? 0) - (a.year ?? 0));
  }, [items, area, q]);

  return (
    <div>
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by research area">
          {(Object.keys(areaLabel) as (Area | "all")[]).map((a) => {
            const count = a === "all" ? items.length : items.filter((p) => p.areas.includes(a)).length;
            const on = a === area;
            return (
              <button
                key={a}
                type="button"
                aria-pressed={on}
                onClick={() => setArea(a)}
                className={cn(
                  "cursor-pointer rounded-full border px-4 py-2 text-sm font-medium transition-colors duration-300",
                  on ? "border-primary bg-primary text-primary-ink" : "border-white/15 text-fg-2 hover:border-white/35 hover:text-fg",
                )}
              >
                {areaLabel[a]} <span className={cn("ml-1 font-mono text-xs", on ? "text-primary-ink/70" : "text-fg-3")}>{count}</span>
              </button>
            );
          })}
        </div>
        <label className="relative block lg:w-80">
          <span className="sr-only">Search publications</span>
          <svg viewBox="0 0 16 16" className="pointer-events-none absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 text-fg-3" aria-hidden>
            <circle cx="7" cy="7" r="4.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
            <path d="m10.5 10.5 3 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
          <input
            type="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search title, author or venue"
            className="h-11 w-full rounded-full border border-white/15 bg-surface pr-4 pl-11 text-[0.9375rem] text-fg placeholder:text-fg-3 focus:border-primary focus:outline-none"
          />
        </label>
      </div>

      <p className="mt-8 font-mono text-xs tracking-wide text-fg-3 uppercase" aria-live="polite">
        {shown.length} {shown.length === 1 ? "paper" : "papers"}
      </p>

      <ol className="mt-4 border-t border-white/10">
        <AnimatePresence initial={false} mode="popLayout">
          {shown.map((p) => (
            <motion.li
              key={p.title}
              layout={!reduce}
              initial={reduce ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: EXPO }}
              className="border-b border-white/10"
            >
              <a
                href={p.url ?? undefined}
                target="_blank"
                rel="noopener noreferrer"
                className="group grid gap-x-8 gap-y-2 py-6 transition-colors md:grid-cols-12 md:items-baseline"
              >
                <span className="font-mono text-xs tracking-wide text-fg-3 uppercase md:col-span-2">
                  {venueShort(p.venue)}
                  {p.year ? ` · ${p.year}` : ""}
                </span>
                <span className="md:col-span-9">
                  <span className="block font-display text-[1.1875rem] leading-snug font-medium text-fg transition-colors group-hover:text-primary-strong">
                    {p.title}
                  </span>
                  <span className="mt-1.5 block text-sm text-fg-2">
                    {p.authors} · <span className="italic">{p.venue}</span>
                  </span>
                </span>
                <span className="hidden text-right text-fg-3 transition-[color,transform] duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary-strong md:col-span-1 md:block" aria-hidden>
                  ↗
                </span>
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </motion.li>
          ))}
        </AnimatePresence>
      </ol>
      {shown.length === 0 && <p className="py-10 text-fg-2">No papers match that search.</p>}
    </div>
  );
}

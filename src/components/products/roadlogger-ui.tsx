"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { CloudOff, MapPin, RefreshCw, Send, Wifi } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------------ */
/* One crack, three visits                                                    */

const visits = [
  { n: 1, date: "Sep 23", level: 1, depth: 6.8, length: 32.5, width: 5.2, note: "The side block of the pavement is damaged" },
  { n: 2, date: "Sep 24", level: 3, depth: 9.7, length: 56.5, width: 7.5, note: "The damage has started extending to the roadside" },
  { n: 3, date: "Sep 24", level: 4, depth: 9.98, length: 89, width: 15.56, note: null },
];
const levels = [
  { l: 1, name: "Minor", c: "#34d399" },
  { l: 2, name: "Noticeable", c: "#60a5fa" },
  { l: 3, name: "Moderate", c: "#fbbf24" },
  { l: 4, name: "Severe", c: "#fb923c" },
  { l: 5, name: "Critical", c: "#f87171" },
];
const lvl = (l: number) => levels[l - 1];

const photos = [
  { n: 1, src: "/media/products/roadlogger/visit-1.webp", alt: "The block crack at visit 1: the side block of the pavement beside a blue kerb is damaged" },
  { n: 2, src: "/media/products/roadlogger/visit-2.webp", alt: "The same crack at visit 2: the damage has spread along the kerb towards the roadside" },
];

export function CrackTimeline() {
  const [i, setI] = useState(0);
  const v = visits[i];
  const base = visits[0];
  const rows = [
    { k: "Length", u: "cm", v: v.length, b: base.length },
    { k: "Width", u: "cm", v: v.width, b: base.width },
    { k: "Depth", u: "cm", v: v.depth, b: base.depth },
  ];
  return (
    <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
      <div className="lg:col-span-7">
        <div className="grid grid-cols-2 gap-3">
          {photos.map((p) => {
            const on = p.n === v.n;
            return (
              <div key={p.n} className={cn("relative aspect-[9/14] overflow-clip border bg-deep transition-all duration-500", on ? "border-primary" : "border-line", v.n !== 3 && !on && "opacity-45")}>
                <Image src={p.src} alt={p.alt} fill sizes="(min-width: 1024px) 28vw, 50vw" className="object-cover" />
                <span className="absolute top-3 left-3 bg-black/70 px-2.5 py-1 text-[0.75rem] text-white">
                  Visit {p.n} · {visits[p.n - 1].date}
                </span>
                <span className="absolute right-3 bottom-3 px-2.5 py-1 text-[0.75rem] font-medium text-black" style={{ background: lvl(visits[p.n - 1].level).c }}>
                  L{visits[p.n - 1].level} {lvl(visits[p.n - 1].level).name}
                </span>
              </div>
            );
          })}
        </div>

        <div role="tablist" aria-label="Inspection visits" className="mt-4 grid grid-cols-3 border border-line">
          {visits.map((x, n) => (
            <button
              key={x.n}
              role="tab"
              aria-selected={n === i}
              onClick={() => setI(n)}
              className={cn("relative cursor-pointer border-line px-4 py-4 text-left transition-colors [&:not(:last-child)]:border-r", n === i ? "bg-surface text-fg" : "text-fg-3 hover:text-fg-2")}
            >
              <span className="block text-[0.9375rem] font-medium">Visit {x.n}</span>
              <span className="mt-1 block text-[0.8125rem]">
                {x.date} · L{x.level}
              </span>
              {n === i && <motion.span layoutId="rl-visit" className="absolute inset-x-0 bottom-0 h-0.5 bg-primary" />}
            </button>
          ))}
        </div>
      </div>

      <div className="lg:col-span-5">
        <ul className="border-t border-line">
          {rows.map((r) => {
            const growth = ((r.v - r.b) / r.b) * 100;
            return (
              <li key={r.k} className="flex items-baseline justify-between gap-4 border-b border-line py-4">
                <span className="text-[0.9375rem] text-fg-2">{r.k}</span>
                <span className="flex items-baseline gap-3">
                  <motion.span key={r.v} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="font-display text-[1.75rem] font-semibold text-fg">
                    {r.v}
                  </motion.span>
                  <span className="text-[0.8125rem] text-fg-3">{r.u}</span>
                  <span className={cn("w-16 text-right text-[0.8125rem] tabular-nums", growth > 0 ? "text-orange-400" : "text-fg-3")}>{growth > 0 ? `+${growth.toFixed(0)}%` : "baseline"}</span>
                </span>
              </li>
            );
          })}
        </ul>

        <div className="mt-8">
          <p className="eyebrow">Severity</p>
          <div className="mt-4 grid grid-cols-5 gap-1">
            {levels.map((x) => (
              <div key={x.l} className="relative h-2" style={{ background: x.l <= v.level ? x.c : "var(--color-surface-2)" }} />
            ))}
          </div>
          <div className="mt-2 grid grid-cols-5 gap-1 text-[0.6875rem] text-fg-3">
            {levels.map((x) => (
              <span key={x.l} className={x.l === v.level ? "text-fg" : ""}>
                L{x.l}
              </span>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.p key={v.n} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="mt-8 border-l-2 border-primary pl-4 text-[1rem] leading-relaxed text-fg-2">
            {v.note ? `“${v.note}”` : "Latest inspection: severity raised to Level 4, high priority."}
            <span className="mt-1 block text-[0.8125rem] text-fg-3">Field note, visit {v.n} · dry, sunny</span>
          </motion.p>
        </AnimatePresence>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------------ */
/* Case lifecycle with the cases in the network                               */

const stages = [
  { id: "open", label: "Open / Triaged", text: "Newly detected road defects" },
  { id: "review", label: "Under review", text: "Awaiting engineer triage" },
  { id: "monitoring", label: "Monitoring", text: "Tracking progressive wear" },
  { id: "progress", label: "In progress", text: "Active repairs scheduled" },
  { id: "resolved", label: "Resolved", text: "Repairs verified complete" },
];
const cases = [
  { title: "Pavement defect: Transverse crack", stage: "open", priority: "Medium", date: "Sep 24" },
  { title: "Pavement defect: Block crack", stage: "review", priority: "Medium", date: "Oct 2" },
  { title: "Drainage and water: Clogged drain", stage: "open", priority: "High", date: "Sep 23" },
  { title: "Loose road surface", stage: "open", priority: "Low", date: "Sep 22" },
  { title: "Pavement defect along Broadway", stage: "open", priority: "Medium", date: "Sep 22" },
];
const pri: Record<string, string> = { High: "text-orange-400 border-orange-400/40", Medium: "text-sky-300 border-sky-300/30", Low: "text-fg-3 border-line" };

export function CaseLifecycle() {
  const [stage, setStage] = useState<string | null>(null);
  const shown = stage ? cases.filter((c) => c.stage === stage) : cases;
  return (
    <div>
      <ol className="grid grid-cols-2 gap-px border border-line bg-line lg:grid-cols-5">
        {stages.map((s, n) => {
          const count = cases.filter((c) => c.stage === s.id).length;
          const on = stage === s.id;
          return (
            <li key={s.id} className="bg-bg last:col-span-2 lg:last:col-span-1">
              <button onClick={() => setStage(on ? null : s.id)} aria-pressed={on} className={cn("block h-full w-full cursor-pointer px-5 py-5 text-left transition-colors", on ? "bg-surface" : "hover:bg-surface/50")}>
                <span className="flex items-center justify-between text-[0.75rem] text-fg-3">
                  <span>Stage {n + 1}</span>
                  <span className={cn("h-2 w-2", count ? "bg-primary" : "bg-surface-2")} />
                </span>
                <span className="mt-4 block font-display text-[2rem] leading-none font-semibold text-fg">{count}</span>
                <span className="mt-2 block text-[0.9375rem] font-medium text-fg">{s.label}</span>
                <span className="mt-1 block text-[0.8125rem] text-fg-3">{s.text}</span>
              </button>
            </li>
          );
        })}
      </ol>
      <div className="border-x border-b border-line">
        <div className="flex items-center justify-between border-b border-line px-5 py-3 text-[0.8125rem] text-fg-3">
          <span>{stage ? `${shown.length} in ${stages.find((s) => s.id === stage)!.label.toLowerCase()}` : `All ${cases.length} cases`}</span>
          {stage && (
            <button onClick={() => setStage(null)} className="cursor-pointer text-fg-2 underline underline-offset-4 hover:text-fg">
              Show all
            </button>
          )}
        </div>
        <ul className="min-h-[3.5rem]">
          <AnimatePresence initial={false}>
            {shown.map((c) => (
              <motion.li key={c.title} layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center justify-between gap-4 border-b border-line px-5 py-4 last:border-b-0">
                <span>
                  <span className="block text-[0.9375rem] font-medium text-fg">{c.title}</span>
                  <span className="mt-0.5 block text-[0.8125rem] text-fg-3">
                    {stages.find((s) => s.id === c.stage)!.label} · {c.date}
                  </span>
                </span>
                <span className={cn("border px-2 py-0.5 text-[0.75rem]", pri[c.priority])}>{c.priority}</span>
              </motion.li>
            ))}
          </AnimatePresence>
          {shown.length === 0 && <li className="px-5 py-4 text-[0.9375rem] text-fg-3">No cases at this stage right now.</li>}
        </ul>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------------ */
/* Offline outbox                                                             */

const kinds = ["Pavement defect", "Drainage and water", "Road surface"];

export function OfflineOutbox() {
  const [online, setOnline] = useState(false);
  const [outbox, setOutbox] = useState<{ id: number; kind: string }[]>([{ id: 0, kind: "Pavement defect" }]);
  const [synced, setSynced] = useState<{ id: number; kind: string }[]>([]);
  const [syncing, setSyncing] = useState(false);
  const next = useRef(1);

  useEffect(() => {
    if (!online || outbox.length === 0) return;
    setSyncing(true);
    const t = setTimeout(() => {
      setSynced((s) => [...outbox, ...s].slice(0, 5));
      setOutbox([]);
      setSyncing(false);
    }, 1200);
    return () => clearTimeout(t);
  }, [online, outbox]);

  const log = () => {
    const kind = kinds[next.current % kinds.length];
    setOutbox((o) => [...o, { id: next.current++, kind }]);
  };

  return (
    <div className="grid border border-line lg:grid-cols-2">
      <div className="border-b border-line p-6 lg:border-r lg:border-b-0 lg:p-8">
        <div className="flex items-center justify-between">
          <p className="eyebrow">On the phone</p>
          <button onClick={() => setOnline((o) => !o)} aria-pressed={online} className={cn("flex cursor-pointer items-center gap-2 border px-3 py-1.5 text-[0.8125rem] transition-colors", online ? "border-primary text-primary" : "border-orange-400/50 text-orange-400")}>
            {online ? <Wifi size={14} aria-hidden /> : <CloudOff size={14} aria-hidden />}
            {online ? "Back in coverage" : "No signal"}
          </button>
        </div>
        <button onClick={log} className="btn btn-primary mt-8 w-full cursor-pointer">
          <MapPin size={16} aria-hidden />
          Log an inspection
        </button>
        <p className="mt-8 flex items-center justify-between text-[0.8125rem] text-fg-3">
          <span>Outbox</span>
          <span className="tabular-nums">{outbox.length} waiting</span>
        </p>
        <ul className="mt-3 min-h-[9rem] space-y-2">
          <AnimatePresence>
            {outbox.map((o) => (
              <motion.li key={o.id} layout initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 40 }} className="flex items-center justify-between border border-line bg-deep px-4 py-3 text-[0.875rem] text-fg">
                {o.kind}
                {syncing ? <RefreshCw size={14} className="animate-spin text-primary" aria-label="Syncing" /> : <Send size={14} className="text-fg-3" aria-label="Queued" />}
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
      </div>
      <div className="bg-deep p-6 lg:p-8">
        <p className="eyebrow">In the office</p>
        <p className="mt-8 font-display text-[3rem] leading-none font-semibold text-fg">{synced.length}</p>
        <p className="mt-2 text-[0.875rem] text-fg-3">new cases on the dashboard</p>
        <ul className="mt-8 min-h-[9rem] space-y-2">
          <AnimatePresence initial={false}>
            {synced.map((o) => (
              <motion.li key={o.id} layout initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="flex items-center justify-between border-b border-line py-3 text-[0.875rem] text-fg-2">
                {o.kind}
                <span className="text-[0.75rem] text-primary">Open</span>
              </motion.li>
            ))}
          </AnimatePresence>
          {synced.length === 0 && <li className="py-3 text-[0.875rem] text-fg-3">Nothing yet. Turn the signal back on.</li>}
        </ul>
      </div>
    </div>
  );
}


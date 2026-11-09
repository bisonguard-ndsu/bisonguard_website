"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { Download, Search, TriangleAlert } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const M = "/media/products/bisonguard";

/* ------------------------------------------------------------------------ */
/* Evidence vault: real clips from the recordings page                        */

const clips = [
  { file: "bison_detection_20260621_135609.mp4", when: "Jun 21, 2026 · 08:57", mb: 61 },
  { file: "bison_detection_20260621_094859.mp4", when: "Jun 21, 2026 · 04:50", mb: 44 },
  { file: "bison_detection_20260621_020511.mp4", when: "Jun 20, 2026 · 21:07", mb: 68 },
  { file: "bison_detection_20260620_214622.mp4", when: "Jun 20, 2026 · 16:48", mb: 67 },
  { file: "bison_detection_20260620_173619.mp4", when: "Jun 20, 2026 · 12:38", mb: 67 },
  { file: "bison_detection_20260620_123830.mp4", when: "Jun 20, 2026 · 07:40", mb: 68 },
  { file: "bison_detection_20260620_015020.mp4", when: "Jun 19, 2026 · 20:52", mb: 73 },
  { file: "bison_detection_20260619_210751.mp4", when: "Jun 19, 2026 · 16:09", mb: 70 },
];

export function EvidenceVault() {
  const [i, setI] = useState(5);
  const c = clips[i];
  return (
    <div className="grid gap-6 lg:grid-cols-12 lg:gap-8">
      <div className="lg:col-span-7">
        <div className="relative aspect-[406/222] overflow-clip border border-line bg-black">
          <AnimatePresence initial={false}>
            <motion.div key={i} className="absolute inset-0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
              <Image src={`${M}/clip-${i + 1}.webp`} alt={`A frame from ${c.file}, recorded ${c.when}, with the zone counts drawn on the video`} fill sizes="(min-width: 1024px) 58vw, 100vw" className="object-cover" />
            </motion.div>
          </AnimatePresence>
          <span className="absolute top-3 left-3 flex items-center gap-2 bg-black/70 px-2.5 py-1 text-[0.75rem] font-medium text-white">
            <span className="inline-block h-2 w-2 bg-red-500" aria-hidden /> REC
          </span>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-3 border-x border-b border-line px-5 py-4">
          <div>
            <p className="text-[0.9375rem] font-medium break-all text-fg">{c.file}</p>
            <p className="mt-0.5 text-[0.8125rem] text-fg-3">
              {c.when} · {c.mb} MB
            </p>
          </div>
          <span className="flex items-center gap-2 text-[0.8125rem] text-fg-3">
            <Download size={14} aria-hidden /> Kept in the vault
          </span>
        </div>
      </div>
      <ul className="grid grid-cols-4 gap-2 self-start lg:col-span-5 lg:grid-cols-2 lg:gap-3">
        {clips.map((x, n) => (
          <li key={x.file}>
            <button onClick={() => setI(n)} aria-pressed={n === i} aria-label={`Show ${x.file}`} className={cn("relative block aspect-[406/222] w-full cursor-pointer overflow-clip border transition-all", n === i ? "border-primary" : "border-line opacity-60 hover:opacity-100")}>
              <Image src={`${M}/clip-${n + 1}.webp`} alt="" fill sizes="(min-width: 1024px) 18vw, 25vw" className="object-cover" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ------------------------------------------------------------------------ */
/* Zones on one camera                                                        */

const zones = [
  { id: 1, name: "Zone 1", where: "The open grassland beyond the feeder", count: 0, top: "0%", height: "50.5%", c: "rgba(45,212,191,0.28)", line: "#2dd4bf" },
  { id: 2, name: "Zone 2", where: "The bare ground around the feeder", count: 1, top: "50.5%", height: "49.5%", c: "rgba(245,158,11,0.28)", line: "#f59e0b" },
];

export function ZoneView() {
  const [z, setZ] = useState<number | null>(2);
  return (
    <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
      <div className="relative aspect-[1919/987] overflow-clip border border-line bg-black lg:col-span-8">
        <Image src={`${M}/detection.webp`} alt="A BisonGuard range camera with two zones drawn: the grassland is zone 1 and the ground by the feeder is zone 2, where one animal is detected" fill sizes="(min-width: 1024px) 66vw, 100vw" className="object-cover" />
        {zones.map((x) => (
          <div
            key={x.id}
            aria-hidden
            className="absolute inset-x-0 transition-opacity duration-300"
            style={{ top: x.top, height: x.height, background: x.c, boxShadow: `inset 0 0 0 2px ${x.line}`, opacity: z === x.id ? 1 : 0 }}
          />
        ))}
        <span className="absolute top-3 left-3 bg-black/70 px-2.5 py-1 text-[0.75rem] text-white">Jun 17, 2026 · 08:23 PM</span>
      </div>
      <div className="lg:col-span-4">
        <ul className="border-t border-line">
          {zones.map((x) => (
            <li key={x.id} className="border-b border-line">
              <button
                onMouseEnter={() => setZ(x.id)}
                onFocus={() => setZ(x.id)}
                onClick={() => setZ(z === x.id ? null : x.id)}
                aria-pressed={z === x.id}
                className={cn("flex w-full cursor-pointer items-center justify-between gap-4 py-5 text-left transition-colors", z === x.id ? "text-fg" : "text-fg-2")}
              >
                <span>
                  <span className="flex items-center gap-2.5 text-[1rem] font-medium">
                    <span className="inline-block h-3 w-1" style={{ background: x.line }} />
                    {x.name}
                  </span>
                  <span className="mt-1 block text-[0.875rem] text-fg-3">{x.where}</span>
                </span>
                <span className="font-display text-[2rem] leading-none font-semibold">{x.count}</span>
              </button>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-[0.9375rem] leading-relaxed text-fg-2">Each camera is split into zones, and every detection is counted in the zone where it happened. The counts are drawn on the recording itself.</p>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------------ */
/* Alert desk: the alert list, with the real workflow                         */

type Status = "Active" | "Investigating" | "Resolved";
const seed: { id: string; species: "Bison" | "Turkey" | "Other"; n: number; time: string }[] = [
  { id: "ALR-80851", species: "Bison", n: 1, time: "17:51" },
  { id: "ALR-80850", species: "Other", n: 1, time: "17:36" },
  { id: "ALR-80849", species: "Turkey", n: 1, time: "17:32" },
  { id: "ALR-80848", species: "Turkey", n: 1, time: "17:26" },
  { id: "ALR-80847", species: "Turkey", n: 1, time: "17:25" },
  { id: "ALR-80846", species: "Turkey", n: 2, time: "17:24" },
  { id: "ALR-80845", species: "Turkey", n: 2, time: "17:23" },
  { id: "ALR-80843", species: "Turkey", n: 5, time: "17:21" },
];
const tag: Record<string, string> = { Bison: "border-emerald-400/50 text-emerald-300", Turkey: "border-amber-400/50 text-amber-300", Other: "border-red-400/50 text-red-300" };
const statusTone: Record<Status, string> = { Active: "text-red-300 border-red-400/40", Investigating: "text-sky-300 border-sky-300/40", Resolved: "text-emerald-300 border-emerald-400/40" };

export function AlertDesk() {
  const [status, setStatus] = useState<Record<string, Status>>(() => Object.fromEntries(seed.map((a) => [a.id, "Active" as Status])));
  const [filter, setFilter] = useState<"All" | Status>("All");
  const [q, setQ] = useState("");
  const count = (s: Status) => Object.values(status).filter((x) => x === s).length;
  const shown = seed.filter((a) => (filter === "All" || status[a.id] === filter) && (q === "" || `${a.species} ${a.id}`.toLowerCase().includes(q.toLowerCase())));
  const advance = (id: string) => setStatus((s) => ({ ...s, [id]: s[id] === "Active" ? "Investigating" : "Resolved" }));
  const resolved = count("Resolved");

  return (
    <div className="border border-line bg-bg">
      <div className="grid grid-cols-2 border-b border-line sm:grid-cols-4">
        {[
          { k: "Active", v: count("Active") },
          { k: "Investigating", v: count("Investigating") },
          { k: "Resolved", v: resolved },
          { k: "Resolution rate", v: `${Math.round((resolved / seed.length) * 100)}%` },
        ].map((x, n) => (
          <div key={x.k} className={cn("border-line px-5 py-4", n % 2 === 0 && "border-r", n < 2 && "border-b sm:border-b-0", n === 1 && "sm:border-r", n === 2 && "sm:border-r")}>
            <p className="text-[0.6875rem] tracking-[0.14em] text-fg-3 uppercase">{x.k}</p>
            <p className="mt-1 font-display text-[1.75rem] leading-tight font-semibold text-fg">{x.v}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap items-center gap-3 border-b border-line px-5 py-3">
        <label className="flex min-w-48 flex-1 items-center gap-2 text-fg-3">
          <Search size={15} aria-hidden />
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search alerts" aria-label="Search alerts" className="w-full bg-transparent py-1.5 text-[0.9375rem] text-fg outline-none placeholder:text-fg-3" />
        </label>
        <div className="flex gap-1">
          {(["All", "Active", "Investigating", "Resolved"] as const).map((f) => (
            <button key={f} onClick={() => setFilter(f)} aria-pressed={filter === f} className={cn("cursor-pointer px-3 py-1.5 text-[0.8125rem] transition-colors", filter === f ? "bg-surface text-fg" : "text-fg-3 hover:text-fg-2")}>
              {f}
            </button>
          ))}
        </div>
      </div>
      <ul className="min-h-[20rem]">
        {shown.map((a) => (
            <motion.li key={a.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-wrap items-center gap-x-5 gap-y-2 border-b border-line px-5 py-3.5">
              <TriangleAlert size={16} className="text-red-400" aria-hidden />
              <span className="min-w-44 flex-1">
                <span className="block text-[0.9375rem] font-medium text-fg">
                  {a.species} detected: {a.n}
                </span>
                <span className="mt-0.5 flex items-center gap-2 text-[0.75rem] text-fg-3">
                  #{a.id}
                  <span className={cn("border px-1.5 text-[0.6875rem] uppercase", tag[a.species])}>{a.species}</span>
                </span>
              </span>
              <span className="border border-red-400/40 px-2 py-0.5 text-[0.75rem] text-red-300">High</span>
              <span className={cn("w-28 border px-2 py-0.5 text-center text-[0.75rem]", statusTone[status[a.id]])}>{status[a.id]}</span>
              <span className="w-20 text-[0.8125rem] text-fg-3 tabular-nums">Nov 8 · {a.time}</span>
              <button
                onClick={() => advance(a.id)}
                disabled={status[a.id] === "Resolved"}
                className="w-24 cursor-pointer text-right text-[0.8125rem] text-primary underline-offset-4 hover:underline disabled:cursor-default disabled:text-fg-3 disabled:no-underline"
              >
                {status[a.id] === "Active" ? "Investigate" : status[a.id] === "Investigating" ? "Resolve" : "Done"}
              </button>
            </motion.li>
          ))}
        {shown.length === 0 && <li className="px-5 py-5 text-[0.9375rem] text-fg-3">No alerts here.</li>}
      </ul>
    </div>
  );
}

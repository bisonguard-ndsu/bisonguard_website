"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { FileJson, FileSpreadsheet, FileText, Film, Play, RotateCcw } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { EASE } from "@/components/motion";
import { cn } from "@/lib/utils";

const M = "/media/products/turnflow";

/* ------------------------------------------------------------------------ */
/* The intersection: 12 movements from the cam_9 count, replayable          */

type Dir = "N" | "S" | "E" | "W";
const box: Record<Dir, string> = { S: "Box 1", N: "Box 2", E: "Box 3", W: "Box 4" };
// Where traffic enters from each approach, and where it leaves towards each exit (right-hand traffic)
const entry: Record<Dir, [number, number]> = { S: [340, 600], N: [260, 0], E: [600, 260], W: [0, 340] };
const exit: Record<Dir, [number, number]> = { N: [340, 0], S: [260, 600], E: [600, 340], W: [0, 260] };

const moves: { code: string; from: Dir; to: Dir; n: number }[] = [
  { code: "NBT", from: "S", to: "N", n: 1 },
  { code: "SBT", from: "N", to: "S", n: 2 },
  { code: "NBRT", from: "S", to: "E", n: 0 },
  { code: "NBLT", from: "S", to: "W", n: 1 },
  { code: "SBLT", from: "N", to: "E", n: 0 },
  { code: "SBRT", from: "N", to: "W", n: 1 },
  { code: "EBT", from: "W", to: "E", n: 3 },
  { code: "EBLT", from: "W", to: "N", n: 2 },
  { code: "EBRT", from: "W", to: "S", n: 0 },
  { code: "WBT", from: "E", to: "W", n: 1 },
  { code: "WBRT", from: "E", to: "N", n: 1 },
  { code: "WBLT", from: "E", to: "S", n: 2 },
];
const tone: Record<string, string> = { N: "#34d399", S: "#60a5fa", W: "#f59e0b", E: "#f87171" };
const colorOf = (code: string) => tone[code[0] === "N" ? "N" : code[0] === "S" ? "S" : code[0] === "E" ? "W" : "E"];

// Points where each lane meets the junction box (the stop bars)
const inAt: Record<Dir, [number, number]> = { S: [340, 380], N: [260, 220], E: [380, 260], W: [220, 340] };
const outAt: Record<Dir, [number, number]> = { N: [340, 220], S: [260, 380], E: [380, 340], W: [220, 260] };

const pathOf = (from: Dir, to: Dir) => {
  const [x0, y0] = entry[from];
  const [x1, y1] = inAt[from];
  const [x2, y2] = outAt[to];
  const [x3, y3] = exit[to];
  const vertical = from === "N" || from === "S";
  const straight = (vertical && (to === "N" || to === "S")) || (!vertical && (to === "E" || to === "W"));
  if (straight) return `M${x0},${y0} L${x3},${y3}`;
  const [cx, cy] = vertical ? [x1, y2] : [x2, y1];
  return `M${x0},${y0} L${x1},${y1} Q${cx},${cy} ${x2},${y2} L${x3},${y3}`;
};

// Replay order for the 14 passages (one is the bus)
const events = moves.flatMap((m) => Array.from({ length: m.n }, (_, k) => ({ code: m.code, k })));
const order = [6, 0, 9, 3, 12, 1, 7, 13, 4, 10, 2, 8, 11, 5].map((i) => events[i]);
const BUS_INDEX = 8;

export function IntersectionCounter() {
  const reduce = useReducedMotion();
  const [focus, setFocus] = useState<string | null>(null);
  const [counts, setCounts] = useState<Record<string, number>>(() => Object.fromEntries(moves.map((m) => [m.code, m.n])));
  const [cars, setCars] = useState<{ id: number; code: string; bus: boolean }[]>([]);
  const [playing, setPlaying] = useState(false);
  const [clock, setClock] = useState(60);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const total = Object.values(counts).reduce((a, b) => a + b, 0);

  const clear = () => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  };
  useEffect(() => clear, []);

  const play = () => {
    clear();
    setCounts(Object.fromEntries(moves.map((m) => [m.code, 0])));
    setCars([]);
    setClock(0);
    setPlaying(true);
    const span = 9000;
    const travel = reduce ? 0 : 1600;
    order.forEach((e, i) => {
      const t = (i / order.length) * span;
      timers.current.push(
        setTimeout(() => setCars((c) => [...c, { id: i, code: e.code, bus: i === BUS_INDEX }]), t),
        setTimeout(() => {
          setCounts((c) => ({ ...c, [e.code]: c[e.code] + 1 }));
          setCars((c) => c.filter((x) => x.id !== i));
        }, t + travel),
      );
    });
    for (let s = 1; s <= 60; s++) timers.current.push(setTimeout(() => setClock(s), (s / 60) * (span + travel)));
    timers.current.push(setTimeout(() => setPlaying(false), span + travel + 50));
  };

  return (
    <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
      <div className="lg:col-span-7">
        <div className="relative border border-line bg-deep">
          <svg viewBox="0 0 600 600" className="block w-full" role="img" aria-label="The cam_9 intersection with its twelve counted movements">
            {/* roads */}
            <rect x="220" y="0" width="160" height="600" className="fill-surface" />
            <rect x="0" y="220" width="600" height="160" className="fill-surface" />
            <path d="M300,0 V220 M300,380 V600 M0,300 H220 M380,300 H600" className="stroke-fg-3" strokeDasharray="10 10" strokeWidth="1.5" />
            {/* stop bars */}
            <path d="M300,380 H380 M220,220 H300 M380,220 V300 M220,300 V380" className="stroke-fg-2" strokeWidth="3" />
            {/* zone boxes */}
            {(Object.keys(box) as Dir[]).map((d) => {
              const pos = { N: [230, 60], S: [230, 480], E: [480, 230], W: [60, 230] }[d];
              const size = d === "N" || d === "S" ? [140, 60] : [60, 140];
              return (
                <g key={d}>
                  <rect x={pos[0]} y={pos[1]} width={size[0]} height={size[1]} fill="none" className="stroke-primary/60" strokeDasharray="4 4" strokeWidth="1.5" />
                  <text x={pos[0] + size[0] / 2} y={pos[1] + size[1] / 2 + 4} textAnchor="middle" className="fill-fg-3 text-[13px]">
                    {box[d]}
                  </text>
                </g>
              );
            })}
            {/* movement paths */}
            {moves.map((m) => {
              const on = focus === m.code;
              const dim = focus !== null && !on;
              return (
                <path
                  key={m.code}
                  d={pathOf(m.from, m.to)}
                  fill="none"
                  stroke={colorOf(m.code)}
                  strokeWidth={on ? 6 : m.n === 0 ? 1.5 : 1.5 + m.n * 1.2}
                  strokeOpacity={dim ? 0.12 : m.n === 0 && !on ? 0.35 : 0.85}
                  strokeDasharray={m.n === 0 ? "6 6" : undefined}
                  strokeLinecap="round"
                  className="transition-all duration-300"
                />
              );
            })}
            {/* vehicles */}
            {cars.map((c) => {
              const m = moves.find((x) => x.code === c.code)!;
              return (
                <motion.rect
                  key={c.id}
                  width={c.bus ? 26 : 16}
                  height={c.bus ? 12 : 9}
                  x={c.bus ? -13 : -8}
                  y={c.bus ? -6 : -4.5}
                  rx="2"
                  fill={colorOf(c.code)}
                  stroke="#000"
                  strokeWidth="1"
                  style={{ offsetPath: `path('${pathOf(m.from, m.to)}')`, offsetRotate: "auto" } as React.CSSProperties}
                  initial={{ offsetDistance: "0%" }}
                  animate={{ offsetDistance: "100%" }}
                  transition={{ duration: 1.6, ease: "easeInOut" }}
                />
              );
            })}
          </svg>
          <div className="absolute top-3 left-3 bg-black/70 px-2.5 py-1 text-[0.75rem] text-white tabular-nums">cam_9 · 00:00:{String(clock).padStart(2, "0")}</div>
          <div className="absolute top-3 right-3 bg-black/70 px-3 py-1.5 text-right text-white">
            <span className="block text-[0.625rem] tracking-[0.14em] text-white/60 uppercase">Confirmed passages</span>
            <span className="block font-display text-[1.75rem] leading-none font-semibold tabular-nums">{total}</span>
          </div>
        </div>
        <div className="mt-4 flex flex-wrap items-center gap-4">
          <button onClick={play} disabled={playing} className="btn btn-primary cursor-pointer disabled:opacity-50">
            {total === 14 && !playing && clock === 60 ? <Play size={16} aria-hidden /> : <RotateCcw size={16} aria-hidden />}
            {playing ? "Counting" : "Replay the 60-second count"}
          </button>
          <p className="text-[0.8125rem] text-fg-3">Hover a movement to trace its path.</p>
        </div>
      </div>

      <div className="lg:col-span-5">
        <table className="w-full text-[0.875rem]">
          <thead>
            <tr className="border-b border-line text-left text-[0.6875rem] tracking-[0.14em] text-fg-3 uppercase">
              <th className="py-3 font-medium">Movement</th>
              <th className="py-3 font-medium">From → To</th>
              <th className="py-3 text-right font-medium">Count</th>
            </tr>
          </thead>
          <tbody>
            {moves.map((m) => (
              <tr
                key={m.code}
                onMouseEnter={() => setFocus(m.code)}
                onMouseLeave={() => setFocus(null)}
                onFocus={() => setFocus(m.code)}
                onBlur={() => setFocus(null)}
                tabIndex={0}
                className={cn("cursor-default border-b border-line transition-colors outline-none", focus === m.code ? "bg-surface" : "")}
              >
                <td className="py-2.5">
                  <span className="flex items-center gap-2.5 font-medium text-fg">
                    <span className="inline-block h-3 w-1" style={{ background: colorOf(m.code) }} />
                    {m.code}
                  </span>
                </td>
                <td className="py-2.5 text-fg-2">
                  {box[m.from]} → {box[m.to]}
                </td>
                <td className="py-2.5 text-right">
                  <motion.span key={counts[m.code]} initial={{ scale: 1.6, color: colorOf(m.code) }} animate={{ scale: 1, color: "var(--color-fg)" }} className="inline-block font-medium tabular-nums">
                    {counts[m.code]}
                  </motion.span>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td className="pt-4 text-fg-3" colSpan={2}>
                Vehicle mix: car 13, bus 1
              </td>
              <td className="pt-4 text-right font-display text-[1.25rem] font-semibold text-fg tabular-nums">{total}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------------ */
/* The six steps, as they appear in the app                                   */

const steps = [
  { label: "Source", text: "Upload a recording, or pick a camera from the directory and record the window you need.", src: `${M}/source.webp`, w: 1720, h: 867 },
  { label: "Movements", text: "Draw a zone on each approach and name the movements between them: twelve at a four-way intersection.", src: `${M}/movements.webp`, w: 1204, h: 436 },
  { label: "Run count", text: "Every vehicle is detected and tracked across the frame. Each confirmed passage from one zone to another is counted once.", src: `${M}/run.webp`, w: 1235, h: 867 },
  { label: "Results", text: "Counts by movement and class, ready to download as CSV, JSON, an engineering report or the annotated video.", src: `${M}/results.webp`, w: 1380, h: 868 },
  { label: "Review", text: "Step through the passages with the video evidence beside each one, confirm them, and add any the run missed.", src: `${M}/review.webp`, w: 1235, h: 865 },
  { label: "Analysis", text: "Filter by approach, movement, class and interval. See where traffic goes, time patterns and how sessions compare.", src: `${M}/analysis.webp`, w: 1235, h: 867 },
];

export function StepTour() {
  const [i, setI] = useState(0);
  const s = steps[i];
  return (
    <div>
      <div role="tablist" aria-label="Turnflow steps" className="grid grid-cols-3 border border-line lg:grid-cols-6">
        {steps.map((x, n) => (
          <button
            key={x.label}
            role="tab"
            aria-selected={n === i}
            onClick={() => setI(n)}
            className={cn(
              "relative cursor-pointer border-line px-4 py-4 text-left transition-colors [&:not(:nth-child(3n))]:border-r lg:[&:not(:last-child)]:border-r [&:nth-child(-n+3)]:border-b lg:[&:nth-child(-n+3)]:border-b-0",
              n === i ? "bg-deep text-fg" : "text-fg-3 hover:text-fg-2",
            )}
          >
            <span className={cn("flex h-6 w-6 items-center justify-center border text-[0.75rem]", n < i ? "border-primary bg-primary text-primary-ink" : n === i ? "border-primary text-primary" : "border-line")}>{n + 1}</span>
            <span className="mt-3 block text-[0.9375rem] font-medium">{x.label}</span>
            {n === i && <motion.span layoutId="tf-step" className="absolute inset-x-0 bottom-0 h-0.5 bg-primary" />}
          </button>
        ))}
      </div>
      <div className="grid border-x border-b border-line lg:grid-cols-12">
        <div className="flex flex-col justify-between gap-6 border-b border-line p-6 lg:col-span-4 lg:border-r lg:border-b-0 lg:p-8">
          <AnimatePresence mode="wait">
            <motion.div key={s.label} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.3 }}>
              <p className="eyebrow">
                Step {i + 1} of {steps.length}
              </p>
              <h3 className="mt-4 font-display text-[2rem] leading-tight font-semibold tracking-[-0.03em] text-fg">{s.label}</h3>
              <p className="mt-4 text-[1rem] leading-relaxed text-fg-2">{s.text}</p>
            </motion.div>
          </AnimatePresence>
          <div className="flex gap-2">
            <button onClick={() => setI((n) => Math.max(0, n - 1))} disabled={i === 0} className="btn btn-ghost min-h-10 cursor-pointer px-4 disabled:opacity-30">
              Back
            </button>
            <button onClick={() => setI((n) => Math.min(steps.length - 1, n + 1))} disabled={i === steps.length - 1} className="btn btn-primary min-h-10 cursor-pointer px-4 disabled:opacity-30">
              Next step
            </button>
          </div>
        </div>
        <div className="relative aspect-[16/10] bg-deep lg:col-span-8">
          <AnimatePresence initial={false}>
            <motion.div key={s.src} className="absolute inset-0 p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4, ease: EASE }}>
              <div className="relative h-full w-full">
                <Image src={s.src} alt={`The Turnflow ${s.label} screen`} fill sizes="(min-width: 1024px) 60vw, 100vw" className="object-contain" />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------------ */
/* Evidence: from tracks to counted passages                                  */

const evidence = [
  { value: 63, label: "Vehicle tracks", text: "Every vehicle the tracker followed in the frame, including parked cars and traffic outside the approaches." },
  { value: 14, label: "Counted passages", text: "Tracks that went from one zone to another. Only these become counts." },
  { value: 49, label: "Without a mapped passage", text: "Partial tracks and traffic outside the configured movements. They are kept, not counted." },
];
const checks = [
  { value: "753", label: "boundary observations" },
  { value: "0", label: "observations in overlapping zones" },
  { value: "0", label: "long-gap resets" },
];

export function EvidenceFunnel() {
  const [i, setI] = useState(1);
  return (
    <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
      <div className="space-y-3 lg:col-span-7">
        {evidence.map((e, n) => (
          <button key={e.label} onClick={() => setI(n)} onMouseEnter={() => setI(n)} aria-pressed={i === n} className="group block w-full cursor-pointer text-left">
            <div className="flex items-baseline justify-between">
              <span className={cn("text-[0.9375rem] font-medium transition-colors", i === n ? "text-fg" : "text-fg-2")}>{e.label}</span>
              <span className="font-display text-[1.75rem] font-semibold text-fg tabular-nums">{e.value}</span>
            </div>
            <div className="mt-2 h-10 bg-white/60">
              <motion.div
                className={cn("h-full transition-colors", i === n ? "bg-primary" : "bg-fg-3/50")}
                initial={{ width: 0 }}
                whileInView={{ width: `${(e.value / 63) * 100}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: n * 0.15, ease: EASE }}
              />
            </div>
          </button>
        ))}
        <AnimatePresence mode="wait">
          <motion.p key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pt-4 text-[1rem] leading-relaxed text-fg-2">
            {evidence[i].text}
          </motion.p>
        </AnimatePresence>
      </div>
      <div className="lg:col-span-5">
        <p className="eyebrow">Counting-point checks</p>
        <ul className="mt-5 border-t border-line">
          {checks.map((c) => (
            <li key={c.label} className="flex items-baseline justify-between border-b border-line py-4">
              <span className="text-[0.9375rem] text-fg-2">{c.label}</span>
              <span className="font-display text-[1.5rem] font-semibold text-fg tabular-nums">{c.value}</span>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-[0.9375rem] leading-relaxed text-fg-2">Boundary observations are prompts to inspect, not proof of a missed count. Each links to the moment in the video where it happened.</p>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------------ */
/* Exports                                                                    */

const csv = ["movement,from,to,count", ...moves.map((m) => `${m.code},${box[m.from]},${box[m.to]},${m.n}`)].join("\n");
const json = JSON.stringify(
  {
    session: "cam_9 · approved 60-second comparison",
    status: "completed",
    processed: "00:59",
    detector: "YOLO + ByteTrack",
    zones: 4,
    movements: 12,
    passages: 14,
    classes: { car: 13, bus: 1 },
  },
  null,
  2,
);

const exportsList = [
  { id: "csv", icon: FileSpreadsheet, label: "Counts CSV" },
  { id: "events", icon: FileSpreadsheet, label: "Events CSV" },
  { id: "json", icon: FileJson, label: "Session JSON" },
  { id: "report", icon: FileText, label: "Engineering report" },
  { id: "mp4", icon: Film, label: "Annotated MP4" },
];

export function ExportPreview() {
  const [id, setId] = useState("csv");
  return (
    <div className="grid border border-line lg:grid-cols-12">
      <ul className="border-b border-line lg:col-span-4 lg:border-r lg:border-b-0">
        {exportsList.map((e) => (
          <li key={e.id} className="border-b border-line last:border-b-0">
            <button onClick={() => setId(e.id)} aria-pressed={id === e.id} className={cn("flex w-full cursor-pointer items-center gap-3 px-5 py-4 text-left text-[0.9375rem] transition-colors", id === e.id ? "bg-surface text-fg" : "text-fg-2 hover:text-fg")}>
              <e.icon size={18} strokeWidth={1.6} className={id === e.id ? "text-primary" : "text-fg-3"} aria-hidden />
              {e.label}
            </button>
          </li>
        ))}
      </ul>
      <div className="min-h-[24rem] bg-deep p-5 lg:col-span-8">
        <AnimatePresence mode="wait">
          <motion.div key={id} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }} className="h-full">
            {id === "csv" && <pre className="overflow-x-auto font-mono text-[0.8125rem] leading-relaxed text-fg-2">{csv}</pre>}
            {id === "json" && <pre className="overflow-x-auto font-mono text-[0.8125rem] leading-relaxed text-fg-2">{json}</pre>}
            {id === "events" && (
              <div className="text-[0.9375rem] leading-relaxed text-fg-2">
                <p className="font-mono text-[0.8125rem] text-fg-3">time,track,movement,class</p>
                <p className="mt-4 max-w-[44ch]">One row for every counted passage: when it was confirmed, the track that made it, its movement and its vehicle class. Use it to rebuild any interval yourself.</p>
              </div>
            )}
            {id === "report" && (
              <div className="max-w-[46ch] text-[0.9375rem] leading-relaxed text-fg-2">
                <p className="font-display text-[1.5rem] font-semibold text-fg">PDF or Word</p>
                <p className="mt-3">A report ready to submit, with observed, adjusted and forecast values kept apart, so a reviewer always knows which numbers were counted and which were derived.</p>
              </div>
            )}
            {id === "mp4" && (
              <div className="relative aspect-[1919/1005] w-full">
                <Image src="/media/evidence/turnflow-cam9-report.webp" alt="A frame of the annotated video: tracked vehicles with IDs and a running movement count" fill sizes="(min-width: 1024px) 55vw, 100vw" className="object-contain" />
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

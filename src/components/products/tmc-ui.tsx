"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Check, Circle, Square } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { EASE } from "@/components/motion";
import { cn } from "@/lib/utils";

const M = "/media/products/tmc";

export const cams = [
  { id: "shrewsbury", name: "44 E/O Shrewsbury", src: `${M}/cam-shrewsbury.webp`, w: 661, h: 326 },
  { id: "141", name: "44 AT 141", src: `${M}/cam-141.webp`, w: 434, h: 229 },
  { id: "lindbergh", name: "44 E/O Lindbergh", src: `${M}/cam-lindbergh.webp`, w: 360, h: 229 },
  { id: "109", name: "44 AT 109", src: `${M}/cam-109.webp`, w: 259, h: 101 },
  { id: "jefferson", name: "44 AT Jefferson", src: `${M}/cam-jefferson.webp`, w: 259, h: 101 },
];

function Clock({ offset = 0 }: { offset?: number }) {
  const [now, setNow] = useState<Date | null>(null);
  useEffect(() => {
    setNow(new Date());
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);
  if (!now) return <span className="tabular-nums">--:--:--</span>;
  const d = new Date(now.getTime() + offset);
  return <span className="tabular-nums">{d.toLocaleTimeString("en-US", { hour12: false })}</span>;
}

function Live({ className }: { className?: string }) {
  return (
    <span className={cn("flex items-center gap-1.5 bg-black/70 px-2 py-0.5 text-[0.6875rem] font-medium text-white", className)}>
      <span className="inline-block h-1.5 w-1.5 animate-pulse bg-emerald-400" aria-hidden />
      Live
    </span>
  );
}

/* ------------------------------------------------------------------------ */
/* Hero video wall: one feed large, the rest as a strip; click to switch    */

export function VideoWall() {
  const [main, setMain] = useState(0);
  const [auto, setAuto] = useState(true);
  const reduce = useReducedMotion();
  useEffect(() => {
    if (!auto || reduce) return;
    const t = setTimeout(() => setMain((n) => (n + 1) % cams.length), 4500);
    return () => clearTimeout(t);
  }, [main, auto, reduce]);
  const c = cams[main];
  return (
    <div className="border border-line bg-black">
      <div className="relative aspect-[16/9] overflow-clip">
        <AnimatePresence initial={false}>
          <motion.div key={c.id} className="absolute inset-0" initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.6 }}>
            <Image src={c.src} alt={`Traffic camera feed: ${c.name}`} fill priority={main === 0} sizes="(min-width: 1024px) 60vw, 100vw" className="object-cover" />
          </motion.div>
        </AnimatePresence>
        <div className="absolute top-3 left-3 flex items-center gap-2">
          <Live />
          <span className="bg-black/70 px-2 py-0.5 text-[0.6875rem] text-white">{c.name}</span>
        </div>
        <span className="absolute top-3 right-3 bg-black/70 px-2 py-0.5 text-[0.6875rem] text-white">
          <Clock />
        </span>
      </div>
      <div className="grid grid-cols-5 gap-px bg-line">
        {cams.map((x, i) => (
          <button
            key={x.id}
            onClick={() => {
              setMain(i);
              setAuto(false);
            }}
            aria-label={`Show ${x.name}`}
            aria-pressed={i === main}
            className="group relative aspect-[16/10] cursor-pointer overflow-clip bg-black"
          >
            <Image src={x.src} alt="" fill sizes="12vw" className={cn("object-cover transition-opacity duration-300", i === main ? "opacity-100" : "opacity-50 group-hover:opacity-90")} />
            {i === main && <motion.span layoutId="tmc-wall" className="absolute inset-0 border-2 border-primary" />}
            <span className="absolute bottom-1 left-1.5 hidden text-left text-[0.625rem] leading-tight text-white sm:block">{x.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------------ */
/* Record manager: choose feeds, preview them, record                        */

const moreCams = ["44 AT Grand", "64 AT N", "64 AT K", "64 AT Clarkson-Olive", "64 AT Mason", "64 E/O Clayton", "64 E/O Hanley", "64 W/O Kingshighway", "64 AT 15th", "64 W/O 7th", "64 E/O 94", "64 AT Boones Crossing", "64 AT 170"];

export function RecordManager() {
  const [sel, setSel] = useState<string[]>(["141", "lindbergh"]);
  const [rec, setRec] = useState<number | null>(null);
  const [now, setNow] = useState(0);
  const [start, setStart] = useState("07:00");
  const [end, setEnd] = useState("09:00");
  useEffect(() => {
    if (rec === null) return;
    const t = setInterval(() => setNow(Date.now()), 250);
    return () => clearInterval(t);
  }, [rec]);
  const elapsed = rec === null ? 0 : Math.max(0, Math.floor((now - rec) / 1000));
  const fmt = (s: number) => `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;
  const toggle = (id: string) => {
    if (rec !== null) return;
    setSel((s) => (s.includes(id) ? s.filter((x) => x !== id) : [...s, id]));
  };
  const shown = cams.filter((c) => sel.includes(c.id));

  return (
    <div className="grid border border-line bg-deep lg:grid-cols-12">
      <div className="border-b border-line p-5 lg:col-span-4 lg:border-r lg:border-b-0">
        <p className="text-[0.875rem] font-medium text-fg">Camera selection</p>
        <p className="mt-1 text-[0.8125rem] text-fg-3">Choose one or more live feeds for the session.</p>
        <ul className="mt-4 space-y-1.5">
          {cams.map((c) => {
            const on = sel.includes(c.id);
            return (
              <li key={c.id}>
                <button
                  onClick={() => toggle(c.id)}
                  aria-pressed={on}
                  disabled={rec !== null}
                  className={cn(
                    "flex w-full cursor-pointer items-center gap-3 border px-3 py-2.5 text-left text-[0.8125rem] transition-colors disabled:cursor-not-allowed",
                    on ? "border-primary/60 text-fg" : "border-line text-fg-2 hover:text-fg",
                  )}
                >
                  <span className={cn("flex h-4 w-4 items-center justify-center border", on ? "border-primary bg-primary text-primary-ink" : "border-line")}>
                    {on && <Check size={12} strokeWidth={3} aria-hidden />}
                  </span>
                  <span className="flex-1">{c.name}</span>
                  <span className="text-[0.6875rem] text-emerald-400">Active</span>
                </button>
              </li>
            );
          })}
        </ul>
        <p className="mt-4 text-[0.75rem] leading-relaxed text-fg-3">
          {moreCams.length} more on this network: {moreCams.slice(0, 4).join(", ")} and others.
        </p>
      </div>

      <div className="flex flex-col p-5 lg:col-span-8">
        <div className="flex items-center justify-between">
          <p className="text-[0.875rem] font-medium text-fg">Live preview</p>
          <span className="border border-primary/40 px-2 py-0.5 text-[0.75rem] text-primary">{sel.length} selected</span>
        </div>
        <div className={cn("mt-4 grid gap-3", shown.length > 1 ? "sm:grid-cols-2" : "")}>
          <AnimatePresence initial={false}>
            {shown.map((c) => (
              <motion.div
                key={c.id}
                layout
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.3, ease: EASE }}
                className="relative aspect-[16/9] overflow-clip bg-black"
              >
                <Image src={c.src} alt={`Live preview of ${c.name}`} fill sizes="(min-width: 1024px) 30vw, 100vw" className="object-cover" />
                <div className="absolute top-2 left-2 flex gap-1.5">
                  {rec !== null ? (
                    <span className="flex items-center gap-1.5 bg-red-600 px-2 py-0.5 text-[0.6875rem] font-medium text-white">
                      <Circle size={8} fill="currentColor" aria-hidden /> REC {fmt(elapsed)}
                    </span>
                  ) : (
                    <Live />
                  )}
                </div>
                <span className="absolute bottom-2 left-2 bg-black/70 px-2 py-0.5 text-[0.6875rem] text-white">{c.name}</span>
              </motion.div>
            ))}
          </AnimatePresence>
          {shown.length === 0 && <p className="flex aspect-[16/9] items-center justify-center border border-dashed border-line text-[0.8125rem] text-fg-3">Select a camera to preview it here.</p>}
        </div>

        <div className="mt-5 border-t border-line pt-5">
          <p className="text-[0.875rem] font-medium text-fg">Record controls</p>
          <div className="mt-3 grid grid-cols-2 gap-3 text-[0.8125rem] sm:grid-cols-4">
            <div>
              <p className="text-fg-3">Quality</p>
              <p className="mt-1 border border-line px-3 py-2 text-fg">HD (1280×720)</p>
            </div>
            <div>
              <p className="text-fg-3">Format</p>
              <p className="mt-1 border border-line px-3 py-2 text-fg">MP4</p>
            </div>
            <label className="block">
              <span className="text-fg-3">Start time</span>
              <input type="time" value={start} onChange={(e) => setStart(e.target.value)} className="mt-1 block w-full border border-line bg-transparent px-3 py-2 text-fg [color-scheme:dark]" />
            </label>
            <label className="block">
              <span className="text-fg-3">End time</span>
              <input type="time" value={end} onChange={(e) => setEnd(e.target.value)} className="mt-1 block w-full border border-line bg-transparent px-3 py-2 text-fg [color-scheme:dark]" />
            </label>
          </div>
          <button
            onClick={() => (rec === null ? setRec(Date.now()) : setRec(null))}
            disabled={sel.length === 0}
            className={cn("btn mt-4 w-full cursor-pointer disabled:cursor-not-allowed disabled:opacity-40", rec === null ? "btn-primary" : "border border-red-500 text-red-400 hover:bg-red-500/10")}
          >
            {rec === null ? <Circle size={14} fill="currentColor" aria-hidden /> : <Square size={14} fill="currentColor" aria-hidden />}
            {rec === null ? `Start recording ${sel.length || ""} ${sel.length === 1 ? "feed" : "feeds"}` : "Stop recording"}
          </button>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------------ */
/* Analysis summary for one recording                                         */

const metrics = [
  { id: "aadt", label: "AADT", value: "2,847", sub: "Annual average daily traffic" },
  { id: "peak", label: "Peak hour", value: "1,247", sub: "8:00 – 9:00 AM" },
  { id: "speed", label: "Avg speed", value: "42 km/h", sub: "Average across the recording" },
  { id: "viol", label: "Violations", value: "15", sub: "Speed and red light" },
];
const classes = [
  { name: "Car", n: 115, color: "var(--color-primary)" },
  { name: "Bus", n: 7, color: "#e879f9" },
];

export function AnalysisSummary() {
  const [m, setM] = useState(0);
  const [hover, setHover] = useState<number | null>(null);
  const total = classes.reduce((a, c) => a + c.n, 0);
  const R = 52;
  const C = 2 * Math.PI * R;
  let acc = 0;
  const focus = hover ?? 0;

  return (
    <div className="border border-line bg-deep">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line px-5 py-4">
        <div>
          <p className="text-[0.875rem] font-medium text-fg">Analysis summary · 44 E/O Shrewsbury</p>
          <p className="text-[0.75rem] text-fg-3">Source: recording · November 20th, 2025</p>
        </div>
        <span className="border border-emerald-500/40 px-2 py-0.5 text-[0.75rem] text-emerald-400">Processed</span>
      </div>

      <div role="tablist" aria-label="Measures" className="grid grid-cols-2 border-b border-line lg:grid-cols-4">
        {metrics.map((x, i) => (
          <button
            key={x.id}
            role="tab"
            aria-selected={i === m}
            onClick={() => setM(i)}
            className={cn(
              "relative cursor-pointer border-line px-5 py-5 text-left transition-colors odd:border-r lg:border-r lg:last:border-r-0 [&:nth-child(-n+2)]:border-b lg:[&:nth-child(-n+2)]:border-b-0",
              i === m ? "bg-surface" : "hover:bg-surface/50",
            )}
          >
            <span className="eyebrow block text-fg-3">{x.label}</span>
            <span className="mt-2 block font-display text-[1.75rem] leading-none font-semibold tracking-[-0.02em] text-fg sm:text-[2.25rem]">{x.value}</span>
            <span className="mt-2 block text-[0.75rem] text-fg-3">{x.sub}</span>
            {i === m && <motion.span layoutId="tmc-metric" className="absolute inset-x-0 top-0 h-0.5 bg-primary" />}
          </button>
        ))}
      </div>

      <div className="grid lg:grid-cols-12">
        <div className="border-b border-line p-5 lg:col-span-7 lg:border-r lg:border-b-0">
          <div className="flex items-center justify-between">
            <p className="text-[0.875rem] font-medium text-fg">Vehicle detection</p>
            <p className="text-[0.75rem] text-fg-3">Detection confidence 88%</p>
          </div>
          <div className="relative mt-4 aspect-[661/326] overflow-clip bg-black">
            <Image src={`${M}/cam-shrewsbury.webp`} alt="A tractor-trailer tracked and labelled as a large bus or medium truck at 44 E/O Shrewsbury" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
          </div>
          <div className="mt-4 flex justify-between text-[0.8125rem]">
            <span className="text-fg-3">
              Traffic volume <span className="font-medium text-fg">5,975</span> vehicles
            </span>
            <span className="text-fg-3">
              <span className="font-medium text-fg">956</span> an hour on average
            </span>
          </div>
        </div>
        <div className="p-5 lg:col-span-5">
          <div className="flex items-center justify-between">
            <p className="text-[0.875rem] font-medium text-fg">Vehicle classification</p>
            <p className="text-[0.75rem] text-fg-3">{total} detected</p>
          </div>
          <div className="mt-6 flex items-center gap-8">
            <svg viewBox="0 0 140 140" className="h-36 w-36 shrink-0 -rotate-90" role="img" aria-label="115 cars and 7 buses">
              {classes.map((c, i) => {
                const len = (c.n / total) * C;
                const el = (
                  <circle
                    key={c.name}
                    cx="70"
                    cy="70"
                    r={R}
                    fill="none"
                    stroke={c.color}
                    strokeWidth={focus === i ? 20 : 14}
                    strokeDasharray={`${len} ${C - len}`}
                    strokeDashoffset={-acc}
                    className="cursor-pointer transition-all duration-300"
                    onMouseEnter={() => setHover(i)}
                    onMouseLeave={() => setHover(null)}
                  />
                );
                acc += len;
                return el;
              })}
            </svg>
            <div>
              <p className="font-display text-[2.5rem] leading-none font-semibold text-fg">{Math.round((classes[focus].n / total) * 100)}%</p>
              <p className="mt-1 text-[0.875rem] text-fg-2">
                {classes[focus].name} · {classes[focus].n}
              </p>
            </div>
          </div>
          <ul className="mt-6 space-y-3">
            {classes.map((c, i) => (
              <li key={c.name} onMouseEnter={() => setHover(i)} onMouseLeave={() => setHover(null)} className="cursor-default">
                <div className="flex justify-between text-[0.8125rem]">
                  <span className="flex items-center gap-2 text-fg">
                    <span className="inline-block h-2 w-2" style={{ background: c.color }} />
                    {c.name}
                  </span>
                  <span className="text-fg-3">
                    {c.n} ({Math.round((c.n / total) * 100)}%)
                  </span>
                </div>
                <div className="mt-1.5 h-1 bg-surface-2">
                  <motion.div className="h-full" style={{ background: c.color }} initial={{ width: 0 }} whileInView={{ width: `${(c.n / total) * 100}%` }} viewport={{ once: true }} transition={{ duration: 1, ease: EASE }} />
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-6 border-t border-line pt-4 text-[0.8125rem] text-fg-3">
            Classification accuracy <span className="font-medium text-fg">96.8%</span>
          </p>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------------ */
/* Schedule: pick a study window on a 24-hour bar                            */

const presets = [
  { label: "Morning peak", from: 7, to: 9 },
  { label: "Evening peak", from: 16, to: 18 },
  { label: "Daytime", from: 6, to: 20 },
  { label: "All day", from: 0, to: 24 },
];

export function ScheduleBar() {
  const [range, setRange] = useState<[number, number]>([7, 9]);
  const [drag, setDrag] = useState<number | null>(null);
  const bar = useRef<HTMLDivElement>(null);
  const hourAt = (x: number) => {
    const r = bar.current!.getBoundingClientRect();
    return Math.max(0, Math.min(24, Math.round(((x - r.left) / r.width) * 24)));
  };
  const onDown = (e: React.PointerEvent) => {
    const h = hourAt(e.clientX);
    setDrag(h);
    setRange([h, Math.min(24, h + 1)]);
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };
  const onMove = (e: React.PointerEvent) => {
    if (drag === null) return;
    const h = hourAt(e.clientX);
    setRange(h > drag ? [drag, h] : h < drag ? [h, drag] : [drag, Math.min(24, drag + 1)]);
  };
  const hrs = range[1] - range[0];
  const fmt = (h: number) => `${String(h % 24).padStart(2, "0")}:00`;

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {presets.map((p) => {
          const on = range[0] === p.from && range[1] === p.to;
          return (
            <button
              key={p.label}
              onClick={() => setRange([p.from, p.to])}
              aria-pressed={on}
              className={cn("cursor-pointer border px-3.5 py-2 text-[0.875rem] transition-colors", on ? "border-fg bg-fg text-bg" : "border-line text-fg-2 hover:border-fg-3 hover:text-fg")}
            >
              {p.label}
            </button>
          );
        })}
      </div>
      <div
        ref={bar}
        onPointerDown={onDown}
        onPointerMove={onMove}
        onPointerUp={() => setDrag(null)}
        className="relative mt-8 h-20 cursor-crosshair touch-none border border-line bg-bg select-none"
        role="slider"
        aria-label="Recording window"
        aria-valuetext={`${fmt(range[0])} to ${fmt(range[1])}`}
        aria-valuemin={0}
        aria-valuemax={24}
        aria-valuenow={range[0]}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight" && range[1] < 24) setRange([range[0] + 1, range[1] + 1]);
          if (e.key === "ArrowLeft" && range[0] > 0) setRange([range[0] - 1, range[1] - 1]);
        }}
      >
        {Array.from({ length: 23 }, (_, i) => (
          <span key={i} className="absolute top-0 bottom-0 w-px bg-line" style={{ left: `${((i + 1) / 24) * 100}%` }} />
        ))}
        <motion.div
          className="absolute top-0 bottom-0 flex items-center justify-center bg-primary"
          animate={{ left: `${(range[0] / 24) * 100}%`, width: `${(hrs / 24) * 100}%` }}
          transition={{ type: "spring", stiffness: 400, damping: 40 }}
        >
          <span className="flex items-center gap-1.5 text-[0.75rem] font-medium whitespace-nowrap text-bg">
            <Circle size={7} fill="currentColor" aria-hidden />
            {hrs >= 2 && "REC"}
          </span>
        </motion.div>
      </div>
      <div className="mt-2 flex justify-between text-[0.75rem] text-fg-3">
        {[0, 6, 12, 18, 24].map((h) => (
          <span key={h}>{fmt(h)}</span>
        ))}
      </div>
      <div className="mt-8 grid grid-cols-3 border-t border-line pt-6">
        <div>
          <p className="eyebrow text-fg-3">Starts</p>
          <p className="mt-2 font-display text-[1.75rem] font-semibold text-fg">{fmt(range[0])}</p>
        </div>
        <div>
          <p className="eyebrow text-fg-3">Ends</p>
          <p className="mt-2 font-display text-[1.75rem] font-semibold text-fg">{fmt(range[1])}</p>
        </div>
        <div>
          <p className="eyebrow text-fg-3">Length</p>
          <p className="mt-2 font-display text-[1.75rem] font-semibold text-fg">
            {hrs} {hrs === 1 ? "hour" : "hours"}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------------ */
/* The app, module by module                                                 */

const modules = [
  { id: "dash", label: "Dashboard", text: "Cameras, recordings, analyses and alerts at a glance, with every camera on the map.", src: `${M}/dashboard.webp`, w: 1500, h: 560 },
  { id: "rec", label: "Record Manager", text: "Choose feeds, preview them live and record now or on a schedule. Active, archived and scheduled recordings each have their own tab.", src: `${M}/record-manager.webp`, w: 1740, h: 865 },
  { id: "ana", label: "Traffic Analysis", text: "Every analysis with its camera, type and status: vehicle detection, traffic counting and more.", src: `${M}/analyses.webp`, w: 1719, h: 865 },
  { id: "res", label: "Results", text: "The summary for each run: AADT, peak hour, speed, violations, classification and volume, ready for a report.", src: `${M}/results.webp`, w: 1719, h: 865 },
];

export function ModuleTour() {
  const [i, setI] = useState(0);
  const m = modules[i];
  return (
    <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
      <ul role="tablist" aria-label="TMC modules" className="border-t border-line lg:col-span-4">
        {modules.map((x, n) => (
          <li key={x.id} className="border-b border-line">
            <button role="tab" aria-selected={n === i} onClick={() => setI(n)} className="group w-full cursor-pointer py-5 text-left">
              <span className={cn("flex items-center gap-3 font-display text-[1.375rem] font-semibold tracking-[-0.02em] transition-colors", n === i ? "text-fg" : "text-fg-3 group-hover:text-fg-2")}>
                <span className={cn("inline-block h-2 w-2 transition-colors", n === i ? "bg-primary" : "bg-line")} />
                {x.label}
              </span>
              <AnimatePresence initial={false}>
                {n === i && (
                  <motion.span initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: EASE }} className="block overflow-hidden">
                    <span className="block pt-3 pl-5 text-[0.9375rem] leading-relaxed text-fg-2">{x.text}</span>
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </li>
        ))}
      </ul>
      <div className="lg:col-span-8">
        <div className="border border-line bg-surface">
          <div className="border-b border-line px-4 py-2.5 text-[0.8125rem] text-fg-3">TMC · {m.label}</div>
          <div className="relative aspect-[1740/865] overflow-clip bg-deep">
            <AnimatePresence initial={false}>
              <motion.div key={m.id} className="absolute inset-0" initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.45, ease: EASE }}>
                <Image src={m.src} alt={`The TMC ${m.label} screen`} fill sizes="(min-width: 1024px) 60vw, 100vw" className="object-contain object-top" />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}

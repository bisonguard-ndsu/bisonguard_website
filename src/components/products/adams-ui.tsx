"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Activity, Check, Gauge, MapPin, Play, RotateCcw, ScanSearch, Waves } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { EASE } from "@/components/motion";
import { cn } from "@/lib/utils";

const M = "/media/products/adams";

/* ------------------------------------------------------------------------ */
/* Hero: the real app, switchable between three views                       */

const views = [
  { id: "dashboard", label: "Dashboard", src: `${M}/dashboard.webp`, w: 1709, h: 693, alt: "The AdAMS dashboard with project, work-order, analysis and recording counts above a traffic-sign map" },
  { id: "assets", label: "Asset map", src: `${M}/assets-map.webp`, w: 1721, h: 864, alt: "The AdAMS asset map of Fargo and West Fargo with traffic signs and road-condition segments" },
  { id: "iri", label: "Ride quality", src: `${M}/iri-map.webp`, w: 1719, h: 864, alt: "The AdAMS asset map with the IRI filter open, grading segments from excellent to poor" },
] as const;

export function HeroViews() {
  const [i, setI] = useState(0);
  const [auto, setAuto] = useState(true);
  const reduce = useReducedMotion();
  useEffect(() => {
    if (!auto || reduce) return;
    const t = setTimeout(() => setI((n) => (n + 1) % views.length), 5000);
    return () => clearTimeout(t);
  }, [i, auto, reduce]);
  const v = views[i];
  return (
    <div>
      <div className="border border-line bg-surface">
        <div className="flex items-center justify-between gap-4 border-b border-line px-4 py-2.5">
          <span className="flex items-center gap-2 text-[0.8125rem] text-fg-3">
            <span className="inline-block h-2 w-2 bg-primary" aria-hidden />
            AdAMS · {v.label}
          </span>
          <span className="hidden text-[0.8125rem] text-fg-3 sm:block">app.infinicitylabs.org</span>
        </div>
        <div className="relative aspect-[1721/864] overflow-clip bg-deep">
          <AnimatePresence initial={false}>
            <motion.div
              key={v.id}
              className="absolute inset-0"
              initial={reduce ? false : { opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7, ease: EASE }}
            >
              <Image src={v.src} alt={v.alt} fill priority={i === 0} sizes="(min-width: 1344px) 1248px, 100vw" className="object-cover object-top" />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      <div role="tablist" aria-label="AdAMS views" className="grid grid-cols-3 border-x border-b border-line">
        {views.map((x, n) => (
          <button
            key={x.id}
            role="tab"
            aria-selected={n === i}
            onClick={() => {
              setI(n);
              setAuto(false);
            }}
            className={cn(
              "relative cursor-pointer px-4 py-4 text-left text-[0.875rem] font-medium transition-colors [&:not(:first-child)]:border-l [&:not(:first-child)]:border-line",
              n === i ? "text-fg" : "text-fg-3 hover:text-fg-2",
            )}
          >
            {x.label}
            {n === i && <motion.span layoutId="adams-view" className="absolute inset-x-0 top-0 h-0.5 bg-primary" />}
          </button>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------------ */
/* One drive, four stages: sticky visual that follows the steps             */

const stages = [
  {
    id: "record",
    icon: Play,
    title: "Record",
    text: "A phone on the dashboard records the drive with the AdAMS app. Video, GPS and motion sensors are captured together, and upload on their own once you are back on Wi-Fi.",
    meta: ["Video", "GPS", "Accelerometer", "Gyroscope"],
  },
  {
    id: "sense",
    icon: Activity,
    title: "Sense",
    text: "While the camera watches the surface, the phone's motion sensors feel it. Accelerometer and gyroscope traces become the ride-quality score for every segment.",
    meta: ["Sensor analytics", "Export data"],
  },
  {
    id: "detect",
    icon: ScanSearch,
    title: "Detect",
    text: "Models find and classify signs, markings, lights and pavement distress, and follow each one across frames so it is counted once.",
    meta: ["MUTCD sign codes", "Track IDs", "Five-level severity"],
  },
  {
    id: "map",
    icon: MapPin,
    title: "Map",
    text: "Every detection lands on the asset map with the frame it was seen in and its GPS position, ready to inspect, share or turn into a work order.",
    meta: ["Evidence frame", "GPS position", "Work orders"],
  },
];

function GyroChart() {
  const reduce = useReducedMotion();
  const [axis, setAxis] = useState<"Accelerometer" | "Gyroscope">("Gyroscope");
  const [t, setT] = useState(0);
  useEffect(() => {
    if (reduce) return;
    let raf = 0;
    const start = performance.now();
    const loop = (now: number) => {
      setT((now - start) / 1000);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [reduce]);
  const amp = axis === "Accelerometer" ? 1.4 : 1;
  const series = [
    { name: "X-axis", color: "#2dd4bf", f: [1.7, 4.3, 0.6], a: [0.28, 0.12, 0.08] },
    { name: "Y-axis", color: "#c084fc", f: [2.3, 5.1, 0.9], a: [0.18, 0.1, 0.06] },
    { name: "Z-axis", color: "#f472b6", f: [1.1, 3.7, 0.4], a: [0.14, 0.09, 0.1] },
  ];
  const W = 600;
  const H = 220;
  const path = (s: (typeof series)[number]) => {
    let d = "";
    for (let x = 0; x <= W; x += 6) {
      const u = x / 60 + t * 1.6;
      const y = s.a.reduce((acc, a, k) => acc + a * Math.sin(u * s.f[k] + k * 1.3), 0) * amp;
      d += `${x === 0 ? "M" : "L"}${x},${(H / 2 - y * 220).toFixed(1)}`;
    }
    return d;
  };
  return (
    <div className="flex h-full flex-col">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-[0.875rem] font-medium text-fg">Sensor analytics</p>
        <div className="flex gap-1">
          {(["Accelerometer", "Gyroscope"] as const).map((a) => (
            <button
              key={a}
              onClick={() => setAxis(a)}
              aria-pressed={axis === a}
              className={cn(
                "cursor-pointer border px-2.5 py-1 text-[0.75rem] transition-colors",
                axis === a ? "border-primary bg-primary text-primary-ink" : "border-line text-fg-3 hover:text-fg",
              )}
            >
              {a}
            </button>
          ))}
        </div>
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} className="mt-4 w-full flex-1" role="img" aria-label={`${axis} trace from a survey drive`}>
        {[0.2, 0.5, 0.8].map((g) => (
          <line key={g} x1="0" x2={W} y1={H * g} y2={H * g} stroke="currentColor" className="text-line" strokeDasharray="3 5" />
        ))}
        {series.map((s) => (
          <path key={s.name} d={path(s)} fill="none" stroke={s.color} strokeWidth="1.6" />
        ))}
      </svg>
      <div className="mt-3 flex gap-4 text-[0.75rem] text-fg-3">
        {series.map((s) => (
          <span key={s.name} className="flex items-center gap-1.5">
            <span className="inline-block h-0.5 w-3" style={{ background: s.color }} />
            {s.name}
          </span>
        ))}
      </div>
    </div>
  );
}

function StageVisual({ i }: { i: number }) {
  if (i === 0)
    return (
      <div className="relative h-full">
        <Image src={`${M}/drive-frame.webp`} alt="A frame from a survey drive recorded with the AdAMS app on a dashboard-mounted phone" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
        <span className="absolute top-4 left-4 flex items-center gap-2 bg-black/70 px-2.5 py-1 text-[0.75rem] font-medium text-white">
          <span className="inline-block h-2 w-2 animate-pulse bg-red-500" aria-hidden /> REC
        </span>
        <span className="absolute right-4 bottom-4 bg-black/70 px-2.5 py-1 text-[0.75rem] text-white tabular-nums">Recording 1 · 0:59</span>
      </div>
    );
  if (i === 1)
    return (
      <div className="h-full bg-deep p-6">
        <GyroChart />
      </div>
    );
  if (i === 2)
    return (
      <div className="relative h-full bg-deep">
        <Image src="/media/rec74-frame.webp" alt="A frame from Recording 74 with a stop sign detected and boxed" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
        <span className="absolute top-4 left-4 bg-black/70 px-2.5 py-1 text-[0.75rem] text-white">Recording 74 · 3,085 frames</span>
      </div>
    );
  return (
    <div className="flex h-full items-center justify-center bg-deep p-6">
      <div className="w-full max-w-sm border border-line bg-surface">
        <div className="flex items-center justify-between border-b border-line px-4 py-3">
          <span className="font-display text-[1.25rem] font-semibold text-fg">R7-1</span>
          <span className="text-[0.8125rem] text-fg-3">Track ID 23</span>
        </div>
        <div className="relative aspect-[444/180]">
          <Image src={`${M}/sign-frame.webp`} alt="The video frame in which an R7-1 no-parking sign was seen" fill sizes="384px" className="object-cover" />
        </div>
        <div className="flex items-start gap-3 px-4 py-3">
          <MapPin size={16} className="mt-0.5 text-primary" aria-hidden />
          <p className="text-[0.8125rem] leading-relaxed text-fg-2">
            GPS location
            <span className="block text-fg tabular-nums">46.864087, −96.865637</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export function DriveStory() {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLLIElement | null)[]>([]);
  const reduce = useReducedMotion();
  useEffect(() => {
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setActive(Number((e.target as HTMLElement).dataset.i))),
      { rootMargin: "-45% 0px -45% 0px" },
    );
    refs.current.forEach((r) => r && io.observe(r));
    return () => io.disconnect();
  }, []);
  return (
    <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
      <ol className="lg:col-span-5">
        {stages.map((s, i) => (
          <li
            key={s.id}
            ref={(el) => {
              refs.current[i] = el;
            }}
            data-i={i}
            className="border-t border-line py-10 lg:flex lg:min-h-[60vh] lg:flex-col lg:justify-center lg:py-0"
          >
            <div className={cn("transition-opacity duration-500", active === i ? "opacity-100" : "lg:opacity-35")}>
              <div className="flex items-center gap-3">
                <s.icon size={20} strokeWidth={1.6} className="text-primary" aria-hidden />
                <p className="eyebrow">
                  Stage {i + 1} of {stages.length}
                </p>
              </div>
              <h3 className="mt-5 font-display text-[2.25rem] leading-none font-semibold tracking-[-0.03em] text-fg sm:text-[3rem]">{s.title}</h3>
              <p className="mt-5 max-w-[44ch] text-[1.0625rem] leading-relaxed text-fg-2">{s.text}</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {s.meta.map((m) => (
                  <li key={m} className="border border-line px-2.5 py-1 text-[0.75rem] text-fg-3">
                    {m}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8 aspect-[16/10] overflow-clip border border-line lg:hidden">
              <StageVisual i={i} />
            </div>
          </li>
        ))}
      </ol>
      <div className="hidden lg:col-span-7 lg:block">
        <div className="sticky top-[calc(50vh-15rem)] h-[30rem] overflow-clip border border-line bg-surface">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={active}
              className="absolute inset-0"
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, y: -16 }}
              transition={{ duration: 0.45, ease: EASE }}
            >
              <StageVisual i={active} />
            </motion.div>
          </AnimatePresence>
          <div className="absolute inset-x-0 bottom-0 flex">
            {stages.map((s, i) => (
              <span key={s.id} className={cn("h-0.5 flex-1 transition-colors duration-500", i <= active ? "bg-primary" : "bg-white/15")} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------------ */
/* Start an analysis: a working replica of the AdAMS analysis screen        */

const models = [
  {
    id: "distress",
    icon: Gauge,
    name: "Distress Detection",
    sub: "AI surface damage analysis",
    result: "Cracks, potholes and raveling found in the video, each graded from Level 1 (minor) to Level 5 (critical).",
  },
  {
    id: "pci",
    icon: Activity,
    name: "Pavement Condition Index",
    sub: "Includes IRI calculation",
    result: "A condition index for each segment, with the roughness calculation included.",
  },
  {
    id: "iri",
    icon: Waves,
    name: "International Roughness Index",
    sub: "Ride quality measurement",
    result: "An IRI score for every segment driven, banded from excellent to poor on the asset map.",
  },
];
const states = ["Queued", "Processing", "Running models", "Results"];
const recs = ["Recording 1", "Recording 2", "Recording 3", "Recording 4"];

export function AnalysisConsole() {
  const [on, setOn] = useState<Set<string>>(new Set(["distress", "iri"]));
  const [picked, setPicked] = useState<Set<string>>(new Set(["Recording 1", "Recording 2"]));
  const [stage, setStage] = useState(-1);
  const [log, setLog] = useState<string[]>([]);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const running = stage >= 0 && stage < 3;
  const done = stage === 3;
  const ready = on.size > 0 && picked.size > 0;

  const toggle = (set: Set<string>, v: string, fn: (s: Set<string>) => void) => {
    if (running) return;
    const n = new Set(set);
    if (n.has(v)) n.delete(v);
    else n.add(v);
    fn(n);
    setStage(-1);
    setLog([]);
  };

  const run = () => {
    timers.current.forEach(clearTimeout);
    const chosen = models.filter((m) => on.has(m.id)).map((m) => m.name);
    const lines = [
      `Queued ${picked.size} recording${picked.size > 1 ? "s" : ""} for Giffard-MoT`,
      "Extracting frames and sensor traces",
      ...chosen.map((c) => `Running ${c}`),
      "Writing results to the asset map",
    ];
    setLog([]);
    setStage(0);
    const step = 700;
    lines.forEach((l, k) => timers.current.push(setTimeout(() => setLog((x) => [...x, l]), k * step)));
    [1, 2, 3].forEach((s) => timers.current.push(setTimeout(() => setStage(s), s === 3 ? lines.length * step : s * step + (s === 2 ? step : 0))));
  };
  useEffect(() => () => timers.current.forEach(clearTimeout), []);

  const pct = stage < 0 ? 0 : Math.round(((stage + (done ? 1 : 0.5)) / 4) * 100);

  return (
    <div className="border border-line bg-deep">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-line px-5 py-4">
        <p className="text-[0.875rem] text-fg-2">{ready ? "Pick recordings and models, then start the analysis." : "Select at least one recording and one model."}</p>
        <button
          onClick={done ? () => (setStage(-1), setLog([])) : run}
          disabled={!ready || running}
          className="btn btn-primary min-h-10 cursor-pointer px-4 disabled:cursor-not-allowed disabled:opacity-40"
        >
          {done ? <RotateCcw size={16} aria-hidden /> : <Play size={16} aria-hidden />}
          {done ? "Reset" : running ? "Running" : "Start analysis"}
        </button>
      </div>

      <div className="grid lg:grid-cols-12">
        {/* Controls */}
        <div className="border-b border-line p-5 lg:col-span-4 lg:border-r lg:border-b-0">
          <p className="eyebrow text-fg-3">Detection models</p>
          <ul className="mt-4 space-y-2">
            {models.map((m) => {
              const sel = on.has(m.id);
              return (
                <li key={m.id}>
                  <button
                    onClick={() => toggle(on, m.id, setOn)}
                    aria-pressed={sel}
                    className={cn(
                      "flex w-full cursor-pointer items-center gap-3 border px-3 py-3 text-left transition-colors",
                      sel ? "border-primary/60 bg-surface" : "border-line hover:border-fg-3",
                    )}
                  >
                    <m.icon size={18} strokeWidth={1.6} className={sel ? "text-primary" : "text-fg-3"} aria-hidden />
                    <span className="flex-1">
                      <span className="block text-[0.875rem] font-medium text-fg">{m.name}</span>
                      <span className="block text-[0.75rem] text-fg-3">{m.sub}</span>
                    </span>
                    <span className={cn("relative h-5 w-9 border transition-colors", sel ? "border-primary bg-primary" : "border-line bg-surface-2")}>
                      <span className={cn("absolute top-0.5 h-3.5 w-3.5 bg-white transition-all", sel ? "left-[1.1rem]" : "left-0.5")} />
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
          <p className="eyebrow mt-7 text-fg-3">Recordings</p>
          <ul className="mt-4 grid grid-cols-2 gap-2">
            {recs.map((r) => {
              const sel = picked.has(r);
              return (
                <li key={r}>
                  <button
                    onClick={() => toggle(picked, r, setPicked)}
                    aria-pressed={sel}
                    className={cn(
                      "flex w-full cursor-pointer items-center gap-2 border px-3 py-2.5 text-left text-[0.8125rem] transition-colors",
                      sel ? "border-primary/60 text-fg" : "border-line text-fg-3 hover:text-fg",
                    )}
                  >
                    <span className={cn("flex h-4 w-4 items-center justify-center border", sel ? "border-primary bg-primary text-primary-ink" : "border-line")}>
                      {sel && <Check size={12} strokeWidth={3} aria-hidden />}
                    </span>
                    {r}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Workflow */}
        <div className="flex flex-col p-5 lg:col-span-8">
          <div className="flex items-end justify-between">
            <div>
              <p className="eyebrow text-fg-3">Workflow state</p>
              <p className="mt-2 text-[0.9375rem] font-medium text-fg">{stage < 0 ? "Ready to start" : states[stage]}</p>
            </div>
            <p className="font-display text-[2rem] leading-none font-semibold text-fg tabular-nums">{pct}%</p>
          </div>
          <div className="mt-4 h-1 bg-surface-2">
            <motion.div className="h-full bg-primary" animate={{ width: `${pct}%` }} transition={{ duration: 0.6, ease: EASE }} />
          </div>
          <ol className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
            {states.map((s, k) => (
              <li
                key={s}
                className={cn(
                  "border px-3 py-2.5 text-[0.8125rem] transition-colors duration-300",
                  k < stage || done ? "border-primary/40 text-fg" : k === stage ? "border-primary text-fg" : "border-line text-fg-3",
                )}
              >
                <span className="block text-[0.6875rem] text-fg-3">{k + 1}</span>
                {s}
              </li>
            ))}
          </ol>

          <div className="mt-5 grid flex-1 gap-4 md:grid-cols-2">
            <div className="min-h-44 border border-line p-4">
              <p className="eyebrow text-fg-3">Activity log</p>
              <ul className="mt-3 space-y-1.5 text-[0.8125rem] text-fg-2" aria-live="polite">
                {log.length === 0 && <li className="text-fg-3">Pipeline activity streams here once the analysis runs.</li>}
                {log.map((l, k) => (
                  <motion.li key={l + k} initial={{ opacity: 0, x: -6 }} animate={{ opacity: 1, x: 0 }} className="flex gap-2">
                    <span className="text-primary">›</span>
                    {l}
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="min-h-44 border border-line p-4">
              <p className="eyebrow text-fg-3">Results</p>
              {done ? (
                <ul className="mt-3 space-y-3">
                  {models
                    .filter((m) => on.has(m.id))
                    .map((m, k) => (
                      <motion.li key={m.id} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: k * 0.12 }}>
                        <p className="text-[0.8125rem] font-medium text-fg">{m.name}</p>
                        <p className="mt-0.5 text-[0.8125rem] leading-relaxed text-fg-2">{m.result}</p>
                      </motion.li>
                    ))}
                </ul>
              ) : (
                <p className="mt-3 text-[0.8125rem] text-fg-3">Results appear on the asset map and in a report when the run completes.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------------ */
/* Ride quality: the IRI bands used on the asset map                        */

const bands = [
  { name: "Excellent", range: "0 – 95", color: "#22c55e", text: "A smooth ride." },
  { name: "Good", range: "95 – 121", color: "#4ade80", text: "Slight roughness you can feel." },
  { name: "Fair", range: "121 – 170", color: "#eab308", text: "Noticeable roughness on the drive." },
  { name: "Bad", range: "170 – 220", color: "#f97316", text: "A rough ride." },
  { name: "Poor", range: "220 +", color: "#ef4444", text: "A very rough ride, first in line for attention." },
];

export function RideQuality() {
  const [b, setB] = useState(2);
  const band = bands[b];
  return (
    <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-16">
      <div className="lg:col-span-5">
        <div role="tablist" aria-label="IRI bands" className="flex">
          {bands.map((x, i) => (
            <button
              key={x.name}
              role="tab"
              aria-selected={i === b}
              onClick={() => setB(i)}
              className="group flex-1 cursor-pointer text-left"
            >
              <span className={cn("block h-3 transition-all duration-300", i === b ? "h-6" : "group-hover:h-4")} style={{ background: x.color }} />
              <span className={cn("mt-3 block text-[0.75rem] font-medium transition-colors sm:text-[0.8125rem]", i === b ? "text-fg" : "text-fg-3")}>{x.name}</span>
            </button>
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.div key={band.name} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.3 }} className="mt-10">
            <p className="eyebrow">IRI {band.range} in/mi</p>
            <p className="mt-3 font-display text-[3.5rem] leading-none font-semibold tracking-[-0.04em] text-fg">{band.name}</p>
            <p className="mt-4 max-w-[36ch] text-[1.0625rem] leading-relaxed text-fg-2">{band.text}</p>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="relative lg:col-span-7">
        <div className="relative aspect-[1719/864] overflow-clip border border-line">
          <Image src={`${M}/iri-map.webp`} alt="Road segments across Fargo coloured by IRI band on the AdAMS asset map" fill sizes="(min-width: 1024px) 58vw, 100vw" className="object-cover" />
          <motion.div
            className="pointer-events-none absolute inset-0 mix-blend-multiply"
            animate={{ backgroundColor: band.color }}
            style={{ opacity: 0.12 }}
            transition={{ duration: 0.4 }}
          />
        </div>
        <div className="absolute -bottom-5 left-5 flex items-center gap-3 border border-line bg-bg px-4 py-3">
          <span className="inline-block h-3 w-3" style={{ background: band.color }} />
          <span className="text-[0.8125rem] text-fg">
            {band.name} segments, IRI {band.range}
          </span>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------------ */
/* PaveXpert: the copilot built into AdAMS                                  */

const prompts = [
  {
    q: "Open analyses on pavement detection",
    a: "Here are the completed pavement analyses for Giffard-MoT:",
    list: ["Pavement Asset Analysis · July 6th, 2026", "Pavement Asset Analysis · June 27th, 2026", "Pavement Asset Analysis · June 21st, 2026"],
  },
  {
    q: "Summarize active roadway projects",
    a: "31 projects are active. Giffard-MoT, for example, holds:",
    list: ["22 recordings", "7 analyses", "3 reports"],
  },
  {
    q: "Stage a new roadway analysis",
    a: "I have staged a new analysis. Pick the recordings and models, then start it:",
    list: ["Project · Giffard-MoT", "Analysis type · Pavement Asset Analysis", "Name · Pavement Asset Analysis, November 8th, 2026"],
  },
];

export function Copilot() {
  const [chat, setChat] = useState<{ q: string; a: string; list: string[] }[]>([prompts[1]]);
  const [typing, setTyping] = useState(false);
  const ask = (p: (typeof prompts)[number]) => {
    if (typing) return;
    setChat((c) => [...c.slice(-1), { q: p.q, a: "", list: [] }]);
    setTyping(true);
    setTimeout(() => {
      setChat((c) => [...c.slice(0, -1), p]);
      setTyping(false);
    }, 900);
  };
  return (
    <div className="flex h-full min-h-[30rem] flex-col border border-line bg-deep">
      <div className="flex items-center justify-between border-b border-line px-4 py-3">
        <span className="flex items-center gap-2 text-[0.875rem] font-medium text-fg">
          <span className="flex h-6 w-6 items-center justify-center bg-primary text-primary-ink">
            <ScanSearch size={14} aria-hidden />
          </span>
          PaveXpert
        </span>
        <span className="text-[0.75rem] text-fg-3">ADAMS / projects / Giffard-MoT</span>
      </div>
      <div className="flex-1 space-y-5 overflow-y-auto p-5" aria-live="polite">
        {chat.length === 0 && (
          <div className="flex h-full flex-col items-center justify-center text-center">
            <p className="font-medium text-fg">How can I assist you?</p>
            <p className="mt-2 max-w-[34ch] text-[0.8125rem] text-fg-3">Ask about road surveys, traffic cameras, hazard cases, or give a command.</p>
          </div>
        )}
        {chat.map((m, k) => (
          <div key={k} className="space-y-3">
            <p className="ml-auto w-fit max-w-[85%] bg-primary px-3.5 py-2 text-[0.875rem] text-primary-ink">{m.q}</p>
            {m.a ? (
              <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="max-w-[90%] border border-line bg-surface px-4 py-3">
                <p className="text-[0.875rem] text-fg">{m.a}</p>
                <ul className="mt-2 space-y-1">
                  {m.list.map((l) => (
                    <li key={l} className="flex gap-2 text-[0.8125rem] text-fg-2">
                      <span className="text-primary">›</span>
                      {l}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ) : (
              <div className="flex w-fit gap-1 border border-line bg-surface px-4 py-3" aria-label="PaveXpert is typing">
                {[0, 1, 2].map((d) => (
                  <motion.span key={d} className="h-1.5 w-1.5 bg-fg-3" animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 0.9, repeat: Infinity, delay: d * 0.15 }} />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="border-t border-line p-4">
        <div className="flex flex-wrap gap-2">
          {prompts.map((p) => (
            <button
              key={p.q}
              onClick={() => ask(p)}
              disabled={typing}
              className="cursor-pointer border border-line px-3 py-1.5 text-[0.8125rem] text-fg-2 transition-colors hover:border-primary hover:text-fg disabled:opacity-50"
            >
              {p.q}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

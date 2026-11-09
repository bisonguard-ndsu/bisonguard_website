import Image from "next/image";
import Link from "next/link";
import { FileText, MapPin } from "lucide-react";
import { FaqJsonLd, FaqList } from "@/components/faq";
import { CountUp, Reveal } from "@/components/motion";
import { AnalysisConsole, Copilot, DriveStory, HeroViews, RideQuality } from "@/components/products/adams-ui";
import { ButtonLink, Crumbs } from "@/components/sections";
import { getApp } from "@/content/apps";
import { productFaqs } from "@/content/faqs";

const M = "/media/products/adams";

const facts = [
  { value: "234", label: "traffic signs on the asset map" },
  { value: "178", label: "pavement distresses located" },
  { value: "4,436", label: "road segments rated for condition" },
  { value: "5", label: "severity levels for every defect" },
];

const layers = [
  "Traffic signs",
  "Road conditions",
  "Road markings",
  "Work orders",
  "Guardrails",
  "Street lights",
  "Fire hydrants",
  "Poles",
  "Garbage cans",
  "Traffic cones",
  "Traffic lights",
  "Delineators",
];

const severity = ["#4ade80", "#a3e635", "#eab308", "#f97316", "#ef4444"];

const totals = [
  { value: "677", label: "field recordings uploaded" },
  { value: "56", label: "analyses run" },
  { value: "32", label: "projects in AdAMS" },
];

export function AdamsPage() {
  const app = getApp("adams");
  const faqs = productFaqs.adams ?? [];

  return (
    <>
      {/* 1. Hero: the product itself, not a stock photo */}
      <section className="relative bg-deep pt-10 pb-16 lg:pt-14 lg:pb-24" aria-labelledby="adams-title">
        <div className="wrap">
          <Crumbs items={[{ label: "Products", href: "/products" }]} current="AdAMS" />
          <div className="mt-10 grid gap-8 lg:mt-14 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <Reveal y={12}>
                <p className="eyebrow">AdAMS · Advanced Asset Management System</p>
              </Reveal>
              <Reveal delay={0.05}>
                <h1 id="adams-title" className="mt-5 font-display text-[2.75rem] leading-[0.98] font-semibold tracking-[-0.04em] text-fg sm:text-[4rem] lg:text-[5.25rem]">
                  Drive the network once. Map every asset and defect.
                </h1>
              </Reveal>
            </div>
            <Reveal delay={0.15} className="lg:col-span-4">
              <p className="text-[1.0625rem] leading-relaxed text-fg-2">
                A phone on the dashboard is all it takes. AdAMS turns the video into a geolocated record of every sign, marking and light, every crack and pothole, and the ride quality of every segment.
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
                <ButtonLink href="/contact">Book a demo</ButtonLink>
                {app?.url && (
                  <a href={app.url} target="_blank" rel="noopener noreferrer" className="text-link">
                    Sign in to AdAMS
                  </a>
                )}
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.25} className="mt-12 lg:mt-16">
            <HeroViews />
          </Reveal>
          <dl className="mt-12 grid grid-cols-2 gap-y-8 lg:mt-16 lg:grid-cols-4">
            {facts.map((f, i) => (
              <Reveal key={f.label} delay={i * 0.06} className="border-l border-line pl-5">
                <dt className="sr-only">{f.label}</dt>
                <dd>
                  <CountUp value={f.value} className="block font-display text-[2.5rem] leading-none font-semibold tracking-[-0.03em] text-fg sm:text-[3rem]" />
                  <span className="mt-3 block max-w-[20ch] text-[0.875rem] text-fg-3">{f.label}</span>
                </dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      {/* 2. One drive, four stages */}
      <section className="section bg-bg" aria-labelledby="drive-title">
        <div className="wrap">
          <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <Reveal y={12}>
                <p className="eyebrow">From the road to the map</p>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 id="drive-title" className="t-h2 mt-5 max-w-[16ch] text-fg">
                  One drive, four stages
                </h2>
              </Reveal>
            </div>
            <Reveal delay={0.1} className="text-[1.0625rem] leading-relaxed text-fg-2 lg:col-span-5">
              <p>No survey van and no special sensors. Follow a single recording from the dashboard to a pin on the map.</p>
            </Reveal>
          </div>
          <div className="mt-14 lg:mt-20">
            <DriveStory />
          </div>
        </div>
      </section>

      {/* 3. Analysis console */}
      <section className="section bg-surface" aria-labelledby="analysis-title">
        <div className="wrap">
          <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-6">
              <Reveal y={12}>
                <p className="eyebrow">Try it</p>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 id="analysis-title" className="t-h2 mt-5 max-w-[14ch] text-fg">
                  Choose what to measure
                </h2>
              </Reveal>
            </div>
            <Reveal delay={0.1} className="text-[1.0625rem] leading-relaxed text-fg-2 lg:col-span-5 lg:col-start-8">
              <p>This is the analysis screen from AdAMS. Switch models on or off, pick recordings and start a run to see what comes back.</p>
            </Reveal>
          </div>
          <Reveal delay={0.1} className="mt-12 lg:mt-16">
            <AnalysisConsole />
          </Reveal>
        </div>
      </section>

      {/* 4. Ride quality and severity (the one light section) */}
      <section className="section theme-light" aria-labelledby="ride-title">
        <div className="wrap">
          <Reveal y={12}>
            <p className="eyebrow">Condition</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 id="ride-title" className="t-h2 mt-5 max-w-[18ch] text-fg">
              Ride quality for every segment you drive
            </h2>
          </Reveal>
          <div className="mt-14 lg:mt-20">
            <RideQuality />
          </div>

          <div className="mt-24 grid gap-12 border-t border-line pt-14 lg:mt-32 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <h3 className="font-display text-[1.75rem] font-semibold tracking-[-0.03em] text-fg">Distress, graded from Level 1 to Level 5</h3>
              <p className="mt-3 max-w-[44ch] text-[1rem] leading-relaxed text-fg-2">
                Cracks, potholes and raveling are each given a level, from minor to critical, so crews see the worst first.
              </p>
              <ol className="mt-8 flex items-end gap-2" aria-label="Severity levels">
                {severity.map((c, i) => (
                  <li key={c} className="flex-1">
                    <span className="block" style={{ background: c, height: `${1 + i * 0.9}rem` }} />
                    <span className="mt-2 block text-[0.8125rem] text-fg-2">Level {i + 1}</span>
                  </li>
                ))}
              </ol>
              <div className="mt-2 flex justify-between text-[0.75rem] text-fg-3">
                <span>Minor</span>
                <span>Critical</span>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h3 className="font-display text-[1.75rem] font-semibold tracking-[-0.03em] text-fg">Twelve layers on one map</h3>
              <p className="mt-3 max-w-[44ch] text-[1rem] leading-relaxed text-fg-2">Switch each layer on or off and open any point to see the frame it came from.</p>
              <ul className="mt-8 grid grid-cols-2 border-t border-line sm:grid-cols-3">
                {layers.map((l) => (
                  <li key={l} className="border-b border-line py-3 pr-3 text-[0.9375rem] text-fg">
                    {l}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 5. PaveXpert */}
      <section className="section bg-bg" aria-labelledby="pavexpert-title">
        <div className="wrap grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal y={12}>
              <p className="eyebrow">PaveXpert</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 id="pavexpert-title" className="t-h2 mt-5 max-w-[14ch] text-fg">
                Ask your road data a question
              </h2>
            </Reveal>
            <Reveal delay={0.1} className="mt-6 max-w-[42ch] text-[1.0625rem] leading-relaxed text-fg-2">
              <p>
                PaveXpert is the assistant built into AdAMS. Ask about surveys, cameras and hazard cases, or tell it what to do: open analyses, summarise projects, stage a new run.
              </p>
            </Reveal>
            <Reveal delay={0.15} className="mt-6 text-[0.875rem] text-fg-3">
              <p>Pick a prompt to see how it answers.</p>
            </Reveal>
          </div>
          <Reveal delay={0.1} className="lg:col-span-7">
            <Copilot />
          </Reveal>
        </div>
      </section>

      {/* 6. Reports and work orders */}
      <section className="section bg-deep" aria-labelledby="output-title">
        <div className="wrap">
          <Reveal y={12}>
            <p className="eyebrow">What you hand on</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 id="output-title" className="t-h2 mt-5 max-w-[20ch] text-fg">
              Reports for leadership, work orders for crews
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 lg:mt-20 lg:grid-cols-12">
            <Reveal className="group border border-line bg-surface p-6 sm:p-10 lg:col-span-7">
              <div className="flex items-center gap-3 text-[0.8125rem] text-fg-3">
                <FileText size={16} aria-hidden />
                Giffard-MoT · pavement_asset_analysis · 7 pages
              </div>
              <div className="relative mt-6 aspect-[691/440] overflow-clip bg-white shadow-[0_30px_80px_-30px_rgba(0,0,0,0.7)] transition-transform duration-500 group-hover:-translate-y-1">
                <Image src={`${M}/report-cover.webp`} alt="Cover of a Road Asset Analysis and Assessment Report generated by AdAMS for Giffard-MoT" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover object-top" />
              </div>
              <p className="mt-6 max-w-[48ch] text-[1rem] leading-relaxed text-fg-2">
                Each analysis can produce a PDF report, from the distress detection results to the project reference, ready to send on.
              </p>
            </Reveal>
            <Reveal delay={0.1} className="flex flex-col border border-line bg-surface p-6 sm:p-10 lg:col-span-5">
              <p className="eyebrow text-fg-3">Work order</p>
              <div className="mt-6 flex-1 border border-line bg-bg p-5">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <p className="font-medium text-fg">KNUST Road Inspection</p>
                  <span className="border border-primary/50 px-2 py-0.5 text-[0.75rem] text-primary">In progress</span>
                </div>
                <p className="mt-3 text-[0.875rem] leading-relaxed text-fg-2">
                  Routine visual assessment of the campus road network: potholes, alligator cracking and rutting, the visibility of markings and regulatory signs, and pedestrian crossings. Deliver a prioritised repair report with photographic evidence.
                </p>
                <div className="mt-5 flex justify-between border-t border-line pt-4 text-[0.8125rem]">
                  <span className="text-fg-3">Due Sep 6, 2026</span>
                  <span className="text-fg-3">
                    Priority <span className="font-medium text-red-400">High</span>
                  </span>
                </div>
              </div>
              <p className="mt-6 text-[1rem] leading-relaxed text-fg-2">Turn a defect into a work order, assign it and follow it until the repair is done.</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 7. In the field */}
      <section className="section bg-bg" aria-labelledby="field-title">
        <div className="wrap">
          <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <Reveal y={12}>
                <p className="eyebrow">In the field</p>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 id="field-title" className="t-h2 mt-5 max-w-[16ch] text-fg">
                  Surveyed on two continents
                </h2>
              </Reveal>
            </div>
            <dl className="grid grid-cols-3 gap-4 lg:col-span-5">
              {totals.map((t) => (
                <div key={t.label}>
                  <dt className="sr-only">{t.label}</dt>
                  <dd>
                    <CountUp value={t.value} className="block font-display text-[2rem] leading-none font-semibold text-fg" />
                    <span className="mt-2 block text-[0.8125rem] text-fg-3">{t.label}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="mt-14 grid gap-6 lg:mt-20 lg:grid-cols-2">
            <Reveal>
              <Link href="/work/fargo-west-fargo-survey" className="group block">
                <div className="relative aspect-[16/10] overflow-clip border border-line">
                  <Image src={`${M}/assets-map.webp`} alt="Traffic signs and road segments across Fargo and West Fargo on the AdAMS map" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
                </div>
                <p className="mt-5 flex items-center gap-2 text-[0.8125rem] text-fg-3">
                  <MapPin size={14} aria-hidden /> Fargo and West Fargo, North Dakota
                </p>
                <h3 className="mt-2 font-display text-[1.5rem] font-semibold tracking-[-0.03em] text-fg transition-colors group-hover:text-primary">Signs and pavement across two cities</h3>
                <span className="text-link mt-2">Read the case study</span>
              </Link>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="relative aspect-[16/10] overflow-clip border border-line">
                <Image src={`${M}/drive-frame.webp`} alt="A street recorded for the Giffard-MoT project" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
              </div>
              <p className="mt-5 flex items-center gap-2 text-[0.8125rem] text-fg-3">
                <MapPin size={14} aria-hidden /> Giffard-MoT project
              </p>
              <h3 className="mt-2 font-display text-[1.5rem] font-semibold tracking-[-0.03em] text-fg">22 recordings, 7 analyses, 3 reports</h3>
              <p className="mt-2 max-w-[48ch] text-[1rem] leading-relaxed text-fg-2">Recorded with accelerometer, GPS and gyroscope, and run through pavement and traffic-sign analyses.</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 8. Questions */}
      {faqs.length > 0 && (
        <section id="questions" className="section scroll-mt-20 border-t border-line bg-bg" aria-labelledby="questions-title">
          <FaqJsonLd items={faqs} />
          <div className="wrap grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <p className="eyebrow">Questions</p>
              <h2 id="questions-title" className="t-h2 mt-5 text-fg">
                About AdAMS
              </h2>
              <Link href="/faq" className="text-link mt-6">
                All questions
              </Link>
            </div>
            <div className="lg:col-span-8">
              <FaqList items={faqs} />
            </div>
          </div>
        </section>
      )}

      {/* 9. Close */}
      <section className="relative isolate overflow-clip bg-deep" aria-labelledby="adams-cta">
        <Image src={`${M}/assets-map.webp`} alt="" fill sizes="100vw" className="-z-20 object-cover opacity-25" />
        <div aria-hidden className="absolute inset-0 -z-10 bg-deep/70" />
        <div className="wrap py-24 lg:py-36">
          <h2 id="adams-cta" className="t-h1 max-w-[16ch] text-fg">
            See AdAMS on your own roads
          </h2>
          <p className="mt-6 max-w-[46ch] text-[1.125rem] leading-relaxed text-fg-2">Book a demo and an engineer will walk you through the map, the defects and the reports.</p>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3">
            <ButtonLink href="/contact">Book a demo</ButtonLink>
            <Link href="/products" className="text-link">
              All products
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

import Image from "next/image";
import Link from "next/link";
import { FaqJsonLd, FaqList } from "@/components/faq";
import { CountUp, Reveal } from "@/components/motion";
import { AnalysisSummary, ModuleTour, RecordManager, ScheduleBar, VideoWall } from "@/components/products/tmc-ui";
import { ButtonLink, Crumbs } from "@/components/sections";
import { getApp } from "@/content/apps";
import { productFaqs } from "@/content/faqs";

const M = "/media/products/tmc";

const ops = [
  { value: "37", label: "cameras connected" },
  { value: "37", label: "online now" },
  { value: "13", label: "recordings" },
  { value: "17", label: "analyses completed" },
];

function Heading({ eyebrow, title, id, lead, wide }: { eyebrow: string; title: string; id: string; lead?: string; wide?: boolean }) {
  return (
    <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
      <div className={wide ? "lg:col-span-8" : "lg:col-span-6"}>
        <Reveal y={12}>
          <p className="eyebrow">{eyebrow}</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 id={id} className="t-h2 mt-5 max-w-[18ch] text-fg">
            {title}
          </h2>
        </Reveal>
      </div>
      {lead && (
        <Reveal delay={0.1} className="text-[1.0625rem] leading-relaxed text-fg-2 lg:col-span-4 lg:col-start-9">
          <p>{lead}</p>
        </Reveal>
      )}
    </div>
  );
}

export function TmcPage() {
  const app = getApp("tmc");
  const faqs = productFaqs["traffic-management"] ?? [];

  return (
    <>
      {/* 1. Hero: the video wall */}
      <section className="bg-deep pt-10 pb-14 lg:pt-14 lg:pb-20" aria-labelledby="tmc-title">
        <div className="wrap">
          <Crumbs items={[{ label: "Products", href: "/products" }]} current="TMC" />
          <div className="mt-10 grid gap-10 lg:mt-14 lg:grid-cols-12 lg:items-center lg:gap-12">
            <div className="lg:col-span-5">
              <Reveal y={12}>
                <p className="eyebrow">TMC · Traffic management centre</p>
              </Reveal>
              <Reveal delay={0.05}>
                <h1 id="tmc-title" className="mt-5 font-display text-[2.75rem] leading-[0.98] font-semibold tracking-[-0.04em] text-fg sm:text-[4rem] lg:text-[4.5rem]">
                  Every camera, live on one screen
                </h1>
              </Reveal>
              <Reveal delay={0.12} className="mt-6 max-w-[42ch] text-[1.0625rem] leading-relaxed text-fg-2">
                <p>Watch the cameras you already run, record the periods you study, and turn the footage into volume, speed and classification your operations team can act on.</p>
              </Reveal>
              <Reveal delay={0.18} className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
                <ButtonLink href="/contact">Book a demo</ButtonLink>
                {app?.url && (
                  <a href={app.url} target="_blank" rel="noopener noreferrer" className="text-link">
                    Sign in to TMC
                  </a>
                )}
              </Reveal>
            </div>
            <Reveal delay={0.2} className="lg:col-span-7">
              <VideoWall />
            </Reveal>
          </div>

          <dl className="mt-14 grid grid-cols-2 border border-line lg:mt-20 lg:grid-cols-4">
            {ops.map((o, i) => (
              <div key={o.label} className="flex items-center gap-4 border-line px-5 py-5 odd:border-r lg:border-r lg:last:border-r-0 [&:nth-child(-n+2)]:border-b lg:[&:nth-child(-n+2)]:border-b-0">
                {i === 1 && <span className="inline-block h-2 w-2 animate-pulse bg-emerald-400" aria-hidden />}
                <dt className="sr-only">{o.label}</dt>
                <dd className="flex items-baseline gap-3">
                  <CountUp value={o.value} className="font-display text-[2rem] leading-none font-semibold text-fg" />
                  <span className="text-[0.8125rem] text-fg-3">{o.label}</span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* 2. The network on a map */}
      <section className="section bg-bg" aria-labelledby="network-title">
        <div className="wrap">
          <Heading eyebrow="The network" id="network-title" title="Every camera on the map" lead="Each connected camera has its place on the map and its status at a glance, so operators know what is online before they need it." />
          <Reveal className="relative mt-12 lg:mt-16">
            <div className="relative aspect-[1456/345] min-h-56 overflow-clip border border-line">
              <Image src={`${M}/camera-map.webp`} alt="Camera locations around St. Louis on the TMC map" fill sizes="(min-width: 1344px) 1248px, 100vw" className="object-cover" />
            </div>
            <div className="mt-4 flex flex-wrap gap-x-8 gap-y-2 text-[0.875rem] text-fg-3 lg:absolute lg:right-6 lg:bottom-6 lg:mt-0 lg:border lg:border-line lg:bg-deep lg:px-5 lg:py-4">
              <span>
                <span className="font-medium text-fg">37</span> cameras around St. Louis, Missouri
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 3. Record */}
      <section className="section bg-surface" aria-labelledby="record-title">
        <div className="wrap">
          <Heading eyebrow="Try it" id="record-title" title="Pick the feeds, press record" lead="This is the record manager from TMC. Choose cameras, watch the previews and start a session." />
          <Reveal delay={0.1} className="mt-12 lg:mt-16">
            <RecordManager />
          </Reveal>
        </div>
      </section>

      {/* 4. Schedule (the light section) */}
      <section className="section theme-light" aria-labelledby="schedule-title">
        <div className="wrap grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <Reveal y={12}>
              <p className="eyebrow">Scheduled recording</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 id="schedule-title" className="t-h2 mt-5 text-fg">
                Record only the hours you study
              </h2>
            </Reveal>
            <Reveal delay={0.1} className="mt-6 text-[1.0625rem] leading-relaxed text-fg-2">
              <p>Set a window and TMC records it for you, every camera you chose. Drag across the day or pick a preset.</p>
            </Reveal>
          </div>
          <Reveal delay={0.1} className="lg:col-span-8">
            <ScheduleBar />
          </Reveal>
        </div>
      </section>

      {/* 5. Measure */}
      <section className="section bg-deep" aria-labelledby="measure-title">
        <div className="wrap">
          <Heading eyebrow="Traffic analysis" id="measure-title" title="Footage in, traffic figures out" lead="Run an analysis on any recording. Every vehicle is detected, tracked and classified, then summed into the figures below." />
          <Reveal delay={0.1} className="mt-12 lg:mt-16">
            <AnalysisSummary />
          </Reveal>
        </div>
      </section>

      {/* 6. Module tour */}
      <section className="section bg-bg" aria-labelledby="modules-title">
        <div className="wrap">
          <Heading eyebrow="Inside TMC" id="modules-title" title="One workspace for the operations room" wide />
          <div className="mt-12 lg:mt-16">
            <ModuleTour />
          </div>
        </div>
      </section>

      {/* 7. Questions */}
      {faqs.length > 0 && (
        <section id="questions" className="section scroll-mt-20 border-t border-line bg-bg" aria-labelledby="questions-title">
          <FaqJsonLd items={faqs} />
          <div className="wrap grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <p className="eyebrow">Questions</p>
              <h2 id="questions-title" className="t-h2 mt-5 text-fg">
                About TMC
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

      {/* 8. Close: night feed */}
      <section className="relative isolate overflow-clip bg-black" aria-labelledby="tmc-cta">
        <Image src={`${M}/cam-141.webp`} alt="" fill sizes="100vw" className="-z-20 object-cover opacity-40" />
        <div aria-hidden className="absolute inset-0 -z-10 bg-black/55" />
        <div className="wrap py-24 lg:py-36">
          <p className="eyebrow">Day and night</p>
          <h2 id="tmc-cta" className="t-h1 mt-5 max-w-[15ch] text-white">
            Bring your cameras into one room
          </h2>
          <p className="mt-6 max-w-[46ch] text-[1.125rem] leading-relaxed text-white/75">Book a demo and we will show you TMC with feeds like yours: the wall, the recordings and the analysis.</p>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3">
            <ButtonLink href="/contact" variant="light">
              Book a demo
            </ButtonLink>
            <Link href="/products" className="text-link text-white">
              All products
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

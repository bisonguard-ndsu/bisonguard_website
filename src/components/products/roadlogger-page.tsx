import Image from "next/image";
import Link from "next/link";
import { FaqJsonLd, FaqList } from "@/components/faq";
import { Reveal } from "@/components/motion";
import { CaseLifecycle, CrackTimeline, OfflineOutbox } from "@/components/products/roadlogger-ui";
import { ButtonLink, Crumbs } from "@/components/sections";
import { getApp } from "@/content/apps";
import { productFaqs } from "@/content/faqs";

const M = "/media/products/roadlogger";

const levels = [
  { l: 1, name: "Minor", c: "#10b981" },
  { l: 2, name: "Noticeable", c: "#3b82f6" },
  { l: 3, name: "Moderate", c: "#f59e0b" },
  { l: 4, name: "Severe", c: "#f97316" },
  { l: 5, name: "Critical", c: "#ef4444" },
];
const categories = ["Pavement defects", "Drainage and water", "Road surface", "Roadway assets"];

function Heading({ eyebrow, title, id, lead }: { eyebrow: string; title: string; id: string; lead?: string }) {
  return (
    <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
      <div className="lg:col-span-7">
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

export function RoadLoggerPage() {
  const app = getApp("roadlogger");
  const faqs = productFaqs.roadlogger ?? [];

  return (
    <>
      {/* 1. Hero: the road itself */}
      <section className="relative isolate overflow-clip bg-black" aria-labelledby="rl-title">
        <Image src="/media/hero/roadlogger.webp" alt="" fill priority sizes="100vw" className="-z-20 object-cover" />
        <div aria-hidden className="absolute inset-0 -z-10 bg-black/60" />
        <div className="wrap flex min-h-[calc(100svh-4.5rem)] flex-col pt-10 pb-14 lg:pt-14 lg:pb-20">
          <Crumbs items={[{ label: "Products", href: "/products" }]} current="RoadLogger" />
          <div className="mt-auto pt-24">
            <Reveal y={12}>
              <p className="eyebrow">RoadLogger · Field inspections</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 id="rl-title" className="mt-5 max-w-[14ch] font-display text-[2.75rem] leading-[0.98] font-semibold tracking-[-0.04em] text-white sm:text-[4rem] lg:text-[5.5rem]">
                Log it at the roadside. Follow it to the repair.
              </h1>
            </Reveal>
            <Reveal delay={0.12} className="mt-6 max-w-[48ch] text-[1.125rem] leading-relaxed text-white/80">
              <p>Inspectors log defects on their phones, even with no signal. Engineers triage them, and every case stays open until a repair is verified on site.</p>
            </Reveal>
            <Reveal delay={0.18} className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-3">
              <ButtonLink href="/contact" variant="light">
                Book a demo
              </ButtonLink>
              {app?.url && (
                <a href={app.url} target="_blank" rel="noopener noreferrer" className="text-link text-white">
                  Sign in to RoadLogger
                </a>
              )}
            </Reveal>
          </div>
        </div>
      </section>

      {/* 2. One crack, three visits */}
      <section className="section bg-bg" aria-labelledby="crack-title">
        <div className="wrap">
          <Heading eyebrow="One case, three visits" id="crack-title" title="Watch a crack get worse" lead="Each visit adds measurements, a severity level and a note. Step through the inspections of one block crack and see what the engineer sees." />
          <Reveal delay={0.1} className="mt-12 lg:mt-16">
            <CrackTimeline />
          </Reveal>
        </div>
      </section>

      {/* 3. Lifecycle */}
      <section className="section bg-surface" aria-labelledby="lifecycle-title">
        <div className="wrap">
          <Heading
            eyebrow="Case lifecycle"
            id="lifecycle-title"
            title="Open until the repair is verified"
            lead="A finished work order does not close a case. Someone goes back with a phone, inspects the repair, and only then is it resolved."
          />
          <Reveal delay={0.1} className="mt-12 lg:mt-16">
            <CaseLifecycle />
          </Reveal>
        </div>
      </section>

      {/* 4. Severity standard (the light section) */}
      <section className="section theme-light" aria-labelledby="severity-title">
        <div className="wrap grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <Reveal y={12}>
              <p className="eyebrow">One standard</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 id="severity-title" className="t-h2 mt-5 text-fg">
                Every inspector rates the same way
              </h2>
            </Reveal>
            <Reveal delay={0.1} className="mt-6 text-[1.0625rem] leading-relaxed text-fg-2">
              <p>Five severity levels and a fixed set of categories, so a Level 4 means the same thing whoever logged it.</p>
            </Reveal>
          </div>
          <div className="lg:col-span-8">
            <ol className="border-t border-line">
              {levels.map((x, n) => (
                <Reveal as="li" key={x.l} delay={n * 0.05} className="grid grid-cols-[3.5rem_1fr] items-center gap-4 border-b border-line py-4 sm:grid-cols-[3.5rem_10rem_1fr]">
                  <span className="font-display text-[1.5rem] font-semibold text-fg">L{x.l}</span>
                  <span className="text-[1rem] font-medium text-fg">{x.name}</span>
                  <span className="col-span-2 h-3 sm:col-span-1" style={{ background: x.c, width: `${x.l * 20}%` }} />
                </Reveal>
              ))}
            </ol>
            <p className="eyebrow mt-12">Categories</p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {categories.map((c) => (
                <li key={c} className="border border-line px-4 py-2 text-[0.9375rem] text-fg">
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 5. Offline */}
      <section className="section bg-deep" aria-labelledby="offline-title">
        <div className="wrap">
          <Heading eyebrow="Works offline" id="offline-title" title="No signal, nothing lost" lead="Inspections wait in the phone's outbox and send themselves when the crew is back in coverage. Try it: log a few, then turn the signal on." />
          <Reveal delay={0.1} className="mt-12 lg:mt-16">
            <OfflineOutbox />
          </Reveal>
        </div>
      </section>

      {/* 6. Road operation centre */}
      <section className="section bg-bg" aria-labelledby="ops-title">
        <div className="wrap">
          <Heading eyebrow="Road operation centre" id="ops-title" title="Every open case on one map" lead="Supervisors see each case where it is, coloured by severity, beside an action queue of what needs attention first." />
          <Reveal delay={0.1} className="mt-12 lg:mt-16">
            <div className="relative aspect-[1706/344] min-h-56 overflow-clip border border-line">
              <Image src={`${M}/ops-map.webp`} alt="The RoadLogger map of open defect cases in Fargo, North Dakota, with the action queue beside it" fill sizes="(min-width: 1344px) 1248px, 100vw" className="object-cover object-left" />
            </div>
          </Reveal>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:mt-8 lg:grid-cols-3">
            {[
              { k: "Linked to AdAMS", v: "Repair work orders from AdAMS attach to the case, so the repair and the defect share one history." },
              { k: "One tap to the site", v: "Every case opens in Google Maps or as a share link, so a crew can drive straight to it." },
              { k: "Ready for audits", v: "Every visit, photo and status change stays on the case, in order." },
            ].map((x, n) => (
              <Reveal key={x.k} delay={n * 0.06} className="border-t border-line pt-5">
                <p className="text-[1rem] font-medium text-fg">{x.k}</p>
                <p className="mt-2 text-[0.9375rem] leading-relaxed text-fg-2">{x.v}</p>
              </Reveal>
            ))}
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
                About RoadLogger
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

      {/* 8. Close */}
      <section className="relative isolate overflow-clip bg-black" aria-labelledby="rl-cta">
        <Image src="/media/site/roller.webp" alt="" fill sizes="100vw" className="-z-20 object-cover opacity-45" />
        <div aria-hidden className="absolute inset-0 -z-10 bg-black/55" />
        <div className="wrap py-24 lg:py-36">
          <p className="eyebrow">Your crews</p>
          <h2 id="rl-cta" className="t-h1 mt-5 max-w-[15ch] text-white">
            Put inspections on the phones they carry
          </h2>
          <p className="mt-6 max-w-[46ch] text-[1.125rem] leading-relaxed text-white/75">Book a demo and we will set up RoadLogger with your categories and your roads, from the first inspection to a verified repair.</p>
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

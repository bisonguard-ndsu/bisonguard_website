import Image from "next/image";
import Link from "next/link";
import { FaqJsonLd, FaqList } from "@/components/faq";
import { CountUp, Reveal } from "@/components/motion";
import { EvidenceFunnel, ExportPreview, IntersectionCounter, StepTour } from "@/components/products/turnflow-ui";
import { ButtonLink, Crumbs } from "@/components/sections";
import { productFaqs } from "@/content/faqs";

const directory = [
  { value: "27,361", label: "public cameras in the directory" },
  { value: "28", label: "states" },
  { value: "1,245", label: "regions" },
];

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

export function TurnflowPage() {
  const faqs = productFaqs.turnflow ?? [];

  return (
    <>
      {/* 1. Hero: the annotated count, full width */}
      <section className="bg-deep pt-10 pb-14 lg:pt-14 lg:pb-20" aria-labelledby="tf-title">
        <div className="wrap">
          <Crumbs items={[{ label: "Products", href: "/products" }]} current="Turnflow" />
          <div className="mt-10 grid gap-8 lg:mt-14 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <Reveal y={12}>
                <p className="eyebrow">Turnflow · Turning-movement counts</p>
              </Reveal>
              <Reveal delay={0.05}>
                <h1 id="tf-title" className="mt-5 font-display text-[2.75rem] leading-[0.98] font-semibold tracking-[-0.04em] text-fg sm:text-[4rem] lg:text-[5rem]">
                  Intersection counts, from video to report
                </h1>
              </Reveal>
            </div>
            <Reveal delay={0.12} className="lg:col-span-4">
              <p className="text-[1.0625rem] leading-relaxed text-fg-2">Draw the approaches, name the movements and let Turnflow count every vehicle. Each number keeps the clip that produced it.</p>
              <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
                <ButtonLink href="/contact">Book a demo</ButtonLink>
                <span className="text-[0.875rem] text-fg-3">Access by invitation</span>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.18} className="mt-12 lg:mt-16">
            <div className="relative aspect-[1919/1005] overflow-clip border border-line bg-black">
              <Image src="/media/evidence/turnflow-cam9-report.webp" alt="Turnflow's annotated video: each vehicle tracked with an ID, zones on every approach and a running count of each movement" fill priority sizes="(min-width: 1344px) 1248px, 100vw" className="object-cover" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2. The intersection, replayable */}
      <section className="section bg-bg" aria-labelledby="count-title">
        <div className="wrap">
          <Heading eyebrow="One minute at cam_9" id="count-title" title="Twelve movements, fourteen vehicles" lead="These are the counts from the approved 60-second run on the frame above. Replay it, or trace any movement through the intersection." />
          <Reveal delay={0.1} className="mt-12 lg:mt-16">
            <IntersectionCounter />
          </Reveal>
        </div>
      </section>

      {/* 3. Six steps */}
      <section className="section bg-surface" aria-labelledby="steps-title">
        <div className="wrap">
          <Heading eyebrow="How a count is made" id="steps-title" title="Six steps, one screen each" lead="From choosing the source to comparing sessions, this is the Turnflow app, step by step." />
          <Reveal delay={0.1} className="mt-12 lg:mt-16">
            <StepTour />
          </Reveal>
        </div>
      </section>

      {/* 4. Evidence (the light section) */}
      <section className="section theme-light" aria-labelledby="evidence-title">
        <div className="wrap">
          <Heading eyebrow="Counts you can defend" id="evidence-title" title="Not every track is a count" lead="Turnflow follows everything that moves, then counts only the passages between zones. What it leaves out stays on record, with the checks a reviewer needs." />
          <Reveal delay={0.1} className="mt-12 lg:mt-16">
            <EvidenceFunnel />
          </Reveal>
        </div>
      </section>

      {/* 5. Exports */}
      <section className="section bg-deep" aria-labelledby="exports-title">
        <div className="wrap">
          <Heading eyebrow="Exports" id="exports-title" title="Take the counts anywhere" lead="Every session downloads in the format the next person needs, from a spreadsheet to the annotated video." />
          <Reveal delay={0.1} className="mt-12 lg:mt-16">
            <ExportPreview />
          </Reveal>
        </div>
      </section>

      {/* 6. Camera directory */}
      <section className="section bg-bg" aria-labelledby="directory-title">
        <div className="wrap grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal y={12}>
              <p className="eyebrow">No footage yet?</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 id="directory-title" className="t-h2 mt-5 text-fg">
                Start from a public camera
              </h2>
            </Reveal>
            <Reveal delay={0.1} className="mt-6 text-[1.0625rem] leading-relaxed text-fg-2">
              <p>Turnflow keeps a directory of public traffic cameras. Pick one, record the window you need, and count it like any other video.</p>
            </Reveal>
          </div>
          <dl className="grid border border-line sm:grid-cols-3 lg:col-span-7">
            {directory.map((d) => (
              <div key={d.label} className="border-b border-line px-6 py-8 last:border-b-0 sm:border-r sm:border-b-0 sm:last:border-r-0">
                <dt className="sr-only">{d.label}</dt>
                <dd>
                  <CountUp value={d.value} className="block font-display text-[2.75rem] leading-none font-semibold text-fg" />
                  <span className="mt-3 block text-[0.875rem] text-fg-3">{d.label}</span>
                </dd>
              </div>
            ))}
          </dl>
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
                About Turnflow
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
      <section className="relative isolate overflow-clip bg-black" aria-labelledby="tf-cta">
        <Image src="/media/hero/turnflow.webp" alt="" fill sizes="100vw" className="-z-20 object-cover opacity-45" />
        <div aria-hidden className="absolute inset-0 -z-10 bg-black/55" />
        <div className="wrap py-24 lg:py-36">
          <p className="eyebrow">Your intersection</p>
          <h2 id="tf-cta" className="t-h1 mt-5 max-w-[15ch] text-white">
            Send us the video, see the counts
          </h2>
          <p className="mt-6 max-w-[46ch] text-[1.125rem] leading-relaxed text-white/75">Book a demo and we will walk you through Turnflow on an intersection like yours, from zones to the engineering report.</p>
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

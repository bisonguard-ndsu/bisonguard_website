import Image from "next/image";
import Link from "next/link";
import { FaqJsonLd, FaqList } from "@/components/faq";
import { CountUp, Reveal } from "@/components/motion";
import { EvidenceFunnel, ExportPreview, FootageToggle, IntersectionCounter, StepTour, VehicleClasses } from "@/components/products/turnflow-ui";
import { ButtonLink, Crumbs } from "@/components/sections";
import { productFaqs } from "@/content/faqs";

const SITE = "https://turnflow.infinicitylabs.org";

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
                <p className="eyebrow">Turnflow · Video → movement → insight</p>
              </Reveal>
              <Reveal delay={0.05}>
                <h1 id="tf-title" className="mt-5 font-display text-[2.75rem] leading-[0.98] font-semibold tracking-[-0.04em] text-fg sm:text-[4rem] lg:text-[5rem]">
                  Every movement tells a story
                </h1>
              </Reveal>
            </div>
            <Reveal delay={0.12} className="lg:col-span-4">
              <p className="text-[1.0625rem] leading-relaxed text-fg-2">Turn intersection footage into directional counts you can inspect, compare and share, from the first vehicle to the final engineering report.</p>
              <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
                <ButtonLink href={`${SITE}/request-access`}>Create an account</ButtonLink>
                <a href={`${SITE}/signin`} className="text-link">
                  Sign in
                </a>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.18} className="mt-12 lg:mt-16">
            <FootageToggle />
          </Reveal>
        </div>
      </section>

      {/* 2. The intersection, replayable */}
      <section className="section bg-bg" aria-labelledby="count-title">
        <div className="wrap">
          <Heading eyebrow="Camera 9 · run 5d13e66a109d" id="count-title" title="Twelve movements, fifty-nine vehicles" lead="The counts from the saved run above, at 00:03:31. Replay them, or trace any movement through the intersection. These are automated observations, not independently validated totals." />
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

      {/* 3b. Vehicle classes */}
      <section className="section bg-bg" aria-labelledby="classes-title">
        <div className="wrap">
          <Heading eyebrow="13 FHWA classes" id="classes-title" title="More than car, bus or truck" lead="Bring an FHWA-trained model and Turnflow tracks the full 13-class mix, then carries those labels into the counts, the analysis and the reports." />
          <Reveal delay={0.1} className="mt-12 lg:mt-16">
            <VehicleClasses />
          </Reveal>
          <p className="mt-6 max-w-[70ch] text-[0.875rem] leading-relaxed text-fg-3">Classes follow the selected model&apos;s labels. Full FHWA output needs a model trained for these 13 classes.</p>
        </div>
      </section>

      {/* 4. Evidence (the light section) */}
      <section className="section theme-light" aria-labelledby="evidence-title">
        <div className="wrap">
          <Heading eyebrow="Counts you can defend" id="evidence-title" title="Not every track is a count" lead="Turnflow follows everything that moves, then counts only the passages between zones. In this 60-second study, what it left out stays on record, with the checks a reviewer needs." />
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
        <Image src="/media/products/turnflow/camera9-source.webp" alt="" fill sizes="100vw" className="-z-20 object-cover opacity-40" />
        <div aria-hidden className="absolute inset-0 -z-10 bg-black/55" />
        <div className="wrap py-24 lg:py-36">
          <p className="eyebrow">Your intersection</p>
          <h2 id="tf-cta" className="t-h1 mt-5 max-w-[15ch] text-white">
            Your next traffic study starts with a better view
          </h2>
          <p className="mt-6 max-w-[46ch] text-[1.125rem] leading-relaxed text-white/75">A focused workspace for researchers, transportation engineers and the teams turning observations into decisions. Create an account; access is reviewed by the platform administrators.</p>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3">
            <ButtonLink href={`${SITE}/request-access`} variant="light">
              Create an account
            </ButtonLink>
            <Link href="/contact" className="text-link text-white">
              Book a demo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

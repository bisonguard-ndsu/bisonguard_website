import Image from "next/image";
import Link from "next/link";
import FrameRecord from "@/components/frame-record";
import ContactForm from "@/components/contact-form";
import { ArrowLink, Figure, PublicationList, SectionHead, Status } from "@/components/primitives";
import { products, platformExtras } from "@/content/products";
import { metrics, partners, rec74, testimonial } from "@/content/evidence";
import { featuredPublicationTitles, pick } from "@/content/publications";
import { site } from "@/content/site";

export default function Home() {
  return (
    <>
      <Hero />
      <ProofLine />
      <ProductRegister />
      <EvidenceBand />
      <Method />
      <Research />
      <Routes />
      <Testimonial />
      <Contact />
    </>
  );
}

/* 1 ─ Hero ─────────────────────────────────────────────────────────────── */

function Hero() {
  return (
    <section aria-labelledby="hero-title" className="pt-12 pb-16 sm:pt-16 lg:pt-24 lg:pb-24">
      <div className="wrap">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="label text-guide">Computer vision for road agencies and engineers</p>
            <h1 id="hero-title" className="t-display mt-6 max-w-[16ch]">
              Every sign, crack and turning movement, on the record.
            </h1>
          </div>
          <div className="lg:col-span-4 lg:pb-2">
            <p className="t-lead max-w-[42ch] text-ink-2">
              We build software that reads road and traffic video — from a phone on the dashboard or a camera at the
              intersection — and writes the asset inventories, pavement scores and traffic counts engineers act on.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
              <Link href="/contact" className="btn btn-primary">
                Contact us
              </Link>
              <ArrowLink href="/products">See the products</ArrowLink>
            </div>
          </div>
        </div>

        <FrameRecord
          className="mt-12 lg:mt-16"
          priority
          image={{
            src: "/media/rec74-frame.webp",
            alt: "Dash-camera frame from an AdAMS survey drive past a retail car park; a stop sign at right is boxed by the detector.",
            width: 1099,
            height: 501,
          }}
          boxes={[{ x: 0.746, y: 0.4, w: 0.072, h: 0.152, label: "Stop · R1-1" }]}
          meta={[`AdAMS · ${rec74.recording}`, `${rec74.frameTime} / ${rec74.duration}`, `${rec74.frames} frames`]}
          recordTitle="Record written from this drive"
          record={[
            { k: "Recording", v: "74" },
            { k: "Frames analysed", v: rec74.frames },
            { k: "Duration", v: rec74.duration },
            { k: "Signs detected", v: String(rec74.signs), emphasis: true },
          ]}
          list={rec74.classes.slice(0, 6)}
          link={{ label: "How AdAMS works", href: "/products/adams" }}
        />
      </div>
    </section>
  );
}

/* 2 ─ Proof line ───────────────────────────────────────────────────────── */

function ProofLine() {
  return (
    <section aria-label="Organisations we work with" className="border-y border-rule">
      <div className="wrap flex flex-col gap-4 py-6 md:flex-row md:items-center md:gap-10">
        <p className="label shrink-0 text-ink-3">Worked with</p>
        <ul className="flex flex-wrap items-center gap-x-8 gap-y-3">
          {partners.map((p) => (
            <li key={p.name} title={p.full} className="flex items-baseline gap-2">
              <span className="text-[1.0625rem] font-extrabold tracking-[-0.01em] text-ink">{p.name}</span>
              {p.full !== p.name && <span className="hidden text-sm text-ink-3 xl:inline">{p.full}</span>}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* 3 ─ Product register ─────────────────────────────────────────────────── */

function ProductRegister() {
  return (
    <section aria-labelledby="products-title" className="section bg-stone">
      <div className="wrap">
        <SectionHead
          id="products-title"
          label="Products"
          title="Four products. One kind of output: records you can maintain."
          lead="Each one takes video or field data in and gives an engineer something to file, map or act on."
        />

        <div className="mt-12 lg:mt-16">
          <div className="hidden grid-cols-12 gap-6 border-b border-ink pb-3 lg:grid" aria-hidden>
            <span className="label col-span-4 text-ink-3">Product</span>
            <span className="label col-span-3 text-ink-3">Takes in</span>
            <span className="label col-span-4 text-ink-3">Gives back</span>
          </div>
          <ul>
            {products.map((p, i) => (
              <li key={p.slug} className="border-b border-rule">
                <Link href={p.href} className="group grid gap-x-6 gap-y-3 py-7 transition-colors hover:bg-paper/60 lg:grid-cols-12 lg:items-baseline lg:py-8">
                  <span className="flex items-baseline gap-4 lg:col-span-4">
                    <span className="label w-6 shrink-0 text-ink-3" aria-hidden>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>
                      <span className="block text-[1.5rem] leading-tight font-extrabold tracking-[-0.01em] group-hover:text-guide lg:text-[1.75rem]">
                        {p.name}
                      </span>
                      <Status status={p.status} className="mt-2" />
                    </span>
                  </span>
                  <span className="pl-10 text-ink-2 lg:col-span-3 lg:pl-0">
                    <span className="label mr-2 text-ink-3 lg:hidden">In</span>
                    {p.input}
                  </span>
                  <span className="pl-10 font-semibold text-ink lg:col-span-4 lg:pl-0">
                    <span className="label mr-2 font-medium text-ink-3 lg:hidden">Out</span>
                    {p.output}
                  </span>
                  <span className="arrow hidden text-right text-xl text-guide lg:col-span-1 lg:block" aria-hidden>
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-6 max-w-[80ch] text-[0.9375rem] text-ink-2">
            Also part of the platform:{" "}
            {platformExtras.map((x, i) => (
              <span key={x.name}>
                <strong className="text-ink">{x.name}</strong> ({x.status === "in-development" ? "in development" : "our labelling platform"})
                {i < platformExtras.length - 1 ? " and " : "."}
              </span>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
}

/* 4 ─ Evidence band ────────────────────────────────────────────────────── */

function EvidenceBand() {
  return (
    <section aria-labelledby="evidence-title" className="on-ink section bg-ink text-white">
      <div className="wrap">
        <p className="label text-survey">Project · Fargo – West Fargo, North Dakota</p>
        <h2 id="evidence-title" className="t-h2 mt-5 max-w-[22ch]">
          One network, surveyed by phone. Every sign placed, every segment rated.
        </h2>

        <div className="mt-12 grid gap-px bg-rule-dark lg:mt-16 lg:grid-cols-12">
          <div className="relative bg-ink lg:col-span-8">
            <div className="relative aspect-[1140/820]">
              <Image
                src="/media/iri-map-fargo.webp"
                alt="AdAMS map of Fargo and West Fargo. Road segments are coloured by roughness; traffic-sign icons mark each detected sign. A tooltip reads IRI 30.0 in/mi, condition Excellent."
                fill
                sizes="(min-width: 1280px) 820px, (min-width: 1024px) 66vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
          <dl className="grid bg-ink sm:grid-cols-3 lg:col-span-4 lg:grid-cols-1">
            {[metrics.fargoSigns, metrics.fargoSegments, metrics.rec74Signs].map((m) => (
              <div key={m.id} className="border-b border-rule-dark p-6 last:border-b-0 sm:border-r sm:border-b-0 sm:last:border-r-0 lg:border-r-0 lg:border-b lg:p-8">
                <dt className="sr-only">{m.label}</dt>
                <dd>
                  <Figure metric={m} className="block font-mono text-[2.75rem] leading-none font-medium tracking-[-0.03em] text-white tabular-nums lg:text-[3.5rem]" />
                  <span className="mt-3 block text-[0.9375rem] leading-snug text-white/70">{m.label}</span>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
          <Link href="/work/fargo-west-fargo-survey" className="btn btn-secondary">
            Read the project
          </Link>
          <p className="text-[0.9375rem] text-white/60">
            Roughness bands: Excellent 0–95 · Good 95–121 · Fair 121–170 · Bad 170–220 · Poor 220+ in/mi
          </p>
        </div>
      </div>
    </section>
  );
}

/* 5 ─ Method ───────────────────────────────────────────────────────────── */

const steps = [
  {
    n: "01",
    title: "Survey",
    body: "Mount a phone on the dashboard and drive. No survey van, no special hardware.",
    img: { src: "/media/rec74-frame.webp", w: 1099, h: 501, pos: "object-[70%_50%]", alt: "Road frame captured by a phone during a survey drive." },
  },
  {
    n: "02",
    title: "Detect",
    body: "Models find and classify each sign and pavement feature, frame by frame.",
    img: { src: "/media/rec74-summary.webp", w: 746, h: 1007, pos: "object-top", alt: "Sign detection summary for one recording: counts of No Parking, Do Not Enter, Stop and other sign types." },
  },
  {
    n: "03",
    title: "Map",
    body: "Every detection is placed on the network once, with its coordinates and the frame it came from.",
    img: { src: "/media/sign-card-r7-1.webp", w: 480, h: 374, pos: "object-center", alt: "Sign record R7-1, track 23, with its source frame and GPS position." },
  },
  {
    n: "04",
    title: "Act",
    body: "Filter by condition, raise work orders and export reports for the maintenance plan.",
    img: { src: "/media/map-layers.webp", w: 275, h: 510, pos: "object-top", alt: "AdAMS map layers panel: traffic signs 118, road conditions 2,267, work orders and other asset layers." },
  },
];

function Method() {
  return (
    <section aria-labelledby="method-title" className="section">
      <div className="wrap">
        <SectionHead
          id="method-title"
          label="How it works"
          title="From a drive to a work order."
          lead="The same four steps run under AdAMS. Our traffic products follow the same idea with fixed cameras."
        />
        <ol className="mt-12 grid gap-px bg-rule sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {steps.map((s) => (
            <li key={s.n} className="flex flex-col bg-paper">
              <div className="relative aspect-[4/3] overflow-hidden bg-ink">
                <Image src={s.img.src} alt={s.img.alt} fill sizes="(min-width: 1024px) 300px, (min-width: 640px) 50vw, 100vw" className={`object-cover ${s.img.pos}`} />
              </div>
              <div className="pt-6 pr-6 pb-2">
                <p className="label text-guide">{s.n}</p>
                <h3 className="t-h3 mt-2">{s.title}</h3>
                <p className="mt-2 text-ink-2">{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* 6 ─ Research ─────────────────────────────────────────────────────────── */

function Research() {
  return (
    <section aria-labelledby="research-title" className="section bg-stone">
      <div className="wrap">
        <SectionHead
          id="research-title"
          label="Research"
          title="Our methods are published."
          lead="Our team publishes at CVPR workshops, the Transportation Research Board and in transportation journals. The products are built on that work."
        />
        <div className="mt-12 lg:mt-16">
          <PublicationList items={pick(featuredPublicationTitles)} />
          <ArrowLink href="/research/publications" className="mt-8">
            All publications
          </ArrowLink>
        </div>
      </div>
    </section>
  );
}

/* 7 ─ Routes ───────────────────────────────────────────────────────────── */

const routes = [
  {
    who: "Agencies and cities",
    line: "Inventories, condition scores and live monitoring for the network you maintain.",
    href: "/solutions",
    cta: "Find your problem",
  },
  {
    who: "Engineering firms",
    line: "Counts and studies from video, ready to drop into a report.",
    href: "/products/turnflow",
    cta: "See Turnflow",
  },
  {
    who: "Researchers and funders",
    line: "Datasets, methods and published results to build on together.",
    href: "/research",
    cta: "Our research",
  },
  {
    who: "Engineers and researchers",
    line: "Work on models that run on real roads, not just benchmarks.",
    href: "/company/careers",
    cta: "Careers",
  },
];

function Routes() {
  return (
    <section aria-labelledby="routes-title" className="section">
      <div className="wrap">
        <h2 id="routes-title" className="t-h2 max-w-[20ch]">
          Where to go from here.
        </h2>
        <ul className="mt-12 grid border-t border-ink sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {routes.map((r) => (
            <li key={r.who} className="border-b border-rule sm:odd:border-r lg:border-r lg:border-b-0 lg:last:border-r-0">
              <Link href={r.href} className="group flex h-full flex-col gap-3 py-8 sm:px-6 sm:first:pl-0 lg:min-h-64 lg:first:pl-0">
                <span className="label text-ink-3">For</span>
                <span className="t-h3">{r.who}</span>
                <span className="text-ink-2">{r.line}</span>
                <span className="mt-auto inline-flex items-center gap-2 pt-4 font-semibold text-guide">
                  <span className="link">{r.cta}</span>
                  <span className="arrow" aria-hidden>
                    →
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* 8 ─ Testimonial ──────────────────────────────────────────────────────── */

function Testimonial() {
  return (
    <section aria-label="What a client says" className="border-t border-rule">
      <div className="wrap grid gap-10 py-16 md:grid-cols-12 md:items-center lg:py-24">
        <div className="relative aspect-[4/5] w-40 overflow-hidden bg-stone md:col-span-3 md:w-full lg:col-span-3">
          <Image
            src={testimonial.image.src}
            alt={`Portrait of ${testimonial.name}`}
            fill
            sizes="(min-width: 768px) 25vw, 160px"
            className="object-cover object-[50%_30%]"
          />
        </div>
        <figure className="md:col-span-9 lg:col-span-8 lg:col-start-5">
          <blockquote className="text-[1.5rem] leading-[1.35] font-semibold tracking-[-0.01em] text-ink lg:text-[2rem]">
            <span aria-hidden className="text-guide">“</span>
            {testimonial.quote}
            <span aria-hidden className="text-guide">”</span>
          </blockquote>
          <figcaption className="mt-6">
            <span className="block font-bold">{testimonial.name}</span>
            <span className="block text-ink-2">{testimonial.org}</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

/* 9 ─ Contact ──────────────────────────────────────────────────────────── */

function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="section bg-stone">
      <div className="wrap grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="label text-ink-3">Contact</p>
          <h2 id="contact-title" className="t-h2 mt-5 max-w-[14ch]">
            Tell us about your network.
          </h2>
          <p className="t-lead mt-6 max-w-[38ch] text-ink-2">
            A survey you&apos;re planning, a corridor you need counted, a research question. A person reads every message.
          </p>
          <a href={`mailto:${site.email}`} className="link mt-8 inline-block text-[1.25rem] font-bold text-ink">
            {site.email}
          </a>
        </div>
        <div className="lg:col-span-7">
          <ContactForm tone="stone" />
        </div>
      </div>
    </section>
  );
}

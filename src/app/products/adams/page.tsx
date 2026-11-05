import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FrameRecord from "@/components/frame-record";
import ContactForm from "@/components/contact-form";
import { ArrowLink, Figure, PublicationList, SectionHead, Status } from "@/components/primitives";
import { getProduct, platformExtras } from "@/content/products";
import { getApp } from "@/content/apps";
import { metrics } from "@/content/evidence";
import { adamsPublicationTitles, pick } from "@/content/publications";
import { site } from "@/content/site";

const product = getProduct("adams");
const app = getApp("adams");

export const metadata: Metadata = {
  title: "AdAMS — Advanced Asset Management System",
  description:
    "AdAMS turns phone video from a survey drive into a mapped inventory of traffic signs, pavement roughness and condition, with work orders and reports.",
  alternates: { canonical: "/products/adams" },
};

const capabilities = [
  {
    name: "Traffic signs",
    records: "Class (MUTCD code), position, condition and size, with the frame each sign was seen in.",
    image: { src: "/media/sign-card-r7-1.webp", w: 480, h: 374, alt: "Sign record R7-1, track 23, with its source frame and GPS position." },
  },
  {
    name: "Pavement roughness",
    records: "International Roughness Index for every segment driven, in five condition bands.",
    image: { src: "/media/iri-map-fargo.webp", w: 1140, h: 820, alt: "Road segments coloured by roughness, one showing IRI 30.0 in/mi, Excellent.", pos: "object-[38%_88%]" },
  },
  { name: "Pavement condition", records: "Distress type and severity, and a Pavement Condition Index for each section." },
  { name: "Road markings", records: "Marking presence and retroreflectivity, flagged where it falls below threshold." },
  { name: "Guardrails", records: "Location and run length, with condition from the drive imagery." },
  { name: "Bridges", records: "Drone inspection imagery tied to the structure on the map." },
];

const how = [
  {
    n: "01",
    title: "Survey",
    body: "Mount a phone and drive. The AdAMS mobile app records video with position and time on every frame.",
    image: { src: "/media/rec74-frame.webp", w: 1099, h: 501, alt: "Road frame from a phone survey drive." },
  },
  {
    n: "02",
    title: "Detect",
    body: "Models trained on our own labelled road imagery find each sign and pavement feature, frame by frame, and score its condition.",
    image: { src: "/media/rec74-summary.webp", w: 746, h: 1007, alt: "Detection summary for one recording, by sign type.", pos: "object-top" },
  },
  {
    n: "03",
    title: "Map",
    body: "A sign seen in forty frames becomes one record, placed once on the network with its coordinates and the clearest frame.",
    image: { src: "/media/asset-map-fargo.webp", w: 1140, h: 818, alt: "AdAMS asset map with detected signs placed across Fargo and West Fargo." },
  },
  {
    n: "04",
    title: "Act",
    body: "Filter by layer and condition, raise work orders, and export reports for the maintenance plan.",
    image: { src: "/media/map-layers.webp", w: 275, h: 510, alt: "Map layers: traffic signs 118, road conditions 2,267, work orders, guardrails, street lights and more.", pos: "object-top" },
  },
];

export default function AdamsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "AdAMS — Advanced Asset Management System",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web, Android, iOS",
    publisher: { "@type": "Organization", name: site.name, url: site.url },
    description: product.summary,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* 1 ─ Hero */}
      <section aria-labelledby="adams-title" className="pt-8 pb-16 lg:pt-10 lg:pb-24">
        <div className="wrap">
          <nav aria-label="Breadcrumb">
            <ol className="label flex gap-2 text-ink-3">
              <li>
                <Link href="/products" className="link hover:text-ink">
                  Products
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li aria-current="page" className="text-ink">
                AdAMS
              </li>
            </ol>
          </nav>

          <div className="mt-10 grid gap-8 lg:mt-14 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                <Status status={product.status} />
                <span className="label text-ink-3">Road assets · Pavement</span>
              </div>
              <h1 id="adams-title" className="mt-6">
                <span className="t-display block">AdAMS</span>
                <span className="mt-3 block text-[1.25rem] leading-snug font-medium tracking-[-0.005em] text-ink-2 sm:text-[1.5rem]">
                  Advanced Asset Management System
                </span>
              </h1>
            </div>
            <div className="lg:col-span-5 lg:pb-2">
              <p className="t-lead max-w-[44ch] text-ink">
                Drive the network once with a phone. Get back every sign, where it stands and what condition it&apos;s in,
                and a roughness score for each segment you drove.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
                <a href="#contact" className="btn btn-primary">
                  Contact us about AdAMS
                </a>
                {app?.url && (
                  <a href={app.url} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 font-semibold text-guide">
                    <span className="link">Sign in to AdAMS</span>
                    <span aria-hidden>↗</span>
                    <span className="sr-only">(opens in a new tab)</span>
                  </a>
                )}
              </div>
            </div>
          </div>

          <FrameRecord
            className="mt-12 lg:mt-16"
            priority
            image={{
              src: "/media/asset-map-fargo.webp",
              alt: "AdAMS asset map of Fargo and West Fargo, North Dakota. Traffic-sign icons mark detected signs; green lines are road segments rated for roughness.",
              width: 1140,
              height: 818,
            }}
            boxes={[]}
            meta={["AdAMS · Assets map", "Fargo – West Fargo, ND", "Traffic signs · Road conditions"]}
            recordTitle="Selected sign"
            record={[
              { k: "Sign", v: "R7-1", emphasis: true },
              { k: "Meaning", v: "No parking any time" },
              { k: "Track", v: "23" },
              { k: "Latitude", v: "46.864087" },
              { k: "Longitude", v: "−96.865637" },
            ]}
            link={{ label: "See the project", href: "/work/fargo-west-fargo-survey" }}
          />
        </div>
      </section>

      {/* 2 ─ What it records */}
      <section aria-labelledby="records-title" className="section bg-stone">
        <div className="wrap">
          <SectionHead
            id="records-title"
            label="What it records"
            title="What one drive puts on the record."
            lead="Each layer is a record you can filter, map and maintain — not a report you read once."
          />
          <ul className="mt-12 border-t border-ink lg:mt-16">
            {capabilities.map((c) => (
              <li key={c.name} className="grid gap-x-6 gap-y-4 border-b border-rule py-7 md:grid-cols-12 md:items-center lg:py-8">
                <h3 className="t-h3 md:col-span-3">{c.name}</h3>
                <p className="text-ink-2 md:col-span-5">{c.records}</p>
                <div className="md:col-span-4">
                  {c.image && (
                    <div className="relative aspect-[16/9] overflow-hidden bg-ink">
                      <Image
                        src={c.image.src}
                        alt={c.image.alt}
                        fill
                        sizes="(min-width: 768px) 33vw, 100vw"
                        className={`object-cover ${c.image.pos ?? "object-center"}`}
                      />
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 3 ─ How it works */}
      <section aria-labelledby="how-title" className="section">
        <div className="wrap grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <p className="label text-ink-3">How it works</p>
              <h2 id="how-title" className="t-h2 mt-5 max-w-[12ch]">
                From a drive to a work order.
              </h2>
              <p className="t-lead mt-6 max-w-[34ch] text-ink-2">
                No survey van and no special hardware. The phone already in the vehicle is the sensor.
              </p>
            </div>
          </div>
          <ol className="space-y-16 lg:col-span-7 lg:col-start-6 lg:space-y-24">
            {how.map((s) => (
              <li key={s.n}>
                <div className="relative aspect-[16/10] overflow-hidden bg-ink">
                  <Image src={s.image.src} alt={s.image.alt} fill sizes="(min-width: 1024px) 55vw, 100vw" className={`object-cover ${s.image.pos ?? "object-center"}`} />
                </div>
                <div className="mt-6 grid gap-2 sm:grid-cols-[4rem_1fr]">
                  <p className="label pt-1.5 text-guide">{s.n}</p>
                  <div>
                    <h3 className="t-h3">{s.title}</h3>
                    <p className="mt-2 max-w-[52ch] text-ink-2">{s.body}</p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 4 ─ Project */}
      <section aria-labelledby="project-title" className="on-ink section bg-ink text-white">
        <div className="wrap grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <p className="label text-survey">Project · Fargo – West Fargo, North Dakota</p>
            <h2 id="project-title" className="t-h2 mt-5 max-w-[16ch]">
              A city&apos;s signs and road roughness, from phone video.
            </h2>
            <dl className="mt-10 grid grid-cols-2 gap-8">
              {[metrics.fargoSigns, metrics.fargoSegments].map((m) => (
                <div key={m.id}>
                  <dt className="sr-only">{m.label}</dt>
                  <dd>
                    <Figure metric={m} className="block font-mono text-[2.5rem] leading-none font-medium tracking-[-0.03em] tabular-nums lg:text-[3rem]" />
                    <span className="mt-3 block text-[0.9375rem] leading-snug text-white/70">{m.label}</span>
                  </dd>
                </div>
              ))}
            </dl>
            <Link href="/work/fargo-west-fargo-survey" className="btn btn-secondary mt-10">
              Read the project
            </Link>
          </div>
          <div className="relative aspect-[1140/820] overflow-hidden lg:col-span-7">
            <Image
              src="/media/iri-map-fargo.webp"
              alt="Road segments in Fargo and West Fargo coloured by roughness, with a tooltip reading IRI 30.0 in/mi, Excellent."
              fill
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* 5 ─ Platform */}
      <section aria-labelledby="platform-title" className="section">
        <div className="wrap">
          <SectionHead id="platform-title" label="The platform around it" title="Where the models come from, and where AdAMS is going." />
          <ul className="mt-12 grid gap-px bg-rule md:grid-cols-2 lg:mt-16">
            {platformExtras.map((x) => (
              <li key={x.name} className="bg-paper py-8 md:p-10 md:first:pl-0">
                <Status status={x.status} />
                <h3 className="t-h3 mt-4">{x.name}</h3>
                <p className="mt-3 max-w-[48ch] text-ink-2">{x.line}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 6 ─ Research */}
      <section aria-labelledby="adams-research-title" className="section bg-stone">
        <div className="wrap">
          <SectionHead
            id="adams-research-title"
            label="Research behind it"
            title="Pavement from a phone is published work."
            lead="AdAMS rests on our team's research into smartphone sensing, roughness estimation and condition indices from images."
          />
          <div className="mt-12 lg:mt-16">
            <PublicationList items={pick(adamsPublicationTitles)} />
            <ArrowLink href="/research/publications" className="mt-8">
              All publications
            </ArrowLink>
          </div>
        </div>
      </section>

      {/* 7 ─ Contact */}
      <section id="contact" aria-labelledby="adams-contact-title" className="section">
        <div className="wrap grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="label text-ink-3">Contact</p>
            <h2 id="adams-contact-title" className="t-h2 mt-5 max-w-[14ch]">
              Survey your network with AdAMS.
            </h2>
            <p className="t-lead mt-6 max-w-[38ch] text-ink-2">
              Tell us the network — how many miles, which assets matter — and we&apos;ll come back with how a survey would run.
            </p>
            <div className="mt-10 border-t border-rule pt-6">
              <p className="label text-ink-3">Related</p>
              <ul className="mt-4 space-y-3">
                <li>
                  <ArrowLink href="/solutions/pavement-condition">Pavement condition</ArrowLink>
                </li>
                <li>
                  <ArrowLink href="/solutions/road-asset-inventory">Road asset inventory</ArrowLink>
                </li>
                <li>
                  <ArrowLink href="/products/roadlogger">RoadLogger for field inspections</ArrowLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="lg:col-span-7">
            <ContactForm defaultTopic="AdAMS" />
          </div>
        </div>
      </section>
    </>
  );
}

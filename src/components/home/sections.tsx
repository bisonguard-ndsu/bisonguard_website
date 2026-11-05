import Image from "next/image";
import Link from "next/link";
import { cardCls, SolutionList, StatStrip } from "@/components/blocks";
import { CountUp, Heading, Reveal } from "@/components/motion";
import { AppFrame, ButtonLink, Eyebrow, Photo, SectionHeading, Tag } from "@/components/sections";
import { metrics, testimonial } from "@/content/evidence";
import { productPages } from "@/content/product-pages";
import { getProduct, statusLabel } from "@/content/products";
import { projects } from "@/content/work";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------------ */

export function HomeIntro() {
  return (
    <section className="section bg-bg">
      <div className="wrap">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal y={8}>
              <Eyebrow>About InfiniCity Labs</Eyebrow>
            </Reveal>
            <Heading
              text="Transportation engineers and computer-vision researchers, building the tools we wished road agencies had."
              className="mt-4 font-display text-[1.875rem] leading-[1.18] font-semibold tracking-[-0.02em] text-fg sm:text-[2.375rem] lg:text-[2.75rem]"
            />
          </div>
          <Reveal delay={0.1} className="space-y-5 text-[1.0625rem] leading-relaxed text-fg-2 lg:col-span-5 lg:pt-10">
            <p>
              We read the video that crews and cameras already capture and turn it into records engineers maintain: asset inventories, pavement
              condition, traffic counts and repair histories.
            </p>
            <p>Our products run on live networks for agencies and engineering firms in the United States and West Africa.</p>
            <Link href="/company" className="group inline-flex items-center gap-2 pt-2 font-semibold text-fg">
              <span className="link">About the company</span>
              <span className="arrow" aria-hidden>
                →
              </span>
            </Link>
          </Reveal>
        </div>

        <StatStrip
          className="mt-16 lg:mt-24"
          stats={[
            { value: "4", label: "products in service" },
            { value: metrics.fargoSigns.value, label: "signs mapped in one city survey" },
            { value: metrics.fargoSegments.value, label: "road segments rated for roughness" },
            { value: "2", label: "regions served: the United States and West Africa" },
          ]}
        />
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------------ */

export function HomeProducts() {
  return (
    <section className="section tone-light">
      <div className="wrap">
        <SectionHeading
          eyebrow="Products"
          title="Four products, one view of your roads"
          lead="Each product handles one job well. They share the same map, accounts and evidence, so what the field sees, the office sees."
        />
        <ul className="mt-14 grid gap-5 md:grid-cols-2 lg:mt-20">
          {productPages.map((p, i) => {
            const prod = getProduct(p.slug);
            return (
              <Reveal as="li" key={p.slug} delay={(i % 2) * 0.06}>
                <Link href={prod.href} className={cn(cardCls, "flex h-full flex-col p-3")}>
                  <Photo image={p.card} className="aspect-[16/9] rounded-lg" sizes="(min-width: 768px) 45vw, 100vw" />
                  <div className="flex flex-1 flex-col px-4 pt-6 pb-4 sm:px-5">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                      <h3 className="font-display text-[1.75rem] font-semibold tracking-tight text-fg">{p.name}</h3>
                      <Tag>{statusLabel[prod.status]}</Tag>
                    </div>
                    {p.fullName && <p className="mt-1 text-sm text-fg-3">{p.fullName}</p>}
                    <p className="mt-4 flex-1 text-[1.0625rem] leading-relaxed text-fg-2">{prod.summary}</p>
                    <dl className="mt-6 grid grid-cols-2 gap-4 border-t border-edge pt-5 text-sm">
                      <div>
                        <dt className="text-fg-3">Input</dt>
                        <dd className="mt-1 font-medium text-fg">{prod.input}</dd>
                      </div>
                      <div>
                        <dt className="text-fg-3">Output</dt>
                        <dd className="mt-1 font-medium text-fg">{prod.output}</dd>
                      </div>
                    </dl>
                    <span className="mt-6 inline-flex items-center gap-2 font-semibold text-primary-strong">
                      <span className="link">Explore {p.name}</span>
                      <span className="arrow" aria-hidden>
                        →
                      </span>
                    </span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------------ */

export function HomeSolutions() {
  return (
    <section className="section bg-bg">
      <div className="wrap grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <SectionHeading
            side={false}
            eyebrow="Solutions"
            title="Start from the problem you have"
            lead="Inventorying assets, rating pavement or delivering a traffic study: here is how our products fit together for each."
          />
          <Reveal delay={0.15} className="mt-8">
            <ButtonLink href="/solutions" variant="ghost">
              All solutions
            </ButtonLink>
          </Reveal>
        </div>
        <SolutionList className="lg:col-span-8" />
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------------ */

export function HomeProject() {
  const p = projects[0];
  return (
    <section className="section bg-deep">
      <div className="wrap">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Reveal y={8}>
              <Eyebrow>Case study · {p.place}</Eyebrow>
            </Reveal>
            <Heading text={p.title} className="t-h2 mt-3 max-w-[20ch] text-white" />
          </div>
          <Reveal delay={0.1} className="lg:col-span-5 lg:pb-1.5">
            <p className="text-[1.0625rem] leading-relaxed text-white/70">{p.summary}</p>
            <Link href={`/work/${p.slug}`} className="group mt-6 inline-flex items-center gap-2 font-semibold text-white">
              <span className="link">Read the case study</span>
              <span className="arrow" aria-hidden>
                →
              </span>
            </Link>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="mt-14 lg:mt-16">
          <AppFrame image={{ src: "/media/site/adams-iri.webp", alt: p.hero.alt, width: 1647, height: 876 }} label="AdAMS · Fargo – West Fargo · Road conditions" />
        </Reveal>

        <dl className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {p.stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.06} className="border-t border-white/15 pt-5">
              <dt className="sr-only">{s.label}</dt>
              <dd>
                <CountUp value={s.value} className="block font-display text-4xl font-semibold tracking-tight text-white" />
                <span className="mt-2 block text-[0.9375rem] text-white/65">{s.label}</span>
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------------ */

/* ------------------------------------------------------------------------ */

export function HomeTestimonial() {
  return (
    <section className="section bg-bg" aria-label="What clients say">
      <div className="wrap">
        <Reveal className="mx-auto max-w-4xl">
          <figure>
            <blockquote className="font-display text-[1.5rem] leading-[1.35] font-medium tracking-[-0.01em] text-fg sm:text-[2rem]">
              “{testimonial.quote}”
            </blockquote>
            <figcaption className="mt-10 flex items-center gap-4">
              <span className="relative h-14 w-14 shrink-0 overflow-clip rounded-full bg-surface-2">
                <Image src="/media/site/elijah.webp" alt="" fill sizes="56px" className="object-cover object-top" />
              </span>
              <span>
                <span className="block font-semibold text-fg">{testimonial.name}</span>
                <span className="block text-sm text-fg-3">{testimonial.org}</span>
              </span>
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}

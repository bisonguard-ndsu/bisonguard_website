import Image from "next/image";
import Link from "next/link";
import { CountUp, Reveal, WordRise } from "@/components/motion";
import { AppFrame, ButtonLink, Eyebrow, Photo, SectionHeading, Tag } from "@/components/sections";
import { metrics, partners, testimonial } from "@/content/evidence";
import { productPages } from "@/content/product-pages";
import { getProduct, statusLabel } from "@/content/products";
import { featuredPublicationTitles, pick, publications, venueShort } from "@/content/publications";
import { solutions } from "@/content/solutions";
import { projects } from "@/content/work";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------------ */

export function HomeIntro() {
  const stats = [
    { value: "4", label: "products in service" },
    { value: metrics.fargoSigns.value, label: "signs mapped in one city survey" },
    { value: metrics.fargoSegments.value, label: "road segments rated for roughness" },
    { value: String(publications.length), label: "peer-reviewed papers by our team" },
  ];
  return (
    <section className="section bg-bg">
      <div className="wrap">
        <div className="grid gap-10 lg:grid-cols-12">
          <Reveal y={12} className="lg:col-span-3">
            <Eyebrow>Who we are</Eyebrow>
          </Reveal>
          <div className="lg:col-span-9">
            <WordRise
              inView
              text="Transportation engineers and computer-vision researchers, building the tools we wished road agencies had."
              accent="road agencies had."
              className="font-display text-[1.75rem] leading-[1.2] font-medium tracking-[-0.02em] text-fg sm:text-[2.25rem] lg:text-[2.75rem]"
            />
            <Reveal delay={0.3} className="mt-8 grid gap-6 text-[1.0625rem] leading-relaxed text-fg-2 md:grid-cols-2">
              <p>
                We read the video that crews and cameras already capture and turn it into records engineers maintain: asset inventories, pavement
                condition, traffic counts and repair histories.
              </p>
              <p>
                Our methods come from published research, and our products run on live networks for agencies and engineering firms in the United
                States and West Africa.
              </p>
            </Reveal>
          </div>
        </div>

        <dl className="mt-16 grid grid-cols-2 border-t border-white/10 lg:mt-24 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 0.08}
              className={cn("border-b border-white/10 py-8 pr-6 lg:border-b-0", i % 2 === 1 && "pl-6 max-lg:border-l max-lg:border-white/10", i > 0 && "lg:border-l lg:border-white/10 lg:pl-8")}
            >
              <dt className="sr-only">{s.label}</dt>
              <dd>
                <CountUp value={s.value} className="block font-display text-[2.75rem] leading-none font-semibold tracking-tight text-fg sm:text-6xl" />
                <span className="mt-3 block max-w-[20ch] text-[0.9375rem] text-fg-2">{s.label}</span>
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------------ */

export function HomeProducts() {
  const layout = ["lg:col-span-7", "lg:col-span-5", "lg:col-span-5", "lg:col-span-7"];
  return (
    <section className="section bg-bg pt-0 lg:pt-0">
      <div className="wrap">
        <SectionHeading
          eyebrow="Products"
          title="Four products, one view of your roads"
          accent="one view of your roads"
          lead="Each product handles one job well, and they share the same map, accounts and evidence, so what the field sees, the office sees."
        />
        <div className="mt-14 grid gap-5 lg:mt-20 lg:grid-cols-12">
          {productPages.map((p, i) => {
            const prod = getProduct(p.slug);
            return (
              <Reveal key={p.slug} delay={(i % 2) * 0.1} className={layout[i]}>
                <Link
                  href={prod.href}
                  className="group relative flex h-[26rem] flex-col justify-end overflow-clip rounded-3xl border border-white/10 p-7 transition-[transform,border-color] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:border-primary/40 sm:h-[30rem] sm:p-9"
                >
                  <Photo image={p.card} className="absolute inset-0 -z-10" sizes="(min-width: 1024px) 60vw, 100vw" />
                  <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-t from-deep via-deep/70 to-deep/5" />
                  <div className="absolute top-7 left-7 flex flex-wrap gap-2 sm:top-9 sm:left-9">
                    <Tag>{p.category}</Tag>
                    <Tag tone="primary">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary-strong shadow-[0_0_8px_var(--color-primary)]" />
                      {statusLabel[prod.status]}
                    </Tag>
                  </div>
                  <h3 className="font-display text-[2rem] font-semibold tracking-tight text-white sm:text-[2.5rem]">{p.name}</h3>
                  {p.fullName && <p className="mt-1 font-mono text-xs tracking-wide text-white/55 uppercase">{p.fullName}</p>}
                  <p className="mt-3 max-w-[44ch] pr-12 text-[1.0625rem] leading-relaxed text-white/80">{prod.summary}</p>
                  <p className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 pr-16 text-sm text-white/60">
                    <span>{prod.input}</span>
                    <span className="text-primary-strong" aria-hidden>
                      →
                    </span>
                    <span className="text-white/85">{prod.output}</span>
                  </p>
                  <span
                    aria-hidden
                    className="absolute right-7 bottom-7 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition-all duration-500 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-ink sm:right-9 sm:bottom-9"
                  >
                    <span className="arrow">→</span>
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------------ */

export function HomeSolutions() {
  return (
    <section className="section bg-bg">
      <div className="wrap">
        <SectionHeading
          eyebrow="Solutions"
          title="Start from the problem you have"
          accent="the problem you have"
          lead="Whether you are inventorying assets, rating pavement or delivering a traffic study, here is how our products fit together for it."
        />
        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
          {solutions.map((s, i) => (
            <Reveal as="li" key={s.slug} delay={(i % 3) * 0.08}>
              <Link
                href={`/solutions/${s.slug}`}
                className="group flex h-full flex-col overflow-clip rounded-2xl border border-white/[0.08] bg-surface transition-[transform,border-color,background-color] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:border-primary/40 hover:bg-surface-2"
              >
                <Photo image={s.image} className="aspect-[16/10]" sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw" />
                <div className="flex flex-1 flex-col p-6">
                  <p className="font-mono text-[0.6875rem] tracking-wide text-fg-3 uppercase">{s.group}</p>
                  <h3 className="mt-2 font-display text-xl font-semibold text-fg transition-colors group-hover:text-primary-strong">{s.title}</h3>
                  <p className="mt-2 flex-1 text-[0.9375rem] leading-relaxed text-fg-2">{s.short}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                    <span className="link">Read more</span>
                    <span className="arrow" aria-hidden>
                      →
                    </span>
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------------ */

export function HomeProject() {
  const p = projects[0];
  return (
    <section className="section relative overflow-clip bg-deep">
      <div aria-hidden className="pointer-events-none absolute -right-40 bottom-0 h-[32rem] w-[32rem] rounded-full bg-primary/10 blur-3xl" />
      <div className="wrap grid gap-14 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-5">
          <Reveal y={12}>
            <Eyebrow>Featured project</Eyebrow>
          </Reveal>
          <WordRise inView text={p.title} accent={p.accent} className="t-h2 mt-5 text-fg" />
          <Reveal delay={0.2} className="mt-6 text-[1.0625rem] leading-relaxed text-fg-2">
            <p className="font-mono text-xs tracking-wide text-fg-3 uppercase">{p.place}</p>
            <p className="mt-3">{p.summary}</p>
          </Reveal>
          <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-white/10 pt-8">
            {p.stats.map((s, i) => (
              <Reveal key={s.label} delay={0.1 + i * 0.08}>
                <dt className="sr-only">{s.label}</dt>
                <dd>
                  <CountUp value={s.value} className="block font-display text-[1.75rem] font-semibold tracking-tight text-fg sm:text-4xl" />
                  <span className="mt-2 block text-[0.8125rem] leading-snug text-fg-2">{s.label}</span>
                </dd>
              </Reveal>
            ))}
          </dl>
          <Reveal delay={0.3} className="mt-10">
            <ButtonLink href={`/work/${p.slug}`}>Read the case study</ButtonLink>
          </Reveal>
        </div>
        <Reveal delay={0.15} className="lg:col-span-7">
          <AppFrame image={{ src: "/media/site/adams-iri.webp", alt: p.hero.alt, width: 1647, height: 876 }} label="AdAMS · Fargo – West Fargo · Road conditions" />
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------------ */

export function HomeResearch() {
  const featured = pick(featuredPublicationTitles);
  const cvpr = publications.filter((p) => /CVPR/.test(p.venue)).length;
  const trb = publications.filter((p) => /Transportation Research Board/.test(p.venue)).length;
  const journals = publications.filter((p) => /Journal|IEEE|Advances/.test(p.venue)).length;
  return (
    <section className="section bg-bg">
      <div className="wrap">
        <SectionHeading
          eyebrow="Research"
          title="Built on peer-reviewed research"
          accent="peer-reviewed research"
          lead="Our team publishes the methods our products use, in pavement analysis, traffic safety and multimodal AI."
        />

        <div className="mt-14 grid gap-5 lg:mt-20 lg:grid-cols-12">
          <Reveal className="grid grid-cols-3 gap-px overflow-clip rounded-2xl border border-white/[0.08] bg-white/[0.08] lg:col-span-4 lg:grid-cols-1">
            {[
              { v: String(cvpr), l: "CVPR workshop papers" },
              { v: String(trb), l: "TRB Annual Meeting papers" },
              { v: String(journals), l: "journal articles" },
            ].map((s) => (
              <div key={s.l} className="bg-surface p-6 lg:p-8">
                <CountUp value={s.v} className="block font-display text-4xl font-semibold text-fg lg:text-5xl" />
                <span className="mt-2 block text-[0.875rem] text-fg-2">{s.l}</span>
              </div>
            ))}
          </Reveal>
          <ul className="grid gap-5 sm:grid-cols-2 lg:col-span-8">
            {featured.map((p, i) => (
              <Reveal as="li" key={p.title} delay={i * 0.08}>
                <a
                  href={p.url ?? undefined}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col rounded-2xl border border-white/[0.08] bg-surface p-6 transition-[transform,border-color,background-color] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:border-primary/40 hover:bg-surface-2"
                >
                  <span className="flex items-center justify-between gap-3">
                    <Tag tone="primary">
                      {venueShort(p.venue)}
                      {p.year ? ` · ${p.year}` : ""}
                    </Tag>
                    <span className="text-fg-3 transition-colors group-hover:text-primary-strong" aria-hidden>
                      ↗
                    </span>
                  </span>
                  <span className="mt-5 block font-display text-[1.125rem] leading-snug font-medium text-fg">{p.title}</span>
                  <span className="mt-3 block text-sm text-fg-3">{p.authors}</span>
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </Reveal>
            ))}
          </ul>
        </div>

        <Reveal delay={0.1} className="mt-10 flex justify-end">
          <ButtonLink href="/research/publications" variant="ghost">
            All publications
          </ButtonLink>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------------ */

export function HomePartners() {
  const names = partners.filter((p) => p.verified);
  const row = [...names, ...names, ...names];
  return (
    <section className="border-y border-white/[0.06] bg-deep py-14" aria-label="Partners and collaborators">
      <div className="wrap mb-8">
        <p className="text-center font-mono text-xs tracking-[0.12em] text-fg-3 uppercase">Partners and collaborators</p>
      </div>
      <div className="marquee relative overflow-clip [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
        <ul className="marquee-track flex w-max items-center gap-16 pr-16">
          {[...row, ...row].map((p, i) => (
            <li
              key={i}
              aria-hidden={i >= names.length}
              title={p.full}
              className="font-display text-2xl font-semibold whitespace-nowrap text-fg-3 transition-colors hover:text-fg sm:text-3xl"
            >
              {p.full}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------------ */

export function HomeTestimonial() {
  return (
    <section className="section bg-bg" aria-label="What clients say">
      <div className="wrap">
        <Reveal className="relative overflow-clip rounded-3xl border border-white/[0.08] bg-surface">
          <div aria-hidden className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-violet/15 blur-3xl" />
          <div className="grid lg:grid-cols-12">
            <div className="relative aspect-[4/3] lg:col-span-4 lg:aspect-auto">
              <Image src="/media/site/elijah.webp" alt={testimonial.name} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover object-top" />
            </div>
            <figure className="relative p-8 sm:p-12 lg:col-span-8 lg:p-16">
              <span aria-hidden className="block font-display text-7xl leading-none text-primary">
                “
              </span>
              <blockquote className="mt-2 font-display text-[1.375rem] leading-snug font-medium text-fg sm:text-[1.75rem]">
                {testimonial.quote}
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-4">
                <span className="h-px w-10 bg-primary" aria-hidden />
                <span>
                  <span className="block font-semibold text-fg">{testimonial.name}</span>
                  <span className="block text-sm text-fg-3">{testimonial.org}</span>
                </span>
              </figcaption>
            </figure>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

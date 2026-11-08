import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { CountUp, Reveal, ScrollText } from "@/components/motion";
import { ProductStack, ProjectExpand } from "@/components/home/scroll";
import { ButtonLink, Eyebrow, SectionHeading } from "@/components/sections";
import { site } from "@/content/site";
import { metrics, partners, testimonial } from "@/content/evidence";
import { productPages } from "@/content/product-pages";
import { getProduct, statusLabel } from "@/content/products";
import { solutions } from "@/content/solutions";
import { projects } from "@/content/work";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------------ */
/* The company: a two-column welcome, the disciplines we combine, and the numbers */

export function HomeIntro() {
  const stats = [
    { value: "4", label: "products in service" },
    { value: metrics.fargoSigns.value, label: "signs mapped in one city survey" },
    { value: metrics.fargoSegments.value, label: "road segments rated for roughness" },
    { value: "2", label: "regions served: the United States and West Africa" },
  ];
  const disciplines = ["Transportation engineering", "Computer vision", "Software and data systems"];
  return (
    <section id="company" className="section bg-bg">
      <div className="wrap">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <Reveal y={12}>
              <Eyebrow>The company</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="t-h2 mt-5 max-w-[16ch] text-fg">Built by engineers who have run the surveys</h2>
            </Reveal>
          </div>
          <div className="lg:col-span-6 lg:pt-10">
            <ScrollText
              as="p"
              text="Transportation engineers and computer-vision researchers, building the tools we wished road agencies had."
              className="font-display text-[1.5rem] leading-[1.3] font-medium tracking-[-0.025em] text-fg sm:text-[1.75rem]"
            />
            <Reveal delay={0.1} className="mt-8 text-[1.0625rem] leading-relaxed text-fg-2">
              <p>
                We read the video that crews and cameras already capture and turn it into records engineers maintain: asset inventories, pavement
                condition, traffic counts and repair histories. Our methods come from applied research, and our products run on live networks in the
                United States and West Africa.
              </p>
            </Reveal>
            <Reveal delay={0.15} className="mt-8 flex flex-wrap gap-x-10">
              <Link href="/company" className="text-link">
                About the company <ArrowUpRight size={18} aria-hidden />
              </Link>
              <Link href="/research" className="text-link">
                Our research <ArrowUpRight size={18} aria-hidden />
              </Link>
            </Reveal>
          </div>
        </div>

        <Reveal className="mt-16 grid border-y border-line sm:grid-cols-3 lg:mt-24">
          {disciplines.map((d, i) => (
            <p key={d} className={cn("py-5 text-[0.9375rem] text-fg-2", i > 0 && "border-line max-sm:border-t sm:border-l sm:pl-6")}>
              {d}
            </p>
          ))}
        </Reveal>

        <dl className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 0.08}
              className={cn(
                "border-b border-line py-10 pr-6 lg:border-b-0",
                i % 2 === 1 && "pl-6 max-lg:border-l max-lg:border-line",
                i > 0 && "lg:border-l lg:border-line lg:pl-8",
              )}
            >
              <dt className="sr-only">{s.label}</dt>
              <dd>
                <CountUp value={s.value} className="block font-display text-[3rem] leading-none font-medium tracking-[-0.05em] text-fg sm:text-[4rem]" />
                <span className="mt-4 block max-w-[22ch] text-[0.9375rem] text-fg-2">{s.label}</span>
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------------ */
/* Areas of work — light; three photographs, each with its solutions underneath */

const areas = [
  {
    group: "Roads and assets",
    title: "Infrastructure",
    text: "Survey the network, know the condition of every asset and carry the evidence into maintenance decisions.",
    image: { src: "/media/site/paving.webp", alt: "A paving crew laying fresh asphalt on a road" },
  },
  {
    group: "Traffic",
    title: "Mobility",
    text: "Watch the cameras you already run, count every movement and deliver studies backed by video.",
    image: { src: "/media/site/signal-traffic.webp", alt: "Traffic signals above a busy intersection" },
  },
  {
    group: "Beyond the road",
    title: "Applied vision",
    text: "The same detection and tracking, applied to open range: livestock counted from cameras and drones.",
    image: { src: "/media/site/cattle.webp", alt: "A rancher on horseback moving a herd of cattle across open grassland" },
  },
] as const;

export function HomeAreas() {
  return (
    <section className="section theme-light" aria-labelledby="areas-title">
      <div className="wrap">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Reveal y={12}>
              <Eyebrow>Areas of work</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 id="areas-title" className="t-h2 mt-5 max-w-[18ch] text-fg">
                Start from the problem you have
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <Link href="/solutions" className="text-link">
              All solutions <ArrowUpRight size={18} aria-hidden />
            </Link>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-12 md:grid-cols-3 md:gap-6 lg:mt-20 lg:gap-8">
          {areas.map((a, i) => {
            const list = solutions.filter((s) => s.group === a.group);
            return (
              <Reveal key={a.title} delay={i * 0.08} className="flex flex-col">
                <Link href={`/solutions/${list[0].slug}`} className="group block">
                  <div className="relative aspect-[4/3] overflow-clip bg-surface-2">
                    <Image
                      src={a.image.src}
                      alt={a.image.alt}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />
                    <span className="absolute right-0 bottom-0 flex h-12 w-12 items-center justify-center bg-bg text-fg transition-colors duration-200 group-hover:bg-fg group-hover:text-bg">
                      <ArrowUpRight size={20} aria-hidden />
                    </span>
                  </div>
                  <p className="eyebrow mt-6">{a.group}</p>
                  <h3 className="mt-3 font-display text-[1.875rem] leading-tight font-medium tracking-[-0.04em] text-fg">{a.title}</h3>
                  <p className="mt-3 max-w-[40ch] text-[0.9375rem] leading-relaxed text-fg-2">{a.text}</p>
                </Link>
                <ul className="mt-6 border-t border-line">
                  {list.map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={`/solutions/${s.slug}`}
                        className="group flex min-h-12 items-center justify-between gap-4 border-b border-line py-3 text-[0.9375rem] font-medium text-fg transition-colors hover:text-primary"
                      >
                        {s.title}
                        <ArrowUpRight
                          size={16}
                          aria-hidden
                          className="shrink-0 text-fg-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------------ */
/* Products — dark; cards stack as the page scrolls */

export function HomeProducts() {
  const items = productPages.map((p) => {
    const prod = getProduct(p.slug);
    return {
      slug: p.slug,
      name: p.name,
      fullName: p.fullName,
      category: p.category,
      status: statusLabel[prod.status],
      href: prod.href,
      summary: prod.summary,
      input: prod.input,
      output: prod.output,
      image: p.card,
    };
  });
  return (
    <section className="section bg-bg">
      <div className="wrap">
        <SectionHeading
          eyebrow="Products"
          title="Four products, one view of your roads"
          lead="Each product handles one job well, and they share the same map, accounts and evidence, so what the field sees, the office sees."
        />
        <ProductStack items={items} />
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------------ */

export function HomeProject() {
  const p = projects[0];
  return (
    <ProjectExpand
      title={p.title}
      place={p.place}
      summary={p.summary}
      stats={p.stats}
      href={`/work/${p.slug}`}
      shot={{ src: "/media/site/adams-map.webp", alt: p.hero.alt, width: 1651, height: 871 }}
    />
  );
}

/* ------------------------------------------------------------------------ */
/* Partners and a client's words — light */

export function HomePartners() {
  const list = partners.filter((p) => p.verified);
  return (
    <section className="section theme-light" aria-labelledby="partners-title">
      <div className="wrap">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-6">
            <Reveal y={12}>
              <Eyebrow>Partners</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 id="partners-title" className="t-h2 mt-4 max-w-[18ch] text-fg">
                Working with agencies, universities and industry
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1} className="t-lead max-w-[46ch] text-fg-2 lg:col-span-5 lg:col-start-8">
            <p>Our products and research are built and tested with transportation departments, universities and funders.</p>
          </Reveal>
        </div>

        <ul className="mt-12 grid grid-cols-2 border-t border-l border-line sm:grid-cols-3 lg:mt-16 lg:grid-cols-5">
          {list.map((p, i) => (
            <Reveal as="li" key={p.name} delay={i * 0.06} className="group flex flex-col border-r border-b border-line">
              <div className="flex h-36 items-center justify-center px-8 sm:h-40">
                <Image
                  src={p.logo}
                  alt={p.full}
                  width={220}
                  height={90}
                  className="max-h-16 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <p className="border-t border-line px-5 py-3 text-[0.8125rem] text-fg-3">{p.full}</p>
            </Reveal>
          ))}
        </ul>

        <Reveal className="mt-20 grid gap-10 lg:mt-28 lg:grid-cols-12 lg:items-center">
          <div className="relative aspect-[4/5] overflow-clip rounded-2xl sm:max-w-sm lg:col-span-4 lg:max-w-none">
            <Image src="/media/site/elijah.webp" alt={testimonial.name} fill sizes="(min-width: 1024px) 30vw, 100vw" className="object-cover object-top" />
          </div>
          <figure className="lg:col-span-7 lg:col-start-6">
            <blockquote className="font-display text-[1.5rem] leading-snug font-medium tracking-[-0.04em] text-fg sm:text-[2rem]">
              “{testimonial.quote}”
            </blockquote>
            <figcaption className="mt-8">
              <span className="block font-semibold text-fg">{testimonial.name}</span>
              <span className="block text-fg-3">{testimonial.org}</span>
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------------ */
/* Work with us — the ways in, as a ruled list */

export function HomeCollaborate() {
  const ways = [
    { label: "Book a product demonstration", href: "/contact" },
    { label: "Read our case studies", href: "/work" },
    { label: "Research collaboration", href: "/research" },
    { label: "Careers", href: "/company/careers" },
  ];
  return (
    <section className="section border-t border-line bg-deep" aria-labelledby="collab-title">
      <div className="wrap grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-6">
          <Reveal y={12}>
            <Eyebrow>Work with InfiniCity Labs</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 id="collab-title" className="t-h2 mt-5 max-w-[15ch] text-fg">
              Bring us the road network you manage
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="mt-6 max-w-[46ch] text-[1.0625rem] leading-relaxed text-fg-2">
            <p>Tell us about your roads, cameras or study. We will show you the products that fit and plan a pilot on your own footage.</p>
          </Reveal>
          <Reveal delay={0.15} className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-3">
            <ButtonLink href="/contact">Talk to us</ButtonLink>
            <a href={`mailto:${site.email}`} className="text-link">
              {site.email} <ArrowUpRight size={18} aria-hidden />
            </a>
          </Reveal>
        </div>
        <Reveal delay={0.1} className="lg:col-span-5 lg:col-start-8">
          <ul className="border-t border-line">
            {ways.map((w) => (
              <li key={w.href}>
                <Link
                  href={w.href}
                  className="group flex min-h-[5.5rem] items-center justify-between gap-6 border-b border-line font-display text-[1.375rem] font-medium tracking-[-0.03em] text-fg transition-colors hover:text-primary sm:text-[1.5rem]"
                >
                  {w.label}
                  <ArrowUpRight size={24} aria-hidden className="shrink-0 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

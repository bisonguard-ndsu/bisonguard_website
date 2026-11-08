import Image from "next/image";
import { CountUp, Reveal, ScrollText } from "@/components/motion";
import { ProductStack, ProjectExpand, SolutionsRail } from "@/components/home/scroll";
import { Eyebrow, SectionHeading } from "@/components/sections";
import { metrics, partners, testimonial } from "@/content/evidence";
import { productPages } from "@/content/product-pages";
import { getProduct, statusLabel } from "@/content/products";
import { solutions } from "@/content/solutions";
import { projects } from "@/content/work";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------------ */
/* Who we are — light section; the statement fills in as it is read */

export function HomeIntro() {
  const stats = [
    { value: "4", label: "products in service" },
    { value: metrics.fargoSigns.value, label: "signs mapped in one city survey" },
    { value: metrics.fargoSegments.value, label: "road segments rated for roughness" },
    { value: "2", label: "regions served: the United States and West Africa" },
  ];
  return (
    <section className="section theme-light">
      <div className="wrap">
        <div className="grid gap-10 lg:grid-cols-12">
          <Reveal y={12} className="lg:col-span-3">
            <Eyebrow>Who we are</Eyebrow>
          </Reveal>
          <div className="lg:col-span-9">
            <ScrollText
              as="h2"
              text="Transportation engineers and computer-vision researchers, building the tools we wished road agencies had."
              className="font-display text-[1.875rem] leading-[1.18] font-medium tracking-[-0.02em] text-fg sm:text-[2.5rem] lg:text-[3.25rem]"
            />
            <Reveal delay={0.1} className="mt-10 grid gap-6 text-[1.0625rem] leading-relaxed text-fg-2 md:grid-cols-2">
              <p>
                We read the video that crews and cameras already capture and turn it into records engineers maintain: asset inventories, pavement
                condition, traffic counts and repair histories.
              </p>
              <p>
                Our methods come from applied research, and our products run on live networks for agencies and engineering firms in the United
                States and West Africa.
              </p>
            </Reveal>
          </div>
        </div>

        <dl className="mt-16 grid grid-cols-2 border-t border-line lg:mt-24 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 0.08}
              className={cn("border-b border-line py-8 pr-6 lg:border-b-0", i % 2 === 1 && "pl-6 max-lg:border-l max-lg:border-line", i > 0 && "lg:border-l lg:border-line lg:pl-8")}
            >
              <dt className="sr-only">{s.label}</dt>
              <dd>
                <CountUp value={s.value} className="block font-display text-[2.75rem] leading-none font-semibold tracking-tight text-fg sm:text-6xl" />
                <span className="mt-3 block max-w-[22ch] text-[0.9375rem] text-fg-2">{s.label}</span>
              </dd>
            </Reveal>
          ))}
        </dl>
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
/* Solutions — light; the row moves sideways while you scroll */

export function HomeSolutions() {
  return (
    <SolutionsRail
      items={solutions.map((s) => ({ href: `/solutions/${s.slug}`, image: s.image, group: s.group, title: s.title, text: s.short }))}
    >
      <SectionHeading
        eyebrow="Solutions"
        title="Start from the problem you have"
        lead="Whether you are inventorying assets, rating pavement or delivering a traffic study, here is how our products fit together for it."
      />
    </SolutionsRail>
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
            <blockquote className="font-display text-[1.5rem] leading-snug font-medium tracking-[-0.01em] text-fg sm:text-[2rem]">
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

import Link from "next/link";
import { CountUp, Parallax, Reveal, WordRise } from "@/components/motion";
import { AppFrame, Eyebrow, Photo, SectionHeading, Tag, type Img } from "@/components/sections";
import { productPages } from "@/content/product-pages";
import { getProduct, statusLabel } from "@/content/products";
import { solutions as allSolutions } from "@/content/solutions";
import { cn } from "@/lib/utils";

/* Card surface shared by every linked card on the site. */
export const cardCls =
  "group rounded-2xl border border-white/[0.08] bg-surface transition-[transform,border-color,background-color] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:border-primary/40 hover:bg-surface-2";

export function StatStrip({ stats, className }: { stats: { value: string; label: string }[]; className?: string }) {
  return (
    <dl
      className={cn(
        "grid grid-cols-2 overflow-clip rounded-2xl border border-white/[0.08] bg-white/[0.08] gap-px",
        stats.length === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4",
        className,
      )}
    >
      {stats.map((s, i) => (
        <Reveal key={s.label} delay={i * 0.06} className={cn("bg-surface p-6 sm:p-8", stats.length === 3 && i === 2 && "max-lg:col-span-2")}>
          <dt className="sr-only">{s.label}</dt>
          <dd>
            <CountUp value={s.value} className="block font-display text-4xl leading-none font-medium tracking-[-0.04em] text-fg sm:text-5xl" />
            <span className="mt-3 block max-w-[28ch] text-[0.9375rem] leading-snug text-fg-2">{s.label}</span>
          </dd>
        </Reveal>
      ))}
    </dl>
  );
}

export function Steps({ steps, eyebrow = "How it works", title, accent, lead }: { steps: { title: string; text: string }[]; eyebrow?: string; title: string; accent?: string; lead?: string }) {
  return (
    <section className="section theme-light">
      <div className="wrap">
        <SectionHeading eyebrow={eyebrow} title={title} accent={accent} lead={lead} />
        <ol className={cn("relative mt-14 grid gap-5 lg:mt-20", steps.length === 4 ? "md:grid-cols-2 lg:grid-cols-4" : "md:grid-cols-3")}>
          {steps.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 0.1} className="relative border-t-2 border-fg pt-6">
              <span className="font-display text-sm font-medium text-fg-3">Step {i + 1}</span>
              <h3 className="mt-3 font-display text-2xl font-medium tracking-[-0.04em] text-fg">{s.title}</h3>
              <p className="mt-3 text-[1.0625rem] leading-relaxed text-fg-2">{s.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function FeatureGrid({ features, eyebrow = "Capabilities", title, accent, lead }: { features: { title: string; text: string }[]; eyebrow?: string; title: string; accent?: string; lead?: string }) {
  return (
    <section className="section bg-deep">
      <div className="wrap">
        <SectionHeading eyebrow={eyebrow} title={title} accent={accent} lead={lead} />
        <ul className="mt-14 grid gap-px overflow-clip rounded-2xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
          {features.map((f, i) => (
            <Reveal as="li" key={f.title} delay={(i % 3) * 0.08} className="group relative bg-surface p-7 transition-colors duration-500 hover:bg-surface-2 sm:p-8">
              <span aria-hidden className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-primary transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100" />
              <h3 className="font-display text-xl font-medium text-fg">{f.title}</h3>
              <p className="mt-3 text-[0.9875rem] leading-relaxed text-fg-2">{f.text}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

type ShowcaseItem = {
  title: string;
  accent: string;
  text: string;
  points: string[];
  visual: { kind: "app"; shot: Img & { width: number; height: number; label?: string } } | { kind: "photo"; image: Img };
};

export function Showcase({ items, eyebrow }: { items: ShowcaseItem[]; eyebrow: string }) {
  return (
    <section className="section overflow-clip bg-bg">
      <div className="wrap space-y-24 lg:space-y-32">
        {items.map((s, i) => (
          <div key={s.title} className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
            <div className={cn("lg:col-span-5", i % 2 === 1 && "lg:order-2")}>
              <Reveal y={12}>
                <Eyebrow>{eyebrow}</Eyebrow>
              </Reveal>
              <WordRise inView text={s.title} className="t-h2 mt-4 text-fg" />
              <Reveal delay={0.2} className="mt-6 text-[1.0625rem] leading-relaxed text-fg-2">
                <p>{s.text}</p>
              </Reveal>
              <ul className="mt-8 space-y-3">
                {s.points.map((p, j) => (
                  <Reveal as="li" key={p} delay={0.25 + j * 0.06} className="flex items-start gap-3 text-fg">
                    <svg viewBox="0 0 16 16" className="mt-1 h-4 w-4 shrink-0 text-primary-strong" aria-hidden><path d="m3 8.5 3 3 7-7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    {p}
                  </Reveal>
                ))}
              </ul>
            </div>
            <Reveal delay={0.15} className={cn("lg:col-span-7", i % 2 === 1 && "lg:order-1")}>
              {s.visual.kind === "app" ? (
                <AppFrame image={s.visual.shot} label={s.visual.shot.label} />
              ) : (
                <div className="group">
                  <Parallax className="aspect-[4/3] rounded-2xl" amount={6}>
                    <Photo image={s.visual.image} className="absolute inset-0" sizes="(min-width: 1024px) 58vw, 100vw" />
                  </Parallax>
                </div>
              )}
            </Reveal>
          </div>
        ))}
      </div>
    </section>
  );
}

export function ProductCards({ slugs, title = "Products used", eyebrow = "Products" }: { slugs: string[]; title?: string; eyebrow?: string }) {
  const items = productPages.filter((p) => slugs.includes(p.slug));
  if (!items.length) return null;
  return (
    <section className="section bg-bg">
      <div className="wrap">
        <SectionHeading eyebrow={eyebrow} title={title} />
        <ul className={cn("mt-12 grid gap-5", items.length > 1 ? "md:grid-cols-2 lg:grid-cols-3" : "md:grid-cols-2")}>
          {items.map((p, i) => {
            const prod = getProduct(p.slug);
            return (
              <Reveal as="li" key={p.slug} delay={i * 0.08}>
                <Link href={prod.href} className={cn(cardCls, "flex h-full flex-col overflow-clip")}>
                  <Photo image={p.card} className="aspect-[16/9]" sizes="(min-width: 1024px) 30vw, 100vw" />
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="font-display text-2xl font-medium text-fg">{p.name}</h3>
                      <Tag tone="primary">{statusLabel[prod.status]}</Tag>
                    </div>
                    <p className="mt-3 flex-1 text-[0.9375rem] leading-relaxed text-fg-2">{prod.summary}</p>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">
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

export function SolutionCards({ slugs, title = "Where it helps", eyebrow = "Solutions" }: { slugs: string[]; title?: string; eyebrow?: string }) {
  const items = allSolutions.filter((s) => slugs.includes(s.slug));
  if (!items.length) return null;
  return (
    <section className="section bg-bg">
      <div className="wrap">
        <SectionHeading eyebrow={eyebrow} title={title} />
        <ul className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map((s, i) => (
            <Reveal as="li" key={s.slug} delay={i * 0.08}>
              <Link href={`/solutions/${s.slug}`} className={cn(cardCls, "flex h-full flex-col overflow-clip")}>
                <Photo image={s.image} className="aspect-[16/9]" sizes="(min-width: 1024px) 30vw, 100vw" />
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-[0.8125rem] text-fg-3">{s.group}</p>
                  <h3 className="mt-2 font-display text-xl font-medium text-fg group-hover:text-primary-strong">{s.title}</h3>
                  <p className="mt-2 flex-1 text-[0.9375rem] leading-relaxed text-fg-2">{s.short}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Checklist({ items, className }: { items: string[]; className?: string }) {
  return (
    <ul className={cn("grid gap-3", className)}>
      {items.map((p, j) => (
        <Reveal as="li" key={p} delay={j * 0.05} className="flex items-start gap-3 rounded-xl border border-white/[0.08] bg-surface px-5 py-4 text-fg">
          <svg viewBox="0 0 16 16" className="mt-1 h-4 w-4 shrink-0 text-primary-strong" aria-hidden>
            <path d="m3 8.5 3 3 7-7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          {p}
        </Reveal>
      ))}
    </ul>
  );
}

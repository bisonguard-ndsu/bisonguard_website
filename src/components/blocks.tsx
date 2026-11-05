import Link from "next/link";
import { CountUp, Heading, Reveal } from "@/components/motion";
import { AppFrame, Eyebrow, Photo, SectionHeading, Tag, type Img } from "@/components/sections";
import { productPages } from "@/content/product-pages";
import { getProduct, statusLabel } from "@/content/products";
import { solutions as allSolutions } from "@/content/solutions";
import { cn } from "@/lib/utils";

export type Tone = "light" | "muted" | "dark" | "deep";
/** Classes for a section in the given tone. */
export const toneCls = (tone: Tone) => (tone === "dark" ? "bg-bg" : tone === "deep" ? "bg-deep" : `tone-${tone}`);

/* Card surface shared by every linked card on the site. */
export const cardCls =
  "group rounded-xl border border-edge bg-surface transition-[transform,border-color,box-shadow] duration-300 ease-out hover:-translate-y-0.5 hover:border-edge-strong hover:shadow-[0_18px_40px_-24px_rgba(15,20,35,0.35)]";

export function StatStrip({ stats, className }: { stats: { value: string; label: string }[]; className?: string }) {
  return (
    <dl className={cn("grid grid-cols-2 gap-x-8 gap-y-10", stats.length === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4", className)}>
      {stats.map((s, i) => (
        <Reveal key={s.label} delay={i * 0.05} className="border-t border-edge-strong pt-6">
          <dt className="sr-only">{s.label}</dt>
          <dd>
            <CountUp value={s.value} className="block font-display text-4xl leading-none font-semibold tracking-tight text-fg sm:text-5xl" />
            <span className="mt-3 block max-w-[26ch] text-[0.9375rem] leading-snug text-fg-2">{s.label}</span>
          </dd>
        </Reveal>
      ))}
    </dl>
  );
}

export function Steps({
  steps,
  eyebrow = "How it works",
  title,
  lead,
  tone = "dark",
}: {
  steps: { title: string; text: string }[];
  eyebrow?: string;
  title: string;
  lead?: string;
  tone?: Tone;
}) {
  return (
    <section className={cn("section", toneCls(tone))}>
      <div className="wrap">
        <SectionHeading eyebrow={eyebrow} title={title} lead={lead} />
        <ol className={cn("mt-14 grid gap-x-8 gap-y-12 lg:mt-20", steps.length === 4 ? "md:grid-cols-2 lg:grid-cols-4" : "md:grid-cols-3")}>
          {steps.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 0.08} className="border-t-2 border-fg pt-6">
              <span className="font-mono text-sm text-fg-3">Step {i + 1}</span>
              <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight text-fg">{s.title}</h3>
              <p className="mt-3 text-[1.0625rem] leading-relaxed text-fg-2">{s.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function FeatureGrid({
  features,
  eyebrow = "Capabilities",
  title,
  lead,
  tone = "deep",
}: {
  features: { title: string; text: string }[];
  eyebrow?: string;
  title: string;
  lead?: string;
  tone?: Tone;
}) {
  return (
    <section className={cn("section", toneCls(tone))}>
      <div className="wrap">
        <SectionHeading eyebrow={eyebrow} title={title} lead={lead} />
        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
          {features.map((f, i) => (
            <Reveal as="li" key={f.title} delay={(i % 3) * 0.06} className="rounded-xl border border-edge bg-surface p-7">
              <span aria-hidden className="block h-1 w-8 rounded-full bg-primary" />
              <h3 className="mt-6 font-display text-xl font-semibold text-fg">{f.title}</h3>
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
  text: string;
  points: string[];
  visual: { kind: "app"; shot: Img & { width: number; height: number; label?: string } } | { kind: "photo"; image: Img };
};

export function Showcase({ items, eyebrow, tone = "dark" }: { items: ShowcaseItem[]; eyebrow: string; tone?: Tone }) {
  return (
    <section className={cn("section", toneCls(tone))}>
      <div className="wrap space-y-24 lg:space-y-32">
        {items.map((s, i) => (
          <div key={s.title} className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-16">
            <div className={cn("lg:col-span-5", i % 2 === 1 && "lg:order-2")}>
              <Reveal y={8}>
                <Eyebrow>{eyebrow}</Eyebrow>
              </Reveal>
              <Heading text={s.title} className="t-h2 mt-3 text-fg" />
              <Reveal delay={0.1} className="mt-6 text-[1.0625rem] leading-relaxed text-fg-2">
                <p>{s.text}</p>
              </Reveal>
              <Checklist items={s.points} plain className="mt-8" />
            </div>
            <Reveal delay={0.1} className={cn("lg:col-span-7", i % 2 === 1 && "lg:order-1")}>
              {s.visual.kind === "app" ? (
                <AppFrame image={s.visual.shot} label={s.visual.shot.label} />
              ) : (
                <Photo image={s.visual.image} className="aspect-[4/3] rounded-xl" sizes="(min-width: 1024px) 58vw, 100vw" />
              )}
            </Reveal>
          </div>
        ))}
      </div>
    </section>
  );
}

export function ProductCards({ slugs, title = "Products used", eyebrow = "Products", tone = "dark" }: { slugs: string[]; title?: string; eyebrow?: string; tone?: Tone }) {
  const items = productPages.filter((p) => slugs.includes(p.slug));
  if (!items.length) return null;
  return (
    <section className={cn("section", toneCls(tone))}>
      <div className="wrap">
        <SectionHeading eyebrow={eyebrow} title={title} />
        <ul className={cn("mt-12 grid gap-5", items.length > 2 ? "md:grid-cols-2 lg:grid-cols-3" : "md:grid-cols-2")}>
          {items.map((p, i) => {
            const prod = getProduct(p.slug);
            return (
              <Reveal as="li" key={p.slug} delay={i * 0.06}>
                <Link href={prod.href} className={cn(cardCls, "flex h-full flex-col overflow-clip")}>
                  <Photo image={p.card} className="aspect-[16/9]" sizes="(min-width: 1024px) 30vw, 100vw" />
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="font-display text-2xl font-semibold text-fg">{p.name}</h3>
                      <Tag>{statusLabel[prod.status]}</Tag>
                    </div>
                    <p className="mt-3 flex-1 text-[0.9375rem] leading-relaxed text-fg-2">{prod.summary}</p>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary-strong">
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

/** Solutions as a list of rows: a thumbnail, what it is, and where it leads. */
export function SolutionList({ slugs, className }: { slugs?: string[]; className?: string }) {
  const items = slugs ? allSolutions.filter((s) => slugs.includes(s.slug)) : allSolutions;
  return (
    <ul className={cn("border-t border-edge-strong", className)}>
      {items.map((s, i) => (
        <Reveal as="li" key={s.slug} delay={Math.min(i, 4) * 0.04}>
          <Link href={`/solutions/${s.slug}`} className="group grid items-center gap-5 border-b border-edge py-6 sm:grid-cols-[9rem_1fr_auto] sm:gap-8">
            <Photo image={s.image} className="hidden aspect-[3/2] rounded-lg sm:block" sizes="144px" />
            <div>
              <p className="text-sm text-fg-3">{s.group}</p>
              <h3 className="mt-1 font-display text-xl font-semibold text-fg sm:text-2xl">
                <span className="link">{s.title}</span>
              </h3>
              <p className="mt-2 max-w-[60ch] text-[0.9875rem] leading-relaxed text-fg-2">{s.short}</p>
            </div>
            <span
              aria-hidden
              className="hidden h-11 w-11 items-center justify-center rounded-full border border-edge-strong text-fg transition-colors duration-300 group-hover:border-fg group-hover:bg-fg group-hover:text-bg sm:flex"
            >
              <span className="arrow">→</span>
            </span>
          </Link>
        </Reveal>
      ))}
    </ul>
  );
}

export function SolutionCards({ slugs, title = "Where it helps", eyebrow = "Solutions", tone = "deep" }: { slugs: string[]; title?: string; eyebrow?: string; tone?: Tone }) {
  if (!allSolutions.some((s) => slugs.includes(s.slug))) return null;
  return (
    <section className={cn("section", toneCls(tone))}>
      <div className="wrap">
        <SectionHeading eyebrow={eyebrow} title={title} />
        <SolutionList slugs={slugs} className="mt-12" />
      </div>
    </section>
  );
}

export function Checklist({ items, className, plain }: { items: string[]; className?: string; plain?: boolean }) {
  return (
    <ul className={cn("grid", plain ? "gap-3" : "gap-0 border-t border-edge", className)}>
      {items.map((p) => (
        <li key={p} className={cn("flex items-start gap-3 text-fg", !plain && "border-b border-edge py-4")}>
          <svg viewBox="0 0 16 16" className="mt-1 h-4 w-4 shrink-0 text-primary-strong" aria-hidden>
            <path d="m3 8.5 3 3 7-7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          {p}
        </li>
      ))}
    </ul>
  );
}

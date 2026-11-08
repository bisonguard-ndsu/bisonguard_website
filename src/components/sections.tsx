import Image from "next/image";
import Link from "next/link";
import { Reveal, ScanReveal, WordRise } from "@/components/motion";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";

export type Img = { src: string; alt: string; position?: string };
export type Action = { label: string; href: string };

export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={cn("flex items-center gap-3 text-[0.8125rem] font-semibold tracking-[0.08em] text-primary-strong uppercase", className)}>
      <span className="h-px w-8 shrink-0 bg-primary-strong/70" aria-hidden />
      {children}
    </p>
  );
}

/** Section opening: eyebrow, a headline whose words rise in, and an optional lead beside or below it. */
export function SectionHeading({
  eyebrow,
  title,
  accent,
  lead,
  side = true,
  className,
  as = "h2",
}: {
  eyebrow?: string;
  title: string;
  accent?: string;
  lead?: React.ReactNode;
  /** Put the lead to the right of the headline on large screens */
  side?: boolean;
  className?: string;
  as?: "h1" | "h2";
}) {
  return (
    <div className={cn("grid gap-6", side && lead && "lg:grid-cols-12 lg:items-end lg:gap-10", className)}>
      <div className={cn(side && lead && "lg:col-span-7")}>
        {eyebrow && (
          <Reveal y={12}>
            <Eyebrow>{eyebrow}</Eyebrow>
          </Reveal>
        )}
        <WordRise as={as} inView text={title} accent={accent} className="t-h2 mt-5 max-w-[22ch] text-fg" />
      </div>
      {lead && (
        <Reveal delay={0.2} className={cn("t-lead max-w-[48ch] text-fg-2", side && "lg:col-span-5 lg:pb-2")}>
          {lead}
        </Reveal>
      )}
    </div>
  );
}

export function Crumbs({ items, current }: { items: Action[]; current: string }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-2 font-mono text-xs tracking-wide text-white/55 uppercase">
        <li>
          <Link href="/" className="transition-colors hover:text-white">
            Home
          </Link>
        </li>
        {items.map((c) => (
          <li key={c.href} className="flex items-center gap-2">
            <span aria-hidden>/</span>
            <Link href={c.href} className="transition-colors hover:text-white">
              {c.label}
            </Link>
          </li>
        ))}
        <li className="flex items-center gap-2 text-white/85" aria-current="page">
          <span aria-hidden>/</span>
          {current}
        </li>
      </ol>
    </nav>
  );
}

/** Photo-backed opening for inner pages. The photo arrives with the signature scan wipe. */
export function PageHero({
  eyebrow,
  title,
  accent,
  lead,
  image,
  crumbs,
  actions,
  children,
}: {
  eyebrow: string;
  title: string;
  accent?: string;
  lead?: string;
  image: Img;
  crumbs?: Action[];
  actions?: Action[];
  children?: React.ReactNode;
}) {
  return (
    <section className="relative isolate -mt-[4.5rem] flex min-h-[34rem] flex-col justify-end overflow-clip bg-deep pt-36 pb-14 sm:pb-16 lg:min-h-[40rem] lg:pb-20">
      <ScanReveal inView={false} className="absolute inset-0 -z-10">
        <Image src={image.src} alt={image.alt} fill priority sizes="100vw" className="object-cover" style={{ objectPosition: image.position }} />
      </ScanReveal>
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-deep/80 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-[85%] bg-gradient-to-t from-bg via-deep/75 to-transparent" />
        <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-deep/75 via-deep/25 to-transparent lg:w-2/3" />
      </div>

      <div className="wrap">
        {crumbs && (
          <Reveal y={8} delay={0.1} className="mb-8">
            <Crumbs items={crumbs} current={eyebrow} />
          </Reveal>
        )}
        <Reveal y={12} delay={0.3}>
          <Eyebrow>{eyebrow}</Eyebrow>
        </Reveal>
        <WordRise
          as="h1"
          text={title}
          accent={accent}
          delay={0.4}
          className="mt-5 max-w-[20ch] font-display text-[2.375rem] leading-[1.06] font-semibold tracking-[-0.03em] text-white sm:text-[3.25rem] lg:text-[4rem]"
        />
        {lead && (
          <Reveal delay={0.7} className="mt-6 max-w-[40rem] text-[1.0625rem] leading-relaxed text-white/80 sm:text-lg">
            <p>{lead}</p>
          </Reveal>
        )}
        {actions && actions.length > 0 && (
          <Reveal delay={0.85} className="mt-8 flex flex-wrap gap-3">
            {actions.map((a, i) => (
              <ButtonLink key={a.href + a.label} href={a.href} variant={i === 0 ? "primary" : "ghost"}>
                {a.label}
              </ButtonLink>
            ))}
          </Reveal>
        )}
        {children}
      </div>
    </section>
  );
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
  external,
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost" | "light";
  className?: string;
  external?: boolean;
}) {
  const cls = cn("btn group h-12 px-6 text-base", `btn-${variant}`, className);
  const inner = (
    <>
      {children}
      {variant === "primary" && (
        <span className="arrow" aria-hidden>
          {external ? "↗" : "→"}
        </span>
      )}
    </>
  );
  if (external || href.startsWith("mailto:"))
    return (
      <a href={href} className={cls} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
        {inner}
        {external && <span className="sr-only">(opens in a new tab)</span>}
      </a>
    );
  return (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  );
}

/** A photo in a rounded frame that zooms slightly when its card is hovered. */
export function Photo({ image, className, sizes = "(min-width: 1024px) 50vw, 100vw", priority }: { image: Img; className?: string; sizes?: string; priority?: boolean }) {
  return (
    <div className={cn("relative overflow-clip bg-surface", className)}>
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
        style={{ objectPosition: image.position }}
      />
    </div>
  );
}

/** A product screenshot in a dark app frame with a soft teal glow behind it. */
export function AppFrame({ image, className, label }: { image: Img & { width: number; height: number }; className?: string; label?: string }) {
  return (
    <div className={cn("relative", className)}>
      <div aria-hidden className="absolute -inset-6 -z-10 rounded-[2rem] bg-[radial-gradient(ellipse_at_center,oklch(0.74_0.125_185/0.22),transparent_70%)] blur-2xl" />
      <div className="overflow-clip rounded-2xl border border-white/10 bg-surface shadow-[0_40px_100px_-40px_rgba(0,0,0,0.8)]">
        <div className="flex items-center gap-2 border-b border-white/[0.07] px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          {label && <span className="ml-3 truncate font-mono text-[0.6875rem] tracking-wide text-fg-3">{label}</span>}
        </div>
        <Image src={image.src} alt={image.alt} width={image.width} height={image.height} sizes="(min-width: 1024px) 60vw, 100vw" className="block h-auto w-full" />
      </div>
    </div>
  );
}

/** Closing call to action used at the foot of most pages. */
export function CtaBand({
  title = "Have a network to survey or a study to deliver?",
  accent = "a study to deliver?",
  lead = "Tell us about the roads, cameras or study you have in mind. An engineer from our team will get back to you.",
  image = { src: "/media/hero/company.webp", alt: "A city highway interchange at night, seen from above" },
}: {
  title?: string;
  accent?: string;
  lead?: string;
  image?: Img;
}) {
  return (
    <section className="section bg-bg">
      <div className="wrap">
        <div className="relative isolate overflow-clip rounded-3xl border border-white/10 px-6 py-16 sm:px-12 lg:px-16 lg:py-24">
          <Image src={image.src} alt="" fill sizes="(min-width: 1344px) 1248px, 100vw" className="-z-20 object-cover" />
          <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-r from-deep via-deep/85 to-deep/40" />
          <div aria-hidden className="absolute -top-40 -right-40 -z-10 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <Reveal y={12}>
                <Eyebrow>Work with us</Eyebrow>
              </Reveal>
              <WordRise inView text={title} accent={accent} className="t-h2 mt-5 max-w-[20ch] text-white" />
              <Reveal delay={0.2} className="mt-6 max-w-[46ch] text-lg leading-relaxed text-white/75">
                <p>{lead}</p>
              </Reveal>
            </div>
            <Reveal delay={0.3} className="flex flex-col gap-3 sm:flex-row lg:col-span-4 lg:flex-col lg:items-end">
              <ButtonLink href="/contact">Talk to us</ButtonLink>
              <ButtonLink href={`mailto:${site.email}`} variant="ghost">
                {site.email}
              </ButtonLink>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Small mono tag, e.g. a product status or venue. */
export function Tag({ children, tone = "muted", className }: { children: React.ReactNode; tone?: "muted" | "primary" | "accent"; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[0.6875rem] tracking-wide uppercase",
        tone === "primary" && "border-primary/30 bg-primary/10 text-primary-strong",
        tone === "accent" && "border-accent/30 bg-accent/10 text-accent",
        tone === "muted" && "border-white/10 bg-white/[0.04] text-fg-2",
        className,
      )}
    >
      {children}
    </span>
  );
}

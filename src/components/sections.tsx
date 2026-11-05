import Image from "next/image";
import Link from "next/link";
import { Heading, ImageReveal, Reveal } from "@/components/motion";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";

export type Img = { src: string; alt: string; position?: string };
export type Action = { label: string; href: string };

export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return <p className={cn("text-sm font-semibold text-primary-strong", className)}>{children}</p>;
}

/** Section opening: label, headline and an optional lead beside or below it. */
export function SectionHeading({
  eyebrow,
  title,
  lead,
  side = true,
  className,
  as = "h2",
}: {
  eyebrow?: string;
  title: string;
  lead?: React.ReactNode;
  /** Put the lead to the right of the headline on large screens */
  side?: boolean;
  className?: string;
  as?: "h1" | "h2";
}) {
  return (
    <div className={cn("grid gap-5", side && lead && "lg:grid-cols-12 lg:items-end lg:gap-10", className)}>
      <div className={cn(side && lead && "lg:col-span-7")}>
        {eyebrow && (
          <Reveal y={8}>
            <Eyebrow>{eyebrow}</Eyebrow>
          </Reveal>
        )}
        <Heading as={as} text={title} className="t-h2 mt-3 max-w-[24ch] text-fg" />
      </div>
      {lead && (
        <Reveal delay={0.1} className={cn("t-lead max-w-[50ch] text-fg-2", side && "lg:col-span-5 lg:pb-1.5")}>
          {lead}
        </Reveal>
      )}
    </div>
  );
}

export function Crumbs({ items, current }: { items: Action[]; current: string }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-2 text-sm text-white/55">
        <li>
          <Link href="/" className="transition-colors hover:text-white">
            Home
          </Link>
        </li>
        {items.map((c) => (
          <li key={c.href} className="flex items-center gap-2">
            <span aria-hidden className="text-white/30">
              /
            </span>
            <Link href={c.href} className="transition-colors hover:text-white">
              {c.label}
            </Link>
          </li>
        ))}
        <li className="flex items-center gap-2 text-white/85" aria-current="page">
          <span aria-hidden className="text-white/30">
            /
          </span>
          {current}
        </li>
      </ol>
    </nav>
  );
}

/**
 * Opening for inner pages: headline and lead on the dark band, then a wide
 * photograph that straddles the band and the light section below it.
 */
export function PageHero({
  eyebrow,
  title,
  lead,
  image,
  crumbs,
  actions,
  children,
  next = "dark",
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  image: Img;
  crumbs?: Action[];
  actions?: Action[];
  children?: React.ReactNode;
  /** Tone of the section that follows, so the photo's lower half sits on it */
  next?: "dark" | "light";
}) {
  return (
    <section className="relative -mt-[4.5rem] bg-deep pt-[4.5rem]">
      <div className="wrap grid gap-8 pt-12 pb-12 lg:grid-cols-12 lg:items-end lg:gap-10 lg:pt-20 lg:pb-16">
        <div className="lg:col-span-7">
          <Reveal y={8}>{crumbs ? <Crumbs items={crumbs} current={eyebrow} /> : <p className="text-sm font-semibold text-primary">{eyebrow}</p>}</Reveal>
          <Heading
            as="h1"
            inView={false}
            delay={0.05}
            text={title}
            className="mt-6 max-w-[18ch] font-display text-[2.375rem] leading-[1.06] font-semibold tracking-[-0.03em] text-white sm:text-[3.25rem] lg:text-[3.75rem]"
          />
        </div>
        <div className="lg:col-span-5 lg:pb-2">
          {lead && (
            <Reveal delay={0.15} className="text-[1.0625rem] leading-relaxed text-white/75 sm:text-lg">
              <p>{lead}</p>
            </Reveal>
          )}
          {actions && actions.length > 0 && (
            <Reveal delay={0.25} className="mt-8 flex flex-wrap gap-3">
              {actions.map((a, i) => (
                <ButtonLink key={a.href + a.label} href={a.href} variant={i === 0 ? "primary" : "ghost"}>
                  {a.label}
                </ButtonLink>
              ))}
            </Reveal>
          )}
          {children}
        </div>
      </div>
      <div className="relative">
        <div aria-hidden className={cn("absolute inset-x-0 bottom-0 h-1/2", next === "light" ? "tone-light" : "bg-bg")} />
        <div className="wrap relative">
          <ImageReveal delay={0.1} className="relative aspect-[16/10] rounded-2xl bg-surface sm:aspect-[2/1] lg:aspect-[21/8]">
            <Image src={image.src} alt={image.alt} fill priority sizes="(min-width: 1344px) 1248px, 100vw" className="object-cover" style={{ objectPosition: image.position }} />
          </ImageReveal>
        </div>
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

/** A photo that zooms slightly when its card is hovered. */
export function Photo({ image, className, sizes = "(min-width: 1024px) 50vw, 100vw", priority }: { image: Img; className?: string; sizes?: string; priority?: boolean }) {
  return (
    <div className={cn("relative overflow-clip bg-surface-2", className)}>
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
        style={{ objectPosition: image.position }}
      />
    </div>
  );
}

/** A product screenshot in a plain application window. */
export function AppFrame({ image, className, label }: { image: Img & { width: number; height: number }; className?: string; label?: string }) {
  return (
    <div className={cn("overflow-clip rounded-xl border border-edge-strong bg-[oklch(0.2_0.018_265)] shadow-[0_30px_70px_-35px_rgba(15,20,35,0.55)]", className)}>
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        {label && <span className="ml-3 truncate text-xs text-white/55">{label}</span>}
      </div>
      <Image src={image.src} alt={image.alt} width={image.width} height={image.height} sizes="(min-width: 1024px) 60vw, 100vw" className="block h-auto w-full" />
    </div>
  );
}

/** Closing call to action used at the foot of most pages. */
export function CtaBand({
  title = "Have a network to survey or a study to deliver?",
  lead = "Tell us about the roads, cameras or study you have in mind. An engineer from our team will get back to you.",
  image = { src: "/media/site/interchange.webp", alt: "" },
}: {
  title?: string;
  lead?: string;
  image?: Img;
}) {
  return (
    <section className="overflow-clip bg-deep">
      <div className="wrap grid lg:grid-cols-12">
        <div className="py-20 lg:col-span-6 lg:py-28 lg:pr-12">
          <Heading text={title} className="t-h2 max-w-[18ch] text-white" />
          <Reveal delay={0.1} className="mt-6 max-w-[46ch] text-lg leading-relaxed text-white/70">
            <p>{lead}</p>
          </Reveal>
          <Reveal delay={0.2} className="mt-10 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/contact">Talk to us</ButtonLink>
            <ButtonLink href={`mailto:${site.email}`} variant="ghost">
              {site.email}
            </ButtonLink>
          </Reveal>
        </div>
        <div className="relative -mx-5 min-h-64 sm:-mx-8 lg:col-span-6 lg:mx-0 lg:-mr-[max(3rem,calc((100vw-84rem)/2+3rem))]">
          <Image src={image.src} alt={image.alt} fill sizes="50vw" className="object-cover" style={{ objectPosition: image.position }} />
        </div>
      </div>
    </section>
  );
}

/** Small label, e.g. a product status or venue. */
export function Tag({ children, tone = "muted", className }: { children: React.ReactNode; tone?: "muted" | "primary" | "accent"; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-md border px-2 py-0.5 text-xs font-medium",
        tone === "primary" && "border-primary/30 bg-primary/10 text-primary-strong",
        tone === "accent" && "border-accent/30 bg-accent/10 text-accent",
        tone === "muted" && "border-edge bg-surface-2 text-fg-2",
        className,
      )}
    >
      {children}
    </span>
  );
}

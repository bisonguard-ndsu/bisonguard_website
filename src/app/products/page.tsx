import type { Metadata } from "next";
import Link from "next/link";
import { cardCls } from "@/components/blocks";
import { Reveal } from "@/components/motion";
import { CtaBand, PageHero, Photo, SectionHeading, Tag } from "@/components/sections";
import { productPages } from "@/content/product-pages";
import { getProduct, platformExtras, statusLabel } from "@/content/products";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Products",
  description:
    "AdAMS, TMC, Turnflow and RoadLogger: computer-vision software for road assets, pavement, traffic cameras, traffic studies and field inspections.",
  alternates: { canonical: "/products" },
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title="Software that reads the road for you"
        accent="reads the road for you"
        lead="Four products, each built for one job, sharing one map, one set of accounts and the evidence behind every number."
        image={{ src: "/media/site/interchange.webp", alt: "A highway interchange seen from above", position: "50% 50%" }}
        actions={[{ label: "Book a demo", href: "/contact" }]}
      />

      <section className="section bg-bg">
        <div className="wrap space-y-6">
          {productPages.map((p, i) => {
            const prod = getProduct(p.slug);
            return (
              <Reveal key={p.slug}>
                <Link href={prod.href} className={cn(cardCls, "grid overflow-clip lg:grid-cols-12")}>
                  <Photo
                    image={p.card}
                    className={cn("aspect-[16/10] lg:col-span-6 lg:aspect-auto lg:min-h-[26rem]", i % 2 === 1 && "lg:order-2")}
                  />
                  <div className="flex flex-col justify-center p-8 sm:p-12 lg:col-span-6">
                    <div className="flex flex-wrap gap-2">
                      <Tag>{p.category}</Tag>
                      <Tag tone="primary">{statusLabel[prod.status]}</Tag>
                    </div>
                    <h2 className="mt-6 font-display text-4xl font-medium tracking-[-0.04em] text-fg sm:text-5xl">{p.name}</h2>
                    {p.fullName && <p className="mt-2 text-[0.875rem] text-fg-3">{p.fullName}</p>}
                    <p className="mt-5 max-w-[46ch] text-[1.0625rem] leading-relaxed text-fg-2">{p.lead}</p>
                    <dl className="mt-8 grid gap-4 border-t border-white/10 pt-6 sm:grid-cols-2">
                      <div>
                        <dt className="text-[0.8125rem] text-fg-3">Takes in</dt>
                        <dd className="mt-1 text-fg">{prod.input}</dd>
                      </div>
                      <div>
                        <dt className="text-[0.8125rem] text-fg-3">Gives back</dt>
                        <dd className="mt-1 text-fg">{prod.output}</dd>
                      </div>
                    </dl>
                    <span className="mt-8 inline-flex items-center gap-2 font-semibold text-primary">
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
        </div>
      </section>

      <section className="section bg-deep">
        <div className="wrap">
          <SectionHeading
            eyebrow="Also on the platform"
            title="What we are building next"
            accent="building next"
            lead="The labelling tool behind our models, and the next product on its way."
          />
          <ul className="mt-12 grid gap-5 md:grid-cols-2">
            {platformExtras.map((x, i) => (
              <Reveal as="li" key={x.name} delay={i * 0.08} className="rounded-2xl border border-white/[0.08] bg-surface p-8">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-display text-2xl font-medium text-fg">{x.name}</h3>
                  <Tag tone={x.status === "in-development" ? "accent" : "muted"}>{statusLabel[x.status]}</Tag>
                </div>
                <p className="mt-4 text-[1.0625rem] leading-relaxed text-fg-2">{x.line}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand
        title="Not sure which product fits?"
        accent="which product fits?"
        lead="Tell us what you need to measure or manage and we will point you to the right tool, or a combination of them."
      />
    </>
  );
}

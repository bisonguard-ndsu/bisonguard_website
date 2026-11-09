import type { Metadata } from "next";
import Link from "next/link";
import { FaqJsonLd, FaqList } from "@/components/faq";
import { Reveal } from "@/components/motion";
import { PageIntro } from "@/components/page-intro";
import { ButtonLink } from "@/components/sections";
import { faqGroups } from "@/content/faqs";
import { productPages } from "@/content/product-pages";
import { productFaqs } from "@/content/faqs";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Questions and answers",
  description: "Equipment, pilots, accuracy, exports and working with InfiniCity Labs: answers to the questions road agencies and engineers ask first.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  return (
    <>
      <FaqJsonLd items={faqGroups.flatMap((g) => g.items)} />
      <PageIntro
        label="Questions and answers"
        title="Everything you need to know before a pilot"
        lead="Equipment, accuracy, exports and how we work with agencies. If your question is not answered here, write to us and a person will reply."
      />

      <section className="section bg-bg">
        <div className="wrap grid gap-14 lg:grid-cols-12 lg:gap-16">
          {/* Topics */}
          <aside className="lg:col-span-3">
            <nav aria-label="Topics" className="lg:sticky lg:top-28">
              <p className="eyebrow text-fg-3">Topics</p>
              <ul className="mt-4 border-t border-line">
                {faqGroups.map((g) => (
                  <li key={g.id}>
                    <a href={`#${g.id}`} className="group flex items-center justify-between border-b border-line py-3.5 text-[0.9375rem] text-fg-2 transition-colors hover:text-fg">
                      {g.title}
                      <span className="text-fg-3">{g.items.length}</span>
                    </a>
                  </li>
                ))}
              </ul>
              <p className="eyebrow mt-10 text-fg-3">By product</p>
              <ul className="mt-4 border-t border-line">
                {productPages.filter((p) => productFaqs[p.slug]?.length).map((p) => (
                  <li key={p.slug}>
                    <Link
                      href={`/products/${p.slug}#questions`}
                      className="group flex items-center justify-between border-b border-line py-3.5 text-[0.9375rem] text-fg-2 transition-colors hover:text-fg"
                    >
                      {p.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          {/* Groups */}
          <div className="space-y-20 lg:col-span-9 lg:space-y-24">
            {faqGroups.map((g, gi) => (
              <Reveal key={g.id} delay={gi === 0 ? 0.1 : 0}>
                <section id={g.id} aria-labelledby={`${g.id}-title`} className="scroll-mt-28">
                  <h2 id={`${g.id}-title`} className="t-h3 text-fg">
                    {g.title}
                  </h2>
                  <FaqList items={g.items} className="mt-8" defaultOpen={gi === 0 ? 0 : null} />
                </section>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section theme-light">
        <div className="wrap flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="eyebrow">Still have a question?</p>
            <h2 className="t-h2 mt-5 max-w-[18ch] text-fg">Ask the engineers who build the products</h2>
          </div>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
            <ButtonLink href="/contact" variant="dark">
              Contact us
            </ButtonLink>
            <a href={`mailto:${site.email}`} className="text-link">
              {site.email}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import { solutions, getSolution } from "@/content/solutions";
import { getProduct } from "@/content/products";
import { Reveal } from "@/components/site/reveal";
import { ProductCard } from "@/components/site/product-card";
import { ContactBand } from "@/components/site/contact-band";
import { pageMetadata } from "@/lib/metadata";
export function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const s = getSolution(slug);
  return s ? pageMetadata(s.shortTitle, s.summary, "/solutions/" + slug) : {};
}
export default async function SolutionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const solution = getSolution(slug);
  if (!solution) notFound();
  return (
    <>
      <section className="wrap solution-detail-intro">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link href="/solutions">Solutions</Link>
          <ChevronRight size={13} />
          <span>{solution.shortTitle}</span>
        </nav>
        <p className="eyebrow">{solution.eyebrow}</p>
        <h1>{solution.title}</h1>
        <div className="solution-intro-bottom">
          <p>{solution.description}</p>
          <Link href="/book-a-demo" className="link-button link-button-solid">
            Explore it with us
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>
      <div className="solution-wide-image">
        <Image
          src={solution.image}
          alt={solution.imageAlt}
          fill
          sizes="100vw"
        />
        <span>
          {slug === "visual-ai"
            ? "Bison herd in open grassland"
            : "Illustrative scene"}
        </span>
      </div>
      <section className="wrap chapter-section solution-challenge">
        <Reveal>
          <p className="eyebrow">The challenge</p>
          <h2>The operational challenge.</h2>
        </Reveal>
        <Reveal>
          <p>{solution.challenge}</p>
        </Reveal>
      </section>
      <section className="use-case-section chapter-section">
        <div className="wrap">
          <Reveal className="v2-section-heading">
            <h2>What this workflow supports.</h2>
          </Reveal>
          <div className="use-case-grid">
            {solution.outcomes.map((item, i) => (
              <Reveal key={item.title} delay={i * 50}>
                <span className="tiny-label">0{i + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="wrap chapter-section">
        <Reveal className="v2-section-heading">
          <h2>From collection to review.</h2>
        </Reveal>
        <div className="workflow-editorial">
          {solution.workflow.map((step, i) => (
            <Reveal key={step.title} delay={i * 50}>
              <div className="workflow-step-number">
                <span>0{i + 1}</span>
                <ChevronRight size={20} />
              </div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="wrap chapter-section solution-products">
        <Reveal className="v2-section-heading">
          <h2>Relevant products.</h2>
          <p>Explore the tools relevant to this workflow.</p>
        </Reveal>
        <div className="product-grid">
          {solution.products.map((slug) => {
            const p = getProduct(slug);
            return p ? <ProductCard key={slug} product={p} /> : null;
          })}
        </div>
      </section>
      <section className="wrap discovery-questions">
        <div>
          <p className="eyebrow">A useful first conversation</p>
          <h2>Bring your context.</h2>
        </div>
        <ol>
          {solution.questions.map((q) => (
            <li key={q}>{q}</li>
          ))}
        </ol>
      </section>
      <ContactBand
        title="Let’s find your next step."
        description="We’ll work through the context, explore the relevant products, and discuss what a useful workflow could look like."
      />
    </>
  );
}

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, ChevronRight, Plus } from "lucide-react";
import { products, getProduct } from "@/content/products";
import { ProductVisual } from "@/components/site/product-visual";
import { ProductCard } from "@/components/site/product-card";
import { Reveal } from "@/components/site/reveal";
import { ContactBand } from "@/components/site/contact-band";
import { pageMetadata } from "@/lib/metadata";
export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) return {};
  return pageMetadata(p.name, p.summary, "/products/" + p.slug);
}
export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();
  return (
    <>
      <section className="wrap product-v2-intro">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link href="/products">Products</Link>
          <ChevronRight size={13} />
          <span>{product.name}</span>
        </nav>
        <div className="product-title-grid">
          <div>
            <p className="eyebrow">{product.category}</p>
            <h1>{product.name}</h1>
            <h2>{product.headline}</h2>
          </div>
          <div>
            <p>{product.summary}</p>
            <div className="product-intro-actions">
              <Link
                className="link-button link-button-solid"
                href={"/book-a-demo?product=" + product.slug}
              >
                Book a {product.name} demo
                <ArrowUpRight size={18} />
              </Link>
              <a className="text-link" href="#capabilities">
                Explore capabilities
                <ChevronRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="product-showcase">
        <div className="wrap">
          <ProductVisual slug={product.slug} />
          <div className="product-output-rail">
            {product.outputs.map((output, i) => (
              <span key={output}>
                <i>0{i + 1}</i>
                {output}
              </span>
            ))}
          </div>
        </div>
      </section>
      <nav className="product-jumpnav" aria-label="On this product page">
        <div className="wrap">
          <a href="#overview">Overview</a>
          <a href="#capabilities">Capabilities</a>
          <a href="#workflow">Workflow</a>
          <a href="#use-cases">Use cases</a>
          <a href="#questions">Questions</a>
          <Link href={"/book-a-demo?product=" + product.slug}>
            Book a demo
            <ArrowUpRight size={14} />
          </Link>
        </div>
      </nav>
      <section
        className="wrap chapter-section product-overview-v2"
        id="overview"
      >
        <Reveal>
          <p className="eyebrow">The bigger picture</p>
          <h2>
            Built around
            <br />
            <em>the way you work.</em>
          </h2>
        </Reveal>
        <Reveal delay={70}>
          <p>{product.description}</p>
          <div className="product-audience">
            <span className="tiny-label">Who it’s for</span>
            <p>{product.audience}</p>
          </div>
        </Reveal>
      </section>
      <section
        className="chapter-section product-capabilities-v2"
        id="capabilities"
      >
        <div className="wrap">
          <Reveal className="v2-section-heading">
            <h2>
              The detail that
              <br />
              <em>makes a difference.</em>
            </h2>
            <p>Explore the capabilities at the heart of {product.name}.</p>
          </Reveal>
          <div className="capability-editorial-grid">
            {product.features.map((feature, i) => (
              <Reveal key={feature.title} delay={(i % 2) * 60}>
                <span>0{i + 1}</span>
                <div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="wrap chapter-section" id="workflow">
        <Reveal className="v2-section-heading">
          <h2>
            A connected
            <br />
            <em>way forward.</em>
          </h2>
          <p>From the first input to the next useful action.</p>
        </Reveal>
        <div className="workflow-editorial">
          {product.workflow.map((step, i) => (
            <Reveal key={step.title} delay={i * 60}>
              <div className="workflow-step-number">
                <span>0{i + 1}</span>
                {i < 2 && <ChevronRight size={20} />}
              </div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="use-case-section chapter-section" id="use-cases">
        <div className="wrap">
          <Reveal className="v2-section-heading">
            <h2>
              Where it becomes
              <br />
              <em>useful.</em>
            </h2>
            <p>Start with the work your team needs to do.</p>
          </Reveal>
          <div className="use-case-grid">
            {product.useCases.map((item, i) => (
              <Reveal key={item.title} delay={i * 50}>
                <span className="tiny-label">0{i + 1} / Application</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section
        className="wrap chapter-section product-questions"
        id="questions"
      >
        <Reveal>
          <p className="eyebrow">A little more context</p>
          <h2>
            Good questions.
            <br />
            <em>Clearer answers.</em>
          </h2>
          <Link href="/contact" className="text-link">
            Ask us something else
            <ArrowUpRight size={17} />
          </Link>
        </Reveal>
        <div className="faq-list">
          {product.faqs.map((item) => (
            <details key={item.question}>
              <summary>
                {item.question}
                <Plus size={19} />
              </summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>
      <section className="product-editorial-photo">
        <Image src={product.image} alt={product.imageAlt} fill sizes="100vw" />
        <div />
        <span>{product.imageCaption}</span>
      </section>
      <section className="wrap chapter-section">
        <Reveal className="v2-section-heading">
          <h2>Keep exploring.</h2>
          <Link href="/products" className="text-link">
            All products
            <ArrowUpRight size={17} />
          </Link>
        </Reveal>
        <div className="product-grid">
          {product.related.slice(0, 2).map((slug) => {
            const related = getProduct(slug);
            return related ? (
              <ProductCard key={slug} product={related} />
            ) : null;
          })}
        </div>
      </section>
      <ContactBand
        title={"See " + product.name + " in context."}
        demoHref={"/book-a-demo?product=" + product.slug}
        description="Bring your scenario. We’ll walk through the product and discuss how it fits your team’s work."
      />
    </>
  );
}

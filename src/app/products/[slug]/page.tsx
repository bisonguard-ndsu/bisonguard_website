import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { products, getProduct } from "@/content/products";
import { ProductCard } from "@/components/site/product-card";
import { ContactBand } from "@/components/site/contact-band";
import { LinkButton } from "@/components/site/link-button";
import { pageMetadata } from "@/lib/metadata";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return pageMetadata(
    product.name,
    product.summary,
    `/products/${product.slug}`,
  );
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();
  const related = products.filter((item) =>
    product.related.includes(item.slug),
  );
  const containsInterface = ["adams", "annotate"].includes(product.slug);

  return (
    <>
      <section className="wrap product-intro">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link href="/products">Our products</Link>
          <ChevronRight size={12} aria-hidden="true" />
          <span aria-current="page">{product.name}</span>
        </nav>
        <div className="product-intro-grid">
          <div>
            <p className="eyebrow">{product.category}</p>
            <h1>{product.name}</h1>
            {product.slug === "adams" && (
              <p className="product-full-name">
                Advanced Asset Management System
              </p>
            )}
            {product.inDevelopment && (
              <span className="status-label">In development</span>
            )}
          </div>
          <div className="product-intro-summary">
            <p>{product.summary}</p>
            <LinkButton href="/contact">
              {product.inDevelopment
                ? "Discuss the possibilities"
                : "Talk to us"}
            </LinkButton>
          </div>
        </div>
      </section>
      <figure className="wrap product-hero-figure">
        <div
          className={`product-hero-image${containsInterface ? " contain-image" : ""}`}
        >
          <Image
            src={product.image}
            alt={product.imageAlt}
            fill
            sizes="(max-width: 1440px) 100vw, 1380px"
            priority
          />
        </div>
        <figcaption>{product.imageCaption}</figcaption>
      </figure>
      <section className="wrap product-overview section-space">
        <div>
          <p className="eyebrow">The idea behind {product.name}</p>
          <h2>{product.headline}</h2>
        </div>
        <p>{product.description}</p>
      </section>
      <section className="feature-section section-space">
        <div className="wrap">
          <div className="section-heading">
            <div>
              <p className="eyebrow">
                {product.inDevelopment
                  ? "Our development focus"
                  : "What it brings together"}
              </p>
              <h2>
                {product.inDevelopment
                  ? "Building the next chapter."
                  : "From the detail to the bigger picture."}
              </h2>
            </div>
          </div>
          <div className="feature-grid">
            {product.features.map((feature) => (
              <article key={feature.title} className="feature-item">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="wrap section-space">
        <div className="workflow-heading">
          <p className="eyebrow">
            {product.inDevelopment
              ? "The workflow we’re exploring"
              : "A connected workflow"}
          </p>
          <h2>
            A clear path <em>through the work.</em>
          </h2>
        </div>
        <div className="workflow-grid">
          {product.workflow.map((step, index) => (
            <article key={step.title} className="workflow-step">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="related-section section-space">
        <div className="wrap">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Keep exploring</p>
              <h2>Connected possibilities.</h2>
            </div>
            <LinkButton href="/products" variant="text">
              All products
            </LinkButton>
          </div>
          <div className="product-grid">
            {related.map((item) => (
              <ProductCard key={item.slug} product={item} />
            ))}
          </div>
        </div>
      </section>
      <ContactBand
        title={
          product.inDevelopment
            ? "Help shape what comes next."
            : `Put ${product.name} in context.`
        }
        description={
          product.inDevelopment
            ? "Working on a related challenge? We’d like to hear what you need from the next generation of infrastructure tools."
            : "Every project has its own questions. Tell us yours and explore how we can work together."
        }
      />
    </>
  );
}

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import { resources, getResource } from "@/content/resources";
import { getProduct } from "@/content/products";
import { ShareLink } from "@/components/site/share-link";
import { ContactBand } from "@/components/site/contact-band";
import { pageMetadata } from "@/lib/metadata";
export function generateStaticParams() {
  return resources.map((r) => ({ slug: r.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const r = getResource(slug);
  return r ? pageMetadata(r.title, r.summary, "/resources/" + slug) : {};
}
export default async function ResourcePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const resource = getResource(slug);
  if (!resource) notFound();
  return (
    <>
      <header className="wrap article-header">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link href="/resources">Resources</Link>
          <ChevronRight size={13} />
          <span>{resource.category}</span>
        </nav>
        <p className="eyebrow">{resource.category} / Field guide</p>
        <h1>{resource.title}</h1>
        <p className="article-deck">{resource.summary}</p>
        <div className="article-meta">
          <span>InfiniCity Labs · {resource.readTime}</span>
          <ShareLink />
        </div>
      </header>
      <div className="wrap article-hero-image">
        <Image
          src={resource.image}
          loading="eager"
          alt={
            resource.category === "Applied AI"
              ? "Infrastructure inspection interface"
              : "Illustrative scene accompanying the guide"
          }
          fill
          sizes="100vw"
        />
      </div>
      <div className="wrap article-layout">
        <aside>
          <p className="tiny-label">In this guide</p>
          <nav aria-label="Article sections">
            {resource.sections.map((s, i) => (
              <a href={"#section-" + (i + 1)} key={s.heading}>
                <span>0{i + 1}</span>
                {s.heading}
              </a>
            ))}
          </nav>
        </aside>
        <article>
          <p className="article-introduction">{resource.intro}</p>
          {resource.sections.map((section, i) => (
            <section key={section.heading} id={"section-" + (i + 1)}>
              <span className="tiny-label">0{i + 1}</span>
              <h2>{section.heading}</h2>
              {section.body.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </section>
          ))}
          <div className="article-products">
            <p className="tiny-label">Explore the related products</p>
            {resource.relatedProducts.map((slug) => {
              const product = getProduct(slug);
              return product ? (
                <Link key={slug} href={"/products/" + slug}>
                  <span>
                    {product.name}
                    <small>{product.category}</small>
                  </span>
                  <ArrowUpRight size={20} />
                </Link>
              ) : null;
            })}
          </div>
        </article>
      </div>
      <ContactBand title="Connect the idea with your work." />
    </>
  );
}

import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { LinkButton } from "@/components/site/link-button";
import { ContactBand } from "@/components/site/contact-band";
import { expertise } from "@/content/products";
import { publications } from "@/content/publications";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Intelligence for a world in motion",
  "InfiniCity Labs builds applied AI, infrastructure intelligence, and mobility technology for real-world challenges.",
  "/",
);

export default function HomePage() {
  return (
    <>
      <section className="home-hero">
        <Image
          src="/images/infrastructure-aerial.webp"
          alt="Illustrative aerial view of a bridge and road network connecting to a city"
          fill
          sizes="100vw"
          priority
          className="hero-image"
        />
        <div className="hero-shade" />
        <div className="wrap hero-content">
          <p className="eyebrow hero-eyebrow">
            Infrastructure. Mobility. Applied AI.
          </p>
          <h1>
            Intelligence for
            <br />a world <em>in motion.</em>
          </h1>
          <p className="hero-description">
            We build technology that helps people understand roads, movement,
            and the world around them.
          </p>
          <div className="hero-actions">
            <LinkButton href="/products">Explore our products</LinkButton>
            <Link href="/company" className="hero-company-link">
              Meet InfiniCity
              <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </div>
        <div className="wrap hero-bottom">
          <a href="#our-work" className="hero-scroll">
            <ArrowDown size={15} aria-hidden="true" />
            Discover our work
          </a>
          <span>Illustrative infrastructure scene</span>
        </div>
      </section>

      <section className="intro-section section-space" id="our-work">
        <div className="wrap intro-grid">
          <p className="eyebrow">A closer look changes everything</p>
          <div>
            <h2>
              Complex environments.
              <br />
              <em>Clearer possibilities.</em>
            </h2>
            <div className="intro-body">
              <p>
                A road tells you where it needs attention. A junction reveals
                how a city moves. The right technology makes those signals
                useful.
              </p>
              <p>
                We bring research, engineering, and software together to turn
                observations into tools people can work with.
              </p>
            </div>
            <Link href="/company" className="text-link">
              The thinking behind our work
              <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="products-section section-space" id="projects">
        <div className="wrap">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Our products</p>
              <h2>
                Built to see further.
                <br />
                <em>Designed to be useful.</em>
              </h2>
            </div>
            <LinkButton href="/products" variant="text">
              Explore the portfolio
            </LinkButton>
          </div>
          <article className="featured-product">
            <div className="featured-product-copy">
              <p className="eyebrow">Infrastructure intelligence</p>
              <h3>AdAMS</h3>
              <p className="featured-tagline">
                Know the road.
                <br />
                Plan what comes next.
              </p>
              <p>
                Bring pavement conditions, asset inventories, and inspection
                evidence into one connected view of your network.
              </p>
              <LinkButton href="/products/adams" variant="outline">
                Discover AdAMS
              </LinkButton>
            </div>
            <div className="featured-product-visual">
              <div className="product-visual-title">
                <span className="small-brand-bars" aria-hidden="true">
                  <i />
                  <i />
                  <i />
                </span>
                <span>From observation to understanding</span>
              </div>
              <div className="inspection-image">
                <Image
                  src="/images/adams-inspection.webp"
                  alt="AdAMS identifies a stop sign in survey footage and organizes the findings for review"
                  fill
                  sizes="(max-width: 900px) 100vw, 65vw"
                />
              </div>
              <div className="product-visual-caption">
                <span>AdAMS · Inspection evidence</span>
                <span>Detect. Locate. Review.</span>
              </div>
            </div>
          </article>
          <div className="product-story-grid">
            <article className="product-story">
              <Link
                href="/products/turnflow"
                className="story-image"
                tabIndex={-1}
                aria-hidden="true"
              >
                <Image
                  src="/images/intersection.webp"
                  fill
                  sizes="(max-width: 700px) 100vw, 50vw"
                  alt=""
                />
              </Link>
              <div className="story-heading">
                <div>
                  <p className="eyebrow">Traffic video analysis</p>
                  <h3>
                    <Link href="/products/turnflow">Turnflow</Link>
                  </h3>
                </div>
                <Link
                  href="/products/turnflow"
                  className="circle-link"
                  aria-label="Explore Turnflow"
                >
                  <ArrowUpRight size={24} />
                </Link>
              </div>
              <p>
                From traffic video to movement counts, reviewable evidence, and
                engineering reports.
              </p>
            </article>
            <article className="product-story">
              <Link
                href="/products/roadlogger"
                className="story-image"
                tabIndex={-1}
                aria-hidden="true"
              >
                <Image
                  src="/images/road-survey.webp"
                  fill
                  sizes="(max-width: 700px) 100vw, 50vw"
                  alt=""
                />
              </Link>
              <div className="story-heading">
                <div>
                  <p className="eyebrow">Field data collection</p>
                  <h3>
                    <Link href="/products/roadlogger">RoadLogger</Link>
                  </h3>
                </div>
                <Link
                  href="/products/roadlogger"
                  className="circle-link"
                  aria-label="Explore RoadLogger"
                >
                  <ArrowUpRight size={24} />
                </Link>
              </div>
              <p>
                The field companion that connects road observations with the
                work that follows.
              </p>
            </article>
          </div>
          <Link href="/products/pavexpert" className="pavexpert-strip">
            <span className="status-label">In development</span>
            <span>PaveXpert</span>
            <p>
              Exploring the next chapter of agentic infrastructure intelligence.
            </p>
            <ArrowUpRight size={22} aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="expertise-section section-space">
        <div className="wrap expertise-grid">
          <div className="expertise-intro">
            <p className="eyebrow">Where we work</p>
            <h2>
              The challenge
              <br />
              comes <em>first.</em>
            </h2>
            <p>
              Our expertise connects the physical world with the systems that
              help make sense of it.
            </p>
            <LinkButton href="/services" variant="text">
              Our expertise
            </LinkButton>
          </div>
          <div className="expertise-list">
            {expertise.map((item) => (
              <Link
                href={"/services#" + item.id}
                key={item.id}
                className="expertise-row"
              >
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.summary}</p>
                </div>
                <ArrowUpRight size={25} aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="research-home section-space">
        <div className="wrap">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Research & ideas</p>
              <h2>
                Good questions.
                <br />
                <em>New possibilities.</em>
              </h2>
            </div>
            <LinkButton href="/research" variant="text">
              Explore the research
            </LinkButton>
          </div>
          <p className="research-attribution">
            Selected publications co-authored by Armstrong Aboah and
            collaborators.
          </p>
          <div className="research-home-grid">
            {[publications[0], publications[3]].map((paper) => (
              <a
                key={paper.url}
                href={paper.url}
                className="research-preview"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="research-preview-meta">
                  <span>{paper.topic}</span>
                  <span>
                    {paper.year} · {paper.venue}
                  </span>
                </div>
                <h3>{paper.title}</h3>
                <p>{paper.summary}</p>
                <span className="text-link">
                  Read the paper
                  <ArrowUpRight size={17} aria-hidden="true" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
      <ContactBand />
    </>
  );
}

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { HomeHero } from "@/components/site/home-hero";
import { Reveal } from "@/components/site/reveal";
import { ContactBand } from "@/components/site/contact-band";
import { products } from "@/content/products";
import { publications } from "@/content/publications";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Infrastructure, mobility & applied AI",
  "InfiniCity Labs brings research, engineering, and applied AI to infrastructure, mobility, and field operations. Explore our products, expertise, and research.",
  "/",
);

const areas = [
  {
    title: "Infrastructure",
    label: "Roads & asset management",
    image: "/images/urban-infrastructure.jpg",
    alt: "A road leading toward a city skyline at sunset",
    description:
      "Survey the network, understand asset condition, and connect inspection evidence with maintenance decisions.",
    href: "/solutions/infrastructure-management",
  },
  {
    title: "Mobility",
    label: "Traffic & movement",
    image: "/images/urban-intersection.jpg",
    alt: "An overhead photograph of vehicles moving through a road intersection",
    description:
      "Observe traffic, investigate movements, and bring reviewable video evidence into engineering studies.",
    href: "/solutions/traffic-engineering",
  },
  {
    title: "Applied AI",
    label: "Computer vision & field intelligence",
    image: "/images/bisonguard-herd.webp",
    alt: "Bison and calves in open grassland",
    description:
      "Apply visual intelligence to specialist environments, from preparing training data to monitoring herds.",
    href: "/solutions/visual-ai",
  },
];

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <section
        className="corporate-welcome light-surface"
        aria-labelledby="welcome-title"
      >
        <div className="wrap">
          <div className="welcome-grid">
            <Reveal>
              <p className="eyebrow">
                Research. Engineering. Real-world application.
              </p>
              <h2 id="welcome-title">
                Welcome to
                <br />
                InfiniCity Labs.
              </h2>
            </Reveal>
            <Reveal delay={70} className="welcome-copy">
              <p className="welcome-lead">
                We develop the technology behind a clearer understanding of our
                physical world.
              </p>
              <p>
                Our company brings together infrastructure engineering, computer
                vision, and software development. We build products and
                practical workflows for the teams inspecting roads, studying
                traffic, managing assets, and working with visual data.
              </p>
              <div className="welcome-links">
                <Link href="/company" className="text-link">
                  Discover our company <ArrowUpRight size={18} />
                </Link>
                <Link href="/services" className="text-link">
                  Explore our expertise <ArrowUpRight size={18} />
                </Link>
              </div>
            </Reveal>
          </div>
          <div className="company-disciplines">
            <span>Infrastructure engineering</span>
            <span>Computer vision & AI</span>
            <span>Software & data systems</span>
            <Link href="/technology">
              Our technical approach <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      <section
        className="corporate-areas light-surface"
        id="areas"
        aria-labelledby="areas-title"
      >
        <div className="wrap">
          <Reveal className="corporate-section-heading">
            <div>
              <p className="eyebrow">Our areas of work</p>
              <h2 id="areas-title">
                Understanding the systems
                <br />
                that connect our world.
              </h2>
            </div>
            <Link href="/solutions" className="text-link">
              Explore solutions <ArrowUpRight size={18} />
            </Link>
          </Reveal>
          <div className="area-features">
            {areas.map((area, index) => (
              <Reveal key={area.title} delay={index * 60}>
                <Link href={area.href} className="area-feature">
                  <div className="area-photo">
                    <Image
                      src={area.image}
                      alt={area.alt}
                      fill
                      sizes="(max-width: 700px) 100vw, 33vw"
                    />
                    <span>
                      <ArrowUpRight size={24} />
                    </span>
                  </div>
                  <div className="area-copy">
                    <p className="eyebrow">{area.label}</p>
                    <h3>{area.title}</h3>
                    <p>{area.description}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section
        className="corporate-work"
        id="products"
        aria-labelledby="work-title"
      >
        <div className="wrap">
          <Reveal className="corporate-section-heading">
            <div>
              <p className="eyebrow">Technology in practice</p>
              <h2 id="work-title">A closer look at our work.</h2>
            </div>
            <Link href="/products" className="text-link">
              The complete portfolio <ArrowUpRight size={18} />
            </Link>
          </Reveal>
          <div className="featured-work">
            <Reveal className="featured-work-image">
              <Link
                href="/products/adams"
                aria-label="Explore the AdAMS inspection workspace"
              >
                <Image
                  src="/images/adams-inspection.webp"
                  alt="Actual AdAMS interface showing survey footage and detected traffic signs"
                  width={1918}
                  height={1021}
                  sizes="(max-width: 900px) 100vw, 60vw"
                />
              </Link>
              <p>AdAMS / Inspection workspace</p>
            </Reveal>
            <Reveal delay={70} className="featured-work-copy">
              <p className="eyebrow">Infrastructure intelligence</p>
              <h3>
                From survey footage
                <br />
                to asset intelligence.
              </h3>
              <p>
                AdAMS connects road condition, roadside assets, and inspection
                evidence. Engineers can investigate a finding in its original
                context and carry the assessment into reporting and maintenance
                planning.
              </p>
              <Link href="/products/adams" className="text-link">
                Explore AdAMS <ArrowUpRight size={18} />
              </Link>
            </Reveal>
          </div>
          <div className="corporate-product-index">
            <div>
              <h3>Our products</h3>
              <p>Specialist tools for different parts of the work.</p>
              <Link href="/products" className="text-link">
                Compare products <ArrowUpRight size={16} />
              </Link>
            </div>
            <div className="corporate-product-links">
              {products.map((product) => (
                <Link key={product.slug} href={"/products/" + product.slug}>
                  <span>
                    <strong>{product.name}</strong>
                    <small>{product.category}</small>
                  </span>
                  <ArrowUpRight size={18} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        className="corporate-research light-surface"
        aria-labelledby="research-title"
      >
        <div className="wrap">
          <Reveal className="corporate-section-heading">
            <div>
              <p className="eyebrow">Ideas, evidence & exploration</p>
              <h2 id="research-title">
                Research informs
                <br />
                what we build.
              </h2>
            </div>
            <p className="research-intro">
              Explore selected publications and practical perspectives on
              infrastructure, mobility, and visual intelligence.
            </p>
          </Reveal>
          <div className="research-editorial-grid">
            <Reveal className="research-feature">
              <a
                href={publications[0].url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="research-feature-image">
                  <Image
                    src="/images/highway-interchange.jpg"
                    alt="A road network illustrating the context of pavement condition research"
                    fill
                    sizes="(max-width: 800px) 100vw, 50vw"
                  />
                  <span>
                    Selected publication <ArrowUpRight size={20} />
                  </span>
                </div>
                <div className="research-feature-copy">
                  <p className="eyebrow">
                    {publications[0].venue} / {publications[0].year}
                  </p>
                  <h3>{publications[0].title}</h3>
                  <p>{publications[0].summary}</p>
                  <span className="text-link">
                    Read the publication <ArrowUpRight size={17} />
                  </span>
                </div>
              </a>
            </Reveal>
            <div className="research-paper-list">
              {publications.slice(1, 4).map((paper) => (
                <Reveal key={paper.url}>
                  <a href={paper.url} target="_blank" rel="noopener noreferrer">
                    <p className="eyebrow">
                      {paper.topic} / {paper.year}
                    </p>
                    <h3>{paper.title}</h3>
                    <p>{paper.venue}</p>
                    <ArrowUpRight size={20} />
                  </a>
                </Reveal>
              ))}
              <Link href="/research" className="text-link">
                Visit the research library <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section
        className="corporate-perspectives light-surface"
        aria-labelledby="perspectives-title"
      >
        <div className="wrap">
          <Reveal className="corporate-section-heading">
            <div>
              <p className="eyebrow">Practical perspectives</p>
              <h2 id="perspectives-title">
                From the field to the next decision.
              </h2>
            </div>
            <Link href="/resources" className="text-link">
              All resources <ArrowUpRight size={18} />
            </Link>
          </Reveal>
          <div className="perspective-features">
            <Reveal>
              <Link href="/resources/from-road-surveys-to-maintenance-decisions">
                <div className="perspective-image">
                  <Image
                    src="/images/urban-infrastructure.jpg"
                    alt="Road infrastructure in an urban landscape"
                    fill
                    sizes="(max-width:700px) 100vw, 50vw"
                  />
                </div>
                <div>
                  <p className="eyebrow">Infrastructure guide</p>
                  <h3>From road surveys to maintenance decisions</h3>
                  <span className="text-link">
                    Read the guide <ArrowUpRight size={17} />
                  </span>
                </div>
              </Link>
            </Reveal>
            <Reveal delay={70}>
              <Link href="/resources/building-a-useful-turning-movement-study">
                <div className="perspective-image">
                  <Image
                    src="/images/urban-intersection.jpg"
                    alt="Road intersection viewed from above"
                    fill
                    sizes="(max-width:700px) 100vw, 50vw"
                  />
                </div>
                <div>
                  <p className="eyebrow">Traffic engineering guide</p>
                  <h3>Building a useful turning-movement study</h3>
                  <span className="text-link">
                    Read the guide <ArrowUpRight size={17} />
                  </span>
                </div>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="corporate-collaboration">
        <div className="wrap">
          <Reveal>
            <p className="eyebrow">Work with InfiniCity Labs</p>
            <h2>Bring us the engineering challenge.</h2>
            <p>
              Start with a product demonstration, discuss a technical project,
              or explore a research collaboration. We’ll help identify the
              people and tools relevant to your work.
            </p>
            <Link href="/services" className="text-link">
              How we work with you <ArrowUpRight size={18} />
            </Link>
          </Reveal>
          <div className="collaboration-links">
            <Link href="/services">
              <span>Engineering & technical services</span>
              <ArrowUpRight size={24} />
            </Link>
            <Link href="/research">
              <span>Research & collaboration</span>
              <ArrowUpRight size={24} />
            </Link>
            <Link href="/careers">
              <span>Careers & opportunities</span>
              <ArrowUpRight size={24} />
            </Link>
          </div>
        </div>
      </section>
      <ContactBand />
    </>
  );
}

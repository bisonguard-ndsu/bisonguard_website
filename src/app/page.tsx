import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { HomeHero } from "@/components/site/home-hero";
import { Reveal } from "@/components/site/reveal";
import { ContactBand } from "@/components/site/contact-band";
import { publications } from "@/content/publications";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Infrastructure, mobility & applied AI",
  "Software and engineering for road networks, traffic analysis, and field operations. Discover AdAMS, PaveXpert, TMC, Turnflow, RoadLogger, AdAMS Annotate, and BisonGuard.",
  "/",
);

const portfolio = [
  {
    name: "Infrastructure",
    description:
      "Inspect assets, assess pavement, and organize work across a road network.",
    products: [
      {
        name: "AdAMS",
        slug: "adams",
        description: "Network condition & asset management",
      },
      {
        name: "PaveXpert",
        slug: "pavexpert",
        description: "Agentic pavement intelligence",
      },
      {
        name: "RoadLogger",
        slug: "roadlogger",
        description: "Field inspections & issue reporting",
      },
    ],
  },
  {
    name: "Mobility",
    description:
      "Turn camera footage into traffic studies and movement data you can review.",
    products: [
      {
        name: "TMC",
        slug: "tmc",
        description: "Traffic monitoring & video analysis",
      },
      {
        name: "Turnflow",
        slug: "turnflow",
        description: "Turning movements & traffic counts",
      },
    ],
  },
  {
    name: "Applied AI",
    description:
      "Prepare visual data and apply computer vision to specialist monitoring tasks.",
    products: [
      {
        name: "AdAMS Annotate",
        slug: "annotate",
        description: "Image & video annotation",
      },
      {
        name: "BisonGuard",
        slug: "bisonguard",
        description: "Herd detection & monitoring",
      },
    ],
  },
];

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <section
        className="home-portfolio light-surface"
        id="products"
        aria-labelledby="portfolio-heading"
      >
        <div className="wrap">
          <Reveal className="home-section-heading">
            <div>
              <p className="eyebrow">Our products</p>
              <h2 id="portfolio-heading">The product portfolio.</h2>
            </div>
            <Link href="/products" className="text-link">
              Compare the portfolio <ArrowUpRight size={17} />
            </Link>
          </Reveal>
          <div className="portfolio-families">
            {portfolio.map((family, index) => (
              <Reveal
                key={family.name}
                className="portfolio-family"
                delay={index * 60}
              >
                <h3>{family.name}</h3>
                <p>{family.description}</p>
                <ul>
                  {family.products.map((product) => (
                    <li key={product.slug}>
                      <Link href={"/products/" + product.slug}>
                        <div>
                          <h4>{product.name}</h4>
                          <span>{product.description}</span>
                        </div>
                        <ArrowUpRight size={20} />
                      </Link>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
          <div className="portfolio-help">
            <p>Working across more than one workflow?</p>
            <Link href="/solutions" className="text-link">
              Find a solution for your team <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </section>
      <section
        className="home-engineering"
        aria-labelledby="engineering-heading"
      >
        <div className="wrap engineering-grid">
          <Reveal className="engineering-intro">
            <p className="eyebrow">The company behind the software</p>
            <h2 id="engineering-heading">
              Research.
              <br />
              Engineering.
              <br />
              Implementation.
            </h2>
            <p>
              InfiniCity Labs develops software for the people responsible for
              physical infrastructure. Our work combines computer vision, domain
              expertise, and the practical details of collecting and using data.
            </p>
            <Link href="/company" className="text-link">
              About InfiniCity Labs <ArrowUpRight size={17} />
            </Link>
          </Reveal>
          <div className="engineering-services">
            {[
              {
                label: "Infrastructure management",
                title: "Build a usable picture of your network.",
                text: "Connect inspection imagery, asset locations, and condition assessments. Give engineering teams the context to investigate a finding and plan maintenance.",
                href: "/solutions/infrastructure-management",
              },
              {
                label: "Traffic engineering",
                title: "Make your traffic study reviewable.",
                text: "Define the camera view, movements, and study period. Work with counts and reports that stay connected to the original video.",
                href: "/solutions/traffic-engineering",
              },
              {
                label: "Technical services",
                title: "Develop the workflow your project needs.",
                text: "From data preparation and model evaluation to software integration, we work through the engineering behind a useful system.",
                href: "/services",
              },
            ].map((item) => (
              <Reveal key={item.href}>
                <Link href={item.href} className="engineering-service">
                  <p className="eyebrow">{item.label}</p>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <ArrowUpRight size={24} />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section
        className="home-field light-surface"
        aria-labelledby="field-heading"
      >
        <div className="wrap field-grid">
          <Reveal className="field-photo">
            <Image
              src="/images/bisonguard-herd.webp"
              alt="Bison and calves in open grassland"
              width={1600}
              height={1067}
              sizes="(max-width: 800px) 100vw, 55vw"
            />
            <span>BisonGuard / Herd monitoring</span>
          </Reveal>
          <Reveal className="field-copy" delay={70}>
            <p className="eyebrow">Computer vision beyond the road</p>
            <h2 id="field-heading">
              A different field.
              <br />
              The same attention to detail.
            </h2>
            <p>
              Monitoring a herd is a different problem from inspecting a road.
              BisonGuard brings visual detection to herd monitoring, extending
              our work into environments that need their own tools and
              expertise.
            </p>
            <Link href="/products/bisonguard" className="text-link">
              Meet BisonGuard <ArrowUpRight size={18} />
            </Link>
            <Link href="/technology" className="field-technology-link">
              How we approach applied AI <ArrowUpRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>
      <section
        className="home-reading light-surface"
        aria-labelledby="reading-heading"
      >
        <div className="wrap">
          <Reveal className="home-section-heading">
            <div>
              <p className="eyebrow">Research & resources</p>
              <h2 id="reading-heading">Explore the work in more detail.</h2>
            </div>
            <Link href="/resources" className="text-link">
              All resources <ArrowUpRight size={17} />
            </Link>
          </Reveal>
          <div className="reading-grid">
            <Reveal className="reading-feature">
              <p className="eyebrow">
                Selected research / {publications[0].year}
              </p>
              <h3>
                <a
                  href={publications[0].url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {publications[0].title} <ArrowUpRight size={22} />
                </a>
              </h3>
              <p>{publications[0].summary}</p>
              <span className="reading-publication-note">
                {publications[0].venue}
              </span>
              <Link href="/research" className="text-link">
                Visit the research library <ArrowUpRight size={17} />
              </Link>
            </Reveal>
            <div className="reading-guides">
              {[
                {
                  title: "From road surveys to maintenance decisions",
                  type: "Infrastructure guide",
                  slug: "from-road-surveys-to-maintenance-decisions",
                },
                {
                  title: "Building a useful turning-movement study",
                  type: "Traffic engineering guide",
                  slug: "building-a-useful-turning-movement-study",
                },
                {
                  title: "Human review in computer vision workflows",
                  type: "Applied AI guide",
                  slug: "human-review-in-computer-vision-workflows",
                },
              ].map((item) => (
                <Reveal key={item.slug}>
                  <Link href={"/resources/" + item.slug}>
                    <p className="eyebrow">{item.type}</p>
                    <h3>{item.title}</h3>
                    <ArrowUpRight size={21} />
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
      <ContactBand />
    </>
  );
}

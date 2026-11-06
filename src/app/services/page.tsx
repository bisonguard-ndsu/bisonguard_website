import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { expertise, getProduct } from "@/content/products";
import { ContactBand } from "@/components/site/contact-band";
import { pageMetadata } from "@/lib/metadata";
import { Reveal } from "@/components/site/reveal";

export const metadata = pageMetadata(
  "Our expertise",
  "Infrastructure intelligence, mobility analytics, and applied AI engineering. Explore how InfiniCity Labs approaches real-world challenges.",
  "/services",
);

const images = [
  "/images/highway-interchange.jpg",
  "/images/urban-intersection.jpg",
  "/images/adams-inspection.webp",
];
const captions = [
  "Road network photographed from above",
  "Traffic intersection photographed from above",
  "AdAMS inspection example",
];

export default function ServicesPage() {
  return (
    <>
      <section className="wrap page-intro">
        <p className="eyebrow">Our expertise</p>
        <h1>Infrastructure, mobility, and AI expertise.</h1>
        <p>
          Engineering, research, and software work best together. We connect
          them around the questions that matter to your project.
        </p>
      </section>
      <div className="wrap">
        {expertise.map((item, index) => (
          <section key={item.id} id={item.id} className="service-block">
            <Reveal>
              <p className="eyebrow">What we do</p>
              <h2>{item.title}</h2>
              <figure className="service-image">
                <Image
                  src={images[index]}
                  alt={captions[index]}
                  fill
                  sizes="(max-width: 640px) 100vw, 45vw"
                />
              </figure>
            </Reveal>
            <Reveal delay={80}>
              <p className="service-description">{item.description}</p>
              <ul className="service-capabilities">
                {item.capabilities.map((capability) => (
                  <li key={capability}>{capability}</li>
                ))}
              </ul>
              <div className="service-products">
                {item.products.map((slug) => (
                  <Link key={slug} href={`/products/${slug}`}>
                    {getProduct(slug)?.name}
                    <ArrowUpRight size={14} aria-hidden="true" />
                  </Link>
                ))}
              </div>
            </Reveal>
          </section>
        ))}
      </div>
      <section className="wrap chapter-section">
        <Reveal className="v2-section-heading">
          <div>
            <p className="eyebrow">Working together</p>
            <h2>Our project approach.</h2>
          </div>
          <p>
            Some projects start with a product. Others need a study, a tailored
            workflow, or a new integration. We begin by understanding the
            decision you need to make.
          </p>
        </Reveal>
        <div className="use-case-grid">
          {[
            {
              title: "Frame the work",
              text: "Agree on the problem, the available evidence, and what a useful outcome looks like. Identify the people who will use the result.",
            },
            {
              title: "Build and review",
              text: "Connect domain knowledge with the right collection, analysis, and software workflow. Review the evidence and assumptions together.",
            },
            {
              title: "Put it to use",
              text: "Shape the outputs around the next step: an inspection, a study, a report, an operational tool, or a longer-term product workflow.",
            },
          ].map((step, index) => (
            <Reveal key={step.title} delay={index * 70}>
              <p className="eyebrow">0{index + 1}</p>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </Reveal>
          ))}
        </div>
      </section>
      <ContactBand
        title="Bring us the question."
        description="Whether you’re exploring a product, shaping a study, or developing a new system, a conversation is a good place to start."
      />
    </>
  );
}

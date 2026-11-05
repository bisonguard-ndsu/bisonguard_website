import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { expertise, getProduct } from "@/content/products";
import { ContactBand } from "@/components/site/contact-band";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Our expertise",
  "Infrastructure intelligence, mobility analytics, and applied AI engineering. Explore how InfiniCity Labs approaches real-world challenges.",
  "/services",
);

const images = [
  "/images/infrastructure-aerial.webp",
  "/images/intersection.webp",
  "/images/adams-inspection.webp",
];
const captions = [
  "Illustrative road network",
  "Illustrative traffic observation scene",
  "AdAMS inspection example",
];

export default function ServicesPage() {
  return (
    <>
      <section className="wrap page-intro">
        <p className="eyebrow">Our expertise</p>
        <h1>
          Start with the challenge.
          <br />
          <em>Build from there.</em>
        </h1>
        <p>
          Engineering, research, and software work best together. We connect
          them around the questions that matter to your project.
        </p>
      </section>
      <div className="wrap">
        {expertise.map((item, index) => (
          <section key={item.id} id={item.id} className="service-block">
            <div>
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
            </div>
            <div>
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
            </div>
          </section>
        ))}
      </div>
      <ContactBand
        title="Bring us the question."
        description="Whether you’re exploring a product, shaping a study, or developing a new system, a conversation is a good place to start."
      />
    </>
  );
}

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { resources } from "@/content/resources";
import { Reveal } from "@/components/site/reveal";
import { ContactBand } from "@/components/site/contact-band";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Resources",
  "Practical guides for road inspections, traffic studies, visual AI, and the workflows behind InfiniCity Labs products.",
  "/resources",
);
export default function ResourcesPage() {
  return (
    <>
      <section className="wrap page-intro">
        <p className="eyebrow">Field notes & practical perspectives</p>
        <h1>
          More context.
          <br />
          <em>Better questions.</em>
        </h1>
        <p>
          Explore the thinking behind connected infrastructure, useful traffic
          studies, and visual AI workflows.
        </p>
      </section>
      <section className="wrap resource-library">
        {resources.map((resource, i) => (
          <Reveal
            key={resource.slug}
            className={i === 0 ? "resource-lead" : "resource-card"}
          >
            <Link href={"/resources/" + resource.slug}>
              <div className="resource-image">
                <Image
                  src={resource.image}
                  alt=""
                  fill
                  sizes={
                    i === 0
                      ? "(max-width:800px) 100vw, 60vw"
                      : "(max-width:800px) 100vw, 50vw"
                  }
                />
                <ArrowUpRight size={26} />
              </div>
              <div className="resource-card-copy">
                <p className="eyebrow">
                  {resource.category} <span> / {resource.readTime}</span>
                </p>
                <h2>{resource.title}</h2>
                <p>{resource.summary}</p>
                <span className="text-link">
                  Read the guide
                  <ArrowUpRight size={17} />
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </section>
      <section className="wrap research-callout">
        <div>
          <p className="eyebrow">Go a little deeper</p>
          <h2>
            Research behind
            <br />
            <em>the questions.</em>
          </h2>
        </div>
        <div>
          <p>
            Explore selected publications co-authored by Armstrong Aboah and
            collaborators, spanning pavement assessment, visual understanding,
            and mobility.
          </p>
          <Link className="text-link" href="/research">
            Open the research library
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>
      <ContactBand title="What would you like to understand better?" />
    </>
  );
}

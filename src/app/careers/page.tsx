import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/site/reveal";
import { ContactBand } from "@/components/site/contact-band";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Careers",
  "Bring your perspective to applied AI, infrastructure, and mobility at InfiniCity Labs.",
  "/careers",
);
export default function CareersPage() {
  return (
    <>
      <section className="wrap page-intro">
        <p className="eyebrow">Careers & collaboration</p>
        <h1>Work with InfiniCity Labs.</h1>
        <p>
          Interesting work starts where disciplines meet. We’re interested in
          people who ask useful questions, investigate the details, and care
          about what happens beyond the screen.
        </p>
      </section>
      <div className="solution-wide-image">
        <Image
          src="/images/field-inspection.webp"
          alt="Illustrative engineering work in the field"
          fill
          sizes="100vw"
        />
        <span>Illustrative scene</span>
      </div>
      <section className="wrap chapter-section">
        <Reveal className="v2-section-heading">
          <h2>Areas of work.</h2>
        </Reveal>
        <div className="use-case-grid">
          {[
            {
              title: "Engineering",
              text: "Software, systems, computer vision, and the practical work of connecting them.",
            },
            {
              title: "Domain expertise",
              text: "Infrastructure, transportation, field operations, and the decisions our tools support.",
            },
            {
              title: "Research & design",
              text: "New questions, careful investigation, and interfaces that help people think clearly.",
            },
          ].map((x) => (
            <Reveal key={x.title}>
              <h3>{x.title}</h3>
              <p>{x.text}</p>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="wrap careers-conversation">
        <div>
          <p className="eyebrow">Start a conversation</p>
          <h2>Tell us what you care about.</h2>
        </div>
        <div>
          <p>
            We aren’t listing specific openings here at the moment. If your
            interests connect with our work, send an introduction, a link to
            your work, and the kind of contribution you would like to make.
          </p>
          <a
            href="mailto:info@infinicitylabs.org?subject=Careers%20at%20InfiniCity%20Labs"
            className="text-link"
          >
            Introduce yourself
            <ArrowUpRight size={17} />
          </a>
        </div>
      </section>
      <ContactBand
        title="Good work begins with good questions."
        description="Explore our products, read the research, and get to know the problems we’re working on."
      />
    </>
  );
}

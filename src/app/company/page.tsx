import Image from "next/image";
import { ContactBand } from "@/components/site/contact-band";
import { LinkButton } from "@/components/site/link-button";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Our company",
  "InfiniCity Labs brings applied AI, engineering, and software together to understand infrastructure, movement, and the world around us.",
  "/company",
);

export default function CompanyPage() {
  return (
    <>
      <section className="wrap page-intro">
        <p className="eyebrow">Meet InfiniCity Labs</p>
        <h1>
          Curiosity.
          <br />
          <em>Put to work.</em>
        </h1>
        <p>
          We are a technology company bringing applied AI, engineering, and
          software together around the physical world.
        </p>
      </section>
      <figure className="company-image">
        <Image
          src="/images/infrastructure-aerial.webp"
          alt="Illustrative infrastructure scene showing a bridge connecting a city and its surrounding road network"
          fill
          sizes="100vw"
          priority
        />
        <figcaption>Illustrative infrastructure scene</figcaption>
      </figure>
      <section className="wrap section-space">
        <div className="company-statement">
          <p className="eyebrow">What brings us together</p>
          <h2>
            The world is full of information.
            <br />
            <em>Make it useful.</em>
          </h2>
          <p>
            Roads, junctions, and everyday environments generate observations
            that can change how we understand them. InfiniCity Labs builds the
            systems that connect those observations with engineering judgment,
            from field collection and visual analysis to tools people can use in
            their work.
          </p>
        </div>
      </section>
      <section className="wrap product-index" aria-label="Our approach">
        <div className="company-principles">
          <article>
            <h3>Stay close to the problem.</h3>
            <p>
              Start with the environment, the people doing the work, and the
              decisions they need to make.
            </p>
          </article>
          <article>
            <h3>Keep the evidence in view.</h3>
            <p>
              Connect findings with their source so that observations can be
              investigated and understood.
            </p>
          </article>
          <article>
            <h3>Build the whole workflow.</h3>
            <p>
              Bring data, models, and interfaces together in tools that support
              the work from beginning to end.
            </p>
          </article>
        </div>
        <div className="people-section">
          <div>
            <p className="eyebrow">People & collaboration</p>
            <h2>
              Different disciplines.
              <br />
              <em>A shared curiosity.</em>
            </h2>
            <p>
              Our work connects engineering, computer vision, and software
              development. We welcome conversations with people who bring
              another perspective.
            </p>
          </div>
          <LinkButton href="/team" variant="outline">
            Our people
          </LinkButton>
        </div>
      </section>
      <ContactBand />
    </>
  );
}

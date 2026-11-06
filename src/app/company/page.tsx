import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/site/reveal";
import { ContactBand } from "@/components/site/contact-band";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Our company",
  "Meet InfiniCity Labs: a company connecting research, engineering, and software to real-world infrastructure, mobility, and applied AI.",
  "/company",
);
export default function CompanyPage() {
  return (
    <>
      <section className="wrap page-intro company-intro">
        <p className="eyebrow">We are InfiniCity Labs</p>
        <h1>
          Curious about the world.
          <br />
          <em>Serious about the work.</em>
        </h1>
        <p>
          We build technology for the places, systems, and movements that shape
          everyday life. Our work connects research and engineering with the
          people facing the next practical question.
        </p>
      </section>
      <div className="company-panorama">
        <Image
          src="/images/infrastructure-aerial.webp"
          alt="Illustrative connected road and city landscape"
          fill
          sizes="100vw"
        />
        <div />
        <span>Illustrative infrastructure scene</span>
      </div>
      <section className="wrap chapter-section company-purpose">
        <Reveal>
          <p className="eyebrow">Why we do it</p>
          <h2>
            Seeing more is
            <br />
            just the <em>beginning.</em>
          </h2>
        </Reveal>
        <Reveal>
          <p className="company-lead">
            The interesting question is what understanding makes possible.
          </p>
          <p>
            A clearer view of road condition. A traffic study that keeps its
            evidence. An inspection record that follows an asset over time. We
            care about the step between an observation and useful work.
          </p>
          <p>
            That takes more than a model. It takes domain knowledge, careful
            software engineering, and a willingness to look closely at how
            people actually work.
          </p>
        </Reveal>
      </section>
      <section className="chapter-section company-practice">
        <div className="wrap">
          <Reveal className="v2-section-heading">
            <h2>
              Different disciplines.
              <br />
              <em>One connected practice.</em>
            </h2>
            <Link href="/technology" className="text-link">
              Explore our technology
              <ArrowUpRight size={17} />
            </Link>
          </Reveal>
          <div className="company-practice-grid">
            {[
              {
                title: "Research",
                text: "Ask a useful question. Understand the evidence. Stay open to what the work reveals.",
                number: "01",
              },
              {
                title: "Engineering",
                text: "Connect the data, models, and systems into something that can be inspected and used.",
                number: "02",
              },
              {
                title: "Product",
                text: "Build around a real workflow, with clear context and room for human judgment.",
                number: "03",
              },
            ].map((p) => (
              <Reveal key={p.title}>
                <span className="tiny-label">{p.number} / Our practice</span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="wrap chapter-section company-perspective">
        <Reveal className="company-perspective-image">
          <Image
            src="/images/field-inspection.webp"
            alt="Illustrative engineering inspection in the field"
            fill
            sizes="(max-width:800px) 100vw, 50vw"
          />
        </Reveal>
        <Reveal>
          <p className="eyebrow">A practical perspective</p>
          <h2>
            The environment
            <br />
            <em>comes first.</em>
          </h2>
          <p>
            Infrastructure, traffic, and field monitoring each bring their own
            constraints. We start there: the available data, the person using
            the result, and the decision that follows.
          </p>
          <p>
            Our portfolio reflects that approach. Distinct products solve
            distinct parts of the work, supported by a shared practice in visual
            intelligence and software.
          </p>
          <Link href="/products" className="text-link">
            Explore the portfolio
            <ArrowUpRight size={17} />
          </Link>
        </Reveal>
      </section>
      <section className="wrap company-invitations">
        <Reveal>
          <p className="eyebrow">The people behind the work</p>
          <h2>
            Different perspectives.
            <br />
            <em>Shared possibilities.</em>
          </h2>
          <Link href="/team" className="text-link">
            Our people
            <ArrowUpRight size={17} />
          </Link>
        </Reveal>
        <Reveal>
          <p className="eyebrow">Bring your perspective</p>
          <h2>
            Good questions
            <br />
            <em>travel further together.</em>
          </h2>
          <Link href="/careers" className="text-link">
            Careers & collaboration
            <ArrowUpRight size={17} />
          </Link>
        </Reveal>
      </section>
      <ContactBand title="Let’s find something worth working on." />
    </>
  );
}

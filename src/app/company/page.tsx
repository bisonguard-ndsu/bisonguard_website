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
        <h1>Engineering software for the physical world.</h1>
        <p>
          InfiniCity Labs builds software for infrastructure management, traffic
          analysis, and applied computer vision. We bring research and
          engineering into tools that support inspections, studies, and field
          operations.
        </p>
      </section>
      <section className="wrap chapter-section company-purpose">
        <Reveal>
          <p className="eyebrow">Why we do it</p>
          <h2>Make field data useful to the people responsible for it.</h2>
        </Reveal>
        <Reveal>
          <p className="company-lead">
            Data collection is one part of the job. The next part is making it
            usable.
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
            <h2>How we build.</h2>
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
            src="/images/bisonguard-herd.webp"
            alt="Herd monitoring is one of the environments our products support"
            fill
            sizes="(max-width:800px) 100vw, 50vw"
          />
        </Reveal>
        <Reveal>
          <p className="eyebrow">A practical perspective</p>
          <h2>Different environments need different tools.</h2>
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
          <h2>Our team.</h2>
          <Link href="/team" className="text-link">
            Our people
            <ArrowUpRight size={17} />
          </Link>
        </Reveal>
        <Reveal>
          <p className="eyebrow">Bring your perspective</p>
          <h2>Work with us.</h2>
          <Link href="/careers" className="text-link">
            Careers & collaboration
            <ArrowUpRight size={17} />
          </Link>
        </Reveal>
      </section>
      <ContactBand />
    </>
  );
}

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ScanLine, MapPin, Workflow, Layers } from "lucide-react";
import { HomeHero } from "@/components/site/home-hero";
import { ProductExplorer } from "@/components/site/product-explorer";
import { Reveal } from "@/components/site/reveal";
import { ContactBand } from "@/components/site/contact-band";
import { solutions } from "@/content/solutions";
import { publications } from "@/content/publications";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Intelligence for a world in motion",
  "InfiniCity Labs connects infrastructure, mobility, and applied AI through AdAMS, PaveXpert, TMC, Turnflow, RoadLogger, AdAMS Annotate, and BisonGuard.",
  "/",
);
export default function HomePage() {
  return (
    <>
      <HomeHero />
      <section className="chapter-section manifesto-section" id="discover">
        <div className="wrap">
          <Reveal className="section-kicker">
            <span>01 / THE BIGGER PICTURE</span>
            <span>Built around the world we share.</span>
          </Reveal>
          <div className="manifesto-grid">
            <Reveal>
              <p className="eyebrow">A company driven by useful questions</p>
              <div className="manifesto-mark" aria-hidden="true">
                <i />
                <i />
                <i />
              </div>
            </Reveal>
            <div>
              <Reveal>
                <h2>
                  The world gives us
                  <br />
                  more to see.
                  <br />
                  <em>We make it useful.</em>
                </h2>
              </Reveal>
              <Reveal className="manifesto-body">
                <p>
                  A road in need of attention. A junction that moves differently
                  at rush hour. A herd in an open landscape. Every environment
                  has a story hidden in its observations.
                </p>
                <p>
                  We bring research, engineering, and software together to turn
                  those observations into tools for the people making the next
                  decision.
                </p>
                <Link className="text-link" href="/company">
                  Get to know InfiniCity
                  <ArrowUpRight size={17} />
                </Link>
              </Reveal>
            </div>
          </div>
          <div className="domain-rail">
            {[
              { icon: ScanLine, label: "Observe the physical world" },
              { icon: Layers, label: "Connect the evidence" },
              { icon: Workflow, label: "Support the next decision" },
            ].map((item, i) => (
              <Reveal key={item.label} delay={i * 50}>
                <item.icon size={22} />
                <span>{item.label}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="chapter-section portfolio-section" id="products">
        <div className="wrap">
          <Reveal className="section-kicker">
            <span>02 / OUR PRODUCTS</span>
            <Link href="/products">
              The complete portfolio
              <ArrowUpRight size={15} />
            </Link>
          </Reveal>
          <Reveal className="v2-section-heading">
            <h2>
              Different challenges.
              <br />
              <em>Purpose-built intelligence.</em>
            </h2>
            <p>
              Explore a product. Step inside the workflow. Find the right
              starting point for your team.
            </p>
          </Reveal>
          <Reveal>
            <ProductExplorer />
          </Reveal>
          <div className="supporting-products">
            <Reveal>
              <MapPin size={22} />
              <div>
                <p className="eyebrow">Built for the field</p>
                <h3>RoadLogger</h3>
                <p>
                  From the first observation to the follow-up inspection. Keep a
                  complete case history, wherever the work takes you.
                </p>
                <Link href="/products/roadlogger" className="text-link">
                  Explore RoadLogger
                  <ArrowUpRight size={17} />
                </Link>
              </div>
            </Reveal>
            <Reveal delay={70}>
              <ScanLine size={22} />
              <div>
                <p className="eyebrow">Built for better data</p>
                <h3>AdAMS Annotate</h3>
                <p>
                  Bring model assistance, human review, and team workflows to
                  the images and videos behind your AI.
                </p>
                <Link href="/products/annotate" className="text-link">
                  Explore AdAMS Annotate
                  <ArrowUpRight size={17} />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
      <section className="chapter-section solutions-home">
        <div className="wrap">
          <Reveal className="section-kicker">
            <span>03 / WHERE IT MATTERS</span>
            <span>Start with your challenge.</span>
          </Reveal>
          <Reveal className="v2-section-heading">
            <h2>
              Real environments.
              <br />
              <em>Meaningful possibilities.</em>
            </h2>
            <Link href="/solutions" className="text-link">
              Explore our solutions
              <ArrowUpRight size={17} />
            </Link>
          </Reveal>
          <div className="solution-story-grid">
            {solutions.map((solution, i) => (
              <Reveal key={solution.slug} delay={(i % 2) * 60}>
                <Link
                  href={"/solutions/" + solution.slug}
                  className={"solution-story solution-story-" + i}
                >
                  <div className="solution-story-image">
                    <Image
                      src={solution.image}
                      alt={solution.imageAlt}
                      fill
                      sizes="(max-width:700px) 100vw, 50vw"
                    />
                    <span className="story-number">0{i + 1}</span>
                    <span className="story-arrow">
                      <ArrowUpRight size={23} />
                    </span>
                  </div>
                  <div className="solution-story-copy">
                    <h3>{solution.shortTitle}</h3>
                    <p>{solution.summary}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="chapter-section connected-section">
        <div className="wrap connected-grid">
          <Reveal>
            <p className="eyebrow">The intelligence is in the connection</p>
            <h2>
              From a moment
              <br />
              in the field.
              <br />
              <em>
                To a decision
                <br />
                that moves it forward.
              </em>
            </h2>
            <p className="section-description">
              The value is in how the pieces work together. Data with context.
              Analysis with evidence. Technology with people.
            </p>
            <Link href="/technology" className="text-link">
              Explore our technology
              <ArrowUpRight size={17} />
            </Link>
          </Reveal>
          <div className="connected-steps">
            {[
              {
                title: "Capture",
                description:
                  "Images, video, measurements, and observations from the environment.",
                tag: "Field data",
                icon: ScanLine,
              },
              {
                title: "Understand",
                description:
                  "Visual analysis and domain knowledge connect the signals with their meaning.",
                tag: "Applied intelligence",
                icon: Layers,
              },
              {
                title: "Review",
                description:
                  "Keep the original evidence close to the people interpreting the result.",
                tag: "Human judgment",
                icon: MapPin,
              },
              {
                title: "Act",
                description:
                  "Bring the findings into a report, a maintenance plan, or the next conversation.",
                tag: "Useful outcomes",
                icon: Workflow,
              },
            ].map((step, i) => (
              <Reveal
                key={step.title}
                delay={i * 40}
                className="connected-step"
              >
                <div className="connected-node">
                  <step.icon size={20} />
                </div>
                <div>
                  <span className="tiny-label">
                    0{i + 1} / {step.tag}
                  </span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="field-editorial">
        <Image
          src="/images/field-inspection.webp"
          alt="Illustrative road inspection in the field"
          fill
          sizes="(max-width: 700px) 1000px, 100vw"
        />
        <div className="field-editorial-shade" />
        <div className="wrap">
          <Reveal>
            <p className="eyebrow">
              Research. Engineering. Real-world context.
            </p>
            <h2>
              Good technology
              <br />
              starts with <em>a closer look.</em>
            </h2>
            <p>
              We work across the whole journey, from the question worth asking
              to the workflow worth using.
            </p>
            <Link href="/services" className="link-button hero-demo">
              How we work
              <ArrowUpRight size={18} />
            </Link>
          </Reveal>
          <span className="image-credit">
            Illustrative field inspection scene
          </span>
        </div>
      </section>
      <section className="chapter-section knowledge-section">
        <div className="wrap">
          <Reveal className="section-kicker">
            <span>04 / IDEAS THAT MOVE US</span>
            <Link href="/resources">
              Explore the resource library
              <ArrowUpRight size={15} />
            </Link>
          </Reveal>
          <Reveal className="v2-section-heading">
            <h2>
              A little more context.
              <br />
              <em>A different perspective.</em>
            </h2>
            <p>Explore the research and practical thinking behind the work.</p>
          </Reveal>
          <div className="knowledge-grid">
            <Reveal>
              <Link
                href="/resources/from-road-surveys-to-maintenance-decisions"
                className="featured-guide"
              >
                <div className="guide-image">
                  <Image
                    src="/images/field-inspection.webp"
                    fill
                    sizes="(max-width:800px) 100vw, 50vw"
                    alt="Illustrative engineer on a road inspection"
                  />
                  <ArrowUpRight size={25} />
                </div>
                <p className="eyebrow">Field guide · Infrastructure</p>
                <h3>From road surveys to maintenance decisions</h3>
                <p>
                  Connect the observation, the evidence, and the next action.
                </p>
              </Link>
            </Reveal>
            <Reveal delay={80} className="knowledge-list">
              <Link href="/resources/building-a-useful-turning-movement-study">
                <span className="tiny-label">Field guide / Mobility</span>
                <h3>Building a useful turning-movement study</h3>
                <ArrowUpRight size={20} />
              </Link>
              <Link href="/resources/human-review-in-computer-vision-workflows">
                <span className="tiny-label">Field guide / Applied AI</span>
                <h3>Where human review makes the difference</h3>
                <ArrowUpRight size={20} />
              </Link>
              <Link href="/research">
                <span className="tiny-label">From the research library</span>
                <h3>{publications[0].title}</h3>
                <ArrowUpRight size={20} />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
      <ContactBand />
    </>
  );
}

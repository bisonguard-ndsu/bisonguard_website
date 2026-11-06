import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { solutions } from "@/content/solutions";
import { Reveal } from "@/components/site/reveal";
import { ContactBand } from "@/components/site/contact-band";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Solutions",
  "Explore connected workflows for infrastructure management, traffic engineering, field operations, and applied visual AI.",
  "/solutions",
);
export default function SolutionsPage() {
  return (
    <>
      <section className="wrap page-intro">
        <p className="eyebrow">Start with your challenge</p>
        <h1>
          The right intelligence.
          <br />
          <em>In the right context.</em>
        </h1>
        <p>
          Different environments ask different questions. We connect the
          products, engineering, and domain knowledge needed to explore them.
        </p>
      </section>
      <section className="wrap solutions-index">
        {solutions.map((solution, i) => (
          <Reveal key={solution.slug} className="solution-index-row">
            <Link
              className="solution-index-photo"
              href={"/solutions/" + solution.slug}
              tabIndex={-1}
              aria-hidden="true"
            >
              <Image
                src={solution.image}
                alt=""
                fill
                sizes="(max-width:800px) 100vw, 50vw"
              />
            </Link>
            <div>
              <span className="tiny-label">
                0{i + 1} / {solution.eyebrow}
              </span>
              <h2>
                <Link href={"/solutions/" + solution.slug}>
                  {solution.shortTitle}
                </Link>
              </h2>
              <p>{solution.description}</p>
              <Link className="text-link" href={"/solutions/" + solution.slug}>
                Explore the solution
                <ArrowUpRight size={17} />
              </Link>
            </div>
          </Reveal>
        ))}
      </section>
      <ContactBand
        title="Tell us what needs to work."
        description="Your environment, your data, your team. Let’s find the right way into the problem."
      />
    </>
  );
}

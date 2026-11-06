import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ContactBand } from "@/components/site/contact-band";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Platform access",
  "Find access to the InfiniCity workspace and learn how to get started with Turnflow, AdAMS Annotate, and other products.",
  "/platforms",
);

export default function PlatformsPage() {
  return (
    <>
      <section className="wrap page-intro">
        <p className="eyebrow">Platform access</p>
        <h1>Access your workspace.</h1>
        <p>
          Find your workspace or get in touch to explore access to a product.
        </p>
      </section>
      <section
        className="wrap platform-directory"
        aria-label="Platform directory"
      >
        <article className="platform-row">
          <h2>InfiniCity Workspace</h2>
          <p>
            Access AdAMS, TMC, and RoadLogger through the current shared
            application.
          </p>
          <a
            className="text-link"
            href="https://app.infinicitylabs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open workspace
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </article>
        <article className="platform-row">
          <h2>Turnflow</h2>
          <p>
            Traffic video analysis, counting, review, and reporting. Contact us
            to discuss access for your project.
          </p>
          <Link className="text-link" href="/contact">
            Ask about access
            <ArrowUpRight size={18} aria-hidden="true" />
          </Link>
        </article>
        <article className="platform-row">
          <h2>AdAMS Annotate</h2>
          <p>
            Discuss an annotation workflow and deployment for your team’s visual
            datasets.
          </p>
          <Link className="text-link" href="/contact">
            Talk to the team
            <ArrowUpRight size={18} aria-hidden="true" />
          </Link>
        </article>
        <article className="platform-row">
          <h2>PaveXpert</h2>
          <p>
            Our agentic pavement intelligence product. Explore the workbench and
            the assessment workflow.
          </p>
          <Link className="text-link" href="/products/pavexpert">
            Explore PaveXpert
            <ArrowUpRight size={18} aria-hidden="true" />
          </Link>
        </article>
        <article className="platform-row">
          <h2>BisonGuard</h2>
          <p>
            Explore herd detection and monitoring, and discuss the observations
            and environment your team works with.
          </p>
          <Link className="text-link" href="/book-a-demo?product=bisonguard">
            Request a walkthrough
            <ArrowUpRight size={18} aria-hidden="true" />
          </Link>
        </article>
        <p className="platform-note">
          The product platforms are evolving. This directory will reflect new
          access points as they become available.
        </p>
      </section>
      <ContactBand
        title="Looking for a starting point?"
        description="Tell us what you’re trying to do and we’ll help you find the right product or team."
      />
    </>
  );
}

import Link from "next/link";
import {
  ArrowUpRight,
  ScanLine,
  MapPin,
  Workflow,
  Users,
  Database,
  FileText,
} from "lucide-react";
import { Reveal } from "@/components/site/reveal";
import { ProductVisual } from "@/components/site/product-visual";
import { ContactBand } from "@/components/site/contact-band";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Technology",
  "Explore the visual intelligence, spatial context, agentic interfaces, and human review behind InfiniCity Labs products.",
  "/technology",
);
const pillars = [
  {
    icon: ScanLine,
    title: "Visual intelligence",
    description:
      "Connect images and video with observations about objects, conditions, and movement. Our work spans roadside assets, pavement, vehicles, and herd monitoring.",
    link: "/products/adams",
    product: "Explore AdAMS",
  },
  {
    icon: MapPin,
    title: "Spatial context",
    description:
      "A finding becomes more useful when it has a place. Maps, routes, and geolocated records connect an observation with the asset or environment it describes.",
    link: "/products/roadlogger",
    product: "Explore RoadLogger",
  },
  {
    icon: Workflow,
    title: "Agentic workflows",
    description:
      "Organize engineering questions around specialist tasks and a shared project context. Bring the stages of an assessment into a workspace that invites investigation.",
    link: "/products/pavexpert",
    product: "Explore PaveXpert",
  },
  {
    icon: Users,
    title: "Human review",
    description:
      "Keep people close to the evidence. Annotation, review, corrections, and engineering interpretation belong inside the workflow, where decisions can be examined.",
    link: "/products/annotate",
    product: "Explore AdAMS Annotate",
  },
];
export default function TechnologyPage() {
  return (
    <>
      <section className="wrap page-intro technology-intro">
        <p className="eyebrow">The technology behind the work</p>
        <h1>
          Intelligence is
          <br />
          <em>what we connect.</em>
        </h1>
        <p>
          Data from the world. Context from the domain. Judgment from the people
          using it. Our technology brings those pieces into the same workflow.
        </p>
      </section>
      <section
        className="wrap technology-system"
        aria-label="From observation to action"
      >
        <div className="system-orbit" aria-hidden="true">
          <div className="system-orbit-ring" />
          <div className="system-core">
            <span className="tiny-label">InfiniCity Labs</span>
            <strong>
              Applied
              <br />
              <em>intelligence.</em>
            </strong>
          </div>
          <div className="system-node node-one">
            <Database size={21} />
            <span>Data</span>
          </div>
          <div className="system-node node-two">
            <ScanLine size={21} />
            <span>Vision</span>
          </div>
          <div className="system-node node-three">
            <MapPin size={21} />
            <span>Context</span>
          </div>
          <div className="system-node node-four">
            <Users size={21} />
            <span>Review</span>
          </div>
        </div>
        <div>
          <p className="eyebrow">From inputs to understanding</p>
          <h2>
            A system around
            <br />
            <em>the decision.</em>
          </h2>
          <p>
            The model is part of the picture. The collection process, project
            context, review interface, and final handoff determine whether an
            output becomes useful work.
          </p>
          <div className="technology-inputs">
            <span>Video & imagery</span>
            <span>Location & observations</span>
            <span>Project context</span>
            <span>Engineering review</span>
          </div>
        </div>
      </section>
      <section className="wrap chapter-section technology-pillars">
        {pillars.map((p, i) => (
          <Reveal key={p.title} delay={(i % 2) * 60}>
            <p className="eyebrow">0{i + 1} / Foundation</p>
            <p.icon size={31} strokeWidth={1.2} />
            <h2>{p.title}</h2>
            <p>{p.description}</p>
            <Link href={p.link} className="text-link">
              {p.product}
              <ArrowUpRight size={17} />
            </Link>
          </Reveal>
        ))}
      </section>
      <section className="technology-agentic chapter-section">
        <div className="wrap">
          <Reveal className="v2-section-heading">
            <h2>
              Make the process
              <br />
              <em>part of the interface.</em>
            </h2>
            <p>
              Explore an illustrative PaveXpert workflow. Change the question to
              see a different path through the workbench.
            </p>
          </Reveal>
          <Reveal>
            <ProductVisual slug="pavexpert" />
          </Reveal>
          <Link
            href="/products/pavexpert"
            className="text-link technology-more"
          >
            Meet PaveXpert
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
      <section className="wrap chapter-section technology-handoff">
        <Reveal>
          <FileText size={28} strokeWidth={1.3} />
          <h2>The handoff matters.</h2>
          <p>
            Reports, reviewed labels, inspection histories, and study outputs
            should make sense to the next person who uses them. We build around
            those handoffs so the evidence can continue into the work that
            follows.
          </p>
          <Link
            className="text-link"
            href="/resources/human-review-in-computer-vision-workflows"
          >
            Read about human review
            <ArrowUpRight size={17} />
          </Link>
        </Reveal>
        <Reveal>
          <p className="eyebrow">Engineering with context</p>
          <h3>Built to be investigated.</h3>
          <p>
            We prefer workflows that expose their sources and invite review.
            Explore the research that informs the questions we ask.
          </p>
          <Link className="text-link" href="/research">
            Explore the research
            <ArrowUpRight size={17} />
          </Link>
        </Reveal>
      </section>
      <ContactBand title="What should your technology make possible?" />
    </>
  );
}

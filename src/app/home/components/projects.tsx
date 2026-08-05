"use client";

import Reveal from "@/components/ui/reveal";
import SectionHeading from "@/components/ui/section-heading";
import { projects } from "@/lib/constants";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

function ProjectCard({
  project,
  index,
}: Readonly<{
  project: (typeof projects)[number];
  index: number;
}>) {
  return (
    <Reveal delay={0.08 * index} className="h-full">
      <article className="group h-full border border-ink-100 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-neon hover:shadow-[0_28px_70px_-36px_rgba(11,36,57,0.5)]">
        <Link
          href={project.href}
          className="flex h-full flex-col focus-visible:ring-offset-0"
        >
          {/* Image */}
          <div className="relative aspect-[4/3] w-full overflow-hidden bg-navy-900">
            <img
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
              loading="lazy"
            />
            {/* Scrim — unifies three very different photographs and keeps any
                overlaid type legible */}
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-navy-950/65 via-navy-950/10 to-transparent"
            />
            <span
              aria-hidden="true"
              className="absolute bottom-0 left-0 h-[3px] w-0 bg-neon transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-full"
            />
          </div>

          {/* Content */}
          <div className="flex flex-1 flex-col p-7 md:p-8">
            <h3 className="text-xl font-bold leading-snug text-ink-900 md:text-[1.375rem]">
              {project.title}
            </h3>

            <p className="mt-4 text-sm leading-relaxed text-ink-500 md:text-base">
              {project.description}
            </p>

            <span className="mt-auto inline-flex items-center gap-2 pt-8 text-sm font-semibold text-ink-900">
              <span className="relative">
                Learn more
                <span
                  aria-hidden="true"
                  className="absolute -bottom-1 left-0 h-px w-0 bg-neon-deep transition-all duration-300 group-hover:w-full"
                />
              </span>
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </span>
          </div>
        </Link>
      </article>
    </Reveal>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section-y section-x bg-white">
      <div className="mx-auto w-full max-w-6xl">
        {/* Header — title left, supporting copy right */}
        <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-12 lg:gap-16">
          <SectionHeading
            className="lg:col-span-7"
            eyebrow="What We Build"
            title="Our Smart Solutions and Services"
            tone="light"
          />

          <Reveal delay={0.2} className="lg:col-span-5">
            <p className="text-base leading-relaxed text-ink-500 md:text-lg">
              We provide specialized infrastructure, mobility, and smart systems
              technology services based on{" "}
              <span className="font-semibold text-ink-900 underline decoration-neon decoration-2 underline-offset-4">
                our research expertise
              </span>{" "}
              in big data analytics, intelligent systems, and infrastructure
              management.
            </p>
          </Reveal>
        </div>

        {/* Service Cards */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.href} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

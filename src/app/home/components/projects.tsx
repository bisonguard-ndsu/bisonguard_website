"use client";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/constants";
import { Plus } from "lucide-react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const cardInView = useInView(cardRef, { once: true, margin: "-100px" });
  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      animate={cardInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.1 * index, ease: "easeOut" }}
      className="bg-white border border-bluish-white/30 hover:shadow hover:scale-105 transition-all duration-300"
    >
      {/* Image */}
      <div className="mb-6">
        <img
          src={project.image}
          alt={`${project.title} - ${project.description.substring(0, 50)}...`}
          className="w-full h-80 object-cover"
          loading="lazy"
        />
      </div>
      {/* Content */}
      <div className="space-y-4 p-6">
        {/* Icon and Title */}
        <div className="flex items-center gap-3">
          <h3 className="text-2xl font-bold text-foreground">
            {project.title}
          </h3>
        </div>
        {/* Description */}
        <p className="text-sm lg:text-md text-gray-600 leading-relaxed">
          {project.description}
        </p>
        {/* Button */}
        <Link href={project.href}>
          <Button
            className={`text-dark-blue bg-neon capitalize px-6 py-3 text-xs font-semibold tracking-wider transition-all duration-300 rounded-none border border-bluish-white/30 hover:bg-neon cursor-pointer`}
          >
            READ MORE
            <Plus className="w-2 h-2 ml-1" />
          </Button>
        </Link>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const headerRef = useRef(null);
  const descRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-100px" });
  const descInView = useInView(descRef, { once: true, margin: "-100px" });

  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 md:px-8 lg:px-16 bg-white"
    >
      <div className="max-w-6xl mx-auto container">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left - Heading */}
          <motion.div
            ref={headerRef}
            initial={{ opacity: 0, y: 40 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl  font-bold text-foreground leading-tight">
              Our <span className="text-neon">Smart</span> Solutions and
              Services
            </h2>
          </motion.div>

          {/* Right - Description */}
          <motion.div
            ref={descRef}
            initial={{ opacity: 0, y: 40 }}
            animate={descInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="flex items-center justify-self-end-safe max-w-md"
          >
            <p className="text-gray-600 leading-relaxed text-sm lg:text-md">
              We provide specialized infrastructure, mobility, and smart systems
              technology services based on{" "}
              <span className="underline font-bold">
                our research expertise
              </span>{" "}
              in big data analytics, intelligent systems, and infrastructure
              management.
            </p>
          </motion.div>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

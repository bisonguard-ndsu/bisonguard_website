import { Button } from "@/components/ui/button";
import { projects } from "@/lib/constants";
import { Plus } from "lucide-react";
import Link from "next/link";

export default function Projects() {
  return (
    <section className="py-20 px-4 sm:px-6 md:px-8 lg:px-16 bg-white">
      <div className="max-w-6xl mx-auto container">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left - Heading */}
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl  font-bold text-foreground leading-tight">
              Our Latest <span className="text-neon">Projects</span> &{" "}
              <span className="text-neon">Solutions</span>
            </h2>
          </div>

          {/* Right - Description */}
          <div className="flex items-center justify-self-end-safe max-w-md">
            <p className="text-gray-600 leading-relaxed text-sm lg:text-md">
              We provide specialized transportation technology services based on{" "}
              <span className="underline font-bold">
                our research expertise
              </span>{" "}
              in big data analytics, intelligent systems, and infrastructure
              management.
            </p>
          </div>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white border border-bluish-white/30 hover:shadow hover:scale-105 transition-all duration-300"
            >
              {/* Image */}
              <div className="mb-6">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-80 object-cover"
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
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        {/* <div className="flex justify-center gap-2">
          <div className="w-3 h-3 rounded-full bg-blue-600"></div>
          <div className="w-3 h-3 rounded-full bg-blue-600"></div>
          <div className="w-3 h-3 rounded-full bg-blue-600"></div>
          <div className="w-3 h-3 rounded-full bg-blue-600"></div>
        </div> */}
      </div>
    </section>
  );
}

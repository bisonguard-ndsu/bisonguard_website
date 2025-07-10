import { Button } from "@/components/ui/button";
import { team } from "@/lib/constants";
import Link from "next/link";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useRouter } from "next/navigation";

function TeamMemberCard({
  member,
  index,
}: {
  member: (typeof team)[number];
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const cardInView = useInView(cardRef, { once: true, margin: "-100px" });
  const router = useRouter();
  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      animate={cardInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.1 * index, ease: "easeOut" }}
      className="group relative bg-white rounded-none overflow-hidden  transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
      onClick={() => router.push(member.href)}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden bg-red-200">
        <img
          src={member.image ?? "/user.jpg"}
          alt={member.name}
          loading="lazy"
          className="w-full h-64 object-cover object-top transition-transform duration-300 group-hover:scale-110 bg-gray-200"
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      {/* Name and Position */}
      <div className="p-6 bg-white relative">
        <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-neon transition-colors duration-300">
          {member.name}
        </h3>
        <p className="text-sm text-neon group-hover:text-gray-800 transition-colors duration-300">
          {member.position}
        </p>
        {/* Hover indicator */}
        <div className="absolute bottom-0 left-0 w-0 h-1 bg-neon group-hover:w-full transition-all duration-300"></div>
      </div>
    </motion.div>
  );
}

const Team = () => {
  const headerRef = useRef(null);
  const descRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-100px" });
  const descInView = useInView(descRef, { once: true, margin: "-100px" });

  return (
    <section
      id="team"
      className="py-20 bg-gray-50 px-4 sm:px-6 md:px-8 lg:px-16"
    >
      <div className="max-w-6xl mx-auto container">
        {/* Header */}
        <div className="text-center mx-auto container mb-16">
          <div className="inline-flex items-center justify-center mb-4">
            <div className="w-12 h-0.5 bg-neon mr-4" />
            <span className="text-neon text-sm font-medium uppercase tracking-wider">
              Our Team
            </span>
            <div className="w-12 h-0.5 bg-neon ml-4" />
          </div>

          {/* Main Heading */}
          <motion.h2
            ref={headerRef}
            initial={{ opacity: 0, y: 40 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-8"
          >
            Meet The <span className="text-neon">Team</span>
          </motion.h2>
          <motion.p
            ref={descRef}
            initial={{ opacity: 0, y: 40 }}
            animate={descInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="text-gray-600 text-md lg:text-lg  max-w-3xl mx-auto leading-relaxed"
          >
            At InfiniCity Labs, our strength lies in our people. Our team of
            engineers, analysts, and innovators brings decades of experience and
            a shared passion for building smarter, more efficient systems.
            Together, we turn complex challenges into sustainable solutions for
            cities and communities around the world.
          </motion.p>
        </div>

        {/* Team Members */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {team.map((member, index) => (
            <TeamMemberCard key={index} member={member} index={index} />
          ))}
        </div>

        {/* Join Team Button */}
        <div className="text-center">
          <Link href="/#contact">
            <Button className="bg-dark-blue hover:bg-[#22d18a] text-white hover:text-dark-blue  capitalize px-12 py-7 text-base font-semibold tracking-wider transition-all duration-300 rounded-none">
              JOIN OUR TEAM +
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Team;

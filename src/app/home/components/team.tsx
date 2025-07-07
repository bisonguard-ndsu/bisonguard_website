import { Button } from "@/components/ui/button";
import { team } from "@/lib/constants";
import React from "react";

const Team = () => {
  return (
    <section className="py-20 bg-gray-50 px-4 sm:px-6 md:px-8 lg:px-16">
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
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-8">
            Meet Our <span className="text-neon">Research & Development</span>{" "}
            Team
          </h2>
          <p className="text-gray-600 text-md lg:text-lg  max-w-3xl mx-auto leading-relaxed">
            Our diverse team of transportation technology experts, data
            scientists, and infrastructure specialists work together to pioneer
            innovative solutions for smart cities and sustainable transportation
            systems.
          </p>
        </div>

        {/* Team Members */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {team.map((member, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-none overflow-hidden  transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
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
            </div>
          ))}
        </div>

        {/* Join Team Button */}
        <div className="text-center">
          <Button className="bg-dark-blue hover:bg-[#22d18a] text-white hover:text-dark-blue  capitalize px-12 py-7 text-base font-semibold tracking-wider transition-all duration-300 rounded-none">
            JOIN OUR TEAM +
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Team;

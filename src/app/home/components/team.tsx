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
            InfiniCityLabs is awesome architecture engineering company.
          </h2>
          <p className="text-gray-600 text-md lg:text-lg  max-w-3xl mx-auto leading-relaxed">
            Lorem ipsum, or lipsum as it is sometimes known is dummy text used
            in laying in the century who thought usually begins consectetur
            reprehenderit in voluptate velit esse.
          </p>
        </div>

        {/* Team Members */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {team.map((member, index) => (
            <div key={index} className="text-center">
              {/* Image */}
              <div className="mb-6">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-80 object-cover"
                />
              </div>

              {/* Name and Position */}
              <div
                className={`p-4 hover:bg-blue-600 t bg-gray-50 text-foreground`}
              >
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className={`text-sm text-foreground`}>{member.position}</p>
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

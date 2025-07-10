"use client";
import Hero from "@/components/hero";
import React from "react";
import Members from "./components/members";

const Team = () => {
  return (
    <>
      <Hero
        items={[
          {
            badge: "Meet the Team",
            title: "Dedicated Experts Driving Innovation",
            description:
              "Our team is composed of passionate professionals with diverse backgrounds in AI, engineering, and urban planning. Together, we are committed to delivering cutting-edge solutions and making a positive impact in smart city development.",
            buttonText: "MEET OUR TEAM",
            buttonHref: "/team#members",
            target: "_self",
            backgroundImage: "/team.jpg",
            highlightWords: ["experts", "innovation"],
          },
        ]}
      />
      <Members />
    </>
  );
};

export default Team;

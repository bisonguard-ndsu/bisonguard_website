"use client";
import Hero from "@/components/hero";
import React from "react";

const About = () => {
  return (
    <>
      <Hero
        items={[
          {
            badge: "About InfiniCity Labs",
            title: "One tool to manage infrastructure assets and your team.",
            description:
              "AdAMS helps asset managers work faster, smarter and more efficiently, delivering the visibility and data-driven insights to mitigate risk and ensure compliance.",
            buttonText: "LEARN MORE",
            buttonHref: "/services",
            onButtonClick: () => null,
            backgroundImage:
              "https://t3.ftcdn.net/jpg/11/46/94/78/360_F_1146947825_j3XI3vLcoiD123wv8ysBCbp1FNCEJG40.jpg",
            highlightWords: ["asset", "team"],
          },
        ]}
      />
    </>
  );
};

export default About;

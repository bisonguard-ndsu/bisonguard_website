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
            title: "Delivering Smart Transportation Solutions & Services",
            description:
              "InfiniCity Labs provides cutting-edge transportation technology services based on our research expertise in big data analytics, digital twins, and intelligent systems. We deliver practical solutions for infrastructure asset management, traffic control systems, and wildlife monitoring that help cities optimize their transportation networks and improve safety.",
            buttonText: "LEARN MORE",
            buttonHref: "/services",
            onButtonClick: () => null,
            backgroundImage:
              "https://t3.ftcdn.net/jpg/11/46/94/78/360_F_1146947825_j3XI3vLcoiD123wv8ysBCbp1FNCEJG40.jpg",
            highlightWords: ["smart"],
          },
        ]}
      />
    </>
  );
};

export default About;

"use client";

import Hero from "@/components/hero";
import React from "react";
import Solutions from "./components/solutions";
import Insights from "./components/insights";
import Cta from "@/components/cta";
import HowAdamsWork from "./components/how-adams-works";

const Adams = () => {
  return (
    <>
      <Hero
        items={[
          {
            badge: "Advanced Asset & Infrastructure Management System",
            title: "One tool to manage infrastructure assets and your team.",
            description:
              "AdAMS helps asset managers work faster, smarter and more efficiently, delivering the visibility and data-driven insights to mitigate risk and ensure compliance.",
            buttonText: "SIGN UP TO AdAMS",
            buttonHref: "/#contact",
            target: "_blank",
            backgroundImage: "/tmc.png",
            highlightWords: ["asset", "team"],
          },
        ]}
      />
      <HowAdamsWork />
      <Solutions />
      <Insights />
      <Cta />
    </>
  );
};

export default Adams;

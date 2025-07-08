"use client";

import Hero from "@/components/hero";
import VideioViewer from "@/components/video-viewer";
import React from "react";

const Adams = () => {
  return (
    <>
      <Hero
        items={[
          {
            badge: "Advanced Asset Infrastructure Management System",
            title: "One tool to manage infrastructure assets and your team.",
            description:
              "AdAMS helps asset managers work faster, smarter and more efficiently, delivering the visibility and data-driven insights to mitigate risk and ensure compliance.",
            buttonText: "SIGN UP TO AdAMS",
            buttonHref: "#",
            backgroundImage: "/adams.png",
            highlightWords: ["asset", "team"],
          },
        ]}
      />
      <VideioViewer
        title="How AdAMS Works"
        highlightedWords={["AdAMS"]}
        description="Watch a comprehensive demonstration of our Advanced Infrastructure Asset Management System in action. See how our platform monitors, analyzes, and optimizes transportation infrastructure using big data analytics and predictive maintenance algorithms."
        videoUrl="/videos/adams-demo.mp4"
        posterUrl="/adams.png"
        subtitles="/subtitles/adams.vtt"
        badgeText="FEATURED DEMO"
      />
    </>
  );
};

export default Adams;

"use client";

import Hero from "@/components/hero";
import VideioViewer from "@/components/video-viewer";
import React from "react";
import Solutions from "./components/solutions";
import Insights from "./components/insights";
import Cta from "@/components/cta";

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
            buttonHref: "https://appinfinicitylabs.vercel.app/auth/signup",
            target: "_blank",
            backgroundImage: "/tmc.png",
            highlightWords: ["asset", "team"],
          },
        ]}
      />
      <VideioViewer
        title="How AdAMS Works"
        highlightedWords={["AdAMS"]}
        description="Watch a comprehensive demonstration of our traffic counts at intersections. Traffic counts are crucial for analyzing and improving traffic flow at intersections."
        videoUrl="https://drive.google.com/file/d/1H_qqZTL5h9gW3YsbA2D_MKo1K8qng3Ra/preview"
        posterUrl="/adams.png"
        subtitles="/subtitles/adams.vtt"
        badgeText="INTERSECTION TRAFFIC TRACKING AND COUNTING"
        useIFrame
      />
      <Solutions />
      <Insights />
      <Cta />
    </>
  );
};

export default Adams;

"use client";
import Hero from "@/components/hero";
import VideioViewer from "@/components/video-viewer";
import React from "react";

const TrafficManagementControl = () => {
  return (
    <>
      <Hero
        items={[
          {
            badge: "Traffic Management Control System",
            title: "AI-Powered Traffic Management Control System",
            description:
              "Our intelligent traffic control solution utilizes real-time data analysis and machine learning to optimize traffic flow, reduce congestion, and enhance road safety across urban networks.",
            buttonText: "SIGN UP TO TMC",
            buttonHref: "/contact",
            onButtonClick: () => null,
            backgroundImage: "/adams.png",
            highlightWords: ["AI-powered", "control"],
          },
        ]}
      />
      <VideioViewer
        title="How Our TMC System Works"
        highlightedWords={["TMC System"]}
        description="Watch a comprehensive demonstration of our Advanced Infrastructure Asset Management System in action. See how our platform monitors, analyzes, and optimizes transportation infrastructure using big data analytics and predictive maintenance algorithms."
        videoUrl="https://ik.imagekit.io/5kwcgtj3iv/background.mp4?updatedAt=1751943423718"
        posterUrl="/tmc.png"
        subtitles="/subtitles/adams.vtt"
        badgeText="FEATURED DEMO"
      />
    </>
  );
};

export default TrafficManagementControl;

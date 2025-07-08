"use client";
import Hero from "@/components/hero";
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
            backgroundImage: "/tmc.png",
            highlightWords: ["AI-powered", "control"],
          },
        ]}
      />
    </>
  );
};

export default TrafficManagementControl;

"use client";

import Hero from "@/components/hero";
import React from "react";

const BisonGuardSystem = () => {
  return (
    <>
      <Hero
        items={[
          {
            badge: "Farm Management System",
            title: "Intelligent Herd Monitoring and Management System",
            description:
              "Our advanced farm management system uses IoT sensors, drones, GPS tracking, and predictive analytics to protect herds and prevent vehicle-wildlife collisions on transportation corridors.",
            buttonText: "SIGN UP TO FMS",
            buttonHref: "https://appinfinicitylabs.vercel.app/auth/signup",
            target: "_blank",
            backgroundImage: "/herd2.JPEG",
            highlightWords: ["monitoring", "management"],
          },
        ]}
      />
    </>
  );
};

export default BisonGuardSystem;

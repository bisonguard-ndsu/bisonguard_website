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
            title: "Intelligent Bison Monitoring and Management System",
            description:
              "Our advanced farm system utilizes IoT sensors, drones, GPS tracking, and predictive analytics to protect bison herds and prevent vehicle-wildlife collisions on transportation corridors.",
            buttonText: "SIGN UP TO FMS",
            buttonHref: "/contact",
            onButtonClick: () => null,
            backgroundImage: "/bison-sherperding.png",
            highlightWords: ["monitoring", "management"],
          },
        ]}
      />
    </>
  );
};

export default BisonGuardSystem;

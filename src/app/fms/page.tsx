"use client";

import Hero from "@/components/hero";
import HerdSlideshow from "./components/slideshow";

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
            buttonHref: "/#contact",
            target: "_blank",
            backgroundImage: "/herd2.JPEG",
            highlightWords: ["monitoring", "management"],
          },
        ]}
      />
      <HerdSlideshow />
    </>
  );
};

export default BisonGuardSystem;

"use client";

import Hero from "@/components/hero";
import Cta from "@/components/cta";
import Solutions from "./components/solutions";
import Impact from "./components/impact";
import HerdSlideshow from "./components/slideshow";

const FarmManagementSystem = () => {
  return (
    <>
      <Hero
        items={[
          {
            badge: "Smart Farming",
            title: "Precision Agriculture Powered by Intelligent Machines",
            description:
              "InfiniCity Labs is developing next-generation agricultural and field robotics that bring intelligent automation to farms, ranches, and conservation lands of every size. From autonomous weeding to aerial crop monitoring to 24/7 herd protection, our systems work tirelessly, sustainably, and without chemicals — giving farmers and ranchers the intelligence they need to grow more with less.",
            buttonText: "PARTNER WITH US",
            buttonHref: "/#contact",
            target: "_self",
            backgroundImage: "/fms.webp",
            highlightWords: ["precision", "intelligent", "agriculture"],
          },
        ]}
      />
      <Solutions />
      <Impact />
      <HerdSlideshow />
      <Cta
        title="Ready to bring intelligent automation to your fields?"
        description="From autonomous weeding to aerial crop monitoring to 24/7 herd protection, our systems work tirelessly, sustainably, and without chemicals — giving farmers and ranchers the intelligence they need to grow more with less."
        highlightWords={["intelligent", "automation"]}
      />
    </>
  );
};

export default FarmManagementSystem;

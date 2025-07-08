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
            title: "Delivering Smart Solutions & Services",
            description:
              "At InfiniCity Labs, we are redefining the future of urban and rural ecosystems. We’ve combined engineering expertise with smart technologies to solve complex challenges across infrastructure, transportation, and agriculture. Our mission is to develop sustainable and data-driven systems that make cities more livable and farming more productive. From intelligent traffic flow to efficient asset management and smart herd monitoring, we bring precision, innovation, and performance to every project.",
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

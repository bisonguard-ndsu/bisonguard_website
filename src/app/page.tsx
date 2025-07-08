"use client";
import Hero from "@/components/hero";
import ResearchFocus from "./home/components/research-focus";
import About from "./home/components/about";
import Projects from "./home/components/projects";
import WhyChooseUs from "./home/components/why-choose-us";
import Team from "./home/components/team";
import Testimonials from "./home/components/testimonials";
import Contact from "./home/components/contact";
import Acreditations from "./home/components/acreditations";
import Cta from "@/components/cta";

export default function Home() {
  return (
    <>
      <Hero
        items={[
          {
            badge:
              "Leading Innovation in Infrastructure, Mobility & Smart Systems",
            title: "Transforming Cities, Empowering Progress",
            description:
              "InfiniCity Labs pioneers the future of infrastructure, mobility, and smart systems with cutting-edge big data analytics, digital twins, and intelligent systems that transform how cities, communities, and industries move and operate.",
            buttonText: "GET STARTED",
            buttonHref: "/#contact",
            backgroundImage: "/road.jpg",
            highlightWords: [
              "transforming",
              "technology",
              "infrastructure",
              "mobility",
              "smart systems",
            ],
          },
          {
            badge: "Smart Cities, Digital Twins & Asset Management",
            title: "Building Tomorrow's Intelligent Infrastructure",
            description:
              "From pavement management to safety, mobility, and digital twins, we develop innovative solutions that optimize asset lifecycle, improve system performance, and create sustainable, intelligent environments.",
            buttonText: "GET STARTED",
            buttonHref: "/#contact",
            highlightWords: [
              "tomorrow's",
              "infrastructure",
              "mobility",
              "digital twins",
              "asset management",
            ],
            backgroundImage: "/smartcity.jpg",
          },
        ]}
      />
      <ResearchFocus />
      <About />
      <Projects />
      <Cta />
      <Team />
      <WhyChooseUs />
      <Testimonials />
      <Contact />
      <Acreditations />
    </>
  );
}

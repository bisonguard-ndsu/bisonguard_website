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

export default function Home() {
  return (
    <>
      <Hero
        items={[
          {
            badge: "Leading Transportation Innovation",
            title: "Transforming Cities, Empowering Progress",
            description:
              "InfiniCity Labs pioneers the future of smart transportation with cutting-edge big data analytics, digital twins, and intelligent systems that transform how cities move and operate.",
            buttonText: "GET STARTED",
            buttonHref: "/research",
            onButtonClick: () => null,
            backgroundImage:
              "https://static.vecteezy.com/system/resources/thumbnails/038/972/123/small_2x/ai-generated-construction-site-is-laying-new-asphalt-pavement-road-construction-workers-and-road-construction-machinery-scene-highway-construction-site-scene-photo.jpg",
            highlightWords: ["transforming", "technology"],
          },
          {
            badge: "Smart Cities & Digital Twins",
            title: "Building Tomorrow's Intelligent Infrastructure",
            description:
              "From pavement management to transportation safety, we develop innovative solutions that optimize asset lifecycle, reduce accidents, and create sustainable urban environments.",
            buttonText: "GET STARTED",
            buttonHref: "/about",
            onButtonClick: () => null,
            highlightWords: ["tomorrow's", "infrastructure"],
            backgroundImage:
              "https://t3.ftcdn.net/jpg/11/46/94/78/360_F_1146947825_j3XI3vLcoiD123wv8ysBCbp1FNCEJG40.jpg",
          },
        ]}
      />
      <ResearchFocus />
      <About />
      <Projects />
      <Team />
      <WhyChooseUs />
      <Testimonials />
      <Contact />
      <Acreditations />
    </>
  );
}

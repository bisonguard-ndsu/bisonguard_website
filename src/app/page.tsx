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
            badge: "Company Since 1996",
            title: "Work with the best shape makers for your home.",
            description:
              "Compliment favourable connection and dispatched terminated esteem powerful excuse remove.",
            buttonText: "OUR SERVICES",
            buttonHref: "/services",
            onButtonClick: () => null,
            backgroundImage:
              "https://static.vecteezy.com/system/resources/thumbnails/038/972/123/small_2x/ai-generated-construction-site-is-laying-new-asphalt-pavement-road-construction-workers-and-road-construction-machinery-scene-highway-construction-site-scene-photo.jpg",
          },
          {
            badge: "Company Since 1996",
            title: "Work with the best shape makers for your home.",
            description:
              "Compliment favourable connection and dispatched terminated esteem powerful excuse remove.",
            buttonText: "OUR SERVICES",
            buttonHref: "/services",
            onButtonClick: () => null,
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
      <Acreditations />
      <Contact />
    </>
  );
}

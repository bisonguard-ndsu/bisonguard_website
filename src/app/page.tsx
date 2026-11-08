import Hero from "@/components/home/hero";
import HomeWorkflow from "@/components/home/workflow";
import { HomeIntro, HomePartners, HomeProducts, HomeProject, HomeSolutions } from "@/components/home/sections";
import { CtaBand } from "@/components/sections";

export default function HomePage() {
  return (
    <>
      <Hero />
      <HomeIntro />
      <HomeProducts />
      <HomeWorkflow />
      <HomeSolutions />
      <HomeProject />
      <HomePartners />
      <CtaBand />
    </>
  );
}

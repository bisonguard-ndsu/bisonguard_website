import Hero from "@/components/home/hero";
import HomeWorkflow from "@/components/home/workflow";
import { HomeAreas, HomeCollaborate, HomeIntro, HomePartners, HomeProducts, HomeProject } from "@/components/home/sections";

export default function HomePage() {
  return (
    <>
      <Hero />
      <HomeIntro />
      <HomeAreas />
      <HomeProducts />
      <HomeWorkflow />
      <HomeProject />
      <HomePartners />
      <HomeCollaborate />
    </>
  );
}

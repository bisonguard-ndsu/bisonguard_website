import Hero from "@/components/home/hero";
import HomeWorkflow from "@/components/home/workflow";
import { HomeAreas, HomeCollaborate, HomeFaq, HomeIntro, HomePartners, HomeProducts, HomeProject, HomeWhy } from "@/components/home/sections";

export default function HomePage() {
  return (
    <>
      <Hero />
      <HomeIntro />
      <HomeAreas />
      <HomeProducts />
      <HomeWorkflow />
      <HomeWhy />
      <HomeProject />
      <HomePartners />
      <HomeFaq />
      <HomeCollaborate />
    </>
  );
}

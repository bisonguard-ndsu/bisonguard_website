import { SectionHeading } from "@/components/sections";
import { HowItWorks, type Step } from "@/components/home/scroll";

const steps: Step[] = [
  {
    key: "capture",
    title: "Capture",
    text: "A phone on the dashboard, a camera on a pole, or footage you already have. No special vehicles or sensors.",
    detail: ["AdAMS and RoadLogger phone apps", "Live and recorded traffic cameras", "Uploads that resume when the signal drops"],
    image: { src: "/media/site/phone-dashboard.webp", alt: "A phone mounted on a car dashboard recording the road ahead", width: 643, height: 360 },
    label: "AdAMS app · Recording",
  },
  {
    key: "detect",
    title: "Detect",
    text: "Our models find signs, markings, defects and vehicles, follow each one across frames and fix where it is.",
    detail: ["Signs classified to MUTCD codes", "Distress graded on five levels", "Vehicles tracked through every movement"],
    image: { src: "/media/site/adams-recording.webp", alt: "An AdAMS recording with its sign detection summary", width: 1918, height: 1021 },
    label: "AdAMS · Recording 74",
  },
  {
    key: "act",
    title: "Act",
    text: "Results land on one map and in reports your engineers trust, with the evidence frame behind every number.",
    detail: ["Asset maps with condition layers", "Work orders and case tracking", "PDF and Word engineering reports"],
    image: { src: "/media/site/adams-map.webp", alt: "The AdAMS asset map of Fargo and West Fargo", width: 1651, height: 871 },
    label: "AdAMS · Asset map",
  },
];

export default function HomeWorkflow() {
  return (
    <section className="section bg-deep">
      <div className="wrap">
        <SectionHeading
          eyebrow="How it works"
          title="From video to a decision in three steps"
          lead="Every product follows the same path: capture what is on the road, let the models read it, and put the result where your team works."
        />
        <HowItWorks steps={steps} />
      </div>
    </section>
  );
}

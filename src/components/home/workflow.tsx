import Image from "next/image";
import { Reveal } from "@/components/motion";
import { SectionHeading } from "@/components/sections";

const steps = [
  {
    title: "Capture",
    text: "A phone on the dashboard, a camera on a pole, or footage you already have. No special vehicles or sensors.",
    detail: ["AdAMS and RoadLogger phone apps", "Live and recorded traffic cameras", "Uploads that resume when the signal drops"],
    image: { src: "/media/site/phone-dashboard.webp", alt: "A phone mounted on a car dashboard recording the road ahead", position: "50% 50%" },
  },
  {
    title: "Detect",
    text: "Our models find signs, markings, defects and vehicles, follow each one across frames and fix where it is.",
    detail: ["Signs classified to MUTCD codes", "Distress graded on five levels", "Vehicles tracked through every movement"],
    image: { src: "/media/site/adams-recording.webp", alt: "An AdAMS recording with its sign detection summary", position: "0% 30%" },
  },
  {
    title: "Act",
    text: "Results land on one map and in reports your engineers trust, with the evidence frame behind every number.",
    detail: ["Asset maps with condition layers", "Work orders and case tracking", "PDF and Word engineering reports"],
    image: { src: "/media/site/adams-map.webp", alt: "The AdAMS asset map of Fargo and West Fargo", position: "60% 50%" },
  },
];

export default function HomeWorkflow() {
  return (
    <section className="section bg-deep">
      <div className="wrap">
        <SectionHeading
          eyebrow="How it works"
          title="From road video to a record you can act on"
          lead="The same three steps sit behind every product, whether the footage comes from a crew's phone or an intersection camera."
        />
        <ol className="mt-14 grid gap-10 md:grid-cols-3 md:gap-6 lg:mt-20 lg:gap-8">
          {steps.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 0.08}>
              <div className="relative aspect-[4/3] overflow-clip rounded-xl border border-white/10 bg-surface">
                <Image src={s.image.src} alt={s.image.alt} fill sizes="(min-width: 768px) 30vw, 100vw" className="object-cover" style={{ objectPosition: s.image.position }} />
              </div>
              <div className="mt-7 flex items-baseline gap-3">
                <span className="font-mono text-sm text-primary">0{i + 1}</span>
                <h3 className="font-display text-2xl font-semibold text-white">{s.title}</h3>
              </div>
              <p className="mt-3 text-[1.0625rem] leading-relaxed text-white/70">{s.text}</p>
              <ul className="mt-5 space-y-2 border-t border-white/10 pt-5 text-[0.9375rem] text-white/80">
                {s.detail.map((d) => (
                  <li key={d} className="flex gap-3">
                    <span aria-hidden className="mt-[0.6em] h-px w-3 shrink-0 bg-primary" />
                    {d}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

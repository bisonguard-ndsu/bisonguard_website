"use client";

import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  Building2,
  Compass,
  Cpu,
  Sprout,
  Target,
  type LucideIcon,
} from "lucide-react";

import Hero from "@/components/hero";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/ui/reveal";
import SectionHeading from "@/components/ui/section-heading";
import { projects, team } from "@/lib/constants";

type Discipline = {
  icon: LucideIcon;
  title: string;
  description: string;
};

/** The four practices the company is organised around. */
const disciplines: Discipline[] = [
  {
    icon: Cpu,
    title: "Artificial Intelligence",
    description:
      "Computer vision, multi-modal models, and machine reasoning trained on real operational data.",
  },
  {
    icon: Bot,
    title: "Robotics",
    description:
      "Autonomous field systems and aerial platforms that collect data where crews cannot easily reach.",
  },
  {
    icon: Building2,
    title: "Smart Infrastructure",
    description:
      "Asset, pavement, and traffic platforms that turn raw sensor feeds into maintenance decisions.",
  },
  {
    icon: Sprout,
    title: "Smart Farming",
    description:
      "Herd monitoring, field intelligence, and predictive analytics for more productive, resilient farms.",
  },
];

const principles = [
  {
    title: "Evidence over assumption",
    body: "Every recommendation we make traces back to something measured — sensor readings, imagery, validated models — rather than a rule of thumb.",
  },
  {
    title: "Engineered to deploy",
    body: "A model that only performs in the lab is not a product. We design for the constraints of live networks: bandwidth, weather, legacy hardware, and the people operating it.",
  },
  {
    title: "Precision at any scale",
    body: "The same rigour applies to a single intersection and to a statewide network. Our systems are built to hold their accuracy as coverage grows.",
  },
  {
    title: "Partnership, not handover",
    body: "We stay with a deployment past go-live — training operators, tuning models against local conditions, and reporting on what actually changed.",
  },
];

/** Two-letter monogram used when a portrait is unavailable. */
function initials(name: string) {
  return name
    .replace(/,.*$/, "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

const About = () => {
  return (
    <main>
      <Hero
        items={[
          {
            badge: "About InfiniCity Labs",
            title: "Delivering Smart Solutions & Services",
            description:
              "At InfiniCity Labs, we are redefining the future of urban and rural ecosystems. We’ve combined engineering expertise with smart technologies to solve complex challenges across infrastructure, transportation, and agriculture. Our mission is to develop sustainable and data-driven systems that make cities more livable and farming more productive. From intelligent traffic flow to efficient asset management and smart herd monitoring, we bring precision, innovation, and performance to every project.",
            buttonText: "LEARN MORE",
            buttonHref: "/#projects",
            backgroundImage:
              "https://t3.ftcdn.net/jpg/11/46/94/78/360_F_1146947825_j3XI3vLcoiD123wv8ysBCbp1FNCEJG40.jpg",
            highlightWords: ["smart"],
          },
        ]}
      />

      {/* Who we are — editorial column plus a single framed image, then the
          four practices on a hairline rail. */}
      <section className="section-y section-x bg-white">
        <div className="mx-auto w-full max-w-6xl">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-6">
              <SectionHeading
                eyebrow="Who We Are"
                title="Research-grade engineering, built for the field"
                lede="InfiniCity Labs was founded by engineers and researchers who spent years building intelligent transportation systems inside universities, agencies, and industry — and wanted that work to reach the ground."
                tone="light"
              />

              <Reveal delay={0.24}>
                <div className="mt-8 max-w-[54ch] space-y-5 border-l border-ink-100 pl-5 text-base leading-relaxed text-ink-500 sm:pl-6 md:text-lg">
                  <p>
                    We work across four disciplines that increasingly depend on
                    one another. The same computer vision that reads pavement
                    distress from a moving vehicle can track a herd across open
                    range; the analytics that anticipate a bridge’s next
                    intervention inform when a field should be irrigated.
                  </p>
                  <p>
                    That overlap is deliberate. It lets us carry a method from
                    one domain into another, and it gives our clients systems
                    that have been tested against more than one kind of hard
                    problem.
                  </p>
                </div>
              </Reveal>
            </div>

            {/* Framed image with corner brackets — sharp, engineered, no soft
                shadows on the light background. */}
            <Reveal delay={0.12} y={32} className="lg:col-span-5 lg:col-start-8">
              <figure className="relative mx-auto w-full max-w-[28rem] lg:max-w-none">
                <span
                  aria-hidden="true"
                  className="absolute -left-2 -top-2 h-16 w-px bg-neon"
                />
                <span
                  aria-hidden="true"
                  className="absolute -left-2 -top-2 h-px w-16 bg-neon"
                />
                <div className="group relative aspect-[4/5] overflow-hidden border border-ink-100 bg-ink-50">
                  <img
                    src="/smartcity.jpg"
                    alt="Aerial view of a connected city at dusk, the kind of environment InfiniCity Labs instruments"
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-navy-950/10 to-transparent"
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                    <span className="eyebrow text-neon">Infrastructure</span>
                    <p className="mt-2 max-w-[28ch] text-sm leading-relaxed text-white/90">
                      Instrumented networks, monitored continuously rather than
                      inspected occasionally.
                    </p>
                  </figcaption>
                </div>
                <span
                  aria-hidden="true"
                  className="absolute -bottom-2 -right-2 h-16 w-px bg-neon"
                />
                <span
                  aria-hidden="true"
                  className="absolute -bottom-2 -right-2 h-px w-16 bg-neon"
                />
              </figure>
            </Reveal>
          </div>

          {/* Practice rail */}
          <ul className="mt-16 grid grid-cols-1 border-l border-t border-ink-100 sm:grid-cols-2 lg:mt-24 lg:grid-cols-4">
            {disciplines.map((discipline, index) => {
              const Icon = discipline.icon;
              return (
                <Reveal
                  key={discipline.title}
                  as="li"
                  delay={0.06 * index}
                  y={20}
                  className="group border-b border-r border-ink-100 p-7 transition-colors duration-300 hover:bg-ink-50 lg:p-8"
                >
                  <span className="flex size-11 items-center justify-center border border-ink-100 text-neon-deep transition-colors duration-300 group-hover:border-neon group-hover:bg-neon/10">
                    <Icon
                      className="size-5"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                  </span>
                  <h3 className="mt-6 text-lg font-semibold text-ink-900">
                    {discipline.title}
                  </h3>
                  <p className="mt-3 max-w-[36ch] text-sm leading-relaxed text-ink-500 lg:max-w-none">
                    {discipline.description}
                  </p>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Mission & vision — two hairline panels on deep navy */}
      <section className="grain section-y section-x relative overflow-hidden bg-navy-950">
        <div
          aria-hidden="true"
          className="grid-lines pointer-events-none absolute inset-0 opacity-70 [mask-image:linear-gradient(to_bottom,transparent,black_30%,black_70%,transparent)]"
        />
        <div
          aria-hidden="true"
          className="bloom pointer-events-none absolute -top-48 left-1/2 h-[34rem] w-[34rem] -translate-x-1/2 opacity-25"
        />

        <div className="relative z-10 mx-auto w-full max-w-6xl">
          <SectionHeading
            eyebrow="Purpose"
            title="What we are here to do"
            tone="dark"
          />

          <div className="mt-14 grid grid-cols-1 border-t border-navy-600 lg:mt-20 lg:grid-cols-2">
            <Reveal className="group border-b border-navy-600 py-10 lg:pr-14">
              <div className="flex items-center gap-4">
                <span className="flex size-11 items-center justify-center border border-navy-600 text-neon transition-colors duration-300 group-hover:border-neon/60 group-hover:bg-neon/10">
                  <Target
                    className="size-5"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                </span>
                <span className="eyebrow text-neon">Mission</span>
              </div>
              <p className="mt-7 max-w-[42ch] text-xl leading-[1.45] font-medium text-white md:text-2xl">
                Our mission is to develop sustainable and data-driven systems
                that make cities more livable and farming more productive.
              </p>
            </Reveal>

            <Reveal
              delay={0.12}
              className="group border-b border-navy-600 py-10 lg:border-l lg:pl-14"
            >
              <div className="flex items-center gap-4">
                <span className="flex size-11 items-center justify-center border border-navy-600 text-neon transition-colors duration-300 group-hover:border-neon/60 group-hover:bg-neon/10">
                  <Compass
                    className="size-5"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                </span>
                <span className="eyebrow text-neon">Vision</span>
              </div>
              <p className="mt-7 max-w-[42ch] text-xl leading-[1.45] font-medium text-white md:text-2xl">
                A world where every road, asset, and field is continuously
                understood — and the people responsible for them can act ahead
                of failure rather than after it.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* What we do — the three platforms, as an editorial index */}
      <section className="section-y section-x bg-ink-50">
        <div className="mx-auto w-full max-w-6xl">
          <SectionHeading
            eyebrow="What We Do"
            title="Three platforms, one engineering practice"
            lede="Each product starts as applied research and ends as software an agency or a farm can run every day."
            tone="light"
          />

          <ul className="mt-14 border-t border-ink-100 lg:mt-20">
            {projects.map((project, index) => (
              <Reveal
                key={project.title}
                as="li"
                delay={0.08 * index}
                y={20}
                className="border-b border-ink-100"
              >
                <Link
                  href={project.href}
                  className="group grid grid-cols-1 gap-4 bg-transparent py-8 transition-colors duration-300 hover:bg-white md:grid-cols-12 md:items-baseline md:gap-8 md:py-10 lg:px-8"
                >
                  <span
                    aria-hidden="true"
                    className="eyebrow tabular-nums text-ink-300 transition-colors duration-300 group-hover:text-neon-deep md:col-span-1"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3 className="text-xl font-bold leading-snug text-ink-900 transition-colors duration-300 group-hover:text-neon-deep md:col-span-5 md:text-2xl">
                    {project.title}
                  </h3>

                  <p className="max-w-[60ch] text-sm leading-relaxed text-ink-500 md:col-span-5 md:text-base">
                    {project.description}
                  </p>

                  <span className="flex items-center gap-2 text-sm font-semibold text-ink-900 transition-colors duration-300 group-hover:text-neon-deep md:col-span-1 md:justify-end">
                    <span className="md:sr-only">View platform</span>
                    <ArrowUpRight
                      className="size-4 shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </span>
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* How we work — numbered principles on navy */}
      <section className="grain section-y section-x relative overflow-hidden bg-gradient-to-b from-navy-900 via-navy-950 to-navy-950">
        <div
          aria-hidden="true"
          className="grid-lines pointer-events-none absolute inset-0 opacity-60 [mask-image:linear-gradient(to_bottom,black,transparent_80%)]"
        />

        <div className="relative z-10 mx-auto w-full max-w-6xl">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end lg:gap-12">
            <div className="lg:col-span-7">
              <SectionHeading
                eyebrow="How We Work"
                title="The standards we hold every project to"
                tone="dark"
              />
            </div>
            <Reveal delay={0.16} className="lg:col-span-4 lg:col-start-9">
              <p className="text-base leading-relaxed text-bluish-white/75 md:text-lg">
                Four commitments that decide what we build, how we test it, and
                when we consider it finished.
              </p>
            </Reveal>
          </div>

          <ol className="mt-14 grid grid-cols-1 border-t border-navy-600 md:grid-cols-2 lg:mt-20">
            {principles.map((principle, index) => (
              <Reveal
                key={principle.title}
                as="li"
                delay={0.06 * index}
                y={24}
                className="group relative border-b border-navy-600 p-8 transition-colors duration-300 hover:bg-navy-800/40 md:p-10 md:even:border-l"
              >
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-0 h-px w-0 bg-neon transition-[width] duration-500 ease-out group-hover:w-full"
                />
                <span
                  aria-hidden="true"
                  className="font-display text-sm font-semibold tabular-nums tracking-[0.18em] text-navy-600 transition-colors duration-300 group-hover:text-neon/70"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-6 text-lg font-semibold text-white md:text-xl">
                  {principle.title}
                </h3>
                <p className="mt-3 max-w-[46ch] text-sm leading-relaxed text-bluish-white/70 md:text-base">
                  {principle.body}
                </p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* The people — teaser through to the team page */}
      <section className="section-y section-x bg-white">
        <div className="mx-auto w-full max-w-6xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
            <div className="lg:col-span-7">
              <SectionHeading
                eyebrow="Our People"
                title="The team behind the systems"
                lede="At InfiniCity Labs, our strength lies in our people. Our team of engineers, analysts, and innovators brings decades of experience and a shared passion for building smarter, more efficient systems. Together, we turn complex challenges into sustainable solutions for cities and communities around the world."
                tone="light"
              />

              <Reveal delay={0.24}>
                <Button
                  asChild
                  className="group mt-10 h-auto rounded-none bg-navy-900 px-9 py-5 text-sm font-semibold tracking-[0.08em] text-white transition-colors duration-300 hover:bg-navy-800 hover:text-neon"
                >
                  <Link href="/team">
                    Meet the team
                    <ArrowRight
                      className="ml-1 size-4 transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </Link>
                </Button>
              </Reveal>
            </div>

            <Reveal delay={0.16} y={24} className="lg:col-span-4 lg:col-start-9">
              <div className="border border-ink-100 p-7 sm:p-8">
                <span className="eyebrow text-ink-500">Leadership</span>
                <ul className="mt-6 flex flex-wrap items-center">
                  {team.map((member) => (
                    <li key={member.name} className="-mr-3 last:mr-0">
                      <Link
                        href={member.href}
                        aria-label={`${member.name}, ${member.position}`}
                        className="relative block size-14 overflow-hidden border-2 border-white bg-navy-900 ring-1 ring-ink-100 transition-transform duration-300 hover:z-10 hover:-translate-y-1"
                      >
                        {member.image ? (
                          <img
                            src={member.image}
                            alt={member.name}
                            loading="lazy"
                            className="h-full w-full object-cover object-top"
                          />
                        ) : (
                          <span className="flex h-full w-full items-center justify-center text-xs font-semibold tracking-[0.08em] text-neon">
                            {initials(member.name)}
                          </span>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-sm leading-relaxed text-ink-500">
                  Engineers, data scientists, and transportation researchers
                  working across North America and West Africa.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;

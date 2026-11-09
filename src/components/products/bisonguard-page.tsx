import Image from "next/image";
import Link from "next/link";
import { CountUp, Reveal } from "@/components/motion";
import { AlertDesk, EvidenceVault, ZoneView } from "@/components/products/bisonguard-ui";
import { ButtonLink, Crumbs } from "@/components/sections";

const M = "/media/products/bisonguard";

const facts = [
  { value: "192", label: "recordings in the vault" },
  { value: "18 GB", label: "of evidence video" },
  { value: "24/7", label: "detection on every camera" },
];

const audiences = [
  { who: "Conservation teams", text: "See what every camera saw today and which alerts still need someone, without driving out to check." },
  { who: "Rangers", text: "Get an alert with the species, priority and time, investigate it, and mark it resolved when it is handled." },
  { who: "Research institutions", text: "Keep every sighting as a clip, with zone counts on the video, to study how the herd uses the range." },
];
const modules = ["Dashboard", "Live feed", "Alerts", "Recordings", "Analytics", "Messages", "Users"];

function Heading({ eyebrow, title, id, lead }: { eyebrow: string; title: string; id: string; lead?: string }) {
  return (
    <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
      <div className="lg:col-span-7">
        <Reveal y={12}>
          <p className="eyebrow">{eyebrow}</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 id={id} className="t-h2 mt-5 max-w-[18ch] text-fg">
            {title}
          </h2>
        </Reveal>
      </div>
      {lead && (
        <Reveal delay={0.1} className="text-[1.0625rem] leading-relaxed text-fg-2 lg:col-span-4 lg:col-start-9">
          <p>{lead}</p>
        </Reveal>
      )}
    </div>
  );
}

export function BisonGuardPage() {
  return (
    <>
      {/* 1. Hero: a range camera, full bleed */}
      <section className="relative isolate overflow-clip bg-black" aria-labelledby="bg-title">
        <div aria-hidden className="absolute inset-0 -z-20 grid grid-cols-2 grid-rows-4 gap-1 bg-black sm:grid-cols-4 sm:grid-rows-2">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
            <div key={n} className="relative">
              <Image src={`${M}/clip-${n}.webp`} alt="" fill priority={n < 5} sizes="(min-width: 640px) 25vw, 50vw" className="object-cover" />
            </div>
          ))}
        </div>
        <div aria-hidden className="absolute inset-0 -z-10 bg-black/65" />
        <div className="wrap flex min-h-[calc(100svh-4.5rem)] flex-col pt-10 pb-12 lg:pt-14 lg:pb-16">
          <Crumbs items={[{ label: "Products", href: "/products" }]} current="BisonGuard" />
          <div className="mt-auto pt-24">
            <Reveal y={12}>
              <p className="eyebrow flex items-center gap-3">
                BisonGuard · Wildlife intelligence
                <span className="border border-white/40 px-2 py-0.5 text-[0.6875rem] tracking-[0.14em] text-white">Pilot</span>
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 id="bg-title" className="mt-5 max-w-[14ch] font-display text-[2.75rem] leading-[0.98] font-semibold tracking-[-0.04em] text-white sm:text-[4rem] lg:text-[5.5rem]">
                Protect the herd with real-time intelligence
              </h1>
            </Reveal>
            <Reveal delay={0.12} className="mt-6 max-w-[50ch] text-[1.125rem] leading-relaxed text-white/80">
              <p>A command centre for conservation teams, rangers and researchers: detection across every camera on the range, alerts the team can act on, and every sighting kept as evidence.</p>
            </Reveal>
            <Reveal delay={0.18} className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-3">
              <ButtonLink href="/contact" variant="light">
                Talk to us about a pilot
              </ButtonLink>
              <a href="#vault" className="text-link text-white">
                See the evidence vault
              </a>
            </Reveal>
            <dl className="mt-14 grid max-w-3xl grid-cols-3 border-t border-white/20 pt-6">
              {facts.map((f) => (
                <div key={f.label}>
                  <dt className="sr-only">{f.label}</dt>
                  <dd>
                    <CountUp value={f.value} className="block font-display text-[1.75rem] leading-none font-semibold text-white sm:text-[2.25rem]" />
                    <span className="mt-2 block text-[0.8125rem] text-white/60">{f.label}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* 2. Zones */}
      <section className="section bg-bg" aria-labelledby="zones-title">
        <div className="wrap">
          <Heading eyebrow="On every camera" id="zones-title" title="Know where on the range it happened" lead="Draw zones on each camera's view. Every animal detected is counted in its zone, live, and the count is written on the recording." />
          <Reveal delay={0.1} className="mt-12 lg:mt-16">
            <ZoneView />
          </Reveal>
        </div>
      </section>

      {/* 3. Alerts */}
      <section className="section bg-surface" aria-labelledby="alerts-title">
        <div className="wrap">
          <Heading
            eyebrow="Alerts"
            id="alerts-title"
            title="Every detection becomes an alert"
            lead="Each alert carries the species, the count, a priority and the time. Investigate it, resolve it, and the desk keeps the score. These are real alerts from one evening; try the workflow."
          />
          <Reveal delay={0.1} className="mt-12 lg:mt-16">
            <AlertDesk />
          </Reveal>
        </div>
      </section>

      {/* 4. Evidence vault */}
      <section id="vault" className="section scroll-mt-20 bg-deep" aria-labelledby="vault-title">
        <div className="wrap">
          <Heading eyebrow="Evidence vault" id="vault-title" title="Every sighting, kept as a clip" lead="Recordings are saved with their detections and zone counts, searchable by time and ready to download. Here are eight of the 192, from three days in June." />
          <Reveal delay={0.1} className="mt-12 lg:mt-16">
            <EvidenceVault />
          </Reveal>
        </div>
      </section>

      {/* 5. Who it is for (the light section) */}
      <section className="section theme-light" aria-labelledby="who-title">
        <div className="wrap">
          <Heading eyebrow="Built for the range" id="who-title" title="One command centre, three teams" />
          <div className="mt-12 grid gap-10 md:grid-cols-3 lg:mt-16 lg:gap-12">
            {audiences.map((a, n) => (
              <Reveal key={a.who} delay={n * 0.06} className="border-t border-line pt-6">
                <h3 className="font-display text-[1.5rem] font-semibold text-fg">{a.who}</h3>
                <p className="mt-3 text-[1rem] leading-relaxed text-fg-2">{a.text}</p>
              </Reveal>
            ))}
          </div>
          <div className="mt-16 flex flex-wrap items-center gap-2">
            <span className="mr-3 text-[0.875rem] text-fg-3">In the app</span>
            {modules.map((m) => (
              <span key={m} className="border border-line px-4 py-2 text-[0.9375rem] text-fg">
                {m}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Close */}
      <section className="relative isolate overflow-clip bg-black" aria-labelledby="bg-cta">
        <Image src="/media/herd-ridge.webp" alt="" fill sizes="100vw" className="-z-20 object-cover opacity-50" />
        <div aria-hidden className="absolute inset-0 -z-10 bg-black/50" />
        <div className="wrap py-24 lg:py-36">
          <p className="eyebrow">In pilot</p>
          <h2 id="bg-cta" className="t-h1 mt-5 max-w-[15ch] text-white">
            Put your range cameras to work
          </h2>
          <p className="mt-6 max-w-[46ch] text-[1.125rem] leading-relaxed text-white/75">BisonGuard is running as a pilot and is not yet open for sign-up. Tell us about your cameras and your herd, and we will talk about joining it.</p>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3">
            <ButtonLink href="/contact" variant="light">
              Talk to us about a pilot
            </ButtonLink>
            <Link href="/products" className="text-link text-white">
              All products
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

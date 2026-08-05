"use client";

import Link from "next/link";
import {
  ArrowRight,
  ArrowUp,
  ExternalLink,
  Linkedin,
  Mail,
  type LucideIcon,
} from "lucide-react";

import Reveal from "@/components/ui/reveal";
import SectionHeading from "@/components/ui/section-heading";
import { team } from "@/lib/constants";

type Member = (typeof team)[number];

/** Icon + accessible label per social handle name in `constants.ts`. */
const SOCIAL_META: Record<string, { icon: LucideIcon; label: string }> = {
  linkedin: { icon: Linkedin, label: "LinkedIn profile" },
  mail: { icon: Mail, label: "Email" },
  portfolio: { icon: ExternalLink, label: "Personal site" },
};

/**
 * Some entries are stored as `https://mailto:name@example.com`, which resolves
 * to a dead host. Normalise those back to a real `mailto:` URI without touching
 * links that are already well formed.
 */
function normaliseHref(href: string) {
  return href.replace(/^https?:\/\/(?=mailto:)/i, "");
}

/** Links with an empty href would navigate to the current page — drop them. */
function usableSocialLinks(member: Member) {
  return member.socialLinks
    .filter((link) => link.href.trim().length > 0 && SOCIAL_META[link.name])
    .map((link) => ({ ...link, href: normaliseHref(link.href) }));
}

/** Two-letter monogram, used when a member has no portrait on file. */
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

/**
 * Fixed 4:5 frame so the grid stays even regardless of the source aspect
 * ratio, with a monogram fallback for members without a photograph.
 */
function Portrait({
  member,
  className = "",
}: Readonly<{ member: Member; className?: string }>) {
  return (
    <div
      className={`relative aspect-[4/5] overflow-hidden bg-navy-900 ${className}`}
    >
      {member.image ? (
        <>
          <img
            src={member.image}
            alt={`Portrait of ${member.name}`}
            loading="lazy"
            className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-navy-950/55 via-transparent to-transparent"
          />
        </>
      ) : (
        <div
          aria-hidden="true"
          className="grid-lines flex h-full w-full items-center justify-center bg-navy-900"
        >
          <span className="font-display text-4xl font-bold tracking-[0.06em] text-neon/80">
            {initials(member.name)}
          </span>
        </div>
      )}
    </div>
  );
}

function SocialRow({ member }: Readonly<{ member: Member }>) {
  const links = usableSocialLinks(member);
  if (links.length === 0) return null;

  return (
    <ul className="flex flex-wrap items-center gap-3">
      {links.map((link) => {
        const meta = SOCIAL_META[link.name];
        const Icon = meta.icon;
        const isExternal = /^https?:/i.test(link.href);

        return (
          <li key={link.name}>
            <a
              href={link.href}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
              aria-label={`${member.name} — ${meta.label}`}
              className="flex size-11 items-center justify-center border border-ink-100 text-ink-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-navy-900 hover:bg-navy-900 hover:text-neon"
            >
              <Icon className="size-4" aria-hidden="true" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}

const Members = () => {
  return (
    <>
      {/* Roster — every member at a glance, each card linking to the full
          profile further down the page. */}
      <section id="members" className="section-y section-x bg-ink-50">
        <div className="mx-auto w-full max-w-6xl">
          <SectionHeading
            eyebrow="Our People"
            title="The people behind the systems"
            lede="Engineers, data scientists, and transportation researchers working across North America and West Africa."
            tone="light"
          />

          <ul className="mt-14 grid grid-cols-1 gap-px border border-ink-100 bg-ink-100 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
            {team.map((member, index) => (
              <Reveal
                key={member.name}
                as="li"
                delay={0.06 * index}
                y={24}
                className="bg-white"
              >
                <Link
                  href={member.href}
                  className="group flex h-full flex-col bg-white transition-colors duration-300 hover:bg-ink-50"
                >
                  <Portrait member={member} />

                  <div className="flex flex-1 flex-col p-6 md:p-7">
                    <span
                      aria-hidden="true"
                      className="eyebrow tabular-nums text-ink-300 transition-colors duration-300 group-hover:text-neon-deep"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <h3 className="mt-4 text-lg font-bold leading-snug text-ink-900 md:text-xl">
                      {member.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-500">
                      {member.position}
                    </p>

                    <span className="mt-auto flex items-center gap-2 pt-8 text-xs font-semibold tracking-[0.12em] text-ink-700 uppercase transition-colors duration-300 group-hover:text-neon-deep">
                      Read profile
                      <ArrowRight
                        className="size-3.5 transition-transform duration-300 group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Full profiles — sticky portrait, bio held to a readable measure. */}
      <div>
        {team.map((member, index) => {
          const flipped = index % 2 === 1;

          return (
            <section
              id={member.id.toLowerCase()}
              key={member.name}
              className={`section-y section-x scroll-mt-24 ${
                flipped ? "bg-ink-50" : "bg-white"
              }`}
            >
              <div className="mx-auto w-full max-w-6xl">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
                  {/* Portrait + contact rail */}
                  <Reveal
                    y={24}
                    className={`lg:col-span-4 ${flipped ? "lg:order-2 lg:col-start-9" : ""}`}
                  >
                    <div className="lg:sticky lg:top-24">
                      <div className="group relative">
                        <span
                          aria-hidden="true"
                          className="absolute -left-2 -top-2 h-14 w-px bg-neon"
                        />
                        <span
                          aria-hidden="true"
                          className="absolute -left-2 -top-2 h-px w-14 bg-neon"
                        />
                        <Portrait
                          member={member}
                          className="border border-ink-100"
                        />
                      </div>

                      <div className="mt-7">
                        <SocialRow member={member} />
                      </div>
                    </div>
                  </Reveal>

                  {/* Name, role, biography */}
                  <div
                    className={`lg:col-span-7 ${flipped ? "lg:order-1 lg:col-start-1" : "lg:col-start-6"}`}
                  >
                    <Reveal>
                      <div className="flex items-center gap-4">
                        <span
                          className="h-px w-10 bg-neon"
                          aria-hidden="true"
                        />
                        <span className="eyebrow tabular-nums text-ink-500">
                          {String(index + 1).padStart(2, "0")} /{" "}
                          {String(team.length).padStart(2, "0")}
                        </span>
                      </div>
                    </Reveal>

                    <Reveal delay={0.08}>
                      <h2 className="mt-6 text-3xl font-bold leading-[1.12] break-words text-ink-900 md:text-4xl">
                        {member.name}
                      </h2>
                      <p className="mt-3 text-base font-semibold text-ink-700 md:text-lg">
                        {member.position}
                      </p>
                    </Reveal>

                    <Reveal delay={0.16}>
                      <div className="mt-8 max-w-prose space-y-6 border-t border-ink-100 pt-8">
                        {member.bio.map((paragraph, idx) => (
                          <p
                            key={idx}
                            className={
                              idx === 0
                                ? "text-base leading-relaxed text-ink-700 md:text-lg"
                                : "text-base leading-relaxed text-ink-500"
                            }
                          >
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </Reveal>

                    <Reveal delay={0.24}>
                      <Link
                        href="#members"
                        className="group mt-10 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.12em] text-ink-500 uppercase transition-colors duration-300 hover:text-neon-deep"
                      >
                        <ArrowUp
                          className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5"
                          aria-hidden="true"
                        />
                        All profiles
                      </Link>
                    </Reveal>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </>
  );
};

export default Members;

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { teamMembers } from "@/content/products";
import { ContactBand } from "@/components/site/contact-band";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Our people",
  "Engineering, research, and collaboration at InfiniCity Labs.",
  "/team",
);

export default function TeamPage() {
  return (
    <>
      <section className="wrap page-intro">
        <p className="eyebrow">Our people</p>
        <h1>The people behind InfiniCity Labs.</h1>
        <p>
          Our work brings engineering, research, and software development into
          the same conversation.
        </p>
      </section>
      {teamMembers.length > 0 ? (
        <section className="wrap team-grid" aria-label="Team members">
          {teamMembers.map((member) => (
            <article key={member.name}>
              <div className="team-photo">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
              </div>
              <h2>{member.name}</h2>
              <p className="team-role">{member.role}</p>
              <p>{member.biography}</p>
            </article>
          ))}
        </section>
      ) : (
        <section className="wrap team-empty">
          <div>
            <h2>
              Meet the people
              <br />
              <em>behind the work.</em>
            </h2>
            <p>
              Our team profiles are coming soon. In the meantime, we’d be glad
              to connect you with the right person.
            </p>
          </div>
          <div className="team-empty-aside">
            <h3>Start a conversation.</h3>
            <p>For collaborations, opportunities, and introductions.</p>
            <a href="mailto:info@infinicitylabs.org" className="text-link">
              Email the team
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </div>
        </section>
      )}
      <ContactBand
        title="Bring your perspective."
        description="If our work connects with something you care about, we’d like to hear from you."
      />
    </>
  );
}

import type { Metadata } from "next";
import ContactForm from "@/components/contact-form";
import { PageIntro } from "@/components/page-intro";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Write to InfiniCity Labs about a survey, a traffic study, research or careers.",
  alternates: { canonical: "/contact" },
};

const topics = [
  { title: "Surveys and asset inventories", text: "A network to drive, signs to map or pavement to rate." },
  { title: "Traffic studies and cameras", text: "Turning-movement counts, corridor studies or a camera wall." },
  { title: "Research and partnerships", text: "Applied research with universities, agencies and funders." },
  { title: "Careers", text: "Engineering and research roles on models that run on real roads." },
];

export default function ContactPage() {
  return (
    <>
      <PageIntro
        label="Contact"
        title="Tell us about your network"
        lead="A survey you are planning, a corridor you need counted, a research question or a role. A person on our team reads every message."
      />
      <section aria-label="Contact form" className="section bg-bg">
        <div className="wrap grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
          <aside className="lg:col-span-4 lg:col-start-9">
            <p className="text-sm text-fg-3">Write to us directly</p>
            <a href={`mailto:${site.email}`} className="link mt-2 inline-block font-display text-xl font-semibold text-fg">
              {site.email}
            </a>
            <p className="mt-10 text-sm text-fg-3">What people write to us about</p>
            <ul className="mt-3 border-t border-edge">
              {topics.map((t) => (
                <li key={t.title} className="border-b border-edge py-4">
                  <p className="font-semibold text-fg">{t.title}</p>
                  <p className="mt-1 text-[0.9375rem] text-fg-2">{t.text}</p>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>
    </>
  );
}

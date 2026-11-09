import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/contact-form";
import { FaqList } from "@/components/faq";
import { Reveal } from "@/components/motion";
import { faqGroups } from "@/content/faqs";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Write to InfiniCity Labs about a survey, a traffic study, research or careers.",
  alternates: { canonical: "/contact" },
};

const next = [
  { title: "We read your message", text: "A person on the team reads it and replies, not an autoresponder." },
  { title: "We talk through your network", text: "A short call about your roads, cameras or study, and what you need to deliver." },
  { title: "We plan a pilot", text: "We agree a pilot on your own footage, so you judge the results on roads you know." },
];

export default function ContactPage() {
  return (
    <>
      <section aria-labelledby="contact-title" className="section">
        <div className="wrap grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="eyebrow">Contact</p>
            <h1 id="contact-title" className="t-h1 mt-5 max-w-[12ch]">
              Tell us about your network.
            </h1>
            <p className="t-lead mt-6 max-w-[38ch] text-fg-2">
              A survey you&apos;re planning, a corridor you need counted, a research question or a role. A person reads every message.
            </p>
            <div className="mt-10 border-t border-line pt-6">
              <p className="eyebrow text-fg-3">Or write directly</p>
              <a href={`mailto:${site.email}`} className="text-link mt-2 text-[1.25rem]">
                {site.email}
              </a>
            </div>
          </div>
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="section theme-light" aria-labelledby="next-title">
        <div className="wrap">
          <p className="eyebrow">What happens next</p>
          <h2 id="next-title" className="t-h2 mt-5 max-w-[18ch] text-fg">
            From first message to a pilot on your roads
          </h2>
          <ol className="mt-14 grid border-t border-line md:grid-cols-3">
            {next.map((s, i) => (
              <Reveal as="li" key={s.title} delay={i * 0.08} className="border-b border-line py-8 md:border-b-0 md:pr-8 md:[&:not(:first-child)]:border-l md:[&:not(:first-child)]:pl-8">
                <p className="eyebrow text-fg-3">Step {i + 1}</p>
                <h3 className="mt-4 font-display text-[1.375rem] font-semibold tracking-[-0.03em] text-fg">{s.title}</h3>
                <p className="mt-3 max-w-[36ch] text-[0.9375rem] leading-relaxed text-fg-2">{s.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="section bg-bg" aria-labelledby="contact-faq-title">
        <div className="wrap grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="eyebrow">Before you write</p>
            <h2 id="contact-faq-title" className="t-h2 mt-5 max-w-[12ch] text-fg">
              Common questions
            </h2>
            <Link href="/faq" className="text-link mt-6">
              All questions
            </Link>
          </div>
          <div className="lg:col-span-8">
            <FaqList items={faqGroups[0].items} defaultOpen={null} />
          </div>
        </div>
      </section>
    </>
  );
}

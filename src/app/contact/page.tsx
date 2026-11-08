import type { Metadata } from "next";
import ContactForm from "@/components/contact-form";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Write to InfiniCity Labs about a survey, a traffic study, research or careers.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <section aria-labelledby="contact-title" className="section">
      <div className="wrap grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="label text-primary">Contact</p>
          <h1 id="contact-title" className="t-h1 mt-5 max-w-[12ch]">
            Tell us about your network.
          </h1>
          <p className="t-lead mt-6 max-w-[38ch] text-fg-2">
            A survey you&apos;re planning, a corridor you need counted, a research question or a role. A person reads every
            message.
          </p>
          <div className="mt-10 border-t border-line pt-6">
            <p className="label text-fg-3">Or write directly</p>
            <a href={`mailto:${site.email}`} className="link mt-3 inline-block text-[1.25rem] font-bold">
              {site.email}
            </a>
          </div>
        </div>
        <div className="lg:col-span-7">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

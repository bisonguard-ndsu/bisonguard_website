import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./reveal";
export function ContactBand({
  title = "Talk through your project.",
  description = "Tell us about your network, data, or workflow. We’ll help you evaluate the relevant products and plan a demonstration.",
  demoHref = "/book-a-demo",
}: {
  title?: string;
  description?: string;
  demoHref?: string;
}) {
  return (
    <section className="contact-band v2-contact-band" id="contact">
      <div className="wrap">
        <Reveal className="v2-contact-inner">
          <div>
            <p className="eyebrow">Contact InfiniCity Labs</p>
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
          <div className="contact-action-stack">
            <Link href={demoHref} className="link-button link-button-solid">
              Book a demo
              <ArrowUpRight size={18} />
            </Link>
            <Link href="/contact" className="text-link">
              Talk to our team
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

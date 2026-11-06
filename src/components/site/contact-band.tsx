import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./reveal";
export function ContactBand({
  title = "Let’s look at what’s next.",
  description = "Bring the challenge, the question, or the project. We’ll bring a perspective worth exploring.",
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
            <p className="eyebrow">A conversation is a good place to start</p>
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
      <div className="contact-bars" aria-hidden="true">
        <i />
        <i />
        <i />
      </div>
    </section>
  );
}

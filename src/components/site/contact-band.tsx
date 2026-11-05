import { LinkButton } from "./link-button";

export function ContactBand({
  title = "What are you working on?",
  description = "A road network. A traffic study. A question worth exploring. Tell us where you want to go.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="contact-band" id="contact">
      <div className="wrap contact-band-inner">
        <div>
          <p className="eyebrow">Let’s build something useful</p>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <LinkButton href="/contact">Start a conversation</LinkButton>
      </div>
    </section>
  );
}

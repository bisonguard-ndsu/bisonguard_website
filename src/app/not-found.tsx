import { LinkButton } from "@/components/site/link-button";

export default function NotFound() {
  return (
    <section className="wrap not-found">
      <p className="eyebrow">Page not found</p>
      <h1>
        A different
        <br />
        <em>direction.</em>
      </h1>
      <p>
        This page may have moved. Explore our products or return to the homepage
        to find your way.
      </p>
      <div className="hero-actions">
        <LinkButton href="/">Back to InfiniCity</LinkButton>
        <LinkButton href="/products" variant="outline">
          Explore products
        </LinkButton>
      </div>
    </section>
  );
}

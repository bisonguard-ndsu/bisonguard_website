import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { ContactForm } from "@/components/site/contact-form";
import { getProduct } from "@/content/products";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Book a demo",
  "Request a product walkthrough with InfiniCity Labs. Explore AdAMS, PaveXpert, TMC, Turnflow, RoadLogger, AdAMS Annotate, or BisonGuard.",
  "/book-a-demo",
);
export default async function DemoPage({
  searchParams,
}: {
  searchParams: Promise<{ product?: string }>;
}) {
  const query = await searchParams;
  const product = query.product ? getProduct(query.product) : undefined;
  return (
    <section className="wrap demo-page">
      <div className="demo-intro">
        <p className="eyebrow">See the work in context</p>
        <h1>Book a product demo.</h1>
        <p>
          Tell us what you’re working on. We’ll arrange a product walkthrough
          around your team, your questions, and your workflow.
        </p>
        <div className="demo-expectations">
          <h2>What we’ll explore</h2>
          {[
            "The challenge and the context behind it",
            "The products that fit your workflow",
            "Your questions, data, and next steps",
          ].map((item) => (
            <p key={item}>
              <Check size={16} />
              {item}
            </p>
          ))}
        </div>
        <p className="demo-note">
          This form requests a demo. Our team will email you to arrange a time.
        </p>
        <Link href="/products" className="text-link">
          Explore the products first
          <ArrowUpRight size={17} />
        </Link>
      </div>
      <div className="demo-form-panel">
        <p className="eyebrow">Your demo request</p>
        <h2>A few details to get started.</h2>
        <ContactForm mode="demo" defaultProduct={product?.name} />
      </div>
    </section>
  );
}

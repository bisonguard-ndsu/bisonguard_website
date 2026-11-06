import { ProductDirectory } from "@/components/site/product-directory";
import { ContactBand } from "@/components/site/contact-band";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Our products",
  "Explore AdAMS, PaveXpert, TMC, Turnflow, RoadLogger, AdAMS Annotate, and BisonGuard.",
  "/products",
);
export default function ProductsPage() {
  return (
    <>
      <section className="wrap page-intro page-intro-split">
        <div>
          <p className="eyebrow">The InfiniCity portfolio</p>
          <h1>
            Built for the work.
            <br />
            <em>Ready for the question.</em>
          </h1>
        </div>
        <p>
          Seven products. Different perspectives on the physical world. Explore
          the tools that connect observations with a useful next step.
        </p>
      </section>
      <section className="wrap product-index" aria-label="Product portfolio">
        <ProductDirectory />
      </section>
      <ContactBand
        title="Find your starting point."
        description="Tell us about your workflow and we’ll help you explore the product or combination that fits."
      />
    </>
  );
}

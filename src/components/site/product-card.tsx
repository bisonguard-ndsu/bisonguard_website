import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Product } from "@/content/products";
export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="product-card">
      <Link
        href={"/products/" + product.slug}
        className="product-card-image"
        tabIndex={-1}
        aria-hidden="true"
      >
        <Image
          src={product.image}
          alt=""
          fill
          sizes="(max-width:700px) 100vw, 50vw"
        />
        <span className="catalog-image-arrow">
          <ArrowUpRight size={22} />
        </span>
      </Link>
      <div className="product-card-meta">
        <span className="eyebrow">{product.category}</span>
      </div>
      <h2>
        <Link href={"/products/" + product.slug}>
          {product.name}
          <ArrowUpRight size={22} />
        </Link>
      </h2>
      <p>{product.summary}</p>
      <div className="catalog-tags">
        {product.outputs.slice(0, 2).map((x) => (
          <span key={x}>{x}</span>
        ))}
      </div>
    </article>
  );
}

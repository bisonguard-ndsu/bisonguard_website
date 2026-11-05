import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Product } from "@/content/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="product-card">
      <Link
        href={`/products/${product.slug}`}
        className="product-card-image"
        tabIndex={-1}
        aria-hidden="true"
      >
        <Image
          src={product.image}
          alt=""
          fill
          sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
        />
      </Link>
      <div className="product-card-meta">
        <span>{product.category}</span>
        {product.inDevelopment && (
          <span className="status-label">In development</span>
        )}
      </div>
      <h2>
        <Link href={`/products/${product.slug}`}>
          {product.name}
          <ArrowUpRight size={23} aria-hidden="true" />
        </Link>
      </h2>
      <p>{product.summary}</p>
    </article>
  );
}

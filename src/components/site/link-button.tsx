import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function LinkButton({
  href,
  children,
  variant = "solid",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "outline" | "text";
}) {
  return (
    <Link href={href} className={`link-button link-button-${variant}`}>
      <span>{children}</span>
      <ArrowUpRight size={18} aria-hidden="true" />
    </Link>
  );
}

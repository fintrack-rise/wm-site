import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

const variants: Record<Variant, string> = {
  primary:
    "border border-zinc-200 bg-zinc-100 text-zinc-950 font-medium hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-200",
  secondary:
    "border border-zinc-700 bg-zinc-950 text-zinc-100 hover:border-zinc-500 hover:bg-zinc-900",
  ghost: "text-zinc-300 hover:text-white",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-sm transition-colors ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}

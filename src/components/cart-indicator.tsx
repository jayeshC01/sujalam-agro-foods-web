"use client";

import Link from "next/link";
import { useCart } from "@/lib/cart-context";

export function CartIndicator() {
  const { itemCount } = useCart();

  return (
    <Link
      href="/cart"
      aria-label="View cart"
      className="relative inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-mustard/20 text-ink/70 transition-colors hover:border-terracotta/40 hover:text-terracotta-dark"
    >
      <svg
        width="19"
        height="19"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M6 6h15l-1.5 9h-12z" />
        <path d="M6 6 5 3H2" />
        <circle cx="9.5" cy="20" r="1.3" />
        <circle cx="17.5" cy="20" r="1.3" />
      </svg>
      {itemCount > 0 && (
        <span className="absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-terracotta text-[10px] font-bold text-cream">
          {itemCount > 9 ? "9+" : itemCount}
        </span>
      )}
    </Link>
  );
}

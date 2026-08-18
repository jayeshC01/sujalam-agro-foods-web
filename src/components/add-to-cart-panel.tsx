"use client";

import Link from "next/link";
import { useState } from "react";
import { QuantityStepper } from "@/components/quantity-stepper";
import { useCart } from "@/lib/cart-context";
import { formatPrice, type Product } from "@/lib/products";

export function AddToCartPanel({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [selectedSize, setSelectedSize] = useState(product.packSizes[0].size);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const selectedPack =
    product.packSizes.find((pack) => pack.size === selectedSize) ??
    product.packSizes[0];

  function handleAddToCart() {
    addItem(
      { slug: product.slug, packSize: selectedPack.size, price: selectedPack.price },
      quantity,
    );
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  }

  return (
    <div className="mt-6">
      <h2 className="text-sm font-semibold uppercase tracking-wide text-ink/50">
        Available Packing &amp; Pricing
      </h2>
      <div className="mt-3 grid grid-cols-3 gap-2 sm:grid-cols-4">
        {product.packSizes.map((pack) => {
          const selected = pack.size === selectedSize;
          return (
            <button
              key={pack.size}
              type="button"
              onClick={() => setSelectedSize(pack.size)}
              className={`overflow-hidden rounded-lg border transition-all ${
                selected
                  ? "relative z-10 scale-105 border-leaf-dark shadow-lg"
                  : "border-mustard/20 hover:border-leaf-dark/40"
              }`}
            >
              <div
                className={`py-1 text-center text-[10px] font-semibold uppercase tracking-wide ${
                  selected ? "bg-leaf-dark text-cream" : "bg-ink text-cream"
                }`}
              >
                {pack.size}
              </div>
              <div className="bg-white py-1 text-center">
                <span className="font-serif text-sm font-bold text-leaf-dark">
                  {formatPrice(pack.price)}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      <div className="mt-4 flex items-center gap-6 px-1 py-1">
        <div className="flex items-center gap-3">
          <span className="text-sm font-semibold text-ink">Quantity:</span>
          <QuantityStepper
            variant="boxed"
            quantity={quantity}
            onDecrease={() => setQuantity((q) => Math.max(1, q - 1))}
            onIncrease={() => setQuantity((q) => q + 1)}
          />
        </div>
        <span className="text-sm font-semibold text-ink">
          Subtotal: {formatPrice(selectedPack.price * quantity)}
        </span>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3">
        <Link
          href={{ pathname: "/contact", query: { product: product.name } }}
          className="inline-flex items-center justify-center rounded-full border border-leaf-dark px-4 py-3.5 text-sm font-semibold text-leaf-dark transition-colors hover:bg-leaf-dark/10"
        >
          Enquire
        </Link>
        <button
          type="button"
          onClick={handleAddToCart}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-leaf-dark px-4 py-3.5 text-sm font-semibold text-cream shadow-lg shadow-leaf-dark/20 transition-transform hover:-translate-y-0.5 hover:bg-leaf"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 6h15l-1.5 9h-12z" />
            <path d="M6 6 5 3H2" />
            <circle cx="9.5" cy="20" r="1.3" />
            <circle cx="17.5" cy="20" r="1.3" />
          </svg>
          {added ? "Added ✓" : "Add to Cart"}
        </button>
      </div>

      <p className="mt-3 text-xs text-ink/50">
        All orders are placed via WhatsApp — add items to your cart, then
        check out and send us your order details directly.
      </p>
    </div>
  );
}

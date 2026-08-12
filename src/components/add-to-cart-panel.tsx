"use client";

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
    <div className="mt-6 rounded-2xl border border-mustard/20 bg-white p-5">
      <h2 className="text-sm font-semibold uppercase tracking-wide text-ink/50">
        Choose a Size
      </h2>
      <div className="mt-3 flex flex-wrap gap-2">
        {product.packSizes.map((pack) => (
          <button
            key={pack.size}
            type="button"
            onClick={() => setSelectedSize(pack.size)}
            className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
              selectedSize === pack.size
                ? "border-terracotta bg-terracotta text-cream"
                : "border-mustard/25 text-ink/70 hover:border-terracotta/40"
            }`}
          >
            {pack.size} · {formatPrice(pack.price)}
          </button>
        ))}
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-4">
        <QuantityStepper
          quantity={quantity}
          onDecrease={() => setQuantity((q) => Math.max(1, q - 1))}
          onIncrease={() => setQuantity((q) => q + 1)}
        />
        <span className="text-sm text-ink/50">
          Subtotal:{" "}
          <span className="font-semibold text-terracotta-dark">
            {formatPrice(selectedPack.price * quantity)}
          </span>
        </span>
      </div>

      <button
        type="button"
        onClick={handleAddToCart}
        className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-mustard px-7 py-3.5 text-sm font-semibold text-ink shadow-lg shadow-mustard/20 transition-transform hover:-translate-y-0.5 hover:bg-mustard-light sm:w-auto"
      >
        {added ? "Added to Cart ✓" : "Add to Cart"}
      </button>

      <p className="mt-3 text-xs text-ink/50">
        All orders are placed via WhatsApp — add items to your cart, then
        check out and send us your order details directly.
      </p>
    </div>
  );
}

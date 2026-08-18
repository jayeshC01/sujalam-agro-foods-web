"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { QuantityStepper } from "@/components/quantity-stepper";
import { CartIcon } from "@/components/common/cart-icon";
import { PackSizeChip } from "@/components/common/pack-size-chip";
import { useCart } from "@/lib/cart-context";
import { formatPrice, type Product } from "@/lib/products";

const ADDED_DURATION_MS = 2000;

export function AddToCartPanel({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [selectedSize, setSelectedSize] = useState(product.packSizes[0].size);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const addedTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const selectedPack =
    product.packSizes.find((pack) => pack.size === selectedSize) ??
    product.packSizes[0];

  function handleAddToCart() {
    addItem(
      { slug: product.slug, packSize: selectedPack.size, price: selectedPack.price },
      quantity,
    );
    if (addedTimeoutRef.current) clearTimeout(addedTimeoutRef.current);
    setAdded(true);
    addedTimeoutRef.current = setTimeout(() => {
      setAdded(false);
    }, ADDED_DURATION_MS);
  }

  useEffect(() => {
    return () => {
      if (addedTimeoutRef.current) clearTimeout(addedTimeoutRef.current);
    };
  }, []);

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
              <PackSizeChip pack={pack} selected={selected} />
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
          <CartIcon size={16} />
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

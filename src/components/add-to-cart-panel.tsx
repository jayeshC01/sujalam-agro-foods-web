"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { QuantityStepper } from "@/components/quantity-stepper";
import { CartIcon } from "@/components/common/cart-icon";
import { PackSizeChip } from "@/components/common/pack-size-chip";
import { useCart } from "@/lib/cart-context";
import { formatPrice, type Product } from "@/lib/products";

const ADDED_DURATION_MS = 2000;

// Matches the sticky header + back-to-catalog bar height on the detail page
// (see the comment in catalog/[slug]/page.tsx), so the panel only counts as
// "scrolled past" once it's actually hidden behind them, not just touching.
const STICKY_HEADER_OFFSET_PX = 109;

export function AddToCartPanel({ product }: { product: Product }) {
  const { addItem, itemCount } = useCart();
  const [selectedSize, setSelectedSize] = useState(product.packSizes[0].size);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const addedTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const [showFloater, setShowFloater] = useState(false);
  const [sheetOpen, setSheetOpen] = useState(false);

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
    setSheetOpen(false);
  }

  useEffect(() => {
    return () => {
      if (addedTimeoutRef.current) clearTimeout(addedTimeoutRef.current);
    };
  }, []);

  useEffect(() => {
    const node = panelRef.current;
    if (!node || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      ([entry]) =>
        // Only float once the panel has scrolled up past the sticky header —
        // not simply because it hasn't been scrolled to yet (below the fold).
        setShowFloater(!entry.isIntersecting && entry.boundingClientRect.top < 0),
      { rootMargin: `-${STICKY_HEADER_OFFSET_PX}px 0px 0px 0px` },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const packGrid = (
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
  );

  const quantityAndSubtotal = (
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
  );

  const actionButtons = (
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
  );

  const disclaimer = (
    <p className="mt-3 text-xs text-ink/50">
      All orders are placed via WhatsApp — add items to your cart, then check
      out and send us your order details directly.
    </p>
  );

  useEffect(() => {
    if (!sheetOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [sheetOpen]);

  return (
    <div ref={panelRef} className="mt-6">
      {!sheetOpen && (
        <>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-ink/50">
            Available Packing &amp; Pricing
          </h2>
          {packGrid}
          {quantityAndSubtotal}
          {actionButtons}
          {disclaimer}
        </>
      )}

      {showFloater && !sheetOpen && (
        <div className="fixed inset-x-4 bottom-4 z-40 lg:hidden">
          <div className="flex items-center gap-2 rounded-full border border-mustard/15 bg-cream/95 p-2 shadow-[0_8px_24px_rgba(0,0,0,0.18)] backdrop-blur-sm">
            {itemCount > 0 && (
              <>
                <Link
                  href="/cart"
                  aria-label="View cart"
                  className="flex min-w-0 flex-1 items-center gap-2 py-1 pl-1 pr-1.5"
                >
                  <span className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-leaf-dark text-cream">
                    <CartIcon size={19} />
                    <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-gold text-[10px] font-bold text-leaf-dark">
                      {itemCount > 9 ? "9+" : itemCount}
                    </span>
                  </span>
                  <span className="flex min-w-0 flex-col items-start leading-tight">
                    <span className="whitespace-nowrap text-sm font-semibold text-ink">
                      {itemCount} {itemCount === 1 ? "Item" : "Items"} in cart
                    </span>
                    <span className="whitespace-nowrap text-xs font-semibold text-terracotta-dark">
                      View cart ›
                    </span>
                  </span>
                </Link>
                <span className="h-9 w-px shrink-0 bg-mustard/20" />
              </>
            )}
            <button
              type="button"
              onClick={() => setSheetOpen(true)}
              aria-label="Choose pack size and add to cart"
              className={`inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full bg-leaf-dark py-3.5 text-sm font-semibold text-cream shadow-lg shadow-leaf-dark/20 ${
                itemCount > 0
                  ? "justify-between px-4"
                  : "w-full justify-center px-5"
              }`}
            >
              <span className="inline-flex items-center gap-2">
                <CartIcon size={16} />
                Add to Cart
              </span>
              <span aria-hidden className="text-base leading-none">
                ›
              </span>
            </button>
          </div>
        </div>
      )}

      {sheetOpen && (
        <div className="fixed inset-0 z-[60] flex flex-col justify-end lg:hidden">
          <button
            type="button"
            onClick={() => setSheetOpen(false)}
            aria-label="Close"
            className="absolute inset-0 bg-ink/40 backdrop-blur-[1px]"
          />
          <div className="relative max-h-[85vh] overflow-y-auto rounded-t-2xl bg-cream shadow-[0_-8px_30px_rgba(0,0,0,0.25)]">
            <div className="flex items-center justify-between border-b border-mustard/15 px-4 py-3">
              <span className="text-sm font-semibold text-ink">
                {product.name}
              </span>
              <button
                type="button"
                onClick={() => setSheetOpen(false)}
                aria-label="Close"
                className="flex h-9 w-9 items-center justify-center rounded-full text-ink/60 transition-colors hover:bg-mustard/10"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>
            </div>
            <div className="px-4 py-5">
              {actionButtons}
              <h2 className="mt-5 text-sm font-semibold uppercase tracking-wide text-ink/50">
                Available Packing &amp; Pricing
              </h2>
              {packGrid}
              {quantityAndSubtotal}
              {disclaimer}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

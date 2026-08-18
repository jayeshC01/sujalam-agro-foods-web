"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { formatPrice, getProductTagline, type Product } from "@/lib/products";
import { ProductCardGallery } from "@/components/product-card-gallery";
import { ProductHighlightIcon } from "@/components/product-highlight-icon";
import { useCart } from "@/lib/cart-context";
import { flyToCart } from "@/lib/fly-to-cart";

const TONE_BY_CATEGORY: Record<string, string> = {
  "edible-oil": "bg-mustard/10 text-mustard-light",
  "non-edible-oil": "bg-terracotta/10 text-terracotta",
};

const VISIBLE_SIZE_COUNT = 3;
const TOAST_DURATION_MS = 1000;

export function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();
  const tone = TONE_BY_CATEGORY[product.category] ?? "bg-mustard/10 text-mustard-light";
  const detailHref = `/catalog/${product.slug}`;

  const [activeSizeIndex, setActiveSizeIndex] = useState(0);
  const [showAllSizes, setShowAllSizes] = useState(false);
  const [showAddedToast, setShowAddedToast] = useState(false);
  const toastTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const selectedPack = product.packSizes[activeSizeIndex];

  const needsMoreButton = product.packSizes.length > VISIBLE_SIZE_COUNT;
  const visibleSizes = showAllSizes
    ? product.packSizes
    : product.packSizes.slice(
        0,
        needsMoreButton ? VISIBLE_SIZE_COUNT - 1 : VISIBLE_SIZE_COUNT,
      );
  const hiddenSizeCount = product.packSizes.length - visibleSizes.length;

  function handleAddToCart(event: React.MouseEvent<HTMLButtonElement>) {
    addItem(
      { slug: product.slug, packSize: selectedPack.size, price: selectedPack.price },
      1,
    );
    flyToCart(event.currentTarget);
    if (toastTimeoutRef.current) clearTimeout(toastTimeoutRef.current);
    setShowAddedToast(true);
    toastTimeoutRef.current = setTimeout(() => {
      setShowAddedToast(false);
    }, TOAST_DURATION_MS);
  }

  useEffect(() => {
    return () => {
      if (toastTimeoutRef.current) clearTimeout(toastTimeoutRef.current);
    };
  }, []);

  return (
    <div className="group relative mx-auto flex w-full max-w-[350px] flex-col overflow-hidden rounded-2xl border border-mustard/15 bg-white shadow-sm transition-all hover:-translate-y-1 hover:border-terracotta/30 hover:shadow-lg">
      {showAddedToast && (
        <div className="pointer-events-none absolute inset-x-0 top-3 z-20 flex justify-center">
          <span className="flex items-center gap-1.5 rounded-full bg-leaf-dark px-3 py-1.5 text-xs font-semibold text-cream shadow-lg">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12l4 4 10-10" />
            </svg>
            Added to cart
          </span>
        </div>
      )}

      <ProductCardGallery
        images={product.images}
        tone={tone}
        alt={product.name}
        href={detailHref}
      />

      <div className="flex flex-1 flex-col px-4 pb-4 pt-2.5">
        <div className="flex items-start justify-between gap-2">
          <Link href={detailHref} className="block">
            <h3 className="font-serif text-lg font-bold text-ink">
              {product.name}
            </h3>
          </Link>
          {!product.edible && (
            <span className="mt-0.5 shrink-0 rounded-full bg-terracotta/15 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-terracotta-dark">
              Non-Edible
            </span>
          )}
        </div>
        <p className="text-xs text-ink/55">{getProductTagline(product)}</p>

        {product.highlights && product.highlights.length > 0 && (
          <div className="mt-2 grid grid-cols-3 gap-1 py-2">
            {product.highlights.slice(0, 3).map((highlight) => (
              <div
                key={highlight.label}
                className="flex items-center justify-center gap-1.5"
              >
                <span
                  className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${tone}`}
                >
                  <ProductHighlightIcon icon={highlight.icon} />
                </span>
                <span className="text-[10px] font-medium leading-tight text-ink/75">
                  {highlight.label}
                </span>
              </div>
            ))}
          </div>
        )}

        <div className="mt-2">
          <p className="flex items-baseline gap-1.5 text-[11px] font-semibold uppercase tracking-wide text-ink">
            Select Size
            <span className="font-normal normal-case tracking-normal text-ink/45">
              Inclusive of all taxes
            </span>
          </p>
          <div
            className={`mt-1.5 flex flex-nowrap gap-1.5 ${
              showAllSizes
                ? "overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                : "overflow-hidden"
            }`}
          >
            {visibleSizes.map((pack, index) => {
              const selected = index === activeSizeIndex;
              return (
                <button
                  key={pack.size}
                  type="button"
                  onClick={() => setActiveSizeIndex(index)}
                  className={`shrink-0 basis-[30%] overflow-hidden rounded-lg border transition-colors ${
                    selected
                      ? "border-leaf-dark"
                      : "border-mustard/20 hover:border-terracotta/40"
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
            {!showAllSizes && hiddenSizeCount > 0 && (
              <button
                type="button"
                onClick={() => setShowAllSizes(true)}
                className="flex shrink-0 basis-[30%] items-center justify-center gap-1 rounded-lg border border-mustard/20 px-1 py-2 text-[11px] font-semibold text-ink/70 transition-colors hover:border-terracotta/40"
              >
                +{hiddenSizeCount} more
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>
            )}
          </div>
        </div>

        <div className="mt-auto flex gap-2 pt-3">
          <Link
            href={detailHref}
            className="flex flex-1 items-center justify-center rounded-xl border border-ink/15 px-3 py-2 text-xs font-bold uppercase tracking-wide text-ink transition-colors hover:border-leaf-dark hover:text-leaf-dark"
          >
            View Details
          </Link>
          <button
            type="button"
            onClick={handleAddToCart}
            aria-label={`Add ${product.name} (${selectedPack.size}) to cart`}
            className="flex flex-[1.3] items-center justify-center gap-1.5 rounded-xl bg-leaf-dark px-3 py-2 text-xs font-bold uppercase tracking-wide text-cream transition-colors hover:bg-leaf"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 6h15l-1.5 9h-12z" />
              <path d="M6 6 5 3H2" />
              <circle cx="9.5" cy="20" r="1.3" />
              <circle cx="17.5" cy="20" r="1.3" />
              <path d="M12 9v4M10 11h4" />
            </svg>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

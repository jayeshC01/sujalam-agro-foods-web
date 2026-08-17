"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { formatPrice, type Product } from "@/lib/products";
import { ProductCardGallery } from "@/components/product-card-gallery";
import { useCart } from "@/lib/cart-context";
import { flyToCart } from "@/lib/fly-to-cart";

const TONE_BY_CATEGORY: Record<string, string> = {
  "edible-oil": "bg-mustard/10 text-mustard-light",
  "non-edible-oil": "bg-terracotta/10 text-terracotta",
};

export function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();
  const tone = TONE_BY_CATEGORY[product.category] ?? "bg-mustard/10 text-mustard-light";
  const startingPrice = Math.min(...product.packSizes.map((pack) => pack.price));

  const cardRef = useRef<HTMLDivElement>(null);
  const [sizeModalOpen, setSizeModalOpen] = useState(false);
  const [justAddedSize, setJustAddedSize] = useState<string | null>(null);
  const [cardBounds, setCardBounds] = useState<{
    top: number;
    left: number;
    width: number;
    height: number;
  } | null>(null);

  function openSizeModal() {
    const rect = cardRef.current?.getBoundingClientRect();
    if (rect) {
      setCardBounds({
        top: rect.top + window.scrollY,
        left: rect.left + window.scrollX,
        width: rect.width,
        height: rect.height,
      });
    }
    setSizeModalOpen(true);
  }

  function handleAddSize(
    pack: { size: string; price: number },
    event: React.MouseEvent<HTMLButtonElement>,
  ) {
    addItem({ slug: product.slug, packSize: pack.size, price: pack.price }, 1);
    flyToCart(event.currentTarget);
    setJustAddedSize(pack.size);
    setTimeout(() => setSizeModalOpen(false), 500);
  }

  useEffect(() => {
    if (!sizeModalOpen) {
      setJustAddedSize(null);
      return;
    }
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setSizeModalOpen(false);
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [sizeModalOpen]);

  return (
    <div
      ref={cardRef}
      className="group flex flex-col overflow-hidden rounded-2xl border border-mustard/15 bg-white shadow-sm transition-all hover:-translate-y-1 hover:border-terracotta/30 hover:shadow-lg"
    >
      <div className="relative">
        <ProductCardGallery
          images={product.images}
          tone={tone}
          alt={product.name}
          href={`/catalog/${product.slug}`}
        />

        <button
          type="button"
          onClick={openSizeModal}
          aria-label={`Add ${product.name} to cart`}
          className="absolute bottom-0 right-4 z-10 flex h-14 w-14 translate-y-1/2 items-center justify-center rounded-full border-4 border-white bg-leaf-dark text-cream shadow-lg transition-all hover:scale-105 hover:bg-leaf active:scale-95"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 6h15l-1.5 9h-12z" />
            <path d="M6 6 5 3H2" />
            <circle cx="9.5" cy="20" r="1.3" />
            <circle cx="17.5" cy="20" r="1.3" />
            <path d="M12 9v4M10 11h4" />
          </svg>
        </button>
      </div>

      <Link
        href={`/catalog/${product.slug}`}
        className="flex flex-1 flex-col px-5 pb-5 pt-8"
      >
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-serif text-lg font-semibold text-ink">
            {product.name}
          </h3>
          {!product.edible && (
            <span className="shrink-0 rounded-full bg-terracotta/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-terracotta-dark">
              Non-Edible
            </span>
          )}
        </div>

        <p className="mt-2 text-sm text-ink/65">{product.description}</p>

        <div className="mt-auto flex items-baseline justify-between border-t border-mustard/10 pt-3">
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-wide text-ink/45">
              Starting from
            </div>
            <div className="font-serif text-lg font-semibold text-terracotta-dark">
              {formatPrice(startingPrice)}
            </div>
          </div>
          <span className="text-sm font-semibold text-ink/70">
            {product.packSizes.length}{" "}
            {product.packSizes.length === 1 ? "size" : "sizes"}
          </span>
        </div>
      </Link>

      {sizeModalOpen && cardBounds && createPortal(
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setSizeModalOpen(false)}
          />
          <div
            style={{
              top: cardBounds.top,
              left: cardBounds.left,
              width: cardBounds.width,
              height: cardBounds.height,
            }}
            className="absolute z-50 flex items-center justify-center overflow-hidden rounded-2xl bg-ink/40 p-3"
            onClick={() => setSizeModalOpen(false)}
          >
            <div
              role="dialog"
              aria-modal="true"
              aria-label={`Sizes for ${product.name}`}
              onClick={(event) => event.stopPropagation()}
              className="flex max-h-full w-full max-w-sm flex-col overflow-y-auto rounded-2xl bg-white p-5 shadow-xl"
            >
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-serif text-lg font-semibold text-ink">
                  {product.name}
                </h3>
                <button
                  type="button"
                  onClick={() => setSizeModalOpen(false)}
                  aria-label="Close"
                  className="-mr-1 -mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-ink/40 transition-colors hover:bg-mustard/10 hover:text-ink"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 6 6 18M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <p className="mt-1 text-sm text-ink/60">Choose a size to add it to your cart.</p>

              <div className="mt-4 flex flex-col gap-2">
                {product.packSizes.map((pack) => (
                  <button
                    key={pack.size}
                    type="button"
                    onClick={(event) => handleAddSize(pack, event)}
                    className="flex items-center justify-between rounded-xl border border-mustard/20 px-4 py-3 text-left transition-colors hover:border-terracotta/40 hover:bg-mustard/5"
                  >
                    <span className="text-sm font-semibold text-ink">{pack.size}</span>
                    <span className="flex items-center gap-3">
                      <span className="font-serif text-sm font-semibold text-terracotta-dark">
                        {formatPrice(pack.price)}
                      </span>
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold transition-colors ${
                          justAddedSize === pack.size
                            ? "bg-mustard text-ink"
                            : "bg-terracotta text-cream"
                        }`}
                      >
                        {justAddedSize === pack.size ? "Added ✓" : "Add"}
                      </span>
                    </span>
                  </button>
                ))}
              </div>

              <p className="mt-4 text-xs text-ink/50">
                You can adjust quantities anytime from your cart.
              </p>
            </div>
          </div>
        </>,
        document.body,
      )}
    </div>
  );
}

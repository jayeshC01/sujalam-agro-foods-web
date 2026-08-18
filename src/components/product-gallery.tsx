"use client";

import { useRef, useState } from "react";
import { ProductImage, type GalleryVariant } from "@/components/product-image";

const ALL_VARIANTS: GalleryVariant[] = ["front", "label", "pour"];

const arrowButtonClass =
  "absolute top-1/2 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-ink opacity-0 shadow-md transition-opacity group-hover/gallery:opacity-100 disabled:pointer-events-none disabled:opacity-0 sm:flex";

export function ProductGallery({
  tone,
  imageCount = 3,
  images,
  alt = "",
}: {
  tone: string;
  imageCount?: number;
  images?: string[];
  alt?: string;
}) {
  const variants = ALL_VARIANTS.slice(0, imageCount);
  const slideCount = images && images.length > 0 ? images.length : variants.length;
  const scrollRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  function handleScroll() {
    const el = scrollRef.current;
    if (!el) return;
    const index = Math.round(el.scrollLeft / el.clientWidth);
    setActive(Math.min(slideCount - 1, Math.max(0, index)));
  }

  function scrollToIndex(index: number) {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTo({ left: index * el.clientWidth, behavior: "smooth" });
    setActive(index);
  }

  const hasMultiple = slideCount > 1;

  return (
    <div>
      <div className="group/gallery relative">
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex snap-x snap-mandatory overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {images && images.length > 0
            ? images.map((src) => (
                <div key={src} className="w-full shrink-0 snap-center">
                  <ProductImage tone={tone} size="lg" image={src} alt={alt} />
                </div>
              ))
            : variants.map((variant) => (
                <div key={variant} className="w-full shrink-0 snap-center">
                  <ProductImage tone={tone} size="lg" variant={variant} />
                </div>
              ))}
        </div>

        {hasMultiple && (
          <>
            <button
              type="button"
              aria-label="Previous image"
              onClick={() => scrollToIndex(active - 1)}
              disabled={active === 0}
              className={`left-3 ${arrowButtonClass}`}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              type="button"
              aria-label="Next image"
              onClick={() => scrollToIndex(active + 1)}
              disabled={active === slideCount - 1}
              className={`right-3 ${arrowButtonClass}`}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>

            <div className="pointer-events-none absolute inset-x-0 bottom-2 flex justify-center gap-1.5">
              {Array.from({ length: slideCount }).map((_, index) => (
                <button
                  key={index}
                  type="button"
                  aria-label={`Show image ${index + 1}`}
                  onClick={() => scrollToIndex(index)}
                  className={`pointer-events-auto h-1.5 rounded-full shadow-sm transition-all ${
                    index === active ? "w-4 bg-blue-500" : "w-1.5 bg-blue-500/40"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {hasMultiple && (
        <div className="mt-4 flex justify-center gap-3">
          {images && images.length > 0
            ? images.map((src, index) => (
                <button
                  key={src}
                  type="button"
                  onClick={() => scrollToIndex(index)}
                  aria-label={`Show image ${index + 1}`}
                  aria-current={active === index}
                  className={`h-16 w-16 shrink-0 overflow-hidden rounded-xl transition-all sm:h-20 sm:w-20 ${
                    active === index
                      ? "ring-2 ring-leaf-dark ring-offset-2 ring-offset-cream"
                      : "opacity-60 hover:opacity-100"
                  }`}
                >
                  <ProductImage tone={tone} size="thumb" image={src} alt={alt} />
                </button>
              ))
            : variants.map((variant, index) => (
                <button
                  key={variant}
                  type="button"
                  onClick={() => scrollToIndex(index)}
                  aria-label={`Show ${variant} view`}
                  aria-current={active === index}
                  className={`h-16 w-16 shrink-0 overflow-hidden rounded-xl transition-all sm:h-20 sm:w-20 ${
                    active === index
                      ? "ring-2 ring-leaf-dark ring-offset-2 ring-offset-cream"
                      : "opacity-60 hover:opacity-100"
                  }`}
                >
                  <ProductImage tone={tone} size="thumb" variant={variant} />
                </button>
              ))}
        </div>
      )}
    </div>
  );
}

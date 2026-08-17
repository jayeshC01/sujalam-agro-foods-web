"use client";

import { useState } from "react";
import { ProductImage, type GalleryVariant } from "@/components/product-image";

const ALL_VARIANTS: GalleryVariant[] = ["front", "label", "pour"];

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
  const [active, setActive] = useState(0);

  if (images && images.length > 0) {
    return (
      <div>
        <ProductImage tone={tone} size="lg" image={images[active]} alt={alt} />

        {images.length > 1 && (
          <div className="mt-4 flex gap-3">
            {images.map((src, index) => (
              <button
                key={src}
                type="button"
                onClick={() => setActive(index)}
                aria-label={`Show image ${index + 1}`}
                aria-current={active === index}
                className={`h-16 w-16 shrink-0 overflow-hidden rounded-xl transition-all sm:h-20 sm:w-20 ${
                  active === index
                    ? "ring-2 ring-terracotta ring-offset-2 ring-offset-cream"
                    : "opacity-60 hover:opacity-100"
                }`}
              >
                <ProductImage tone={tone} size="thumb" image={src} alt={alt} />
              </button>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div>
      <ProductImage tone={tone} size="lg" variant={variants[active]} />

      <div className="mt-4 flex gap-3">
        {variants.map((variant, index) => (
          <button
            key={variant}
            type="button"
            onClick={() => setActive(index)}
            aria-label={`Show ${variant} view`}
            aria-current={active === index}
            className={`h-16 w-16 shrink-0 overflow-hidden rounded-xl transition-all sm:h-20 sm:w-20 ${
              active === index
                ? "ring-2 ring-terracotta ring-offset-2 ring-offset-cream"
                : "opacity-60 hover:opacity-100"
            }`}
          >
            <ProductImage tone={tone} size="thumb" variant={variant} />
          </button>
        ))}
      </div>
    </div>
  );
}

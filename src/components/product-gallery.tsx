"use client";

import { useState } from "react";
import { ProductImage, type GalleryVariant } from "@/components/product-image";

const ALL_VARIANTS: GalleryVariant[] = ["front", "label", "pour"];

export function ProductGallery({
  tone,
  imageCount = 3,
}: {
  tone: string;
  imageCount?: number;
}) {
  const variants = ALL_VARIANTS.slice(0, imageCount);
  const [active, setActive] = useState(0);

  return (
    <div>
      <ProductImage tone={tone} size="lg" variant={variants[active]} />

      <div
        className="mt-4 grid gap-3"
        style={{
          gridTemplateColumns: `repeat(${variants.length}, minmax(0, 1fr))`,
        }}
      >
        {variants.map((variant, index) => (
          <button
            key={variant}
            type="button"
            onClick={() => setActive(index)}
            aria-label={`Show ${variant} view`}
            aria-current={active === index}
            className={`overflow-hidden rounded-xl transition-all ${
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

"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { ProductImage } from "@/components/product-image";

export function ProductCardGallery({
  images,
  tone,
  alt,
  href,
}: {
  images?: string[];
  tone: string;
  alt: string;
  href: string;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  if (!images || images.length === 0) {
    return (
      <Link href={href} className="block">
        <ProductImage tone={tone} alt={alt} />
      </Link>
    );
  }

  const hasMultiple = images.length > 1;

  function handleScroll() {
    const el = scrollRef.current;
    if (!el) return;
    const index = Math.round(el.scrollLeft / el.clientWidth);
    setActive(Math.min(images!.length - 1, Math.max(0, index)));
  }

  function scrollToIndex(index: number) {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTo({ left: index * el.clientWidth, behavior: "smooth" });
  }

  return (
    <div className="group/gallery relative">
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex snap-x snap-mandatory overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {images.map((src, index) => (
          <Link
            key={src}
            href={href}
            className="w-full shrink-0 snap-center"
            tabIndex={index === active ? 0 : -1}
          >
            <ProductImage tone={tone} image={src} alt={alt} />
          </Link>
        ))}
      </div>

      {hasMultiple && (
        <>
          <button
            type="button"
            aria-label="Previous image"
            onClick={() => scrollToIndex(active - 1)}
            disabled={active === 0}
            className="absolute left-2 top-1/2 hidden h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-ink opacity-0 shadow-md transition-opacity group-hover/gallery:opacity-100 disabled:pointer-events-none disabled:opacity-0 sm:flex"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Next image"
            onClick={() => scrollToIndex(active + 1)}
            disabled={active === images.length - 1}
            className="absolute right-2 top-1/2 hidden h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-ink opacity-0 shadow-md transition-opacity group-hover/gallery:opacity-100 disabled:pointer-events-none disabled:opacity-0 sm:flex"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

          <div className="pointer-events-none absolute inset-x-0 bottom-2 flex justify-center gap-1.5">
            {images.map((_, index) => (
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
  );
}

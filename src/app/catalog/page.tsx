import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ProductCard } from "@/components/product-card";
import { CATEGORIES } from "@/lib/categories";
import { PRODUCTS } from "@/lib/products";

export const metadata: Metadata = {
  title: "Catalog",
  description:
    "Browse Sujalam Agro Foods' full range of pure, wood-pressed edible and non-edible oils — crafted the traditional kacchi ghani way.",
};

const filterIconProps = {
  width: 16,
  height: 16,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

type CatalogPageProps = {
  searchParams: Promise<{ category?: string }>;
};

export default async function CatalogPage({ searchParams }: CatalogPageProps) {
  const { category } = await searchParams;
  const selected = CATEGORIES.find((item) => item.slug === category);
  const products = selected
    ? PRODUCTS.filter((product) => product.category === selected.slug)
    : PRODUCTS;

  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <section className="relative h-[350px] w-full overflow-hidden bg-[#fae9cf]">
          {/* Wide layout: fixed-width decorative strip on the far left +
              flexible cream spacer (holds the text) + fixed-width ingredient
              photo on the far right, always shown at its full, uncropped
              width. The spacer is the only flexible part, so it absorbs the
              narrowing viewport first; the text only starts wrapping once
              the spacer itself has nothing left to give. Only kicks in at
              lg+ — below that (including tablets/iPads) there isn't enough
              room for this layout, so the overlay layout below is used
              instead. */}
          <div className="hidden h-full lg:flex">
            <div className="relative h-full w-[80px] shrink-0 xl:w-[106px]">
              <Image
                src="/images/catalog-hero-strip.jpg"
                alt=""
                aria-hidden
                fill
                sizes="106px"
                className="object-cover"
              />
            </div>
            <div className="min-w-0 flex-1 overflow-hidden">
              <div className="mx-auto flex h-full max-w-6xl items-center px-6">
                <div className="min-w-0">
                  <nav className="flex flex-wrap items-center gap-1.5 text-xs text-ink/50">
                    <Link href="/" className="hover:text-terracotta-dark">
                      Home
                    </Link>
                    <span>›</span>
                    <span>Catalog</span>
                  </nav>
                  <h1 className="mt-3 break-words font-serif text-4xl font-semibold tracking-tight text-leaf-dark lg:text-5xl">
                    {selected ? selected.name : "Our Full Catalog"}
                  </h1>
                  <p className="mt-2 break-words text-base text-ink/70 lg:text-lg">
                    Pure, wood-pressed oils{selected ? "" : " —"} crafted the
                    traditional way.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative h-full w-[632px] shrink-0">
              <Image
                src="/images/catalog-hero.jpg"
                alt="Wood-pressed oil ingredients — peanuts, coconut, mustard flower, and oil press"
                fill
                priority
                sizes="632px"
                className="object-cover"
              />
            </div>
          </div>

          {/* Overlay layout (phones through tablets/iPads, below lg): the
              side-by-side layout above has no room to breathe here, so
              instead show the photo full-bleed and overlay the text on its
              blank upper band, with a gradient fade for legibility. */}
          <div className="relative h-full lg:hidden">
            <Image
              src="/images/catalog-hero.jpg"
              alt="Wood-pressed oil ingredients — peanuts, coconut, mustard flower, and oil press"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#fae9cf] via-[#fae9cf]/70 to-[#fae9cf]/25" />
            <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
              <div>
                <nav className="flex items-center justify-center gap-1.5 text-sm text-black">
                  <Link href="/" className="hover:text-terracotta-dark">
                    Home
                  </Link>
                  <span>›</span>
                  <span>Catalog</span>
                </nav>
                <h1 className="mt-3 font-serif text-4xl font-semibold tracking-tight text-leaf-dark sm:text-5xl">
                  {selected ? selected.name : "Our Full Catalog"}
                </h1>
                <p className="mt-2 text-lg text-black sm:text-xl">
                  Pure, wood-pressed oils{selected ? "" : " —"} crafted the
                  traditional way.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="mx-auto flex max-w-6xl justify-center px-6 pt-6">
          <div className="inline-flex flex-wrap items-center gap-1 rounded-full border border-mustard/15 bg-white p-1.5 shadow-sm">
            <Link
              href="/catalog"
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                !selected
                  ? "bg-leaf-dark text-cream"
                  : "text-ink/70 hover:bg-mustard/10"
              }`}
            >
              <svg {...filterIconProps}>
                <path d="M12 20c0-6 3-9 7-11-1 5-3 8-7 11Z" />
                <path d="M12 20c0-6-3-9-7-11 1 5 3 8 7 11Z" />
              </svg>
              All Products
            </Link>
            {CATEGORIES.map((item) => (
              <Link
                key={item.slug}
                href={`/catalog?category=${item.slug}`}
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  selected?.slug === item.slug
                    ? "bg-leaf-dark text-cream"
                    : "text-ink/70 hover:bg-mustard/10"
                }`}
              >
                <span className="h-4 w-4 [&>svg]:h-4 [&>svg]:w-4">
                  {item.icon}
                </span>
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        <section className="mx-auto max-w-6xl px-6 py-12">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

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
        {/* Mobile (below sm): full-bleed portrait photo with the content
            overlaid on top, faded via a cream gradient (opaque at the
            bottom, mostly clear at the top) for legibility — the site's
            original catalog-hero treatment, kept for phones where there
            isn't room for the side-by-side layout below. */}
        <section className="relative h-[350px] w-full overflow-hidden sm:hidden">
          <Image
            src="/images/catalog-hero-mobile.png"
            alt="Wood-pressed oil ingredients — mustard, coconut, peanuts, and oil press"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#fce4c4] via-[#fce4c4]/70 to-[#fce4c4]/25" />
          <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
            <div>
              <nav className="flex items-center justify-center gap-1.5 text-sm text-black">
                <Link href="/" className="hover:text-terracotta-dark">
                  Home
                </Link>
                <span>›</span>
                <span>Catalog</span>
              </nav>
              <h1 className="mt-3 font-serif text-4xl font-semibold tracking-tight text-leaf-dark">
                Our Full Catalog
              </h1>
              <p className="mt-2 text-lg text-black">
                Pure, wood-pressed oils — crafted the traditional way.
              </p>
            </div>
          </div>
        </section>

        {/* sm and up: fixed-width decorative photo pinned to the right,
            object-contain never crops the source image — it always renders
            complete, scaled to fit. The source has a wide blank/cream band
            on its left (~55-60% of its own width) at every scale, so the
            text below — capped to roughly that same fraction of the
            viewport — always sits over cream, never over the bottles,
            regardless of viewport width. The section background is a
            top-to-bottom gradient sampled directly from the image's own
            (nearly flat) cream backdrop, so the fill beside the image,
            where object-contain can't stretch it edge-to-edge, is
            indistinguishable from the photo. */}
        <section
          className="relative hidden h-[320px] w-full overflow-hidden sm:block lg:h-[400px]"
          style={{
            background:
              "linear-gradient(to bottom, #fde7c4 0%, #fee4bf 20%, #fcdfb5 50%, #f8d8ae 70%, #f8dcb7 100%)",
          }}
        >
          <Image
            src="/images/catalog-hero-v2.png"
            alt="Wood-pressed oil ingredients — mustard, coconut, peanuts, and oil press"
            fill
            priority
            sizes="100vw"
            className="object-contain object-right"
          />
          <div className="absolute inset-0 flex items-center">
            <div className="mx-auto w-full max-w-6xl px-6">
              <div className="max-w-[min(55vw,26rem)]">
                <nav className="flex flex-wrap items-center gap-1.5 text-xs text-ink/50">
                  <Link href="/" className="hover:text-terracotta-dark">
                    Home
                  </Link>
                  <span>›</span>
                  <span>Catalog</span>
                </nav>
                <h1 className="mt-3 break-words font-serif text-4xl font-semibold tracking-tight text-leaf-dark lg:text-5xl">
                  Our Full Catalog
                </h1>
                <p className="mt-2 break-words text-base text-ink/70 lg:text-lg">
                  Pure, wood-pressed oils — crafted the traditional way.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="sticky top-[73px] z-40 border-b border-mustard/10 bg-cream/95 py-4 backdrop-blur-sm">
          <div className="mx-auto max-w-6xl px-6">
            {/* Mobile: three separate rounded-rectangle filter buttons (icon
                + label side by side) — All Products full-width on top,
                Edible/Non-Edible Oils side by side below it. */}
            <div className="flex flex-col gap-3 sm:hidden">
              <Link
                href="/catalog"
                className={`flex items-center justify-center gap-2 rounded-2xl border px-4 py-3 text-sm font-semibold shadow-sm transition-colors ${
                  !selected
                    ? "border-leaf-dark bg-leaf-dark text-cream"
                    : "border-mustard/15 bg-white text-ink/70"
                }`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/icons/all-products-icon.png"
                  alt=""
                  className="h-6 w-6 object-contain"
                />
                All Products
              </Link>
              <div className="flex items-stretch justify-center gap-2">
                {CATEGORIES.map((item) => {
                  const isActive = selected?.slug === item.slug;
                  return (
                    <Link
                      key={item.slug}
                      href={`/catalog?category=${item.slug}`}
                      className={`flex items-center justify-center gap-1.5 whitespace-nowrap rounded-2xl border px-3 py-3 text-sm font-semibold shadow-sm transition-colors ${
                        isActive
                          ? "border-leaf-dark bg-leaf-dark text-cream"
                          : "border-mustard/15 bg-white text-ink/70"
                      }`}
                    >
                      <span className="h-5 w-5 shrink-0">{item.icon}</span>
                      {item.name}
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Tablet and up: single connected pill row. */}
            <div className="hidden justify-center sm:flex">
              <div className="inline-flex flex-wrap items-center gap-1 rounded-full border border-mustard/15 bg-white p-1.5 shadow-sm">
                <Link
                  href="/catalog"
                  className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                    !selected
                      ? "bg-leaf-dark text-cream"
                      : "text-ink/70 hover:bg-mustard/10"
                  }`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/icons/all-products-icon.png"
                    alt=""
                    className="h-6 w-6 object-contain"
                  />
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
                    <span className="h-6 w-6">{item.icon}</span>
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
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

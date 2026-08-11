import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ProductCard } from "@/components/product-card";
import { CATEGORIES } from "@/lib/categories";
import { PRODUCTS } from "@/lib/products";

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
        <section className="mx-auto max-w-3xl px-6 pb-10 pt-24 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-terracotta-dark">
            Catalog
          </span>
          <h1 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            {selected ? selected.name : "Our full catalog"}
          </h1>
          <p className="mt-4 text-ink/70">
            Pricing shown below is indicative and subject to change — reach
            out and we&apos;ll confirm current rates for your order.
          </p>
        </section>

        <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-2 px-6">
          <Link
            href="/catalog"
            className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
              !selected
                ? "bg-terracotta text-cream"
                : "bg-white/60 text-ink/70 hover:bg-white"
            }`}
          >
            All Products
          </Link>
          {CATEGORIES.map((item) => (
            <Link
              key={item.slug}
              href={`/catalog?category=${item.slug}`}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                selected?.slug === item.slug
                  ? "bg-terracotta text-cream"
                  : "bg-white/60 text-ink/70 hover:bg-white"
              }`}
            >
              {item.name}
            </Link>
          ))}
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

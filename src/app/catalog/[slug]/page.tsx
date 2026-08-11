import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ProductImage } from "@/components/product-image";
import { PackSizeGrid } from "@/components/pack-size-grid";
import { CATEGORIES } from "@/lib/categories";
import { PRODUCTS, getProductBySlug } from "@/lib/products";

const TONE_BY_CATEGORY: Record<string, string> = {
  "edible-oil": "bg-mustard/10 text-mustard-light",
  "non-edible-oil": "bg-terracotta/10 text-terracotta",
  masalas: "bg-leaf/10 text-leaf",
  papad: "bg-mustard/10 text-mustard-light",
};

export function generateStaticParams() {
  return PRODUCTS.map((product) => ({ slug: product.slug }));
}

export default async function ProductDetailPage({
  params,
}: PageProps<"/catalog/[slug]">) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const category = CATEGORIES.find((item) => item.slug === product.category);
  const tone =
    TONE_BY_CATEGORY[product.category] ?? "bg-mustard/10 text-mustard-light";

  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <section className="mx-auto max-w-5xl px-6 py-16">
          <Link
            href="/catalog"
            className="text-sm font-semibold text-terracotta-dark hover:underline"
          >
            ← Back to Catalog
          </Link>

          <div className="mt-8 grid gap-10 md:grid-cols-2 md:items-start">
            <ProductImage kind={product.imageKind} tone={tone} size="lg" />

            <div>
              <div className="flex flex-wrap items-center gap-2">
                {category && (
                  <span className="rounded-full bg-mustard/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-mustard-light">
                    {category.name}
                  </span>
                )}
                {!product.edible && (
                  <span className="rounded-full bg-terracotta/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-terracotta-dark">
                    Non-Edible
                  </span>
                )}
              </div>

              <h1 className="mt-4 font-serif text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                {product.name}
              </h1>
              <p className="mt-4 text-ink/70">{product.description}</p>

              <h2 className="mt-8 text-sm font-semibold uppercase tracking-wide text-ink/50">
                Available Packing &amp; Pricing
              </h2>
              <div className="mt-3">
                <PackSizeGrid packSizes={product.packSizes} variant="detailed" />
              </div>

              <div className="mt-6 rounded-xl border border-mustard/20 bg-cream-dark/50 px-4 py-3 text-sm text-ink/70">
                <span className="font-semibold text-ink">Shelf life:</span>{" "}
                Best used within {product.shelfLifeMonths} months from date of
                manufacturing.
              </div>

              {!product.edible && (
                <p className="mt-4 text-sm font-medium text-terracotta-dark">
                  For external / industrial use only. Not for consumption.
                </p>
              )}

              <Link
                href="/contact"
                className="mt-8 inline-block rounded-full bg-mustard px-7 py-3.5 text-sm font-semibold text-ink shadow-lg shadow-mustard/20 transition-transform hover:-translate-y-0.5 hover:bg-mustard-light"
              >
                Enquire About This Product
              </Link>
            </div>
          </div>

          {product.benefits && (
            <div className="mt-16">
              <h2 className="font-serif text-2xl font-semibold text-ink">
                Key Benefits
              </h2>
              <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                {product.benefits.map((benefit) => (
                  <li
                    key={benefit}
                    className="flex items-start gap-3 rounded-xl border border-mustard/15 bg-white/60 p-4 text-sm text-ink/75"
                  >
                    <span
                      aria-hidden
                      className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-leaf/15 text-xs font-bold text-leaf"
                    >
                      ✓
                    </span>
                    {benefit}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-ink/45">
                Benefits are based on traditional use and general nutrition
                information, not medical advice.
              </p>
            </div>
          )}
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

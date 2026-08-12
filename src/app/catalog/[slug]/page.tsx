import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ProductGallery } from "@/components/product-gallery";
import { PackSizeGrid } from "@/components/pack-size-grid";
import { TrustBadges } from "@/components/trust-badges";
import { CATEGORIES } from "@/lib/categories";
import { PRODUCTS, getProductBySlug } from "@/lib/products";

const TONE_BY_CATEGORY: Record<string, string> = {
  "edible-oil": "bg-mustard/10 text-mustard-light",
  "non-edible-oil": "bg-terracotta/10 text-terracotta",
};

function splitLabel(text: string) {
  const separatorIndex = text.indexOf(": ");
  return {
    label: separatorIndex !== -1 ? text.slice(0, separatorIndex) : null,
    rest:
      separatorIndex !== -1 ? text.slice(separatorIndex + 2) : text,
  };
}

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

  const badges =
    product.badges ??
    [
      "100% Cold-Pressed",
      ...(product.extractionMethod.includes("Wood-Pressed")
        ? ["Wood-Pressed (Kacchi Ghani)"]
        : []),
      "Zero Preservatives",
    ];

  const specs = [
    { label: "Extraction Method", value: product.extractionMethod },
    {
      label: "Preservatives",
      value: product.preservativesNote ?? "None Added",
    },
    {
      label: "Shelf Life",
      value: `${product.shelfLifeMonths} Months from Manufacturing`,
    },
    {
      label: "Storage",
      value:
        product.storageNote ?? "Cool, dry place, away from direct sunlight",
    },
    { label: "Best For", value: product.usage },
  ];

  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <section className="mx-auto max-w-6xl px-6 py-16">
          <Link
            href="/catalog"
            className="text-sm font-semibold text-terracotta-dark hover:underline"
          >
            ← Back to Catalog
          </Link>

          <div className="mt-8 grid gap-12 md:grid-cols-2 md:items-start">
            <div className="md:sticky md:top-24">
              <ProductGallery tone={tone} imageCount={product.imageCount ?? 3} />
              <div className="mt-5 flex flex-wrap justify-center gap-2">
                {badges.map((badge) => (
                  <span
                    key={badge}
                    className="rounded-full border border-mustard/20 bg-white/70 px-3 py-1.5 text-xs font-semibold text-ink/70"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-terracotta-dark">
                {product.kicker ??
                  "Nature’s Finest, Pressed the Traditional Way"}
              </span>

              <div className="mt-3 flex flex-wrap items-center gap-2">
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
                <PackSizeGrid packSizes={product.packSizes} />
              </div>

              <Link
                href="/contact"
                className="mt-6 inline-block rounded-full bg-mustard px-7 py-3.5 text-sm font-semibold text-ink shadow-lg shadow-mustard/20 transition-transform hover:-translate-y-0.5 hover:bg-mustard-light"
              >
                Enquire About This Product
              </Link>

              <TrustBadges />

              <div className="mt-8 rounded-2xl border border-mustard/20 bg-cream-dark/40 p-6">
                <h2 className="text-sm font-semibold uppercase tracking-wide text-ink/50">
                  Specifications
                </h2>
                <dl className="mt-4 divide-y divide-mustard/15">
                  {specs.map((spec) => (
                    <div
                      key={spec.label}
                      className="flex items-center justify-between gap-4 py-3 text-sm"
                    >
                      <dt className="text-ink/55">{spec.label}</dt>
                      <dd className="text-right font-semibold text-ink">
                        {spec.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              {!product.edible && (
                <div className="mt-4 rounded-xl border border-terracotta/30 bg-terracotta/10 px-4 py-3 text-sm font-medium text-terracotta-dark">
                  For external / ritual use only. Not for consumption.
                </div>
              )}
            </div>
          </div>

          {product.benefits && (
            <div className="mt-16">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-terracotta-dark">
                Why You&rsquo;ll Love It
              </span>
              <h2 className="mt-3 font-serif text-2xl font-semibold text-ink">
                Key Benefits
              </h2>
              <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                {product.benefits.map((benefit) => {
                  const { label, rest } = splitLabel(benefit);

                  return (
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
                      <span>
                        {label && (
                          <strong className="font-semibold text-ink">
                            {label}:{" "}
                          </strong>
                        )}
                        {rest}
                      </span>
                    </li>
                  );
                })}
              </ul>
              <p className="mt-4 text-xs text-ink/45">
                Benefits are based on traditional use and general nutrition
                information, not medical advice.
              </p>
            </div>
          )}

          {product.modernUses && (
            <div className="mt-16">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-terracotta-dark">
                Beyond the Kitchen
              </span>
              <h2 className="mt-3 font-serif text-2xl font-semibold text-ink">
                Modern Uses &amp; Wellness
              </h2>
              <ul className="mt-6 space-y-3">
                {product.modernUses.map((use) => {
                  const { label, rest } = splitLabel(use);

                  return (
                    <li
                      key={use}
                      className="flex items-start gap-3 text-sm text-ink/75"
                    >
                      <span
                        aria-hidden
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta"
                      />
                      <span>
                        {label && (
                          <strong className="font-semibold text-ink">
                            {label}:{" "}
                          </strong>
                        )}
                        {rest}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}

          {product.nutritionalSnapshot && (
            <div className="mt-16">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-terracotta-dark">
                At a Glance
              </span>
              <h2 className="mt-3 font-serif text-2xl font-semibold text-ink">
                Nutritional Snapshot (Per 1 Tbsp / 14g)
              </h2>
              <div className="mt-6 overflow-hidden rounded-2xl border border-mustard/20">
                <table className="w-full border-collapse text-left text-sm">
                  <thead>
                    <tr className="bg-cream-dark/60">
                      <th className="px-4 py-3 font-semibold text-ink/70">
                        Nutrient Profile
                      </th>
                      <th className="px-4 py-3 font-semibold text-ink/70">
                        Details
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-mustard/15">
                    {product.nutritionalSnapshot.map((row) => (
                      <tr key={row.label} className="bg-white/60">
                        <td className="w-1/3 px-4 py-3 align-top font-semibold text-ink">
                          {row.label}
                        </td>
                        <td className="px-4 py-3 text-ink/75">
                          {row.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-xs italic text-ink/45">
                Nutritional values are approximate and based on standard 1
                Tbsp (14g) servings. Benefits are based on general
                nutrition information and are not intended as medical
                advice. Always fit oils into your daily macro and caloric
                goals.
              </p>
            </div>
          )}
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

import { formatPrice, type Product } from "@/lib/products";
import { ProductImage } from "@/components/product-image";

const TONE_BY_CATEGORY: Record<string, string> = {
  "edible-oil": "bg-mustard/10 text-mustard-light",
  "non-edible-oil": "bg-terracotta/10 text-terracotta",
  masalas: "bg-leaf/10 text-leaf",
  papad: "bg-mustard/10 text-mustard-light",
};

export function ProductCard({ product }: { product: Product }) {
  const tone = TONE_BY_CATEGORY[product.category] ?? "bg-mustard/10 text-mustard-light";

  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-mustard/15 bg-white/60 shadow-sm transition-all hover:-translate-y-1 hover:border-terracotta/30 hover:shadow-lg">
      <ProductImage kind={product.imageKind} tone={tone} />

      <div className="flex flex-1 flex-col p-5">
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

        <div className="mt-4 flex flex-wrap gap-2">
          {product.packSizes.map((pack) => (
            <span
              key={pack.size}
              className="rounded-full border border-mustard/20 bg-cream px-3 py-1 text-xs font-medium text-ink/80"
            >
              {pack.size} · {formatPrice(pack.price)}
            </span>
          ))}
        </div>

        {!product.edible && (
          <p className="mt-3 text-xs text-ink/50">
            For external / industrial use only. Not for consumption.
          </p>
        )}
      </div>
    </div>
  );
}

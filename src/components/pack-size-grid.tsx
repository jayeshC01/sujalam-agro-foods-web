import { formatPrice, type PackSize } from "@/lib/products";

export function PackSizeGrid({
  packSizes,
  variant = "compact",
}: {
  packSizes: PackSize[];
  variant?: "compact" | "detailed";
}) {
  return (
    <div
      className={
        variant === "compact"
          ? "grid grid-cols-2 gap-2"
          : "grid grid-cols-2 gap-3 sm:grid-cols-3"
      }
    >
      {packSizes.map((pack) => (
        <div
          key={pack.size}
          className={
            variant === "compact"
              ? "rounded-lg border border-mustard/20 bg-cream px-2.5 py-1.5 text-center"
              : "rounded-xl border border-mustard/20 bg-cream px-4 py-3 text-center shadow-sm"
          }
        >
          <div className="text-[11px] font-semibold uppercase tracking-wide text-ink/50">
            {pack.size}
          </div>
          <div
            className={
              variant === "compact"
                ? "mt-0.5 font-serif text-sm font-semibold text-terracotta-dark"
                : "mt-1 font-serif text-xl font-semibold text-terracotta-dark"
            }
          >
            {formatPrice(pack.price)}
          </div>
        </div>
      ))}
    </div>
  );
}

import { formatPrice, type PackSize } from "@/lib/products";

function pricePerLiter(pack: PackSize): number | null {
  const match = pack.size.trim().match(/^(\d+(?:\.\d+)?)\s*(ml|l)$/i);
  if (!match) return null;
  const value = parseFloat(match[1]);
  const liters = match[2].toLowerCase() === "l" ? value : value / 1000;
  return pack.price / liters;
}

export function PackSizeGrid({ packSizes }: { packSizes: PackSize[] }) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
      {packSizes.map((pack) => {
        const perLiter = pricePerLiter(pack);

        return (
          <div
            key={pack.size}
            className="group overflow-hidden rounded-2xl border border-mustard/20 shadow-sm transition-all hover:-translate-y-0.5 hover:border-terracotta/30 hover:shadow-md"
          >
            <div className="bg-ink py-2 text-center text-cream">
              <div className="text-[11px] font-semibold uppercase tracking-wide">
                {pack.size}
              </div>
            </div>
            <div className="bg-white px-4 py-3 text-center">
              <div className="font-serif text-xl font-semibold text-terracotta-dark">
                {formatPrice(pack.price)}
              </div>
              {perLiter && (
                <div className="mt-0.5 text-[11px] text-ink/40">
                  {formatPrice(perLiter)}/L
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

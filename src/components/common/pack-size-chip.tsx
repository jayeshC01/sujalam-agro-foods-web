import { formatPrice, type PackSize } from "@/lib/products";

/** Size-label + price content shared by the catalog card and the detail-page
 * pack selector. Callers own the outer `<button>` (width, hover, selected
 * emphasis differ between the two), this just renders the identical inner
 * two-row chip. */
export function PackSizeChip({
  pack,
  selected,
}: {
  pack: PackSize;
  selected: boolean;
}) {
  return (
    <>
      <div
        className={`py-1 text-center text-[10px] font-semibold uppercase tracking-wide ${
          selected ? "bg-leaf-dark text-cream" : "bg-ink text-cream"
        }`}
      >
        {pack.size}
      </div>
      <div className="bg-white py-1 text-center">
        <span className="font-serif text-sm font-bold text-leaf-dark">
          {formatPrice(pack.price)}
        </span>
      </div>
    </>
  );
}

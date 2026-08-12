export function QuantityStepper({
  quantity,
  onDecrease,
  onIncrease,
  size = "md",
}: {
  quantity: number;
  onDecrease: () => void;
  onIncrease: () => void;
  size?: "sm" | "md";
}) {
  const padding = size === "sm" ? "px-3 py-1.5" : "px-3 py-2";
  const width = size === "sm" ? "w-6" : "w-8";

  return (
    <div className="flex items-center rounded-full border border-mustard/25">
      <button
        type="button"
        onClick={onDecrease}
        aria-label="Decrease quantity"
        className={`${padding} text-ink/70 transition-colors hover:text-terracotta-dark`}
      >
        −
      </button>
      <span
        className={`${width} text-center text-sm font-semibold text-ink`}
      >
        {quantity}
      </span>
      <button
        type="button"
        onClick={onIncrease}
        aria-label="Increase quantity"
        className={`${padding} text-ink/70 transition-colors hover:text-terracotta-dark`}
      >
        +
      </button>
    </div>
  );
}

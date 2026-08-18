export function QuantityStepper({
  quantity,
  onDecrease,
  onIncrease,
  size = "md",
  variant = "pill",
}: {
  quantity: number;
  onDecrease: () => void;
  onIncrease: () => void;
  size?: "sm" | "md" | "lg";
  variant?: "pill" | "boxed";
}) {
  if (variant === "boxed") {
    return (
      <div className="flex items-stretch divide-x divide-leaf-dark overflow-hidden rounded-lg border border-leaf-dark">
        <button
          type="button"
          onClick={onDecrease}
          aria-label="Decrease quantity"
          className="flex h-9 w-9 items-center justify-center text-sm font-semibold text-ink/70 transition-colors hover:bg-leaf-dark/10"
        >
          −
        </button>
        <span className="flex h-9 w-9 items-center justify-center text-sm font-semibold text-ink">
          {quantity}
        </span>
        <button
          type="button"
          onClick={onIncrease}
          aria-label="Increase quantity"
          className="flex h-9 w-9 items-center justify-center text-sm font-semibold text-ink/70 transition-colors hover:bg-leaf-dark/10"
        >
          +
        </button>
      </div>
    );
  }

  const padding =
    size === "sm" ? "px-3 py-1.5" : size === "lg" ? "px-4 py-2.5" : "px-3 py-2";
  const width = size === "sm" ? "w-6" : size === "lg" ? "w-9" : "w-8";
  const textSize = size === "lg" ? "text-base" : "text-sm";

  return (
    <div className="flex items-center rounded-full border border-mustard/25">
      <button
        type="button"
        onClick={onDecrease}
        aria-label="Decrease quantity"
        className={`${padding} ${textSize} font-semibold text-ink/70 transition-colors hover:text-terracotta-dark`}
      >
        −
      </button>
      <span
        className={`${width} text-center ${textSize} font-semibold text-ink`}
      >
        {quantity}
      </span>
      <button
        type="button"
        onClick={onIncrease}
        aria-label="Increase quantity"
        className={`${padding} ${textSize} font-semibold text-ink/70 transition-colors hover:text-terracotta-dark`}
      >
        +
      </button>
    </div>
  );
}

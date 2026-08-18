/** Shopping-cart glyph shared by the catalog card and the detail-page Add to
 * Cart buttons. `withPlus` adds the small "+" mark used on the catalog card. */
export function CartIcon({
  size = 16,
  withPlus = false,
}: {
  size?: number;
  withPlus?: boolean;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 6h15l-1.5 9h-12z" />
      <path d="M6 6 5 3H2" />
      <circle cx="9.5" cy="20" r="1.3" />
      <circle cx="17.5" cy="20" r="1.3" />
      {withPlus && <path d="M12 9v4M10 11h4" />}
    </svg>
  );
}

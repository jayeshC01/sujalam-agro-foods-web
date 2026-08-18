import Link from "next/link";

export function CatalogCtaLink({
  className = "",
  onClick,
}: {
  className?: string;
  onClick?: () => void;
}) {
  return (
    <Link
      href="/catalog"
      onClick={onClick}
      className={`rounded-full bg-[#143524] px-5 py-2.5 text-sm font-semibold text-cream shadow-sm transition-colors hover:bg-leaf ${className}`}
    >
      Explore Catalog
    </Link>
  );
}

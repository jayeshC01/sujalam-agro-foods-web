import Link from "next/link";

export function CatalogIndicator({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/catalog"
      aria-label="Browse catalog"
      className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold/30 text-gold transition-colors hover:border-gold hover:text-gold-light ${className}`}
    >
      <svg
        width="19"
        height="19"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="3" width="7.5" height="7.5" rx="1.5" />
        <rect x="13.5" y="3" width="7.5" height="7.5" rx="1.5" />
        <rect x="3" y="13.5" width="7.5" height="7.5" rx="1.5" />
        <rect x="13.5" y="13.5" width="7.5" height="7.5" rx="1.5" />
      </svg>
    </Link>
  );
}

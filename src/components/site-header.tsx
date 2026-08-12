import Link from "next/link";
import { CartIndicator } from "@/components/cart-indicator";
import { CatalogCtaLink } from "@/components/catalog-cta-link";
import { MobileNav } from "@/components/mobile-nav";
import { SECTION_IDS } from "@/lib/site-config";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/catalog", label: "Catalog" },
  { href: `/#${SECTION_IDS.ourStory}`, label: "Our Story" },
  { href: "/contact", label: "Contact Us" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-mustard/25 bg-cream-dark shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-leaf text-cream">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 21c-4.5 0-7-3.5-7-8 0-4 3-7.5 7-11 4 3.5 7 7 7 11 0 4.5-2.5 8-7 8Z" />
              <path d="M12 21v-6" />
            </svg>
          </span>
          <span className="font-serif text-xl font-semibold leading-none tracking-tight text-ink">
            Sujalam
            <span className="block text-xs font-sans font-medium tracking-[0.25em] text-terracotta-dark">
              AGRO FOODS
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink/80 transition-colors hover:text-terracotta-dark"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <CartIndicator />
          <CatalogCtaLink className="hidden md:inline-block" />
          <MobileNav links={NAV_LINKS} />
        </div>
      </div>
    </header>
  );
}

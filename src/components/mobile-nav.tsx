"use client";

import Link from "next/link";
import { useState } from "react";
import { CatalogCtaLink } from "@/components/catalog-cta-link";

type NavLink = { href: string; label: string };

export function MobileNav({ links }: { links: NavLink[] }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-label="Toggle menu"
        className="flex h-10 w-10 items-center justify-center rounded-full text-gold md:hidden"
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {open ? (
            <path d="M6 6l12 12M18 6L6 18" />
          ) : (
            <path d="M4 7h16M4 12h16M4 17h16" />
          )}
        </svg>
      </button>

      {open && (
        <nav className="absolute inset-x-0 top-full flex flex-col gap-1 border-t border-mustard/15 bg-cream px-6 py-4 shadow-lg md:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-2 py-2.5 text-sm font-medium text-ink/80 transition-colors hover:bg-mustard/10 hover:text-terracotta-dark"
            >
              {link.label}
            </Link>
          ))}
          <CatalogCtaLink
            className="mt-2 text-center"
            onClick={() => setOpen(false)}
          />
        </nav>
      )}
    </>
  );
}

import Link from "next/link";
import { CATEGORIES } from "@/lib/categories";
import { CONTACT, SECTION_IDS } from "@/lib/site-config";

export function SiteFooter() {
  return (
    <footer className="border-t border-mustard/20 bg-leaf-dark text-cream/80">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 sm:grid-cols-2 md:grid-cols-4">
        <div>
          <span className="font-serif text-lg font-semibold text-cream">
            Sujalam Agro Foods
          </span>
          <p className="mt-3 text-sm text-cream/60">
            Sujalam Agro Foods brings you premium wood-pressed oils—both
            edible and non-edible. We source the finest seeds and extract
            them in-house using a traditional kacchi ghani, ensuring pure,
            cold-pressed goodness with absolutely no preservatives.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-cream/90">
            Catalog
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {CATEGORIES.map((category) => (
              <li key={category.slug}>
                <Link
                  href={`/catalog?category=${category.slug}`}
                  className="hover:text-mustard-light"
                >
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-cream/90">
            Company
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <Link
                href={`/#${SECTION_IDS.ourStory}`}
                className="hover:text-mustard-light"
              >
                Our Story
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-mustard-light">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-cream/90">
            Get in Touch
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm text-cream/70">
            <li>{CONTACT.email}</li>
            <li>{CONTACT.phone}</li>
            <li>{CONTACT.location}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10 px-6 py-6 text-center text-xs text-cream/50">
        © {new Date().getFullYear()} Sujalam Agro Foods. All rights reserved.
      </div>
    </footer>
  );
}

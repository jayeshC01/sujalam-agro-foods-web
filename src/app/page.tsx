import { CategoryGrid } from "@/components/category-grid";
import { Hero } from "@/components/hero";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WhyChooseUs } from "@/components/why-choose-us";

// Keeps the footer's copyright year current without opting the
// otherwise-static page into full dynamic rendering.
export const revalidate = 86400;

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <CategoryGrid />
        <WhyChooseUs />
      </main>
      <SiteFooter />
    </>
  );
}

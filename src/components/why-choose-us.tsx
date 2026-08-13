import Image from "next/image";
import { SECTION_IDS } from "@/lib/site-config";

const FEATURES = [
  {
    title: "Authentic Wood-Pressed (Kacchi Ghani)",
    description:
      "We extract our oils using traditional wooden blocks at low speeds and zero heat. No chemical solvents, no industrial refining—just pure, nutrient-dense oil.",
    image: "/images/features/feature-wood-pressed.png",
  },
  {
    title: "Hand-Selected Premium Seeds",
    description:
      "Great oil begins with great ingredients. We meticulously source only the highest-quality, farm-fresh seeds to ensure purity starts right at the raw material.",
    image: "/images/features/feature-farm-seeds.png",
  },
  {
    title: "100% Pure & Preservative-Free",
    description:
      "Nothing added, nothing taken away. We never use artificial additives or preservatives—just raw, unrefined goodness exactly as nature intended.",
    image: "/images/features/feature-pure.png",
  },
  {
    title: "From Our Mill to Your Home",
    description:
      "By managing the entire process in-house—from seed selection to final bottling—we eliminate middlemen. This allows us to guarantee uncompromised quality at an honest, transparent price.",
    image: "/images/features/feature-mill-to-home.png",
  },
];

export function WhyChooseUs() {
  return (
    <section id={SECTION_IDS.ourStory} className="bg-cream-dark">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-terracotta-dark">
            Our Story
          </span>
          <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Rooted in tradition. Poured with purity.
          </h2>
          <p className="mt-5 text-ink/70">
            At Sujalam Agro Foods, we believe the best things in life are
            kept simple. We bring the ancient tradition of kacchi ghani
            straight to your home. By carefully sourcing the finest seeds
            and wood-pressing them in-house, we ensure every drop retains
            its natural nutrients, authentic flavor, and rich aroma. Pure,
            unrefined, and always preservative-free.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-mustard/15 bg-cream p-5 shadow-sm"
            >
              <h3 className="text-center font-serif text-base font-semibold text-ink">
                {feature.title}
              </h3>
              <div className="mt-3 grid grid-cols-[3fr_7fr] items-center gap-4">
                <div className="relative aspect-square overflow-hidden rounded-xl bg-mustard/10">
                  <Image
                    src={feature.image}
                    alt=""
                    fill
                    sizes="120px"
                    className="object-cover"
                  />
                </div>
                <p className="text-sm text-ink/65">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

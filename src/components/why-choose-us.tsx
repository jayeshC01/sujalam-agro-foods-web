import { SECTION_IDS } from "@/lib/site-config";

const FEATURES = [
  {
    title: "Authentic Wood-Pressed (Kacchi Ghani)",
    description:
      "We extract our oils using traditional wooden blocks at low speeds and zero heat. No chemical solvents, no industrial refining—just pure, nutrient-dense oil.",
  },
  {
    title: "Hand-Selected Premium Seeds",
    description:
      "Great oil begins with great ingredients. We meticulously source only the highest-quality, farm-fresh seeds to ensure purity starts right at the raw material.",
  },
  {
    title: "100% Pure & Preservative-Free",
    description:
      "Nothing added, nothing taken away. We never use artificial additives or preservatives—just raw, unrefined goodness exactly as nature intended.",
  },
  {
    title: "From Our Mill to Your Home",
    description:
      "By managing the entire process in-house—from seed selection to final bottling—we eliminate middlemen. This allows us to guarantee uncompromised quality at an honest, transparent price.",
  },
];

export function WhyChooseUs() {
  return (
    <section id={SECTION_IDS.ourStory} className="bg-cream-dark">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-terracotta-dark">
              Our Story
            </span>
            <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Rooted in tradition. Poured with purity.
            </h2>
            <p className="mt-5 text-ink/70">
              At Sujalam Agro Foods, we believe the best things in life are
              kept simple. We bring the ancient tradition of kacchi ghani
              straight to your home. By carefully sourcing the finest
              seeds and wood-pressing them in-house, we ensure every drop
              retains its natural nutrients, authentic flavor, and rich
              aroma. Pure, unrefined, and always preservative-free.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {FEATURES.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-mustard/15 bg-cream p-6 shadow-sm"
              >
                <h3 className="font-serif text-base font-semibold text-ink">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-ink/65">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

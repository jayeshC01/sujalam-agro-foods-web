import { SECTION_IDS } from "@/lib/site-config";

const FEATURES = [
  {
    title: "Cold-Pressed, Never Refined",
    description:
      "Our oils are extracted the traditional ghani way — low heat, no chemical solvents, so the natural nutrients and aroma stay intact.",
  },
  {
    title: "Small-Batch Masalas",
    description:
      "Spices are sourced whole, roasted, and stone-ground in small batches so every packet reaches you full of flavour.",
  },
  {
    title: "Handmade Papad",
    description:
      "Rolled and sun-dried by hand using recipes passed down through generations — no shortcuts, no additives.",
  },
  {
    title: "Direct From Our Farms",
    description:
      "We work directly with growers, cutting out middlemen so quality stays high and prices stay fair.",
  },
];

export function WhyChooseUs() {
  return (
    <section id={SECTION_IDS.ourStory} className="bg-cream-dark/60">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-terracotta-dark">
              Our Story
            </span>
            <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Rooted in tradition, trusted in every home
            </h2>
            <p className="mt-5 text-ink/70">
              Sujalam Agro Foods started with a simple idea — food should be
              made the way our grandparents made it. No shortcuts, no
              artificial additives, just honest ingredients processed with
              care. Today, that same philosophy goes into every bottle of
              oil, every blend of masala, and every papad we roll.
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

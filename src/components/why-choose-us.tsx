import { SECTION_IDS } from "@/lib/site-config";

const FEATURES = [
  {
    title: "Cold-Pressed & Wood-Pressed",
    description:
      "Our oils are extracted the traditional wooden ghani way — low heat, no chemical solvents, so the natural nutrients and aroma stay intact.",
  },
  {
    title: "Handpicked, High-Quality Seeds",
    description:
      "We purchase premium seeds before every pressing, so purity starts right at the raw material.",
  },
  {
    title: "Zero Preservatives, Ever",
    description:
      "No preservatives, no additives — just pure oil, exactly as nature intended.",
  },
  {
    title: "No Middlemen, Just Quality",
    description:
      "From sourcing seeds to bottling oil, we manage the process ourselves — keeping quality high and pricing fair.",
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
              At Sujalam Agro Foods, we bring the ancient tradition of
              kacchi ghani straight to your home. By carefully selecting
              high-quality seeds and wood-pressing them ourselves, we
              retain maximum nutrients. Pure, cold-pressed, and always
              preservative-free.
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

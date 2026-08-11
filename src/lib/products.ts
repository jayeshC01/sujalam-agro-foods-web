export type ProductImageKind = "bottle" | "pouch" | "disc";

export type PackSize = {
  size: string;
  price: number;
};

export type Product = {
  slug: string;
  name: string;
  category: string;
  edible: boolean;
  imageKind: ProductImageKind;
  description: string;
  packSizes: PackSize[];
  /** 5-6 punchy, commonly-cited benefits. Oils only — omitted for papad/masala. */
  benefits?: string[];
  shelfLifeMonths: number;
};

// NOTE: All prices below are placeholder/dummy pricing until final rate cards are confirmed.
// Shelf life is a common placeholder (6 months from manufacturing) until per-product dates are provided.
const DEFAULT_SHELF_LIFE_MONTHS = 6;

export const PRODUCTS: Product[] = [
  {
    slug: "mustard-oil",
    name: "Mustard Oil",
    category: "edible-oil",
    edible: true,
    imageKind: "bottle",
    description:
      "Cold-pressed for a sharp, pungent aroma — perfect for pickles and everyday tadka.",
    packSizes: [
      { size: "500 ml", price: 165 },
      { size: "1 L", price: 300 },
    ],
    benefits: [
      "Rich in monounsaturated fats that support heart health and healthy cholesterol",
      "Naturally high in antioxidants like vitamin E, which fight free-radical damage",
      "Stimulates digestive enzymes, easing bloating and indigestion",
      "Warming Ayurvedic properties that aid circulation",
      "Nourishes the scalp and strengthens hair follicles, reducing hair fall & dandruff",
      "Cold-pressed without heat, so natural nutrients and aroma stay intact",
    ],
    shelfLifeMonths: DEFAULT_SHELF_LIFE_MONTHS,
  },
  {
    slug: "coconut-oil",
    name: "Coconut Oil",
    category: "edible-oil",
    edible: true,
    imageKind: "bottle",
    description:
      "Wood-pressed coconut oil with a naturally sweet aroma, ideal for cooking and hair care.",
    packSizes: [
      { size: "500 ml", price: 270 },
      { size: "1 L", price: 500 },
    ],
    benefits: [
      "Contains MCTs (medium-chain triglycerides) the body converts to quick, usable energy",
      "Helps improve HDL (good) cholesterol levels",
      "Moisturizes skin and supports collagen and wound healing",
      "Lauric acid content nourishes hair from root to tip",
      "Antimicrobial and anti-inflammatory — soothes skin and digestion",
      "Cold/wood-pressed to retain natural flavour and nutrition",
    ],
    shelfLifeMonths: DEFAULT_SHELF_LIFE_MONTHS,
  },
  {
    slug: "sesame-oil",
    name: "Sesame Oil",
    category: "edible-oil",
    edible: true,
    imageKind: "bottle",
    description:
      "Stone-pressed til oil with a rich, nutty flavour — a South Indian kitchen staple.",
    packSizes: [
      { size: "70 ml", price: 50 },
      { size: "100 ml", price: 65 },
      { size: "200 ml", price: 120 },
      { size: "500 ml", price: 270 },
      { size: "1 L", price: 500 },
    ],
    benefits: [
      "Rich in vitamin E, vitamin K, and omega-3 & omega-6 fatty acids",
      "Sesamin and sesamol antioxidants help reduce oxidative stress",
      "Used in Ayurveda to ease joint and muscle discomfort",
      "May support healthier blood sugar levels as part of a balanced diet",
      "Boosts scalp circulation, promoting stronger hair growth",
      "Deeply moisturizes and calms irritated skin",
    ],
    shelfLifeMonths: DEFAULT_SHELF_LIFE_MONTHS,
  },
  {
    slug: "kardai-oil",
    name: "Kardai Oil",
    category: "edible-oil",
    edible: true,
    imageKind: "bottle",
    description:
      "Cold-pressed safflower (kardai) oil, light on the palate and easy to digest.",
    packSizes: [
      { size: "500 ml", price: 270 },
      { size: "1 L", price: 500 },
    ],
    benefits: [
      "High linoleic acid content helps lower LDL (bad) cholesterol",
      "Traditionally used to ease menstrual cramps and discomfort",
      "Light, easy-to-digest oil suited to everyday cooking",
      "May help support healthy blood sugar and insulin sensitivity",
      "Healthy fats that support brain and cognitive function",
      "Helps reduce fine lines for a more youthful-looking skin",
    ],
    shelfLifeMonths: DEFAULT_SHELF_LIFE_MONTHS,
  },
  {
    slug: "almond-oil",
    name: "Almond Oil",
    category: "edible-oil",
    edible: true,
    imageKind: "bottle",
    description:
      "Pure cold-pressed almond oil, prized for cooking and skincare alike.",
    packSizes: [
      { size: "70 ml", price: 95 },
      { size: "100 ml", price: 130 },
      { size: "200 ml", price: 230 },
      { size: "500 ml", price: 540 },
      { size: "1 L", price: 1000 },
    ],
    benefits: [
      "Vitamin E-rich — helps repair collagen and reduce fine lines",
      "Lightweight and fast-absorbing, ideal as a daily skin moisturizer",
      "Nourishes the scalp, strengthens hair, and prevents split ends",
      "Omega 3-6-9 fatty acids that support the immune system",
      "Rich in monounsaturated fats that support healthy cholesterol",
      "Regular use may help reduce the appearance of dark circles",
    ],
    shelfLifeMonths: DEFAULT_SHELF_LIFE_MONTHS,
  },
  {
    slug: "erand-oil",
    name: "Erand Oil (Castor)",
    category: "non-edible-oil",
    edible: false,
    imageKind: "bottle",
    description:
      "Cold-pressed castor oil for external and industrial use — not for consumption.",
    packSizes: [
      { size: "500 ml", price: 140 },
      { size: "1 L", price: 250 },
    ],
    benefits: [
      "Deeply moisturizes dry, cracked skin",
      "Traditionally used to reduce dandruff and thicken hair",
      "Improves scalp circulation to support hair growth",
      "Rich in antioxidants that help soothe inflamed skin",
      "Used in Ayurveda (Eranda Taila) for joint and muscle massage",
      "For external application only — not for consumption",
    ],
    shelfLifeMonths: DEFAULT_SHELF_LIFE_MONTHS,
  },
  {
    slug: "mohata-oil",
    name: "Mohata Oil",
    category: "non-edible-oil",
    edible: false,
    imageKind: "bottle",
    description:
      "Traditionally extracted mahua (mohata) oil for external application.",
    packSizes: [
      { size: "200 ml", price: 75 },
      { size: "500 ml", price: 165 },
      { size: "1 L", price: 300 },
    ],
    benefits: [
      "Rich in emollients that soften and smoothen skin",
      "Traditionally used to ease joint and body aches",
      "Nourishes hair follicles for shine and growth",
      "Antioxidant-rich — helps reduce visible signs of aging",
      "A traditional ingredient in soap and body-care making",
      "For external application only — not for consumption",
    ],
    shelfLifeMonths: DEFAULT_SHELF_LIFE_MONTHS,
  },
  {
    slug: "diva-oil",
    name: "Diva Oil",
    category: "non-edible-oil",
    edible: false,
    imageKind: "bottle",
    description:
      "Pure lamp oil for diyas — clean-burning and traditionally made.",
    packSizes: [
      { size: "500 ml", price: 110 },
      { size: "1 L", price: 200 },
    ],
    benefits: [
      "Burns clean and steady with minimal soot",
      "Long burn-time keeps diyas lit for longer",
      "Traditionally blended for auspicious, everyday diya lighting",
      "Smokeless performance, well-suited for indoor use",
      "Made for daily pooja and festive lighting",
      "For lamp and ritual use only — not for consumption",
    ],
    shelfLifeMonths: DEFAULT_SHELF_LIFE_MONTHS,
  },
  {
    slug: "nagli-papad",
    name: "Nagli Papad",
    category: "papad",
    edible: true,
    imageKind: "disc",
    description:
      "Sun-dried finger-millet (nagli) papad, rolled fresh using a traditional recipe.",
    packSizes: [{ size: "200 g", price: 120 }],
    shelfLifeMonths: DEFAULT_SHELF_LIFE_MONTHS,
  },
  {
    slug: "urad-papad",
    name: "Urad Papad",
    category: "papad",
    edible: true,
    imageKind: "disc",
    description:
      "Crisp urad dal papad, hand-rolled and sun-dried the traditional way.",
    packSizes: [{ size: "200 g", price: 150 }],
    shelfLifeMonths: DEFAULT_SHELF_LIFE_MONTHS,
  },
  {
    slug: "garam-masala",
    name: "Garam Masala",
    category: "masalas",
    edible: true,
    imageKind: "pouch",
    description:
      "Stone-ground blend of whole spices for that authentic home-style aroma.",
    packSizes: [{ size: "100 g", price: 90 }],
    shelfLifeMonths: DEFAULT_SHELF_LIFE_MONTHS,
  },
  {
    slug: "kitchen-king-masala",
    name: "Kitchen King Masala",
    category: "masalas",
    edible: true,
    imageKind: "pouch",
    description:
      "An all-purpose spice blend that elevates everyday sabzis and curries.",
    packSizes: [{ size: "100 g", price: 85 }],
    shelfLifeMonths: DEFAULT_SHELF_LIFE_MONTHS,
  },
];

export function formatPrice(price: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(price);
}

export function getProductBySlug(slug: string) {
  return PRODUCTS.find((product) => product.slug === slug);
}

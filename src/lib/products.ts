export type PackSize = {
  size: string;
  price: number;
};

export type Product = {
  slug: string;
  name: string;
  category: string;
  edible: boolean;
  description: string;
  packSizes: PackSize[];
  /** 5-6 punchy, commonly-cited benefits. */
  benefits?: string[];
  shelfLifeMonths: number;
  extractionMethod: string;
  /** Shown as the "Best For" row in the specifications table. */
  usage: string;
  /** Overrides the "Preservatives" specification row. Defaults to "None Added". */
  preservativesNote?: string;
  /** Overrides the "Storage" specification row. */
  storageNote?: string;
  /** Overrides the auto-computed trust-badge chips shown under the product image. */
  badges?: string[];
  /** Overrides the small kicker line above the product title. */
  kicker?: string;
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
    description:
      "Extracted using the traditional kacchi ghani method, our pure Mustard Oil delivers a bold, pungent aroma and rich flavor. Unrefined and nutrient-dense, it is the authentic choice for pickles, curries, and your everyday tadka.",
    packSizes: [
      { size: "500 ml", price: 165 },
      { size: "1 L", price: 300 },
      { size: "5 L", price: 1450 },
      { size: "15 L", price: 4050 },
    ],
    benefits: [
      "Heart-Healthy: Rich in monounsaturated fats that help maintain healthy cholesterol levels.",
      "Antioxidant Powerhouse: Naturally high in Vitamin E to fight free-radical damage and support immunity.",
      "Digestive Aid: Stimulates essential digestive enzymes, helping to ease bloating and indigestion.",
      "Ayurvedic Warming: Features natural warming properties known to stimulate healthy blood circulation.",
      "Hair & Scalp Care: Deeply nourishes the scalp, strengthens hair follicles, and helps reduce dandruff.",
      "Uncompromised Purity: Wood-pressed extraction ensures maximum retention of natural nutrients, aroma, and flavor.",
    ],
    shelfLifeMonths: DEFAULT_SHELF_LIFE_MONTHS,
    extractionMethod: "Traditional Wood-Pressed (Kacchi Ghani)",
    usage: "Traditional Indian Cooking, Pickling, and Massage.",
    preservativesNote: "100% Natural – None Added",
    storageNote: "Store in a cool, dry place, away from direct sunlight.",
    badges: [
      "100% Wood-Pressed (Kacchi Ghani)",
      "Zero Preservatives",
      "Pure, Cold Extraction",
    ],
  },
  {
    slug: "coconut-oil",
    name: "Coconut Oil",
    category: "edible-oil",
    edible: true,
    description:
      "Extracted using the traditional kacchi ghani method, our pure Coconut Oil boasts a naturally sweet aroma and delicate flavor. Unrefined and deeply nourishing, it is the perfect multipurpose oil for wholesome cooking, baking, and natural skin and hair care.",
    packSizes: [
      { size: "500 ml", price: 270 },
      { size: "1 L", price: 500 },
      { size: "5 L", price: 2400 },
      { size: "15 L", price: 6900 },
    ],
    benefits: [
      "Quick Natural Energy: Rich in Medium-Chain Triglycerides (MCTs) that the body easily converts into clean, usable energy.",
      "Heart-Healthy Fats: Helps support healthy HDL (good) cholesterol levels as part of a balanced diet.",
      "Deep Skin Hydration: Naturally moisturizes the skin, supporting healthy collagen and soothing dryness.",
      "Intense Hair Nourishment: Packed with Lauric Acid to deeply penetrate the hair shaft, nourishing from root to tip.",
      "Soothing Properties: Features natural antimicrobial and anti-inflammatory benefits to calm the skin and support gentle digestion.",
      "Uncompromised Purity: Wood-pressed extraction ensures maximum retention of the coconut's natural sweetness, aroma, and vital nutrients.",
    ],
    shelfLifeMonths: DEFAULT_SHELF_LIFE_MONTHS,
    extractionMethod: "Traditional Wood-Pressed (Kacchi Ghani)",
    usage: "Wholesome Cooking, Baking, Skin, and Hair Care.",
    preservativesNote: "100% Natural – None Added",
    storageNote:
      "Store in a cool, dry place, away from direct sunlight. (Note: It is normal for pure coconut oil to solidify in cooler temperatures).",
    badges: [
      "100% Wood-Pressed (Kacchi Ghani)",
      "Zero Preservatives",
      "Pure, Cold Extraction",
    ],
    kicker: "Nature’s Finest Coconuts, Pressed the Traditional Way",
  },
  {
    slug: "sesame-oil",
    name: "Sesame Oil",
    category: "edible-oil",
    edible: true,
    description:
      "Extracted using the traditional kacchi ghani method, our pure Sesame (Til) Oil delivers a rich, naturally nutty flavor. Unrefined and packed with antioxidants, it is an essential staple for authentic South Indian cooking, Ayurvedic rituals, and everyday wellness.",
    packSizes: [
      { size: "70 ml", price: 50 },
      { size: "100 ml", price: 65 },
      { size: "200 ml", price: 120 },
      { size: "500 ml", price: 270 },
      { size: "1 L", price: 500 },
      { size: "5 L", price: 2400 },
      { size: "15 L", price: 6900 },
    ],
    benefits: [
      "Nutrient-Dense: Rich in Vitamin E, Vitamin K, and essential Omega-3 & Omega-6 fatty acids for overall wellness.",
      "Powerful Antioxidants: Packed with naturally occurring sesamin and sesamol to help fight free radicals and reduce oxidative stress.",
      "Ayurvedic Healing: Highly revered in Ayurveda as a massage oil to help ease joint and muscle discomfort.",
      "Metabolic Support: May help support healthier blood sugar levels as part of a balanced, nutritious diet.",
      "Hair & Scalp Vitality: Boosts natural scalp circulation, promoting stronger, healthier hair growth.",
      "Skin Soothing: Deeply moisturizes the body and calms dry or irritated skin, leaving a healthy, natural glow.",
    ],
    shelfLifeMonths: DEFAULT_SHELF_LIFE_MONTHS,
    extractionMethod: "Traditional Wood-Pressed (Kacchi Ghani)",
    usage: "South Indian Cooking, Ayurvedic Massage, and Skincare.",
    preservativesNote: "100% Natural – None Added",
    storageNote: "Store in a cool, dry place, away from direct sunlight.",
    badges: [
      "100% Wood-Pressed (Kacchi Ghani)",
      "Zero Preservatives",
      "Pure, Cold Extraction",
    ],
    kicker: "Nature’s Finest Sesame, Pressed the Traditional Way",
  },
  {
    slug: "kardai-oil",
    name: "Kardai Oil",
    category: "edible-oil",
    edible: true,
    description:
      "Extracted using the traditional kacchi ghani method, our pure Kardai (Safflower) Oil is exceptionally light and easy to digest. With its mild, neutral flavor, it is the perfect everyday cooking oil for wholesome, heart-healthy meals that won't overpower your dishes.",
    packSizes: [
      { size: "500 ml", price: 270 },
      { size: "1 L", price: 500 },
      { size: "5 L", price: 2400 },
      { size: "15 L", price: 6900 },
    ],
    benefits: [
      "Heart-Healthy Fats: High in linoleic acid to help lower LDL (bad) cholesterol and promote cardiovascular health.",
      "Light & Gentle: A highly digestible, neutral-tasting oil that is perfectly suited for all your everyday culinary needs.",
      "Metabolic Balance: May help support healthy blood sugar levels and insulin sensitivity as part of a balanced diet.",
      "Cognitive Support: Packed with essential healthy fats known to support optimal brain health and cognitive function.",
      "Women's Wellness: Traditionally used in natural remedies to help ease menstrual cramps and discomfort.",
      "Radiant Skin: Features deeply hydrating properties that help nourish the skin and reduce the appearance of fine lines for a youthful glow.",
    ],
    shelfLifeMonths: DEFAULT_SHELF_LIFE_MONTHS,
    extractionMethod: "Traditional Wood-Pressed (Kacchi Ghani)",
    usage: "Everyday Cooking, Light Sautéing, and Daily Wellness.",
    preservativesNote: "100% Natural – None Added",
    storageNote: "Store in a cool, dry place, away from direct sunlight.",
    badges: [
      "100% Wood-Pressed (Kacchi Ghani)",
      "Zero Preservatives",
      "Pure, Cold Extraction",
    ],
    kicker: "Nature’s Finest Kardai, Pressed the Traditional Way",
  },
  {
    slug: "almond-oil",
    name: "Almond Oil",
    category: "edible-oil",
    edible: true,
    description:
      "Extracted using the traditional kacchi ghani method, our pure Almond Oil is a luxurious, multi-purpose elixir. Prized for its delicate, nutty flavor in culinary dishes, it is equally celebrated as a deeply nourishing treatment for radiant skin and healthy hair.",
    packSizes: [
      { size: "70 ml", price: 95 },
      { size: "100 ml", price: 130 },
      { size: "200 ml", price: 230 },
      { size: "500 ml", price: 540 },
      { size: "1 L", price: 1000 },
    ],
    benefits: [
      "Youthful Glow: Rich in natural Vitamin E, which helps repair collagen and visibly reduce fine lines.",
      "Lightweight Hydration: Fast-absorbing and non-greasy, making it an ideal daily moisturizer for soft, supple skin.",
      "Hair Revitalization: Deeply nourishes the scalp, strengthens hair strands, and helps prevent split ends.",
      "Immune & Overall Health: Packed with essential Omega 3, 6, and 9 fatty acids known to support a healthy immune system.",
      "Heart-Healthy: Abundant in monounsaturated fats that help maintain healthy cholesterol levels as part of a balanced diet.",
      "Brightening Care: Regular topical application may naturally help soothe the delicate under-eye area and reduce the appearance of dark circles.",
    ],
    shelfLifeMonths: DEFAULT_SHELF_LIFE_MONTHS,
    extractionMethod: "Traditional Wood-Pressed (Kacchi Ghani)",
    usage: "Gourmet Cooking, Baking, Skincare, and Hair Nourishment.",
    preservativesNote: "100% Natural – None Added",
    storageNote: "Store in a cool, dry place, away from direct sunlight.",
    badges: [
      "100% Wood-Pressed (Kacchi Ghani)",
      "Zero Preservatives",
      "Pure, Cold Extraction",
    ],
    kicker: "Nature’s Finest Almonds, Pressed the Traditional Way",
  },
  {
    slug: "sunflower-oil",
    name: "Sunflower Oil",
    category: "edible-oil",
    edible: true,
    description:
      "Extracted using the traditional kacchi ghani method, our pure Sunflower Oil is incredibly light, versatile, and packed with natural goodness. With its mild flavor and high heat tolerance, it is the ideal everyday cooking oil for frying, baking, and sautéing—ensuring your food’s natural flavors take center stage.",
    packSizes: [
      { size: "500 ml", price: 140 },
      { size: "1 L", price: 260 },
      { size: "5 L", price: 1250 },
      { size: "15 L", price: 3600 },
    ],
    benefits: [
      "Light & Versatile: Features a smooth, neutral flavor profile that makes it perfect for a wide variety of traditional Indian and global dishes.",
      "High Heat Friendly: Excellent for high-temperature cooking methods like deep-frying and sautéing without breaking down its nutritional value.",
      "Heart-Healthy Fats: Rich in oleic acid and essential monounsaturated fats that help support a healthy cardiovascular system.",
      "Antioxidant Powerhouse: Naturally loaded with Vitamin E, a vital antioxidant that helps protect the body's cells from free-radical damage.",
      "Radiant Skin: The natural vitamins and fatty acids help nourish the skin from the inside out, promoting a healthy, youthful glow.",
      "Uncompromised Purity: Wood-pressed extraction ensures the oil retains its maximum natural nutrients, completely free from chemical refining.",
    ],
    shelfLifeMonths: DEFAULT_SHELF_LIFE_MONTHS,
    extractionMethod: "Traditional Wood-Pressed (Kacchi Ghani)",
    usage: "Everyday Cooking, Deep Frying, and Baking.",
    preservativesNote: "100% Natural – None Added",
    storageNote: "Store in a cool, dry place, away from direct sunlight.",
    badges: [
      "100% Wood-Pressed (Kacchi Ghani)",
      "Zero Preservatives",
      "Pure, Cold Extraction",
    ],
    kicker: "Nature’s Finest Sunflowers, Pressed the Traditional Way",
  },
  {
    slug: "erand-oil",
    name: "Erand Oil (Castor)",
    category: "non-edible-oil",
    edible: false,
    description:
      "Extracted through a pure, cold-pressing method, our Erand (Castor) Oil is a thick, deeply nourishing oil designed for topical and wellness applications. Rich in beneficial fatty acids, it is the ultimate natural remedy for hair vitality, skin hydration, and traditional massage. (Strictly not for consumption).",
    packSizes: [
      { size: "500 ml", price: 140 },
      { size: "1 L", price: 250 },
      { size: "5 L", price: 1200 },
      { size: "15 L", price: 3450 },
    ],
    benefits: [
      "Intense Hydration: Deeply moisturizes severely dry, cracked skin and effectively locks in moisture.",
      "Hair & Lash Vitality: Traditionally used to naturally thicken hair, condition eyebrows/lashes, and reduce dandruff.",
      "Scalp Circulation: Gently stimulates the scalp to support stronger, healthier hair growth.",
      "Skin Soothing: Rich in natural antioxidants and ricinoleic acid to help soothe irritated or inflamed skin.",
      "Ayurvedic Massage: Revered in Ayurveda (Eranda Taila) as a warming massage oil to comfort joints and muscles.",
      "Strictly External: 100% pure, safely processed for external, cosmetic, and ritual applications only—not for consumption.",
    ],
    shelfLifeMonths: DEFAULT_SHELF_LIFE_MONTHS,
    extractionMethod: "100% Cold-Pressed",
    usage: "Skincare, Hair Care, and Ayurvedic Massage (External Use Only).",
    preservativesNote: "100% Natural – None Added",
    storageNote: "Store in a cool, dry place, away from direct sunlight.",
    badges: [
      "100% Cold-Pressed",
      "Zero Preservatives",
      "Pure, Cold Extraction",
    ],
    kicker: "Nature’s Finest Castor, Pressed the Traditional Way",
  },
  {
    slug: "mohata-oil",
    name: "Mohata Oil",
    category: "non-edible-oil",
    edible: false,
    description:
      "Extracted through a pure, cold-pressing method, our Mohata (Mahua) Oil is a time-honored botanical oil revered for its therapeutic properties. Rich in natural emollients, it is an exceptional choice for traditional body massage, skin nourishment, and artisanal soap making. (Strictly not for consumption).",
    packSizes: [
      { size: "200 ml", price: 75 },
      { size: "500 ml", price: 165 },
      { size: "1 L", price: 300 },
      { size: "5 L", price: 1450 },
      { size: "15 L", price: 4050 },
    ],
    benefits: [
      "Deeply Emollient: Rich in natural emollients that deeply penetrate to soften, smooth, and hydrate rough skin.",
      "Soothing Relief: Traditionally utilized in localized massage therapies to help ease joint discomfort and everyday body aches.",
      "Hair Vitality: Nourishes the scalp and hair follicles, promoting a natural, healthy shine and supporting hair strength.",
      "Age-Defying Antioxidants: Packed with natural antioxidants that help protect the skin and reduce the visible signs of aging.",
      "Artisanal Crafter’s Choice: A highly valued, traditional base ingredient for crafting natural, handmade soaps and body-care products.",
      "Strictly External: 100% pure, safely processed for skincare, massage, and ritual applications only—not for consumption.",
    ],
    shelfLifeMonths: DEFAULT_SHELF_LIFE_MONTHS,
    extractionMethod: "100% Cold-Pressed",
    usage: "Skincare, Therapeutic Massage, and Soap Making (External Use Only).",
    preservativesNote: "100% Natural – None Added",
    storageNote: "Store in a cool, dry place, away from direct sunlight.",
    badges: [
      "100% Cold-Pressed",
      "Zero Preservatives",
      "Pure, Cold Extraction",
    ],
    kicker: "Nature’s Finest Mahua, Pressed the Traditional Way",
  },
  {
    slug: "diva-oil",
    name: "Diva Oil",
    category: "non-edible-oil",
    edible: false,
    description:
      "Crafted from a pure blend of traditional cold-pressed oils, our Diva (Lamp) Oil is formulated specifically for daily pooja and auspicious rituals. It provides a clean, steady, and long-lasting flame with minimal soot, making it the perfect choice for your everyday devotion. (Strictly not for consumption).",
    packSizes: [
      { size: "500 ml", price: 110 },
      { size: "1 L", price: 200 },
      { size: "5 L", price: 950 },
      { size: "15 L", price: 2700 },
    ],
    benefits: [
      "Clean & Steady Flame: Burns bright and steady with minimal soot, helping keep your pooja space and silver/brass diyas pristine.",
      "Extended Burn Time: Specially formulated to keep your diyas lit longer during extended rituals, aartis, or festivals.",
      "Auspicious Tradition: Thoughtfully blended from pure, traditional oils specifically chosen for spiritual well-being and daily prayer.",
      "Indoor-Friendly: Delivers a virtually smokeless performance, making it highly suitable and safe for closed, indoor mandirs.",
      "Festive & Daily Use: The ideal, reliable choice for both your everyday morning pooja and grand festive lighting like Diwali.",
      "Strictly for Rituals: Crafted safely for lamp lighting and spiritual use only—strictly not for consumption or cosmetic use.",
    ],
    shelfLifeMonths: DEFAULT_SHELF_LIFE_MONTHS,
    extractionMethod: "Traditional Cold-Pressed Blend",
    usage: "Pooja, Diya Lighting, and Festive Rituals (Not for Consumption).",
    preservativesNote: "100% Natural – None Added",
    storageNote: "Store in a cool, dry place, away from direct sunlight.",
    badges: [
      "Pure Cold-Pressed Blend",
      "Zero Preservatives",
      "Clean & Steady Flame",
    ],
    kicker: "Nature’s Finest, Crafted for Rituals",
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

export type PackSize = {
  size: string;
  price: number;
};

export type NutritionRow = {
  label: string;
  value: string;
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
  /** Number of gallery images/thumbnails on the detail page. Defaults to 3. */
  imageCount?: number;
  /** Bulleted "Modern Uses & Wellness" list shown below Key Benefits. */
  modernUses?: string[];
  /** "Nutritional Snapshot (Per 1 Tbsp / 14g)" table rows shown below Modern Uses. */
  nutritionalSnapshot?: NutritionRow[];
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
      { size: "500 ml", price: 180 },
      { size: "1 L", price: 350 },
      { size: "5 L", price: 1700 },
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
    modernUses: [
      "Spicy Tadka & Dressings: Drizzle hot over lentil (dal) protein bowls or use as a base for punchy, fiery marinades.",
      "Thermogenic Cooking: Its natural heat makes it a favorite for winter bulk-cooking and spicy Indian meal prep.",
      "Deep Tissue Relief: Traditionally warmed and rubbed into sore calves and joints for instant, warming relief after intense cardio.",
    ],
    nutritionalSnapshot: [
      {
        label: "Primary Fats",
        value:
          "~60% MUFA (Erucic & Oleic acids) with an optimal Omega-3 to Omega-6 ratio.",
      },
      {
        label: "Vitamins & Minerals",
        value: "Contains natural antibacterial compounds (Glucosinolates).",
      },
      {
        label: "Fitness Note",
        value:
          "Often celebrated in fitness circles for its warming properties that naturally stimulate circulation and digestion.",
      },
    ],
  },
  {
    slug: "groundnut-oil",
    name: "Groundnut Oil",
    category: "edible-oil",
    edible: true,
    description:
      "Extracted using the traditional kacchi ghani method, our pure Groundnut Oil delivers a rich, naturally nutty aroma and hearty flavor. Unrefined and packed with natural plant sterols, it is the ultimate versatile oil for authentic Indian cooking, offering the perfect balance of taste and nutrition.",
    packSizes: [
      { size: "500 ml", price: 180 },
      { size: "1 L", price: 350 },
      { size: "5 L", price: 1700 },
    ],
    benefits: [
      "Cholesterol Control: Packed with natural phytosterols (plant sterols) that actively help block the absorption of cholesterol in the digestive tract.",
      "Unique Antioxidants: One of the rare oils to contain Resveratrol (the same heart-healthy antioxidant found in grapes), which helps combat cellular stress.",
      "Stable & Versatile: Naturally stable under moderate heat, making it perfect for tempering (tadka) and sautéing without destroying its nutrients.",
      "Sustained Energy: Abundant in oleic acid (Omega-9), providing a clean, sustained energy source that supports a healthy metabolism.",
      "Skin Nourishment: Rich in natural Vitamin E and emollients; when applied topically, it helps lock in moisture and soothe dry, irritated skin.",
      "Uncompromised Purity: Wood-pressed extraction ensures the oil retains its deep, roasted aroma and full nutritional profile.",
    ],
    shelfLifeMonths: DEFAULT_SHELF_LIFE_MONTHS,
    extractionMethod: "Traditional Wood-Pressed (Kacchi Ghani)",
    usage: "Everyday Cooking, Sautéing, and Traditional Indian Dishes.",
    preservativesNote: "100% Natural – None Added",
    storageNote: "Store in a cool, dry place, away from direct sunlight.",
    badges: [
      "100% Wood-Pressed (Kacchi Ghani)",
      "Zero Preservatives",
      "Pure, Cold Extraction",
    ],
    kicker: "Nature’s Finest Groundnuts, Pressed the Traditional Way",
    modernUses: [
      "Macro-Friendly Meal Prep: The go-to healthy fat for high-protein meal prep, offering a deliciously nutty base for chicken, tofu, and stir-fries.",
      "Nutty Salad Dressings: Whisk into vinaigrettes for a rich, peanut-forward flavor in Thai-style or Asian-fusion salads.",
      "Post-Workout Massage: Traditionally warmed and massaged into tired joints and muscles to help soothe soreness after heavy training.",
      "Skin Barrier Support: Massage a few drops directly onto dry skin patches to lock in moisture and utilize its natural Vitamin E content.",
    ],
    nutritionalSnapshot: [
      {
        label: "Primary Fats",
        value:
          "~50% MUFA (Oleic Acid / Omega-9) & ~30% PUFA (Linoleic Acid).",
      },
      {
        label: "Key Superpower",
        value:
          "Exceptionally high in Phytosterols (plant cholesterols) that competitively inhibit the absorption of bad cholesterol in the gut.",
      },
      {
        label: "Fitness Note",
        value:
          "Contains Resveratrol, a unique antioxidant known to support cardiovascular health and healthy blood flow during exercise.",
      },
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
      { size: "500 ml", price: 355 },
      { size: "1 L", price: 700 },
      { size: "5 L", price: 3450 },
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
    modernUses: [
      "Pre-Workout Fuel: Blend into black coffee (bulletproof coffee) for a quick, clean energy source before hitting the gym.",
      "Morning Detox (Oil Pulling): Swish a tablespoon in your mouth for 10 minutes every morning for trending oral hygiene and teeth whitening.",
      "Vegan & Keto Baking: The ultimate clean-eating substitute for butter in protein brownies and keto-friendly desserts.",
      "Post-Workout Smoothies: Drop a spoonful into your protein shake for added healthy fats that keep you full longer.",
    ],
    nutritionalSnapshot: [
      {
        label: "Primary Fats",
        value:
          "~85% Saturated Fat (Rich in Medium-Chain Triglycerides / MCTs)",
      },
      {
        label: "Key Superpower",
        value:
          "Contains ~50% Lauric Acid, known for its antimicrobial properties.",
      },
      {
        label: "Fitness Note",
        value:
          "Unlike long-chain fats, MCTs are rapidly broken down and absorbed by the liver, converting almost instantly into usable energy rather than being stored as fat.",
      },
    ],
  },
  {
    slug: "sesame-oil",
    name: "Sesame Oil",
    category: "edible-oil",
    edible: true,
    description:
      "Extracted using the traditional kacchi ghani method, our pure Sesame (Til) Oil delivers a rich, naturally nutty flavor. Unrefined and packed with antioxidants, it is an essential staple for authentic South Indian cooking, Ayurvedic rituals, and everyday wellness.",
    packSizes: [
      { size: "70 ml", price: 46 },
      { size: "100 ml", price: 66 },
      { size: "200 ml", price: 132 },
      { size: "500 ml", price: 330 },
      { size: "1 L", price: 650 },
      { size: "5 L", price: 3200 },
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
    modernUses: [
      "Macro-Friendly Meal Prep: The perfect high-heat wok oil for tossing your meal-prep chicken, tofu, and broccoli bowls.",
      "Gourmet Salad Dressings: Whisk with soy sauce, ginger, and lime for a low-calorie, high-flavor Asian dressing.",
      "Ayurvedic Oil Pulling: The traditional alternative to coconut oil for morning jaw relaxation and gum health.",
      "Muscle Recovery: Used externally as a warm massage oil post-leg-day to soothe tired joints and muscles.",
    ],
    nutritionalSnapshot: [
      {
        label: "Primary Fats",
        value:
          "Perfectly balanced: ~40% MUFA (Monounsaturated) & ~40% PUFA (Polyunsaturated).",
      },
      {
        label: "Vitamins & Minerals",
        value:
          "Contains naturally occurring Vitamin K (supports bone metabolism).",
      },
      {
        label: "Fitness Note",
        value:
          "Packed with Sesamin and Sesamol—powerful antioxidants that help combat oxidative stress caused by intense training.",
      },
    ],
  },
  {
    slug: "safflower-oil",
    name: "Safflower Oil",
    category: "edible-oil",
    edible: true,
    description:
      "Extracted using the traditional kacchi ghani method, our pure Safflower (Kardai) Oil is exceptionally light and easy to digest. With its mild, neutral flavor, it is the perfect everyday cooking oil for wholesome, heart-healthy meals that won't overpower your dishes.",
    packSizes: [
      { size: "500 ml", price: 230 },
      { size: "1 L", price: 450 },
      { size: "5 L", price: 2200 },
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
    kicker: "Nature’s Finest Safflower, Pressed the Traditional Way",
    modernUses: [
      "High-Heat Searing: Perfect for getting that aesthetic crust on your steaks or salmon without burning the oil.",
      "Lean Marinades: Mixes seamlessly with herbs and spices for overnight protein marinades.",
      "Gut-Friendly Cooking: Exceptionally light on the stomach, making it ideal for the easily digestible meals you eat before a heavy training session.",
    ],
    nutritionalSnapshot: [
      {
        label: "Primary Fats",
        value:
          "~75% PUFA (Linoleic Acid), making it one of the richest sources of Omega-6.",
      },
      {
        label: "Vitamins & Minerals",
        value: "Contains trace amounts of Vitamin E and K.",
      },
      {
        label: "Fitness Note",
        value:
          "High linoleic acid content is heavily researched for its potential to help improve lean muscle mass to fat ratios and regulate blood sugar spikes when combined with a balanced diet.",
      },
    ],
  },
  {
    slug: "almond-oil",
    name: "Almond Oil",
    category: "edible-oil",
    edible: true,
    description:
      "Extracted using the traditional kacchi ghani method, our pure Almond Oil is a luxurious, multi-purpose elixir. Prized for its delicate, nutty flavor in culinary dishes, it is equally celebrated as a deeply nourishing treatment for radiant skin and healthy hair.",
    packSizes: [
      { size: "70 ml", price: 210 },
      { size: "100 ml", price: 300 },
      { size: "200 ml", price: 600 },
      { size: "500 ml", price: 1500 },
      { size: "1 L", price: 2990 },
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
    modernUses: [
      "Aesthetic Breakfasts: Drizzle over protein oatmeal, acai bowls, or Greek yogurt for a nutty, aesthetic finish.",
      "Clean Salad Vinaigrettes: Mix with apple cider vinegar for a light, heart-healthy dressing that won't ruin your macro count.",
      "The \"Glow-Up\" Routine: Use as a natural, non-comedogenic base for evening Gua Sha facial massages or to lock in skin moisture post-shower.",
    ],
    nutritionalSnapshot: [
      {
        label: "Primary Fats",
        value:
          "~70% MUFA (Oleic Acid - Omega 9), excellent for heart health.",
      },
      {
        label: "Vitamins & Minerals",
        value: "Provides roughly 35% of your Daily RDA of Vitamin E.",
      },
      {
        label: "Fitness Note",
        value:
          "Vitamin E is a fat-soluble antioxidant essential for repairing cellular damage and keeping your skin glowing while you sweat.",
      },
    ],
  },
  {
    slug: "sunflower-oil",
    name: "Sunflower Oil",
    category: "edible-oil",
    edible: true,
    description:
      "Extracted using the traditional kacchi ghani method, our pure Sunflower Oil is incredibly light, versatile, and packed with natural goodness. With its mild flavor and high heat tolerance, it is the ideal everyday cooking oil for frying, baking, and sautéing—ensuring your food’s natural flavors take center stage.",
    packSizes: [
      { size: "500 ml", price: 218 },
      { size: "1 L", price: 425 },
      { size: "5 L", price: 2075 },
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
    modernUses: [
      "Air-Fryer Friendly: Toss your sweet potato fries or chickpeas in a light coat before air-frying for a guilt-free crunch.",
      "Guilt-Free Sautéing: A completely neutral flavor profile, meaning it won't overpower your carefully seasoned meal-prep proteins.",
      "Clean Baking: The perfect light moisture-binder for homemade protein bars and energy bites.",
    ],
    nutritionalSnapshot: [
      {
        label: "Primary Fats",
        value:
          "High in MUFA and PUFA (specifically Linoleic Acid - Omega 6).",
      },
      {
        label: "Vitamins & Minerals",
        value: "Provides roughly 30% to 40% of your Daily RDA of Vitamin E.",
      },
      {
        label: "Fitness Note",
        value:
          "Because it is cold-pressed and unrefined, this oil retains its natural Vitamin E, which is often completely destroyed in commercial refined oils.",
      },
    ],
  },
  {
    slug: "castor-oil",
    name: "Castor Oil",
    category: "non-edible-oil",
    edible: false,
    description:
      "Extracted through a pure, cold-pressing method, our Castor (Erand) Oil is a thick, deeply nourishing oil designed for topical and wellness applications. Rich in beneficial fatty acids, it is the ultimate natural remedy for hair vitality, skin hydration, and traditional massage. (Strictly not for consumption).",
    packSizes: [
      { size: "100 ml", price: 26 },
      { size: "200 ml", price: 52 },
      { size: "500 ml", price: 140 },
      { size: "1 L", price: 250 },
      { size: "5 L", price: 1200 },
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
      { size: "100 ml", price: 150 },
      { size: "200 ml", price: 300 },
      { size: "500 ml", price: 750 },
      { size: "1 L", price: 1490 },
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
    imageCount: 2,
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

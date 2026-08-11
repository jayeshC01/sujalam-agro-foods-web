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
};

// NOTE: All prices below are placeholder/dummy pricing until final rate cards are confirmed.
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
  },
  {
    slug: "mohata-oil",
    name: "Mohata Oil",
    category: "non-edible-oil",
    edible: false,
    imageKind: "bottle",
    description: "Traditionally extracted mohata oil for external application.",
    packSizes: [
      { size: "200 ml", price: 75 },
      { size: "500 ml", price: 165 },
      { size: "1 L", price: 300 },
    ],
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
  },
];

export function formatPrice(price: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(price);
}

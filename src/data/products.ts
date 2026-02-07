// Sweet Trails Complete Product Catalogue
// All prices in Nigerian Naira (₦)

import puffPuffImage from "@/assets/products/puff-puff-chocolate.jpg";
import pepperedPlatterImage from "@/assets/products/peppered-platter.jpg";
import smallChopsImage from "@/assets/products/small-chops.jpg";
import diamondPackageImage from "@/assets/products/diamond-package.jpg";

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: "small-chops" | "main-meals" | "drinks" | "packages";
  image: string;
  badge?: string;
  isSpicy?: boolean;
  isPremium?: boolean;
  servings?: string;
}

export const categories = [
  { id: "small-chops", label: "Small Chops", emoji: "🍢" },
  { id: "main-meals", label: "Main Meals", emoji: "🍛" },
  { id: "drinks", label: "Drinks", emoji: "🥤" },
  { id: "packages", label: "Gift Packages", emoji: "🎁" },
] as const;

export const products: Product[] = [
  // ============== SMALL CHOPS ==============
  {
    id: "puff-puff-classic",
    name: "Puff Puff Classic",
    description: "Soft, airy, and dangerously addictive. Our signature fluffy dough balls.",
    price: 2500,
    category: "small-chops",
    image: puffPuffImage,
    servings: "10-12 pieces",
  },
  {
    id: "puff-puff-chocolate",
    name: "Chocolate Glazed Puff Puff",
    description: "Our signature twist with rich Belgian chocolate glaze. Irresistible.",
    price: 3500,
    category: "small-chops",
    image: puffPuffImage,
    badge: "Signature",
    isPremium: true,
  },
  {
    id: "puff-puff-red-velvet",
    name: "Red Velvet Puff Puff",
    description: "Decadent red velvet dough with cream cheese drizzle.",
    price: 4000,
    category: "small-chops",
    image: puffPuffImage,
    badge: "New",
    isPremium: true,
  },
  {
    id: "samosa-beef",
    name: "Beef Samosas",
    description: "Crispy golden triangles filled with seasoned minced beef.",
    price: 3000,
    category: "small-chops",
    image: smallChopsImage,
    servings: "6 pieces",
  },
  {
    id: "samosa-chicken",
    name: "Chicken Samosas",
    description: "Crispy pastry pockets with perfectly spiced shredded chicken.",
    price: 3000,
    category: "small-chops",
    image: smallChopsImage,
    servings: "6 pieces",
  },
  {
    id: "samosa-veggie",
    name: "Veggie Samosas",
    description: "Plant-based filling with potatoes, peas, and aromatic spices.",
    price: 2500,
    category: "small-chops",
    image: smallChopsImage,
    servings: "6 pieces",
  },
  {
    id: "spring-roll-classic",
    name: "Classic Spring Rolls",
    description: "Crispy rolls with mixed vegetables and signature seasoning.",
    price: 3000,
    category: "small-chops",
    image: smallChopsImage,
    servings: "8 pieces",
  },
  {
    id: "spring-roll-shrimp",
    name: "Shrimp Spring Rolls",
    description: "Premium prawns wrapped in crispy shells. A seafood lover's dream.",
    price: 4500,
    category: "small-chops",
    image: smallChopsImage,
    badge: "Premium",
    isPremium: true,
    servings: "6 pieces",
  },
  {
    id: "mosa",
    name: "Mosa (Plantain Puffs)",
    description: "Sweet ripe plantain fried to golden perfection. A Nigerian classic.",
    price: 2000,
    category: "small-chops",
    image: puffPuffImage,
    servings: "10 pieces",
  },
  {
    id: "peppered-gizzard",
    name: "Peppered Gizzard",
    description: "Tender chicken gizzards in our fiery signature pepper sauce.",
    price: 4000,
    category: "small-chops",
    image: pepperedPlatterImage,
    isSpicy: true,
    badge: "Spicy 🔥",
  },
  {
    id: "peppered-chicken",
    name: "Peppered Chicken",
    description: "Juicy chicken pieces swimming in our legendary spicy pepper sauce.",
    price: 5000,
    category: "small-chops",
    image: pepperedPlatterImage,
    isSpicy: true,
    badge: "Spicy 🔥",
  },
  {
    id: "peppered-snail",
    name: "Peppered Snail",
    description: "Premium giant snails in our authentic Nigerian pepper sauce. A delicacy.",
    price: 8000,
    category: "small-chops",
    image: pepperedPlatterImage,
    isSpicy: true,
    badge: "Delicacy",
    isPremium: true,
  },
  {
    id: "small-chops-platter",
    name: "Small Chops Platter",
    description: "A grand assortment of Puff Puff, Samosas, Spring Rolls, and Mosa. Perfect for parties.",
    price: 12000,
    category: "small-chops",
    image: smallChopsImage,
    badge: "Party Favorite",
    servings: "30+ pieces",
  },

  // ============== MAIN MEALS ==============
  {
    id: "jollof-classic",
    name: "Classic Jollof Rice",
    description: "Nigeria's pride. Perfectly spiced tomato rice with your choice of protein.",
    price: 5500,
    category: "main-meals",
    image: pepperedPlatterImage,
    servings: "1 person",
  },
  {
    id: "jollof-party",
    name: "Party Jollof",
    description: "The legendary smoky party-style jollof with that distinctive burnt bottom flavor.",
    price: 6500,
    category: "main-meals",
    image: pepperedPlatterImage,
    badge: "Bestseller",
    servings: "1 person",
  },
  {
    id: "asun-rice",
    name: "Asun Rice Special",
    description: "Smoky, spicy chopped goat meat paired with aromatic jollof rice. A crowd favorite.",
    price: 8000,
    category: "main-meals",
    image: pepperedPlatterImage,
    isSpicy: true,
    badge: "Spicy 🔥",
    servings: "1 person",
  },
  {
    id: "fried-rice",
    name: "Nigerian Fried Rice",
    description: "Colorful mixed vegetables rice with succulent chicken or beef.",
    price: 5500,
    category: "main-meals",
    image: pepperedPlatterImage,
    servings: "1 person",
  },
  {
    id: "coconut-rice",
    name: "Coconut Rice",
    description: "Fragrant rice cooked in creamy coconut milk. Tropically delicious.",
    price: 5000,
    category: "main-meals",
    image: pepperedPlatterImage,
    servings: "1 person",
  },
  {
    id: "ofada-rice",
    name: "Ofada Rice & Designer Sauce",
    description: "Local unpolished rice with our special green pepper sauce. Authentic and bold.",
    price: 7000,
    category: "main-meals",
    image: pepperedPlatterImage,
    isSpicy: true,
    badge: "Traditional",
    servings: "1 person",
  },
  {
    id: "singapore-noodles",
    name: "Singapore Noodles",
    description: "Wok-fired noodles with a rich blend of Asian spices, vegetables, and prawns.",
    price: 5500,
    category: "main-meals",
    image: smallChopsImage,
    servings: "1 person",
  },
  {
    id: "egusi-pounded-yam",
    name: "Egusi Soup & Pounded Yam",
    description: "Rich melon seed soup loaded with assorted meat, fish, and smooth pounded yam.",
    price: 9000,
    category: "main-meals",
    image: pepperedPlatterImage,
    badge: "Traditional",
    isPremium: true,
    servings: "1-2 persons",
  },

  // ============== DRINKS ==============
  {
    id: "zobo-classic",
    name: "Zobo Classic",
    description: "Refreshing hibiscus drink infused with natural fruits and spices.",
    price: 1500,
    category: "drinks",
    image: smallChopsImage,
    servings: "500ml",
  },
  {
    id: "zobo-ginger",
    name: "Zobo Ginger Blast",
    description: "Our classic zobo with an extra punch of fresh ginger. Immunity booster.",
    price: 2000,
    category: "drinks",
    image: smallChopsImage,
    badge: "Healthy",
    servings: "500ml",
  },
  {
    id: "chapman",
    name: "Chapman",
    description: "Nigeria's favorite mocktail. A sweet, fizzy blend of Fanta, Sprite, and Angostura.",
    price: 2500,
    category: "drinks",
    image: smallChopsImage,
    servings: "500ml",
  },
  {
    id: "smoothie-mango",
    name: "Mango Paradise Smoothie",
    description: "Creamy blend of fresh mangoes, yogurt, and a hint of honey.",
    price: 3000,
    category: "drinks",
    image: smallChopsImage,
    badge: "Fresh",
    servings: "400ml",
  },
  {
    id: "smoothie-berry",
    name: "Mixed Berry Smoothie",
    description: "A medley of strawberries, blueberries, and raspberries blended with Greek yogurt.",
    price: 3500,
    category: "drinks",
    image: smallChopsImage,
    badge: "Premium",
    isPremium: true,
    servings: "400ml",
  },
  {
    id: "fresh-juice",
    name: "Fresh Orange Juice",
    description: "100% freshly squeezed oranges. No preservatives, no added sugar.",
    price: 2000,
    category: "drinks",
    image: smallChopsImage,
    badge: "Natural",
    servings: "400ml",
  },

  // ============== GIFT PACKAGES ==============
  {
    id: "package-bronze",
    name: "Bronze Box ❤️",
    description: "The perfect gesture. Includes Jollof Rice, Protein, Zobo, and a Personalized Card.",
    price: 18000,
    category: "packages",
    image: diamondPackageImage,
    servings: "1 person",
  },
  {
    id: "package-gold",
    name: "Gold Box ⭐",
    description: "A premium selection. Jollof, Asun, Small Chops Platter, 2 Drinks, and Gift Card.",
    price: 45000,
    category: "packages",
    image: diamondPackageImage,
    badge: "Popular",
    isPremium: true,
    servings: "2-3 persons",
  },
  {
    id: "package-diamond",
    name: "Diamond Box 💎",
    description: "The ultimate feast. Jollof, Asun, Egusi, Noodles, Full Small Chops, Wine, Candle, Premium Card.",
    price: 100000,
    category: "packages",
    image: diamondPackageImage,
    badge: "Luxury",
    isPremium: true,
    servings: "4-6 persons",
  },
  {
    id: "package-custom",
    name: "Build Your Own Box 🎨",
    description: "Create a personalized gift package. Choose your items, we'll make it beautiful.",
    price: 25000,
    category: "packages",
    image: diamondPackageImage,
    badge: "Custom",
    servings: "Flexible",
  },
];

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category);
}

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function formatPrice(price: number): string {
  return `₦${price.toLocaleString()}`;
}

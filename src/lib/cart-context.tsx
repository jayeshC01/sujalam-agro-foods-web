"use client";

import {
  createContext,
  useContext,
  useSyncExternalStore,
  type ReactNode,
} from "react";

export type CartItem = {
  slug: string;
  packSize: string;
  price: number;
  quantity: number;
};

const STORAGE_KEY = "sujalam-cart";
const CHANGE_EVENT = "sujalam-cart-change";

let cachedItems: CartItem[] | null = null;

function readCart(): CartItem[] {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored ? (JSON.parse(stored) as CartItem[]) : [];
  } catch {
    return [];
  }
}

function writeCart(items: CartItem[]) {
  cachedItems = items;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch {
    // Storage unavailable (private browsing, quota, etc.) — cart won't persist.
  }
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

function getSnapshot(): CartItem[] {
  if (cachedItems === null) {
    cachedItems = readCart();
  }
  return cachedItems;
}

// Must be a referentially stable reference — a fresh [] on every call
// causes useSyncExternalStore to think the snapshot changed every render.
const EMPTY_CART: CartItem[] = [];

function getServerSnapshot(): CartItem[] {
  return EMPTY_CART;
}

function subscribe(callback: () => void) {
  function handleChange() {
    cachedItems = readCart();
    callback();
  }
  window.addEventListener(CHANGE_EVENT, handleChange);
  window.addEventListener("storage", handleChange);
  return () => {
    window.removeEventListener(CHANGE_EVENT, handleChange);
    window.removeEventListener("storage", handleChange);
  };
}

type CartContextValue = {
  items: CartItem[];
  addItem: (item: Omit<CartItem, "quantity">, quantity?: number) => void;
  removeItem: (slug: string, packSize: string) => void;
  updateQuantity: (slug: string, packSize: string, quantity: number) => void;
  clearCart: () => void;
  itemCount: number;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const items = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  function addItem(item: Omit<CartItem, "quantity">, quantity = 1) {
    const current = getSnapshot();
    const existing = current.find(
      (i) => i.slug === item.slug && i.packSize === item.packSize,
    );
    const next = existing
      ? current.map((i) =>
          i.slug === item.slug && i.packSize === item.packSize
            ? { ...i, quantity: i.quantity + quantity }
            : i,
        )
      : [...current, { ...item, quantity }];
    writeCart(next);
  }

  function removeItem(slug: string, packSize: string) {
    const current = getSnapshot();
    writeCart(
      current.filter((i) => !(i.slug === slug && i.packSize === packSize)),
    );
  }

  function updateQuantity(slug: string, packSize: string, quantity: number) {
    if (quantity < 1) {
      removeItem(slug, packSize);
      return;
    }
    const current = getSnapshot();
    writeCart(
      current.map((i) =>
        i.slug === slug && i.packSize === packSize ? { ...i, quantity } : i,
      ),
    );
  }

  function clearCart() {
    writeCart([]);
  }

  const itemCount = items.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <CartContext.Provider
      value={{ items, addItem, removeItem, updateQuantity, clearCart, itemCount }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return ctx;
}

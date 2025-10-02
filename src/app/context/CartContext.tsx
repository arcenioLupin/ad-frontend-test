"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Game } from "@/utils/endpoint";

const STORAGE_KEY = "cart_items";

type CartContextType = {
  items: Game[];
  inCart: (id: string) => boolean;
  toggle: (game: Game) => void;
  remove: (id: string) => void;
};

export const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<Game[]>([]);

  // Hidratar desde localStorage al inicio
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) setItems(JSON.parse(stored));
  }, []);

  // Persistir en localStorage cuando cambia
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const inCart = (id: string) => items.some((i) => i.id === id);

  const toggle = (game: Game) => {
    setItems((prev) =>
      prev.some((i) => i.id === game.id)
        ? prev.filter((i) => i.id !== game.id)
        : [...prev, game]
    );
  };

  const remove = (id: string) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  };

  return (
    <CartContext.Provider value={{ items, inCart, toggle, remove }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}

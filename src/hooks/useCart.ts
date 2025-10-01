"use client";
import { Game } from "@/utils/endpoint";
import { useEffect, useState } from "react";

const KEY = "cart_items";

export function useCart() {
  const [items, setItems] = useState<Game[]>([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) setItems(JSON.parse(raw));
    } catch {}
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(KEY, JSON.stringify(items));
    } catch {}
  }, [items]);

  const inCart = (id: string) => items.some(i => i.id === id);
  const add = (game: Game) => setItems(prev => inCart(game.id) ? prev : [...prev, game]);
  const remove = (id: string) => setItems(prev => prev.filter(i => i.id !== id));
  const toggle = (game: Game) => inCart(game.id) ? remove(game.id) : add(game);

  return { items, add, remove, toggle, inCart, count: items.length };
}

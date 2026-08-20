'use client';

import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';

export type CartItem = {
  id: string;
  grade: string;
  klass: string;
  material: string;
  price: number;
  volume: number;
};

type NewCartItem = { grade: string; klass: string; material: string; price: number };

type CartContextValue = {
  items: CartItem[];
  total: number;
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addItem: (item: NewCartItem) => void;
  updateVolume: (id: string, volume: number) => void;
  removeItem: (id: string) => void;
  clear: () => void;
};

const STORAGE_KEY = 'cart_v1';

const CartContext = createContext<CartContextValue | null>(null);

function readStorage(): CartItem[] {
  if (typeof window === 'undefined') return [];
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '[]');
  } catch {
    return [];
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setItems(readStorage());
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items, hydrated]);

  const addItem = useCallback((data: NewCartItem) => {
    const id = `${data.material}::${data.grade}`;
    setItems((prev) => (prev.some((item) => item.id === id) ? prev : [...prev, { ...data, id, volume: 1 }]));
    setIsOpen(true);
  }, []);

  const updateVolume = useCallback((id: string, volume: number) => {
    setItems((prev) => prev.map((item) => (item.id === id ? { ...item, volume: Math.max(1, volume) } : item)));
  }, []);

  const removeItem = useCallback((id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  }, []);

  const clear = useCallback(() => setItems([]), []);
  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);

  const total = useMemo(() => items.reduce((sum, item) => sum + item.price * item.volume, 0), [items]);

  const value = useMemo<CartContextValue>(
    () => ({ items, total, isOpen, openCart, closeCart, addItem, updateVolume, removeItem, clear }),
    [items, total, isOpen, openCart, closeCart, addItem, updateVolume, removeItem, clear],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}

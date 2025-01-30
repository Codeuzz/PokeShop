import { Pokemon } from "@customTypes/types";
import { create } from "zustand";

interface CartStore {
  items: Pokemon[];
  removeItem: (id: number) => void;
  addItem: (newItem: Pokemon) => void;
  emptyCart: () => void;
  numberItems: number;
  isAlreadyInCart: (id: number) => boolean;
}

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],
  removeItem: (id) =>
    set((state) => {
      const updatedItems = state.items.filter((item) => item.id !== id);
      return {
        items: updatedItems,
        numberItems: updatedItems.length,
      };
    }),
  addItem: (newItem) =>
    set((state) => {
      const updatedItems = [...state.items, newItem];
      return {
        items: updatedItems,
        numberItems: updatedItems.length,
      };
    }),
  emptyCart: () =>
    set(() => ({
      items: [],
      numberItems: 0,
    })),
  numberItems: 0,
  isAlreadyInCart: (id) => get().items.some((item) => item.id === id),
}));

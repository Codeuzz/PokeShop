import { Pokemon } from "@customTypes/types";
import { create } from "zustand";

interface CartStore {
  items: Pokemon[];
  removeItem: (id: number) => void;
  addItem: (item: Pokemon) => void;
  emptyCart: () => void;
  numberItems: number;
  isAlreadyInCart: boolean;
  alreadyMsg: string;
  addedMsg: string;
}

export const useCartStore = create<CartStore>((set) => ({
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
      const existingItem = state.items.find(
        (currentItem) => newItem.id === currentItem.id
      );
      if (!existingItem) {
        const updatedItems = [...state.items, newItem];
        return {
          items: updatedItems,
          numberItems: updatedItems.length,
          isAlreadyInCart: false,
        };
      } else {
        return {
          ...state,
          isAlreadyInCart: true,
        };
      }
    }),
  emptyCart: () =>
    set(() => ({
      items: [],
      numberItems: 0,
    })),
  numberItems: 0,
  isAlreadyInCart: false,
  alreadyMsg: "is already in your cart.",
  addedMsg: "is added to the cart!",
}));

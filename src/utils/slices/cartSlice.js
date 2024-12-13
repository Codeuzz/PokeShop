import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addCartItem: (state, action) => {
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload.id,
      );
      if (!existingItem) {
        state.cartItems.push(action.payload);
      }
    },
    removeCartItem: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id,
      );
    },
    resetCartItems: (state) => {
      state.cartItems = [];
    },
  },
});

export const { resetCartItems, addCartItem, removeCartItem } =
  cartSlice.actions;
export default cartSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, { payload }) {
      const itemIndex = state.cartItems.findIndex(
        (cartItem) => cartItem.id === payload.id
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].quantity += 1;
      } else {
        const tempProduct = { ...payload, quantity: 1 };
        state.cartItems.push(tempProduct);
      }
    },
    removeFromCart(state, { payload }) {
      const nextCartItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== payload.id
      );
      state.cartItems = nextCartItems;
    },
  },
});

export const cartItems = (state) => state.cart.cartItems;

export const cartItemsLength = (state) => state.cart.cartItems.length;

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;

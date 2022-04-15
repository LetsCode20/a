import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
  totalAmount: 0,
};

const checkoutSlice = createSlice({
  name: 'checkout',
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
    decreaseCart(state, { payload }) {
      const itemIndex = state.cartItems.findIndex(
        (cartItem) => cartItem.id === payload.id
      );
      if (state.cartItems[itemIndex].quantity > 1) {
        state.cartItems[itemIndex].quantity -= 1;
      } else if (state.cartItems[itemIndex].quantity === 1) {
        const nextCartItems = state.cartItems.filter(
          (cartItem) => cartItem.id !== payload.id
        );
        state.cartItems = nextCartItems;
      }
    },
    getTotalAmount(state) {
      let { total } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, quantity } = cartItem;
          const itemTotal = price * quantity;
          cartTotal.total += itemTotal;

          return cartTotal;
        },
        { total: 0 }
      );

      state.totalAmount = total;
    },
  },
});

export const cartItems = (state) => state.checkout.cartItems;

export const cartItemsLength = (state) => state.checkout.cartItems.length;

export const totalAmount = (state) => state.checkout.totalAmount;

export const { addToCart, removeFromCart, decreaseCart, getTotalAmount } =
  checkoutSlice.actions;

export default checkoutSlice.reducer;

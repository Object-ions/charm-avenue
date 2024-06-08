import { createSlice } from '@reduxjs/toolkit';
import { updateCart } from '../utils/cartUtils';

// We use local storage so even when we leave the site and the user comes back he still have the items saved in the cart
const initialState = localStorage.getItem('cart')
  ? JSON.parse(localStorage.getItem('cart'))
  : { cartItems: [] };

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload; // Extract the item from the action payload (data)

      // Check if the item is already in the cart
      // If an item with the same _id exists, store it in the variable existItem
      const existItem = state.cartItems.find((i) => i._id === item._id);

      // If the item exists, update the item in the cart with the new item data
      if (existItem) {
        state.cartItems = state.cartItems.map((i) =>
          i._id === existItem._id ? item : i
        );
      } else {
        // If the item does not exist, add the new item to the cart
        state.cartItems = [...state.cartItems, item];
      }

      return updateCart(state);
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;

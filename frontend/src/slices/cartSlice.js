import { createSlice } from '@reduxjs/toolkit';

// we use local storage so even when we leave the site and the user comes back he still have the items saved in the cart
const initialState = localStorage.getItem('cart')
  ? JSON.parse(localStorage.getItem('cart'))
  : { cartItems: [] };

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
});

export default cartSlice.reducer;

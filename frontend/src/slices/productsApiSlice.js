import { PRODUCTS_URL } from '../constants';
import { apiSlice } from './apiSlice';

export const productsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({
        url: PRODUCTS_URL, // '/api/products'
      }),
      keepUnusedDataFor: 5, // 5 seconds
    }),
  }),
});

export const { useGetProductsQuery } = productsApiSlice;

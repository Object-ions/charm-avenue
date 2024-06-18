import { PRODUCTS_URL, UPLOAD_URL } from '../constants';
import { apiSlice } from './apiSlice';

export const productsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: ({ keyword, pageNumber, tag }) => {
        const params = {};
        if (keyword) params.keyword = keyword;
        if (pageNumber) params.pageNumber = pageNumber;
        if (tag) params.tag = tag;
        return { url: PRODUCTS_URL, params };
      },
      keepUnusedDataFor: 5, // 5 seconds
      providesTags: ['Products'], // so we won't need to refresh the page to see the changes
    }),
    getProductDetails: builder.query({
      query: (productId) => ({
        url: `${PRODUCTS_URL}/${productId}`,
      }),
      keepUnusedDataFor: 5,
    }),
    createProduct: builder.mutation({
      query: () => ({
        url: `${PRODUCTS_URL}`,
        method: 'POST',
      }),
      invalidatesTags: ['Product'], // this will stop it from being cashed so that we have fresh data -> user will not need to refresh the page after creating a new product
    }),
    updateProduct: builder.mutation({
      query: (data) => ({
        url: `${PRODUCTS_URL}/${data.productId}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['Products'], // so we won't need to refresh the page to see the changes
    }),
    uploadProductImage: builder.mutation({
      query: (data) => ({
        url: `${UPLOAD_URL}`,
        method: 'POST',
        body: data,
      }),
    }),
    deleteProduct: builder.mutation({
      query: (productId) => ({
        url: `${PRODUCTS_URL}/${productId}`,
        method: 'DELETE',
      }),
    }),
    createReview: builder.mutation({
      query: (data) => ({
        url: `${PRODUCTS_URL}/${data.productId}/reviews`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Product'],
    }),
    getTopProducts: builder.query({
      query: () => `${PRODUCTS_URL}/top`,
      keepUnusedDataFor: 5,
    }),
    getTags: builder.query({
      query: () => `${PRODUCTS_URL}/tags`,
      keepUnusedDataFor: 5,
      providesTags: ['Product'],
    }),
    getProductsByTag: builder.query({
      query: (tag) => ({
        url: `${PRODUCTS_URL}/tags/${tag}`,
      }),
      keepUnusedDataFor: 5,
      providesTags: ['Products'],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductDetailsQuery,
  useCreateProductMutation,
  useUpdateProductMutation,
  useUploadProductImageMutation,
  useDeleteProductMutation,
  useCreateReviewMutation,
  useGetTopProductsQuery,
  useGetTagsQuery,
  useGetProductsByTagQuery,
} = productsApiSlice;

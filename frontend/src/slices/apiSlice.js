// parent to other API slices
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'; // createSlice is for regular slices,  since we are dealing with a backend api we will use createApi, ** fetchBaseQuery - the fx that allow us to make request to our backend api

import { BASE_URL } from '../constants';

const baseQuery = fetchBaseQuery({ baseURL: BASE_URL });

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ['Product', 'Order', 'User'],
  endpoints: (builder) => ({}),
});

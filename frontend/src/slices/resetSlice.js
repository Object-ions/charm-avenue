import { apiSlice } from './apiSlice';
import { RESET_DATA_URL } from '../constants';

export const resetSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    resetDataDestroy: builder.mutation({
      query: () => ({
        url: `${RESET_DATA_URL}/destroy`,
        method: 'POST',
      }),
    }),
    resetDataImport: builder.mutation({
      query: () => ({
        url: `${RESET_DATA_URL}/import`,
        method: 'POST',
      }),
    }),
  }),
});

export const { useResetDataDestroyMutation, useResetDataImportMutation } =
  resetSlice;

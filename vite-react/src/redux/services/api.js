import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASEURL } from '../../constants/config';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: BASEURL }),
  tagTypes: ['reviews'],
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => '/users',
    }),
    getRestaurants: builder.query({
      query: () => '/restaurants',
    }),
    getRestaurantById: builder.query({
      query: (restaurantId) => `/restaurants/${restaurantId}`,
    }),
    getReviewsByRestaurantId: builder.query({
      query: (restaurantId) => `/reviews?restaurantId=${restaurantId}`,
      providesTags: [{ type: 'reviews', id: 'ALL' }],
    }),
    addReview: builder.mutation({
      query: ({ restaurantId, review }) => ({
        url: `/review/${restaurantId}`,
        body: review,
        method: 'POST',
      }),
      invalidatesTags: [{ type: 'reviews', id: 'ALL' }],
    }),
    getDishesByRestaurantId: builder.query({
      query: (restaurantId) => `/dishes?restaurantId=${restaurantId}`,
    }),
    getDishById: builder.query({
      query: (dishId) => `/dish/${dishId}`,
    }),
  }),
});

export const {
  useGetRestaurantsQuery,
  useLazyGetRestaurantsQuery,
  useGetRestaurantByIdQuery,
  useGetReviewsByRestaurantIdQuery,
  useAddReviewMutation,
  useGetUsersQuery,
  useGetDishesByRestaurantIdQuery,
  useGetDishByIdQuery,
} = api;
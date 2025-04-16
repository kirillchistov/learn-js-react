import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import { getRestaurants } from './get-restaurants';
import { getRestaurant } from './get-restaurant';

export const entityAdapter = createEntityAdapter();

export const restaurantSlice = createSlice({
  name: "restaurants",
  initialState: entityAdapter.getInitialState(),
  extraReducers: (builder) =>
    builder
      .addCase(getRestaurants.fulfilled, (state, { payload }) => {
        entityAdapter.setAll(state, payload);
      })
      .addCase(getRestaurant.fulfilled, (state, { payload }) => {
        entityAdapter.upsertOne(state, payload);
      }),
});

const selectRestaurantSlice = (state) => state.restaurants;

export const {
  selectIds: selectRestaurantIds,
  selectById: selectRestaurantById,
  selectTotal: selectRestaurantsTotal,
} = entityAdapter.getSelectors(selectRestaurantSlice);

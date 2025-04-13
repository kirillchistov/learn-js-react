import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
// import { normalizedRestaurants } from '../../../constants/normalized-mock';
import { getRestaurants } from './get-restaurants';
import { getRestaurant } from './get-restaurant';

export const entityAdapter = createEntityAdapter();

export const restaurantSlice = createSlice({
  name: "restaurantSlice",
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

const selectRestaurantSlice = (state) => state.restaurantSlice;

export const {
  selectIds: selectRestaurantIds,
  selectById: selectRestaurantById,
  selectTotal: selectRestaurantsTotal,
} = entityAdapter.getSelectors(selectRestaurantSlice);

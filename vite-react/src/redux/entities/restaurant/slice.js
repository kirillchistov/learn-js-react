import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import { getRestaurants } from './get-restaurants';
import { getRestaurant } from './get-restaurant';
import { getRestaurantMenu } from './get-menu';

export const entityAdapter = createEntityAdapter();

export const restaurantSlice = createSlice({
  name: 'restaurants',
  initialState: entityAdapter.getInitialState(),
  extraReducers: (builder) =>
    builder
      .addCase(getRestaurants.fulfilled, (state, { payload }) => {
        entityAdapter.setAll(state, payload);
      })
      .addCase(getRestaurant.fulfilled, (state, { payload }) => {
        entityAdapter.upsertOne(state, payload);
      })
      .addCase(getRestaurantMenu.fulfilled, (state, { payload }) => {  
        entityAdapter.setMany(state, payload);
      })      
});

const selectRestaurantSlice = (state) => state.restaurants;

export const {
  selectIds: selectRestaurantIds,
  selectById: selectRestaurantById,
  selectById: selectRestaurantMenu,
  selectTotal: selectRestaurantsTotal,
} = entityAdapter.getSelectors(selectRestaurantSlice);

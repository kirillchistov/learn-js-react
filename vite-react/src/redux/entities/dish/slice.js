import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import { getDishesByRestaurantId } from './get-dishes-by-restaurant-id';
// import { getDishes } from './get-dishes';
import { getDish } from './get-dish';

const entityAdapter = createEntityAdapter();

export const dishSlice = createSlice({
  name: 'dishes',
  initialState: entityAdapter.getInitialState(),
  extraReducers: (builder) => 
    builder
      .addCase(getDishesByRestaurantId.fulfilled, (state, { payload }) => {  
        entityAdapter.setMany(state, payload);
      })
      .addCase(getDish.fulfilled, (state, { payload }) => {
        entityAdapter.upsertOne(state, payload);
      })
});

const selectDishSlice = (state) => state.dishes;

export const {
  selectIds: selectDishIds,
  selectById: selectDishById,
  // selectTotal: selectDishTotal
} = entityAdapter.getSelectors(selectDishSlice);

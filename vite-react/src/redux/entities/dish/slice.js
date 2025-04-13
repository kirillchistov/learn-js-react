import { createSlice } from '@reduxjs/toolkit';
import { entityAdapter } from '../restaurants/slice';
import { getDishes } from './get-dishes';
import { getDish } from './get-dish';

export const dishSlice = createSlice({
  name: 'dishSlice',
  initialState: entityAdapter.getInitialState(),
  extraReducers: (builder) => 
    builder
      .addCase(getDishes.fulfilled, (state, { payload }) => {  
        entityAdapter.setAll(state, payload);
      })
      .addCase(getDish.fulfilled, (state, { payload }) => {
        entityAdapter.upsertOne(state, payload);
      })
});

const selectDishSlice = (state) => state.dishSlice;

export const {
  selectIds: selectDishIds,
  selectById: selectDishById,
  selectTotal: selectDishTotal
} = entityAdapter.getSelectors(selectDishSlice);

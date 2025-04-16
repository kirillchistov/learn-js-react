import { createAsyncThunk } from '@reduxjs/toolkit';
import { selectDishTotal } from './slice';

export const getDishes = createAsyncThunk(
  'dishes/getDishes',
    async (restaurantId, { getState, dispatch, rejectWithValue }) => {
    // async (restaurantId, { rejectWithValue }) => {
    const response = await fetch(
      `http://localhost:3001/api/dishes?restaurantId=${restaurantId}`
    );

    const result = await response.json();

    if (!result.length) {
      return rejectWithValue('no data');
    }

    return result;
  }
);
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getRestaurant = createAsyncThunk(
  'restaurantId/getRestaurant',
  async (restaurantId, { getState, dispatch, rejectWithValue }) => {
  // async (restaurantId, { rejectWithValue }) => {
    const response = await fetch(
      `http://localhost:3001/api/restaurant/${restaurantId}`
    );

    const result = await response.json();

    if (!result || Object.keys(result).length === 0) {
      return rejectWithValue('no data');
    }

    return result;
  },
);
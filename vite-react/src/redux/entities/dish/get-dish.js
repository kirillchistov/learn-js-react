import { createAsyncThunk } from '@reduxjs/toolkit';

export const getDish = createAsyncThunk(
  'dishId/getDish',
  async (dishId, { getState, dispatch, rejectWithValue }) => {
  // async (dishId, { rejectWithValue }) => {
    const response = await fetch(`http://localhost:3001/api/dish/${dishId}`);

    const result = await response.json();

    if (!result || Object.keys(result).length === 0) {
      return rejectWithValue('no data');
    }

    return result;
  },
);
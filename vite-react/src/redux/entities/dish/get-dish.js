import { createAsyncThunk } from '@reduxjs/toolkit';
import { selectDishById } from './slice.js';

export const getDish = createAsyncThunk(
  'dishId/getDish',
  async (dishId, { getState, dispatch, rejectWithValue }) => {
    const response = await fetch(`http://localhost:3001/api/dish/${dishId}`);

    const result = await response.json();

    if (!result || Object.keys(result).length === 0) {
      return rejectWithValue('no data');
    }

    return result;
  },
  {
    condition: (dishId, { getState }) => {
      return !(selectDishById(getState(), dishId))
    }
  }

);
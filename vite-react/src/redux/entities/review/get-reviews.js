import { createAsyncThunk } from '@reduxjs/toolkit';

export const getReviews = createAsyncThunk(
  'reviews/getReviews',
//   async (restaurantId, { getState, dispatch, rejectWithValue }) => {
  async (restaurantId, { rejectWithValue }) => {
    const response = await fetch(
      `http://localhost:3001/api/reviews?restaurantId=${restaurantId}`
    );

    const result = await response.json();

    if (!result.length) {
      return rejectWithValue('no data in get-reviews');
    }

    return result;
  }
);
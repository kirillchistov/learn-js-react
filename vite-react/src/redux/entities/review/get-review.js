import { createAsyncThunk } from '@reduxjs/toolkit';

export const getReview = createAsyncThunk(
  'reviewId/getReview',
//   async (reviewId, { getState, dispatch, rejectWithValue }) => {
  async (reviewId, { rejectWithValue }) => {
    const response = await fetch(
      `http://localhost:3001/api/reviews/${reviewId}`
    );

    const result = await response.json();

    if (!result.length) {
      return rejectWithValue('no data in get-review');
    }

    return result;
  }
);
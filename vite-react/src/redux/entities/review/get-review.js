import { createAsyncThunk } from '@reduxjs/toolkit';
import { selectReviewById } from './slice-old';

export const getReview = createAsyncThunk(
  'reviewId/getReview',
  async (reviewId, { rejectWithValue }) => {

    const response = await fetch(
      `http://localhost:3001/api/reviews/${reviewId}`
    );

    const result = await response.json();

    if (!result.length) {
      return rejectWithValue('no data');
    }

    return result;
  },
  {
    condition: (reviewId, { getState }) => {
      return !selectReviewById(getState(), reviewId);
    },
  }  
);
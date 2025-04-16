import { createSlice } from '@reduxjs/toolkit';
import { entityAdapter } from '../restaurant/slice';
import { getReviews } from './get-reviews';
import { getReview } from './get-review';

export const reviewSlice = createSlice({
  name: 'reviews',
  initialState: entityAdapter.getInitialState(),
  extraReducers: (builder) =>
    builder
      .addCase(getReviews.fulfilled, (state, { payload }) => {
        entityAdapter.setAll(state, payload);
      })
      .addCase(getReview.fulfilled, (state, { payload }) => {
        entityAdapter.upsertOne(state, payload);
      }),
});

const selectReviewSlice = (state) => state.reviews;

export const {
  selectIds: selectReviewIds,
  selectById: selectReviewById,
  selectTotal: selectReviewTotal,
} = entityAdapter.getSelectors(selectReviewSlice);

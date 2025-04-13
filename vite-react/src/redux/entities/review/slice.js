import { createSlice } from '@reduxjs/toolkit';
import { entityAdapter } from '../restaurant/slice';
// import { normalizedReviews } from '../../../constants/normalized-mock';
import { getReviews } from './get-reviews';
import { getReview } from './get-review';

export const reviewSlice = createSlice({
  name: 'reviewSlice',
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

const selectReviewSlice = (state) => state.reviewSlice;

export const {
  selectIds: selectReviewIds,
  selectById: selectReviewById,
  selectTotal: selectReviewsTotal,
} = entityAdapter.getSelectors(selectReviewSlice);

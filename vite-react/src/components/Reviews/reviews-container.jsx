'use client';

import { use, useCallback, useOptimistic } from 'react';
import { AuthContext } from '@/auth-context/index';
import { addReviewAction } from '@/actions/add-review-action';
// import { editReviewAction } from '@/actions/edit-review-action';
import { Reviews } from './reviews';

export const ReviewsContainer = ({ reviews, restaurantId }) => {
  const [optimisticReview, addOptimisticReview] = useOptimistic(
    reviews,
    (currentState, optimisticValue) => [
      ...currentState,
      { ...optimisticValue, id: 'creating' },
    ]
  );

  const { userId } = use(AuthContext).auth;
  console.log(userId);

  const handleAddReview = useCallback(
    async (state, formData) => {
      if (formData === null) {
        return {
          text: '',
          rating: 5,
        };
      }

      const text = formData.get('text');
      const rating = formData.get('rating');

      const review = { text, rating, userId };

      addOptimisticReview(review);

      await addReviewAction({ restaurantId, review });

      return {
        text: '',
        rating: 5,
      };
    },
    [addOptimisticReview, restaurantId, userId]
  );

  // const handleEditReview = useCallback(
  //   async (state, formData) => {
  //     if (formData === null) {
  //       return {
  //         text: '',
  //         rating: 5,
  //       };
  //     }

  //     const text = formData.get('text');
  //     const rating = formData.get('rating');

  //     const review = { text, rating, userId };

  //     editOptimisticReview(review);

  //     await editReviewAction({ reviewId, review });

  //     return {
  //       text: '',
  //       rating: 5,
  //     };
  //   },
  //   [editOptimisticReview, restaurantId, reviewId]
  // );

  if (!optimisticReview.length) {
    return null;
  }

  return (
    <Reviews 
      reviews={optimisticReview} 
      submitFormAction={handleAddReview} 
    />
  );
};
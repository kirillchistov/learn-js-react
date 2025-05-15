import { useMemo, useCallback } from 'react';
import { addReviewAction } from '@/actions/add-review-action';
import { editReviewAction } from '@/actions/edit-review-action';

export const useReviewForm = ({ review, restaurantId }) => {
  const buttonText = useMemo(
    () => (review ? 'Edit' : 'Add'),
    [review]
  );

  const headerText = useMemo(
    () => (review ? 'Edit review' : 'Add review'),
    [review]
  );

  const submitFormAction = useCallback(
    async (state, formData) => {
      if (formData === null) {
        return {
          text: '',
          rating: 5,
        };
      }

      const text = formData.get('text');
      const rating = formData.get('rating');

      const review = { text, rating };

      return review
        ? await editReviewAction({ restaurantId, review })
        : await addReviewAction({ restaurantId, review });
    },
    [restaurantId]
  );

  return {
    headerText,
    buttonText,
    submitFormAction,
  };
};
import {
  useAddReviewMutation,
  useGetReviewsByRestaurantIdQuery,
  useGetUsersQuery,
} from '../../redux/services/api';
import { Reviews } from './reviews';

export const ReviewsContainer = ({ restaurantId }) => {

  const { isLoading: isUsersLoading, isError: isUsersError } =
    useGetUsersQuery();
  const {
    isLoading: isGetReviewsLoading,
    isError: isReviewsError,
    data,
  } = useGetReviewsByRestaurantIdQuery(restaurantId);

  const [addReview, { isLoading: isAddReviewLoading }] = useAddReviewMutation();

  const handleSubmit = (review) => {
    addReview({ restaurantId: restaurantId, review });
  };

  const isLoading = isUsersLoading || isGetReviewsLoading;

  const isError = isUsersError || isReviewsError;

  if (isLoading) {
    return 'loading....';
  }
  if (isError) {
    return 'error';
  }

  if (!data.length) {
    return null;
  }

  return data?.length ? (
    <Reviews
      reviews={data}
      onAddReview={handleSubmit}
      isSubmitButtonDisabled={isAddReviewLoading}
    />
  ): (
    'No reviews yet'
  );
};
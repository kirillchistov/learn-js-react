import { useSelector } from 'react-redux';
import { selectReviewIds } from '../../redux/entities/review/slice';
import { getReviews } from '../../redux/entities/review/get-reviews';
import { getUsers } from '../../redux/entities/user/get-users';
import { useRequest } from '../../hooks/use-request';
import { Reviews } from './reviews';

export const ReviewsContainer = ({ restaurantId }) => {

  const reviewRequestStatus = useRequest(getReviews, restaurantId);
  const usersRequestStatus = useRequest(getUsers);

  const reviewIds = useSelector(selectReviewIds);

  const isLoading =
    reviewRequestStatus === 'idle' ||
    reviewRequestStatus === 'pending' ||
    usersRequestStatus === 'idle' ||
    usersRequestStatus === 'pending';

  const isError =
    reviewRequestStatus === 'rejected' || usersRequestStatus === 'rejected';

  if (isLoading) {
    return 'loading....';
  }
  if (isError) {
    return 'error';
  }

  return reviewIds.length ? (
    <Reviews reviewIds={reviewIds} />
  ) : (
    'No reviews so far'
  );
};
import { useParams } from 'react-router';
import { selectRestaurantById } from '../redux/entities/restaurant/slice';
import { useSelector } from 'react-redux';
import { Reviews } from '../components/Reviews/reviews';
import { getUsers } from '../redux/entities/user/get-users';
import { useRequest } from '../hooks/use-request';
import { getReviewsByRestaurantId } from '../redux/entities/review/get-reviews-by-restaurant-id';
import {
  REQUEST_STATUS_PENDING,
  REQUEST_STATUS_REJECTED,
} from '../constants/redux';

// import { ReviewsContainer } from '../components/Reviews/reviews-container';

export const ReviewPage = () => {
  const { restaurantId } = useParams();

  const usersRequestStatus = useRequest(getUsers);
  const reviewsRequestStatus = useRequest(getReviewsByRestaurantId, restaurantId);

  const isLoading =
    usersRequestStatus === REQUEST_STATUS_PENDING ||
    reviewsRequestStatus === REQUEST_STATUS_PENDING;

  const isError =
    usersRequestStatus === REQUEST_STATUS_REJECTED ||
    reviewsRequestStatus === REQUEST_STATUS_REJECTED;

  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );

  const { reviews } = restaurant || {};

  if (isLoading) {
    return 'loading...';
  }

  if (isError) {
    return 'ERROR';
  }

  return reviews.length ? (
    <Reviews reviewIds={reviews} />
  ) : (
    <div>No reviews yet</div>
  );


  // return <ReviewsContainer restaurantId={restaurantId} />;
};
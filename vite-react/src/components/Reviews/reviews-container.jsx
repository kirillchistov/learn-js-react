import { useSelector } from 'react-redux';
import { selectRestaurantById } from '../../redux/entities/restaurant/slice';
import { Reviews } from './reviews';

export const ReviewsContainer = ({ restaurantId }) => {
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );

  if (!restaurant) {
    return null;
  }
  const { reviews } = restaurant;

  return reviews.length ? (
    <Reviews reviewIds={reviews} />
  ) : (
    'No reviews so far'
  );
};
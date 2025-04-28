import { useParams } from 'react-router';
import { ReviewsContainer } from '../components/Reviews/reviews-container';

export const ReviewsPage = () => {
  const { restaurantId } = useParams();

  return <ReviewsContainer restaurantId={restaurantId} />;
};
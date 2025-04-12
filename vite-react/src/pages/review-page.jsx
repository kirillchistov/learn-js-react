import { useParams } from 'react-router';
import { ReviewsContainer } from '../components/Reviews/reviews-container';

export const ReviewPage = () => {
  const { restaurantId } = useParams();

  return <ReviewsContainer restaurantId={restaurantId} />;
};
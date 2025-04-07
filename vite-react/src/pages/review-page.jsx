import { useParams } from 'react-router';
import { ReviewContainer } from '../components/Reviews/reviews-container';

export const ReviewPage = () => {
  const { restaurantId } = useParams();

  return <ReviewsContainer restaurantId={restaurantId} />;
};
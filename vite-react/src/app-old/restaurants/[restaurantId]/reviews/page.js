import { ReviewsContainer } from '../../../../components/Reviews/reviews-container';

const ReviewsPage = async ({ params }) => {
  const { restaurantId } = await params;
  return <ReviewsContainer restaurantId={restaurantId} />;
};

export default ReviewsPage;
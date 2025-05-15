import { ReviewContainer } from '@/components/Review/review-container';

const ReviewPage = async ({ params }) => {
  const { reviewId } = await params;
  return <ReviewContainer reviewId={reviewId} />;
};
export default ReviewPage;

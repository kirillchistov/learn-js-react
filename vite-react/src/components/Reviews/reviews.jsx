import { Review } from '../Review/review';
import { ReviewForm } from '../ReviewForm/review-form'

export const Reviews = ({ reviews }) => {
  return (
    <div>
      <h3>Reviews</h3>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <Review review={review} />
          </li>
        ))}
      </ul>
      <ReviewForm/>
    </div>
  );
};
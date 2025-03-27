import { use } from 'react';
import { AuthContext } from '../../auth-context';
import { Review } from '../Review/review';
import { ReviewForm } from '../ReviewForm/review-form'

export const Reviews = ({ reviews }) => {
  const { auth } = use(AuthContext);
  const { isAuthorized } = auth;

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
      {isAuthorized && (
        <>
          <ReviewForm/>
        </>
      )}        
    </div>
  );
};
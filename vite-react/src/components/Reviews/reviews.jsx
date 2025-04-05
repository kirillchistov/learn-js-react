import { use } from 'react';
import { AuthContext } from '../../auth-context';
import { Review } from '../Review/review';
import { ReviewContainer } from '../Review/review-container';
import { ReviewForm } from '../ReviewForm/review-form'

export const Reviews = ({ reviewIds }) => {
  const { auth } = use(AuthContext);
  const { isAuthorized } = auth;
  
  return (
    <div>
      <h3>Reviews</h3>
      <ul>
        {reviewIds.map((id) => (
          <li key={id}>
            <ReviewContainer id={id} />
          </li>
        ))}
      </ul>
      {isAuthorized && (
        <ReviewForm />
      )}        
    </div>
  );
};
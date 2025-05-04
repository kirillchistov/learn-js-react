'use client';

import { use } from 'react';
import { AuthContext } from '../../auth-context';
import { ReviewForm } from '../ReviewForm/review-form';
import { Review } from '../Review/review'

export const Reviews = ({ reviews, onAddReview, isSubmitButtonDisabled }) => {

  const { auth } = use(AuthContext);
  const { isAuthorized } = auth;
  
  return (
    <div>
      <h3>Reviews</h3>
      <ul>
        {reviews.map(({ id, text, userId }) => (
          <li key={id}>
            <Review text={text} userId={userId} />
          </li>
        ))}
      </ul>
      {isAuthorized ? (
        <ReviewForm 
          onSubmit={onAddReview}
          isSubmitButtonDisabled={isSubmitButtonDisabled}
        />
      ) : null }
    </div>
  );
};
'use client';

import { use } from 'react';
import Link from 'next/link';
import { AuthContext } from '../../auth-context';
import { ReviewForm } from '../ReviewForm/review-form';
import { Review } from '../Review/review'

export const Reviews = ({ reviews, submitFormAction }) => {

  const { auth } = use(AuthContext);
  const { isAuthorized } = auth;
  
  return (
    <div>
      <h3>Reviews</h3>
      <ul>
        {reviews.map(({ id, text, userId }) => (
          <li key={id}>
            <Link href={`/reviews/${id}`}>
              <Review text={text} userId={userId} />
            </Link>
          </li>
        ))}
      </ul>
      {isAuthorized ? (
        <ReviewForm submitFormAction={submitFormAction}/>
      ) : null }
    </div>
  );
};
import { editReviewAction } from '@/actions/edit-review-action';
import { use, useState, useCallback } from 'react';
import { Button } from '../Button/button';
import { ReviewForm } from '../ReviewForm/review-form';
// import { useReview } from '@/hooks/use-review';
import { UsersContext } from '../users-context/index';
import { AuthContext } from '@/auth-context';

import { UserContainer } from '../User/user-container';

// export const Review = ({ review, restaurantId, users, editorId }) => {
export const Review = ({ text, id, userId, rating }) => {

  const { auth } = use(AuthContext);
  // const { isAuthorized } = auth;

  const { name, userId:currentUserId } = auth;
  
  const [isEdit, setIsEdit] = useState(false);

  const isAuthor = userId === currentUserId;

  
  const handleEditReview = useCallback(
    async (state, formData) => {
      if (formData === null) {
        return {
          text: '',
          rating: 5,
        };
      }

      const text = formData.get('text');
      const rating = formData.get('rating');

      const review = { text, rating, userId };

      await editReviewAction({ reviewId:id, review });

      setIsEdit(false);
    },
    [id, userId]
  );

  return (
    <>
      {isEdit ? (
        <ReviewForm submitFormAction={handleEditReview} initialFormValues={{ text, rating }} />
      ) : (
      <>
        <div>
          <UserContainer id={userId}/>: {text}
        </div>
          {`${name}: ${text}`}{' '}
          {isAuthor && (
            <Button onClick={() => setIsEdit(!isEdit)} title="Edit" />
          )}
        </>
      )}
    </>
  )
};
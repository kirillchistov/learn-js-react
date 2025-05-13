// import { editReviewAction } from '@/actions/edit-review-action';
// import { use, useCallback, useOptimistic, useState } from 'react';
// import { Button } from '../Button/button';
// import { ReviewForm } from '../ReviewForm/review-form';
// import { useReview } from '@/hooks/use-review';
// import { UsersContext } from '../users-context/index';

import { UserContainer } from '../User/user-container';

// export const Review = ({ review, restaurantId, users, editorId }) => {
export const Review = ({ text, userId }) => {
  
  // const { isEdited, text, name, mayEdit, handleEditReview } = useReview({
  //   review, editorId, users,
  // });

  // if (!name) {
  //   return null;
  // }

  return (
    <>
      <UserContainer id={userId} />: <i>{text}</i>);
    </>
  );
  //   <>
    //   {isEdited ? (
    //     <ReviewForm review={review} restaurantId={restaurantId} />
    //   ) : (
    //     <>
    //       {`${name}: ${text}`}{' '}
    //       {mayEdit && (
    //         <Button onClick={handleEditReview} type="button" text="Изменить" />
    //       )}
    //     </>
      // <div>
        // <UserContainer id={userId}/>: {text}
      // </div>
      // )}
    // </>
};
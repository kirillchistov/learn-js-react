import { useMemo, useState } from 'react';

export const useReview = ({ review, editorId, users }) => {
  const { userId, text } = review;
  const [isEdited, setIsEdited] = useState(false);

  const user = useMemo(
    () => users?.find(({ id }) => id === userId),
    [users, userId]
  );

  const name = useMemo(() => user?.name, [user]);

  const handleEditReview = () => {
    setIsEdited((prev) => !prev);
  };

  const mayEdit = useMemo(
    () => user?.id === editorId,
    [user, editorId]
  );

  return {
    isEdited,
    text,
    name,
    mayEdit,
    handleEditReview,
  };
};
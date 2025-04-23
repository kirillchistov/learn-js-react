import { UserContainer } from '../User/user-container';

export const Review = ({ text, userId }) => {
  return (
    <>
      <i>{text}</i>) - <UserContainer id={userId} />;
    </>
  );
};
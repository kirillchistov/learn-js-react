import { use } from 'react';
import { useSelector } from 'react-redux';
import { AuthContext } from '../../auth-context';
import { ReviewContainer } from '../Review/review-container';
import { ReviewForm } from '../ReviewForm/review-form';
import { useRequest } from '../../hooks/use-request';
import { getUsers } from '../../redux/entities/user/get-users';
import { selectTotalUsers } from '../../redux/entities/user/slice';
import {
  REQUEST_STATUS_PENDING,
  REQUEST_STATUS_REJECTED,
} from '../../constants/redux';

export const Reviews = ({ reviewIds }) => {

  const users = useSelector(selectTotalUsers);
  const requestStatus = useRequest(getUsers);

  const { auth } = use(AuthContext);
  const { isAuthorized } = auth;
  
  if (requestStatus === REQUEST_STATUS_PENDING || !users) {
    return 'loading...';
  }

  if (requestStatus === REQUEST_STATUS_REJECTED) {
    return 'ERROR';
  }

  return (
    <div>
      <h3>Reviews</h3>
      <ul>
        {reviewIds?.map((reviewId) => (
          <li key={reviewId}>
            <ReviewContainer id={reviewId} />
          </li>
        ))}
      </ul>
      {isAuthorized && (
        <ReviewForm />
      )}
    </div>
  );
};
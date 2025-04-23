import { selectReviewById } from '../../redux/entities/review/slice';
import { Review } from './review';
import { useSelector } from 'react-redux';

export const ReviewContainer = ({ id }) => {
  const review = useSelector((state) => selectReviewById(state, id));

  if (!review?.text) {
    return null;
  }

  return <Review text={review.text} userId={review.user} />;
};
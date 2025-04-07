import { selectReviewById } from '../../redux/entities/review/slice';
import { Review } from '../Review/review';
import { useSelector } from "react-redux";

export const ReviewContainer = ({ id }) => {
  const review = useSelector((state) => selectReviewById(state, id));
  const { text } = review;
  return <Review text={text} />;
};
//  import { useReducer } from 'react';
import { ReviewsCounter } from '../Counter/counter-reviews';
import { useForm } from '../../hooks/use-form';
// import { MIN_COUNT, MAX_COUNT } from '../../constants/config';
import reviewFormStyle from './review-form.module.css';

export const ReviewForm = () => {
  const {
    name,
    text,
    count,
    setRatingIncrement,
    setRatingDecrement,
    setName,
    setText,
    clearForm,
  } = useForm();

  return (
    <div className={reviewFormStyle.container}>
      <h4>Leave a review</h4>
      <div><span>Name:</span></div>
      <div>
        <input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div><span>Comment:</span></div>
      <div>
        <textarea value={text} onChange={(e) => setText(e.target.value)} />
      </div>
      <div>Your rating:</div>
      <div className={reviewFormStyle.reviewRating}>
        <ReviewsCounter
          increment={setRatingIncrement}
          decrement={setRatingDecrement}
          count={count}
        />
      </div>
      <div>
        <button className={reviewFormStyle.clearButton} onClick={() => clearForm()}>clear</button>
      </div>
    </div>
  );
};
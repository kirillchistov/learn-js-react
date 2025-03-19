//  import { useReducer } from 'react';
import { ReviewsCounter } from '../Counter/counter-reviews';
import { useForm } from '../../hooks/use-form';
// import { MIN_COUNT, MAX_COUNT } from '../../constants/config';
import reviewFormStyle from './review-form.module.css';

export const ReviewForm = () => {
  const {
    name,
    text,
    rating,
    setRatingIncrement,
    setRatingDecrement,
    setName,
    setText,
    clearForm,
  } = useForm();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted')
  };

  // const handleFormChange = (e) => {
  //   console.log('form data changed')
  // };

  // add labels and data tags to streamline form processing/validation
  return (
    <form onSubmit={handleFormSubmit}>
      <div className={reviewFormStyle.container}>
        <h4>Leave a review</h4>
        <div><span>Name:</span></div>
        <div>
          <input
            className={reviewFormStyle.input}
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div><span>Comment:</span></div>
        <div>
          <textarea
            className={reviewFormStyle.textarea}
            value={text} 
            onChange={(e) => setText(e.target.value)} 
          />
        </div>
        <div>Your rating:</div>
        <div className={reviewFormStyle.reviewRating}>
          <ReviewsCounter
            increment={setRatingIncrement}
            decrement={setRatingDecrement}
            count={rating}
          />
        </div>
        <div>
          <button className={reviewFormStyle.clearButton} onClick={() => clearForm()}>Clear</button>
          <button className={reviewFormStyle.submitButton} onClick={handleFormSubmit}>Submit</button>
        </div>
      </div>
    </form>
  );
};
import { Counter } from '../Counter/counter';
import { useForm } from '../../hooks/use-form';
import styles from './review-form.module.css';

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

  return (
    <form onSubmit={handleFormSubmit}>
      <div className={styles.container}>
        <h4>Leave a review</h4>
        <div><span>Name:</span></div>
        <div>
          <input
            className={styles.input}
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>Comment:</div>
        <div>
          <textarea
            className={styles.textarea}
            value={text} 
            onChange={(e) => setText(e.target.value)} 
          />
        </div>
        <div>Your rating:</div>
        <div className={styles.reviewRating}>
          <Counter
            increment={setRatingIncrement}
            decrement={setRatingDecrement}
            value={rating}
          />
        </div>
        <div>
          <button className={styles.clearButton} onClick={clearForm}>Clear</button>
          <button className={styles.submitButton} onClick={handleFormSubmit}>Submit</button>
        </div>
      </div>
    </form>
  );
};
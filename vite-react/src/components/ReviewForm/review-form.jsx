'use client';

import { use } from 'react';
import { Counter } from '../Counter/counter';
import { Button } from '../Button/button';
import { useForm } from '../../hooks/use-form';
import { AuthContext } from '../../auth-context';

import styles from './review-form.module.css';

export const ReviewForm = ({ onSubmit, isSubmitButtonDisabled }) => {
  const {
    form,
    comment,
    setRatingIncrement,
    setRatingDecrement,
    setName,
    setText,
    clearForm,
  } = useForm();

  const { text, rating, name } = form;

  const { auth } = use(AuthContext);
  const { userId } = auth;


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
            value={comment} 
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
          <Button title='Clear' onClick={clearForm} />
          <Button
            title='Submit'
            disabled={isSubmitButtonDisabled}
            onClick={() =>
              onSubmit({ text, rating, userId })
            }
          />
        </div>
      </div>
    </form>
  );
};
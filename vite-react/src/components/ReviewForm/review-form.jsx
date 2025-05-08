'use client';

import { useActionState } from 'react';
import { Button } from '../Button/button';

import styles from './review-form.module.css';

export const ReviewForm = ({ submitFormAction, isSubmitButtonDisabled }) => {

  const [form, formAction ] = useActionState(submitFormAction, { rating: 5 } );

  const { text, rating, name } = form;

  return (
    <form action={formAction}>
      <div className={styles.container}>
        <h4>Leave a review</h4>
        <div><span>Name:</span></div>
        <div>
          <input
            className={styles.input}
            type='text'
            name={name}
            defaultValue={name}
          />
        </div>
        <div>Comment:</div>
        <div>
          <textarea
            className={styles.textarea}
            name={text}
            defaultValue={text}
          />
        </div>
        <div>Your rating:</div>
        <div className={styles.reviewRating}>
          <input
            type='number'
            name='rating'
            min={1}
            max={5}
            defaultValue={rating}
          />
        </div>
        <div>
          <Button title='Clear' formAction={() => formAction(null)} />
          <Button title='Submit' disabled={isSubmitButtonDisabled} />
        </div>
      </div>
    </form>
  );
};
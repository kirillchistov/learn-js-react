'use client';

import { useActionState } from 'react';
import { Button } from '../Button/button';
// import { UsersContext } from '../users-context';


import styles from './review-form.module.css';

export const ReviewForm = ({ submitFormAction, isSubmitButtonDisabled, initialFormValues = { text: '', rating: 5 }  }) => {
  const [form, formAction] = useActionState(submitFormAction, initialFormValues);

  // const users = use(UsersContext);
  // const user = users.find(({ userId: userId }) => userId === userId);

  // const { name } = user;
  const { text, rating } = form;
  console.log(`{name}: {text} / {rating}`);

  return (
    <form action={formAction}>
      <div className={styles.container}>
        <h4>Leave a review</h4>
        <div>
          <span>Name:</span>
        </div>
        {/* <div>
          <input
            className={styles.input}
            type='text'
            name='name'
            defaultValue={name}
          />
        </div> */}
        <div>Comment:</div>
        <div>
          <textarea
            className={styles.textarea}
            defaultValue={text}
            name='text'
          />
        </div>
        <div>Your rating:</div>
        <div className={styles.reviewRating}>
          <input
            type='number'
            min={1}
            max={5}
            defaultValue={rating}
            name='rating'
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

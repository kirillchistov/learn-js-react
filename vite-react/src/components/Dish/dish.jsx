import { AuthContext } from '../../auth-context';
import { DishCounter } from '../DishCounter/dish-counter';
import { use } from 'react';

import styles from './dish.module.css';

export const Dish = ({ name, id }) => {
  const { auth } = use(AuthContext);
  const { isAuthorized } = auth;

  if (!name) {
    return null;
  }  

  return (
    <div className={styles.container}>
      <div className={styles.dish}>
        {name}
      </div>
      {isAuthorized && (<DishCounter id={id} />)}
    </div>
  );
};
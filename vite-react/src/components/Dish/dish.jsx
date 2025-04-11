import { AuthContext } from '../../auth-context';
import { DishCounter } from '../DishCounter/dish-counter';
import { use } from 'react';

import styles from './dish.module.css';

export const Dish = ({ name, id, price, contents }) => {
  const { auth } = use(AuthContext);
  const { isAuthorized } = auth;

  if (!name) {
    return null;
  }  

  return (
    <div className={styles.container}>
      <div className={styles.dish}>
        <span>{name}</span>
        <span>price: {price}</span>
      </div>
      <div className={styles.container}>contents: {contents}</div>
      {isAuthorized && (<DishCounter id={id} />)}
    </div>
  );
};
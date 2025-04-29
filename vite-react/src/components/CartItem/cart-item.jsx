'use client';

import { DishCounter } from '../DishCounter/dish-counter';
import styles from './cart-item.module.css';

export const CartItem = ({ name, id }) => {
  if (!name) {
    return null;
  }
  return (
    <div className={styles.container}>
      <div>{name}</div>
      <div><DishCounter id={id}/></div>
    </div>
  );
};
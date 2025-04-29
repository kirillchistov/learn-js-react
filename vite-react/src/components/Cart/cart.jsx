'use client';

import { ItemContainer } from '../CartItem/item-container';
import styles from './cart.module.css';

export const Cart = ({ itemIds} ) => {

  if (!itemIds.length) {
    return null;
  }

  return itemIds?.length ? (
      <>
        <h3>Your cart</h3>
        <ul>
          {itemIds.map((id) => (
            <li key={id} className={styles.main}>
              <ItemContainer id={id} />
            </li>
          ))}
        </ul>
      </>
  ): (
    'No items in cart yet'
  );
};

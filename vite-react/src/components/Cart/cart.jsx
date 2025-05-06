'use client'

import { ItemContainer } from '../CartItem/item-container';
import { useSelector } from 'react-redux';
import { selectCartItemIds } from '@/redux/entities/cart/slice';

import styles from './cart.module.css';

export const Cart = ({ dishes }) => {

  const itemIds = useSelector(selectCartItemIds);

  return itemIds?.length ? (
      <>
        <h3>Your cart</h3>
        <ul>
          {itemIds.map((id) => (
            <li key={id} className={styles.main}>
              <ItemContainer id={id} dishes={dishes} />
            </li>
          ))}
        </ul>
      </>
  ): (
    <>
      <h3>Your cart</h3>
      <div>No items in your cart yet</div>
    </>
  );
};

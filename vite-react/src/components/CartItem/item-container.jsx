'use client';

import { CartItem } from './cart-item';

export const ItemContainer = ({ id, dishes }) => {

  const dish = dishes.find(({ id: dishId }) => dishId === id);

  if (!dish?.name) {
    return null;
  }

  return <CartItem name={dish.name} id={id} />;
};
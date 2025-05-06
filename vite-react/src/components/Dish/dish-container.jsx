'use client';

import { Dish } from './dish';
import { getDish } from '@/services/get-dish';

export const DishContainer = async ({ id }) => {

  const dish = await getDish(id);

  const { name, price, ingredients } = dish;

  return (
    <Dish id={id} name={name} price={price} ingredients={ingredients} />
  );
};
'use client';

import { Dish } from './dish';
import { getDish } from '@/services/get-dish';

export const DishContainer = async ({ id }) => {

  console.log('dishcontainer');
  const dish = await getDish(id);

  console.log(dish);

  const { name, price, ingredients } = dish;

  return (
    <Dish id={id} name={name} price={price} ingredients={ingredients} />
  );
};
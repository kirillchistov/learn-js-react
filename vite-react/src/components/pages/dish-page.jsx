'use client';

import { useParams } from 'react-router';
import { DishContainer } from '../Dish/dish-container';

export const DishPage = () => {
  const { dishId } = useParams();

  return <DishContainer id={dishId} />;
};
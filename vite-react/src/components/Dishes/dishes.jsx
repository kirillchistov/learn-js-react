'use client';

import { DishTabContainer } from '../DishTab/dish-tab-container';

export const Dishes = ({ dishIds }) => {
  return (
    <div>
      <h3>Menu</h3>
      <ul>
      {dishIds?.map((dishId) => (
        <li key={dishId}><DishTabContainer id={dishId} /></li>
      ))}
      </ul>
    </div>
  );
};
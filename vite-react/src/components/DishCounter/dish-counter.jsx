'use client';

import { Counter } from '../Counter/counter';
import { useCounter } from '../../hooks/use-counter';

export const DishCounter = ( {id} ) => {
  const { value, increment, decrement } = useCounter(id);

  return <Counter value={value} increment={increment} decrement={decrement} />;
};
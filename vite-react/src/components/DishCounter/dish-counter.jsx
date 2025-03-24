import { Counter } from '../Counter/counter';
import { useCounter } from '../../hooks/use-counter';

export const DishCounter = () => {
  const { value, increment, decrement } = useCounter();

  return <Counter value={value} increment={increment} decrement={decrement} />;
};
import { Counter } from './counter';

export const ReviewsCounter = ({ increment, decrement, count }) => {
  return (
    <Counter onIncrement={increment} onDecrement={decrement} value={count} />
  );
};
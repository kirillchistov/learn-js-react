import { useCount } from './use-counter';
// import { MIN_COUNT, MAX_COUNT } from '../../constants/config.jsx';

export const Counter = () => {
  const { value, increment, decrement } = useCount();

  return (
    <div>
      <button onClick={decrement}>-</button>
      {value}
      <button onClick={increment}>+</button>
    </div>
  );
};

import { useState, useCallback } from 'react';
import { MIN_COUNT, MAX_COUNT } from '../../constants/config';

export const useCounter = () => {
  const [value, setCount] = useState(MIN_COUNT);

  const decrement = useCallback(
    () => setCount((prevCount) => Math.min(prevCount - 1, MIN_COUNT)),
    []
  );

  const increment = useCallback(
    () => setCount((prevCount) => Math.min(prevCount + 1, MAX_COUNT)),
    []
  );


  return {
    value,
    increment,
    decrement,
  };
};


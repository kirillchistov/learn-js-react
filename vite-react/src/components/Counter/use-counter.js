// add callback to use lastValue in counter
import { useState, useCallback } from 'react';
import { MIN_COUNT, MAX_COUNT } from '../../constants/config';


export const useCount = ({ min = MIN_COUNT, max = MAX_COUNT } = {}) => {
  const [value, setValue] = useState(min);

  const increment = useCallback (
    () => setValue((prevValue) => Math.min(prevValue + 1, max)),
    [max]
  );
  const decrement = useCallback (
    () => setValue((prevValue) => Math.max(prevValue - 1, min)),
    [min]
  );

  return {
    value,
    increment,
    decrement,
  };
};
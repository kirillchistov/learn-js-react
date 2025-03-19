import { useState } from 'react';
import { MIN_COUNT, MAX_COUNT } from '../../constants/config';

export const useCount = ({ min = MIN_COUNT, max = MAX_COUNT } = {}) => {
  const [value, setValue] = useState(min);

  const increment = () => setValue(Math.min(value + 1, max));
  const decrement = () => setValue(Math.max(value - 1, min));

  return {
    value,
    increment,
    decrement,
  };
};
import { useState } from 'react';
import { MIN_COUNT, MAX_COUNT } from '../constants/config';

export const useCounter = () => {
  const [value, setCount] = useState(MIN_COUNT);

    const increment = () => {
        if (value < MAX_COUNT) {
            setCount(value + 1);
        }
    };
    const decrement = () => {
        if (value > MIN_COUNT) {
            setCount(value - 1);
        }
    };

  return {
    value,
    increment,
    decrement,
  };
};
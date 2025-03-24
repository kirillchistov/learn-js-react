import React, { useState, useCallback } from 'react';
import { Counter } from '../Counter/counter';

export const DishCounter = () => {
  const [dishCount, setDishCount] = useState(0);

  const handleDishCount = useCallback((newValue) => {
    setDishCount(Number(newValue));
  }, []);
  return (
    <div>
      <Counter value={dishCount} onChange={handleDishCount} />
    </div>
  );
};
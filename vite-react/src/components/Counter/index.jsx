import React, { useState } from 'react';
import { MIN_COUNT, MAX_COUNT } from '../../constants/config.jsx';

// инициализируем счетчик с минимальным значением
const ReviewCounter = () => {
  const [count, setCount] = useState(MIN_COUNT);

// Если предыдущее значение счетчика меньше максимума, инкрементим или оставляем макс
  const increment = () => {
    setCount((preCount) => (
        preCount < MAX_COUNT ? preCount + 1 : preCount
    ));
  };

// Если предыдущее значение счетчика больше минимума, декрементим или оставляем
  const decrement = () => {
    setCount((preCount) => (
        preCount > MIN_COUNT ? preCount - 1 : preCount
    ));
  };

// Если счетчик мин. или меньше, кнопка декремента не активна
// Если счетчик макс. или больше, кнопка декремента не активна
  return (
    <div>
      <p>{count}</p>
      <button onClick={decrement} disabled={count <= MIN_COUNT}>
        -
      </button>
      <button onClick={increment} disabled={count >= MAX_COUNT}>
        +
      </button>
    </div>
  );
};

export default ReviewCounter;
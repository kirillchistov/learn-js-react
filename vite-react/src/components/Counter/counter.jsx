// import { useCounter } from '../../hooks/use-counter';
import CounterStyle from './counter.module.css';

export const Counter = ({ value, increment, decrement }) => {
  return (
    <div className={CounterStyle.counter}>
      <button className={CounterStyle.buttonLeft} onClick={decrement}>-</button>
      {value}
      <button className={CounterStyle.buttonRight} onClick={increment}>+</button>
    </div>
  );
};
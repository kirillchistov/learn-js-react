import CounterStyle from './counter.module.css';
import { Button } from '../Button/button';

export const Counter = ({ value, increment, decrement }) => {
  return (
    // <div className={CounterStyle.counter}>
    //   <button className={CounterStyle.buttonLeft} onClick={decrement}>-</button>
    //   {value}
    //   <button className={CounterStyle.buttonRight} onClick={increment}>+</button>
    // </div>
    <div>
      <Button title='-' onClick={decrement} size='400' />
      <span className={CounterStyle.count}>{value}</span>
      <Button title='+' onClick={increment} size='400' />
    </div>
  );
};
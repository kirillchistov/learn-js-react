import { DishCounter } from '../DishCounter/dish-counter';
import styles from './cart-item.module.css';

export const CartItem = ({ name, id }) => {
  return (
    <div className={styles.container}>
      {name}:  <DishCounter id={id}/>
    </div>
  );
};
import { DishCounter } from '../DishCounter/dish-counter';
import styles from './dish.module.css';

export const Dish = ({ id, name, price, ingredients }) => {

  return (
    <div className={styles.dish}>
      <div className={styles.container}>
        <h3>{name}</h3>
        <div><DishCounter id={id} /></div>
      </div>
      <ul>
        <li>price: {price}</li>
        <li>ingredients: {ingredients}</li>
      </ul>
    </div>
  );
};
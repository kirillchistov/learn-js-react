import { DishTab } from '../DishTab/dish-tab.jsx';
import styles from './menu.module.css';

export const Menu = ({ dishes }) => {

  return (
    <>
      <h3>Menu</h3>
      <ul>
        {dishes.map(({ id, name }) => (
          <li key={id} className={styles.main}>
            <DishTab id={id} name={name} />
          </li>
        ))}
      </ul>
    </>
  );
};
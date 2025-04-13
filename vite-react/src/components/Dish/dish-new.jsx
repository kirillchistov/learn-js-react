import { AuthContext } from '../../auth-context';
import { DishCounter } from '../DishCounter/dish-counter';
import { use } from 'react';

import styles from './dish.module.css';

export const Dish = ({ name, id, price, contents }) => {
  const { auth } = use(AuthContext);
  const { isAuthorized } = auth;

  if (!name) {
    return null;
  }  

  return (
    <div className={styles.dish}>
      <div className={styles.container}>
        <h3>{name}</h3>
        <div>{isAuthorized && (<DishCounter id={id} />)}</div>
      </div>
      <ul>
        <li>price: {price}</li>
        <li>contents: {contents}</li>
      </ul>
    </div>
  );
};
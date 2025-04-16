// import { AuthContext } from '../../auth-context';
import { DishCounter } from '../DishCounter/dish-counter';
// import { use } from 'react';
// import Skeleton from 'react-loading-skeleton';
import styles from './dish.module.css';

export const Dish = ({ id, name, price, ingredients }) => {

  // const arrayForSkeletons = [null, null, null];
  // const { auth } = use(AuthContext);
  // const { isAuthorized } = auth;

  // if (!name) {
  //   return null;
  // }  

  return (
    <div className={styles.dish}>
      <div className={styles.container}>
        <h3>{name}</h3>
        {/* <div>{isAuthorized && (<DishCounter id={id} />)}</div> */}
        <div><DishCounter id={id} /></div>
      </div>
      <ul>
        <li>price: {price}</li>
        <li>ingredients: {ingredients}</li>
      </ul>
    </div>
  );
};
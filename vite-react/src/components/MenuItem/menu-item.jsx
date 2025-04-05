import { use } from 'react';
import { AuthContext } from '../../auth-context';
import { DishCounter } from '../DishCounter/dish-counter';
import { selectDishById } from '../../redux/entities/dish/slice';
import styles from './menu-item.module.css';
import { useSelector } from 'react-redux';

export const MenuItem = ({ id }) => {
  
  const { auth } = use(AuthContext);
  const { isAuthorized } = auth;
  const { item } = useSelector((state) => selectDishById(state, id));

  if (!item) {
    return null;
  }

  const  { name } = item;

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        {name}
      </div>
      <div>
        {isAuthorized && (
          <DishCounter id={id} />
        )}
      </div>
    </div>
  );
};
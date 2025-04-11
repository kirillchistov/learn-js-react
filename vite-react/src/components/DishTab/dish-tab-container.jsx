import { AuthContext } from '../../auth-context';
import { useSelector } from 'react-redux';
import { use } from 'react';
import { selectDishById } from '../../redux/entities/dish/slice';
import { DishCounter } from '../DishCounter/dish-counter';
import { DishTab } from './dish-tab';
import styles from './dish-tab.module.css';

export const DishTabContainer = ({ id }) => {
  const dish = useSelector((state) => selectDishById(state, id));

  const { auth } = use(AuthContext);
  const { isAuthorized } = auth;


  if (!dish) {
    return null;
  }
  const { name } = dish;

  return (
    <div className={styles.container}>
      <DishTab name={name} id={id} />
      {isAuthorized && (<DishCounter id={id} />)}
    </div>
  );
};
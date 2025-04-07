import { AuthContext } from '../../auth-context';
import { useSelector } from "react-redux";
import { use } from "react";
import { selectDishById } from '../../redux/entities/dish/slice';
import { DishCounter } from "../DishCounter/dish-counter";
import { Dish } from "./dish";

import styles from "./dish.module.css";

export const DishContainer = ({ id }) => {
  const dish = useSelector((state) => selectDishById(state, id));
  const { auth } = use(AuthContext);

  if (!dish) {
    return null;
  }

  const { name } = dish;

  return (
    <div className={styles.container}>
      <Dish name={name} />
      {auth.isAuthorized ? <DishCounter id={id} /> : null}
    </div>
  );
};
import { useSelector } from 'react-redux';
import { Dish } from './dish';
import { selectDishById } from '../../redux/entities/dish/slice';

export const DishContainer = ({ id }) => {
  const dish = useSelector((state) => selectDishById(state, id));

  if (!dish) {
    return null;
  }

  const { name, price, ingredients } = dish || {};

  return (
    <Dish id={id} name={name} price={price} ingredients={ingredients} />
  );
};
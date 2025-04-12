import { useSelector } from 'react-redux';
import { selectDishById } from '../../redux/entities/dish/slice';
import { Dish } from './dish';

export const DishContainer = ({ id }) => {
  const dish = useSelector((state) => selectDishById(state, id));

  const { name, price, contents } = dish || {};

  return (
    <Dish name={name} price={price} contents={contents} id={id} />
  );
};
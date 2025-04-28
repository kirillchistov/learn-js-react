import { Dish } from './dish';
import { useGetDishByIdQuery } from '../../redux/services/api';

export const DishContainer = ({ id }) => {

  const {
    isLoading: isGetDishesLoading,
    isError: isDishesError,
    data,
  } = useGetDishByIdQuery(id);

  if (isGetDishesLoading) {
    return 'loading....';
  }
  if (isDishesError) {
    return 'error';
  }

  const { name, price, ingredients } = data;

  return (
    <Dish id={id} name={name} price={price} ingredients={ingredients} />
  );
};
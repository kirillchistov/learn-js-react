import { Menu } from './menu';
import { useGetDishesByRestaurantIdQuery } from '../../redux/services/api';

export const MenuContainer = ({ restaurantId }) => {

  const {
    isLoading: isGetDishesLoading,
    isError: isDishesError,
    data,
  } = useGetDishesByRestaurantIdQuery(restaurantId);

  if (isGetDishesLoading) {
    return 'loading....';
  }
  if (isDishesError) {
    return 'error';
  }

  return <Menu dishes={data} />;
};

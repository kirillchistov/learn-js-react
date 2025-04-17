import { useSelector } from 'react-redux';
import { selectRestaurantById } from '../../redux/entities/restaurant/slice';
import { selectDishIds } from '../../redux/entities/dish/slice';
import { Menu } from './menu';
import { getDishes } from '../../redux/entities/dish/get-dishes';
import { useRequest } from '../../hooks/use-request';

export const MenuContainer = ({ restaurantId }) => {
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );
  const requestStatus = useRequest(getDishes, restaurantId);
  const menuIds = useSelector(selectDishIds);

  if (requestStatus === 'idle' || requestStatus === 'pending') {
    return 'loading...';
  }

  if (requestStatus === 'rejected') {
    return 'error';
  }

  if (!restaurant) {
    return null;
  }

  const { name } = restaurant;

  return <Menu menuIds={menuIds} name={name} />;
};
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { selectRestaurantById } from '../redux/entities/restaurant/slice';
import { Dishes } from '../components/Dishes/dishes'
import { useRequest } from '../hooks/use-request';
import { getDishesByRestaurantId } from '../redux/entities/dish/get-dishes-by-restaurant-id';
import {
  REQUEST_STATUS_PENDING,
  REQUEST_STATUS_REJECTED,
} from '../constants/redux';

export const MenuPage = () => {
  const { restaurantId } = useParams();

  const restaurant = useSelector((state) => selectRestaurantById(state, restaurantId));

  const { menu } = restaurant || {};

  const requestStatus = useRequest(getDishesByRestaurantId, restaurantId);

  if (requestStatus === REQUEST_STATUS_PENDING) {
    return 'loading...';
  }

  if (requestStatus === REQUEST_STATUS_REJECTED) {
    return 'ERROR';
  }

  return menu && menu.length > 0 ? (
    <Dishes dishIds={menu} />
  ) : (
    <div>

      <p>No menu yet</p>
    </div>
  );    
};

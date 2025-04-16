import { useSelector } from 'react-redux';
import { useRequest } from '../../hooks/use-request';
import { selectRestaurantIds } from '../../redux/entities/restaurant/slice';
import { RestaurantTabContainer } from '../RestaurantList/restaurant-tab-container';
import { Outlet } from 'react-router';
import { getRestaurants } from '../../redux/entities/restaurant/get-restaurants';
import styles from './restaurants-page.module.css';

export const RestaurantsPage = () => {
  const requestStatus = useRequest(getRestaurants);
  const restaurantIds = useSelector(selectRestaurantIds);

  if (requestStatus === 'idle' || requestStatus === 'pending') {
    return 'loading';
  }

  if (requestStatus === 'rejected') {
    return 'error';
  }

  return (
    <div className={'container'}>
      <div className={styles.restaurantContainer}>
        {restaurantIds.map((id) => (
          <RestaurantTabContainer
            key={id}
            id={id}
          />
        ))}
      </div>
      <Outlet />
    </div>
  );
};
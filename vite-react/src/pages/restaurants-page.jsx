import { Tabs } from '../components/tabs/tabs';
import { useSelector } from 'react-redux';
import { selectRestaurantIds } from '../redux/entities/restaurant/slice';
import { RestaurantTabContainer } from '../components/RestaurantTab/restaurant-tab-container';
import { Outlet } from 'react-router';
import { getRestaurants } from '../redux/entities/restaurant/get-restaurants';
import {
  REQUEST_STATUS_PENDING,
  REQUEST_STATUS_REJECTED,
} from '../constants/redux';
import { useRequest } from '../hooks/use-request';

export const RestaurantsPage = () => {
  const restaurantIds = useSelector(selectRestaurantIds);
  const requestStatus = useRequest(getRestaurants);

  if (requestStatus === REQUEST_STATUS_PENDING || !restaurantIds?.length) {
    return 'loading...';
  }

  if (requestStatus === REQUEST_STATUS_REJECTED) {
    return 'ERROR';
  }

  return (
    <div>
      <h1>Restaurants Page</h1>

      <Tabs>
        {restaurantIds.map((id) => (
          <RestaurantTabContainer key={id} id={id} />
        ))}
      </Tabs>

      <Outlet />
    </div>
  );
};
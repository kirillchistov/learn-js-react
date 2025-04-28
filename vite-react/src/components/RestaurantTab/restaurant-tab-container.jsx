import { useGetRestaurantsQuery } from '../../redux/services/api';
import { RestaurantTabs } from './restaurant-tab';

export const RestaurantTabContainer = () => {

  const { data, isLoading, isError } = useGetRestaurantsQuery();

  if (isLoading) {
    return 'loading ...';
  }

  if (isError) {
    return 'error';
  }

  if (!data.length) {
    return null;
  }

  return <RestaurantTabs restaurants={data} />;
};
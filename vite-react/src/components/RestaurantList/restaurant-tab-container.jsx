'use client'

import { useGetRestaurantsQuery } from '@/redux/services/api.js';
import { RestaurantsTabs } from '@/components/RestaurantTab/restaurant-tab-container';

export const RestaurantsTabsContainer = () => {
  const { data, isLoading, isError } = useGetRestaurantsQuery();

  if (isLoading) {
    return 'loading....';
  }
  if (isError) {
    return 'error';
  }

  return <RestaurantsTabs restaurants={data} />;
};

'use client';

import { useGetRestaurantsQuery } from '@/redux/services/api';
import { RestaurantTabs } from './restaurant-tab';
import styles from './restaurant-tab.module.css';

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

  return (
    <nav className={styles.container}>
      <RestaurantTabs restaurants={data} />
    </nav>
  )
};
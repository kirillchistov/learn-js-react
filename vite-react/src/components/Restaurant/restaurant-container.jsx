'use client';

import { useGetRestaurantsQuery } from '../../redux/services/api';
import { Restaurant } from './restaurant';
import { Button } from '../Button/button';
import styles from './restaurant.module.css';

export const RestaurantContainer = ({ id }) => {
  const { data, isLoading, isError, refetch } =
    useGetRestaurantsQuery(undefined, {
      selectFromResult: (result) => ({
        ...result,
        data: result.data?.find(({ id: restaurantId }) => restaurantId === id),
      }),
    });

  if (isLoading) {
    return 'loading....';
  }
  if (isError) {
    return 'error';
  }
  const { name } = data;

  return (
    <div className={styles.restaurantContainer}>
      <Restaurant 
        name={name}
        id={id}
      />
      <div className={styles.tabContainer}>
        <Button title='Refetch' onClick={refetch} />
      </div>
    </div>
  );
};
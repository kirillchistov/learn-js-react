import { Outlet } from 'react-router';
import { useGetRestaurantsQuery } from '../../redux/services/api';
import { TabNav } from '../Tab/tab-nav';
import styles from './restaurants-page.module.css';

export const RestaurantsPage = () => {
  const { data, isLoading, isError } = useGetRestaurantsQuery();

  if (isLoading) {
    return 'loading....';
  }
  if (isError) {
    return 'error';
  }

  return (
    <>
      <div className={styles.restaurantContainer}>
        {data.map(({ id, name }) => (
          <TabNav key={id} to={id}>
            {name}
          </TabNav>
        ))}
      </div>
      <Outlet />
    </>
  );
};
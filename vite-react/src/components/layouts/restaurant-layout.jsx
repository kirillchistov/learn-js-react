import { RestaurantContainer } from '../restaurant/restaurant-container';
import styles from './restaurant-layout.module.css';

export const RestaurantLayout = async ({ children, params }) => {
  const { restaurantId } = await params;
  return (
    <div className={styles.root}>
      <RestaurantContainer id={restaurantId} />
      {children}
    </div>
  );
};

export default RestaurantLayout;

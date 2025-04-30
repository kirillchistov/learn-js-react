import { RestaurantContainer } from './restaurant-container';
import styles from "./restaurant.module.css";

export const RestaurantLayout = async ({ children, params }) => {
  const { restaurantId } = await params;
  return (
    <div className={styles.container}>
      <RestaurantContainer id={restaurantId} />
      {children}
    </div>
  );
};

export default RestaurantLayout;
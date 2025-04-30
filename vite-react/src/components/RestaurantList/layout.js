import { RestaurantTabContainer } from './restaurant-tab-container';
import styles from './restaurant-list.module.css';


export const RestaurantsLayout = ({ children }) => {
  return (
    <div className={styles.container}>
      <RestaurantTabContainer />
      {children}
    </div>
  );
};

export default RestaurantsLayout;
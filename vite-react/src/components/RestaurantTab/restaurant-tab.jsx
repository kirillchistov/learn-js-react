import { TabNav } from '../Tab/tab-nav';

// import styles from './restaurant-tab.module.css';


export const RestaurantTabs = ({ restaurants }) => {

  return (
      restaurants.map(({ name, id }) => (
        <TabNav href={`/restaurants/${id}`} key={id}>
          {name}
        </TabNav>
      ))
  );
};
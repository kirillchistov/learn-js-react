import { TabNav } from '../Tab/tab-nav';

export const RestaurantTabs = ({ restaurants }) => {

  return (
      restaurants.map(({ name, id }) => (
        <TabNav href={`/restaurants/${id}`} key={id}>
          {name}
        </TabNav>
      ))
  );
};
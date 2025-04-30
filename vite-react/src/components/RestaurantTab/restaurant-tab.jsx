import { TabNav } from '../Tab/tab-nav';

export const RestaurantTabs = ({ restaurants }) => {

  return (
      restaurants.map(({ name, id }) => (
        <TabNav href={id} key={id}>
          {name}
        </TabNav>
      ))
  );
};
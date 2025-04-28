import { TabNav } from '../Tab/tab-nav';

export const RestaurantTabs = ({ restaurants }) => {

  return (
      restaurants.map(({ name, id }) => (
        <TabNav to={id} key={id}>
          {name}
        </TabNav>
      ))
  );
};
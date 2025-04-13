import { useSelector } from 'react-redux';
import { selectRestaurantById } from '../../redux/entities/restaurant/slice';
import { TabNav } from '../Tab/tab-nav';

export const RestaurantTabContainer = ({ id, isActive }) => {

  const restaurant = useSelector((state) => selectRestaurantById(state, id));

  if (!restaurant) {
    return null;
  }

  const { name } = restaurant;
  return (
    <TabNav to={id} isActive={isActive} title={name}>
      {name}
    </TabNav>
  );
};
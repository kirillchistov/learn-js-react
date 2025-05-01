import { RestaurantsTabsContainer } from '../restaurants-tabs/restaurant-tabs-container.jsx';

export const RestaurantsLayout = ({ children }) => {
  return (
    <div className={'container'}>
      <RestaurantsTabsContainer />
      {children}
    </div>
  );
};

// import { LINKS } from './consts';
import { TabNav } from '../../components/Tab/tab-nav';

export const RestaurantNav = () => {
  return (
    <nav>
      {LINKS.map(({ path, name }) => (
        <NavigationLink key={path} to={path} text={name} />
      ))}
    </nav>
  );
};

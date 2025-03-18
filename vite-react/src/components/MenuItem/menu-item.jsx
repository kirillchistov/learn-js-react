import { Counter } from '../Counter/counter';
import menuStyle from './menu-item.module.css';

export const MenuItem = ({ item }) => {
  return (
    <div className={menuStyle.container}>
      <div className={menuStyle.title}>
        {item.name}
      </div>
      <div className={menuStyle.counter}>
        <Counter />
      </div>
    </div>
  );
};
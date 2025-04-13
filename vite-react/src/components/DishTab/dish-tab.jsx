import { TabNav } from '../Tab/tab-nav';
import styles from './dish-tab.module.css';

export const DishTab = ({ name, id }) => {


  return (
    <TabNav to={`/dish/${id}`} className={styles.dishTitle}>
      {name}
    </TabNav>

  );
};
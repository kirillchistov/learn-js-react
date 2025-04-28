import { use } from 'react';  
import { TabNav } from '../Tab/tab-nav';
import { DishCounter } from '../DishCounter/dish-counter.jsx';
import { AuthContext } from '../../auth-context';
import styles from './dish-tab.module.css';

export const DishTab = ({ name, id }) => {

  const { auth } = use(AuthContext);
  const { isAuthorized } = auth;

  return (
    <div className={styles.container}>
      <TabNav to={`/dish/${id}`} className={styles.dishTitle}>
        {name}
      </TabNav>
      {isAuthorized ? <span className={styles.counter}><DishCounter id={id} /></span> : null}
    </div>    

  );
};
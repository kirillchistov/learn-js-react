import { Button } from '../Button/button';
import styles from './tab.module.css';

export const TabItem = ({
  title,
  onClick,
  isActive,
  // colorViewVariant,
  // viewVariant,
}) => {
  return (
    <Button
      className={styles.tab}
      onClick={onClick}
      disabled={isActive}
      title={title}
      // colorViewVariant={colorViewVariant}
      // viewVariant={viewVariant}
    >
      <h2>{title}</h2>
    </Button>
  );
};
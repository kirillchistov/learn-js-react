import { Button } from '../Button/button';
import styles from './tab.module.css';

export const TabItem = ({
  title,
  onClick,
  isActive,
}) => {
  return (
    <div className={isActive ? styles.tabactive : styles.tab}>
      <Button
        onClick={onClick}
        disabled={isActive}
        title={title}
        >
        <h2>{title}</h2>
      </Button>
    </div>
  );
};
import styles from './dish.module.css';

export const Dish = ({ name }) => {

  return (
    <div className={styles.dish}>
      {name}
    </div>
  );
};
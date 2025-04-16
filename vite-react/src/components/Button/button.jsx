import classNames from 'classnames';
import styles from './button.module.css';
import { use } from 'react';
import { ThemeContext } from '../../theme-context';

export const Button = ({
  title,
  onClick,
  disabled,
  colorVariant = 'default',
  viewVariant = 'default',
  className,
}) => {
  const { theme } = use(ThemeContext);

  return (
    <button
      className={classNames(styles.container, className, {
        [styles.default]: colorVariant === 'default',
        [styles.active]: colorVariant === 'active',
        [styles.light]: theme === 'light',
        [styles.dark]: theme === 'dark',
        [styles.themeToggle]: viewVariant === 'themeToggle',
      })}
      disabled={disabled}
      onClick={onClick}
    >
      {title}
    </button>
  );
};
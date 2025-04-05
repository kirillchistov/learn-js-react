import classNames from 'classnames';
import styles from './button.module.css';
import { use } from 'react';
import { ThemeContext } from '../../theme-context';

export const Button = ({
  children,
  onClick,
  disabled,
  colorViewVariant = 'default',
  viewVariant = 'default',
  // size = '500',
  className,
}) => {
  const { theme } = use(ThemeContext);

  return (
    <button
      className={classNames(styles.root, className, {
        // [styles.size500]: size === '500',
        // [styles.size400]: size === '400',
        [styles.default]: colorViewVariant === 'default',
        [styles.active]: colorViewVariant === 'active',
        [styles.themeToggle]: viewVariant === 'themeToggle',
        [styles.dark]: theme === 'dark',
        [styles.light]: theme === 'light',
      })}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
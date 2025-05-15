'use client';

import { useFormStatus } from 'react-dom';
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
  formAction,
}) => {
  const { theme } = use(ThemeContext);
  const { pending } = useFormStatus();

  return (
    <button
      className={classNames(styles.container, className, {
        [styles.default]: colorVariant === 'default',
        [styles.active]: colorVariant === 'active',
        [styles.light]: theme === 'light',
        [styles.dark]: theme === 'dark',
        [styles.themeToggle]: viewVariant === 'themeToggle',
      })}
      disabled={disabled || pending}
      onClick={onClick}
      formAction={formAction}
    >
      {title}
    </button>
  );
};
'use client';

import { NavLink } from 'react-router';
import classNames from 'classnames/bind';
import styles from './tab.module.css';

export const TabNav = ({ children, to }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        classNames(styles.container, isActive && styles.navActive)
      }
    >
      {children}
    </NavLink>
  );
};
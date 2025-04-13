import { NavLink } from 'react-router';
import classNames from 'classnames/bind';
import styles from './tab.module.css';

export const TabNav = ({ to, children }) => {
  return (
    <NavLink
      className={({ isActive }) =>
        classNames(styles.container, isActive && styles.navActive)
      }
      to={to}
    >
      {children}
    </NavLink>
  );
};
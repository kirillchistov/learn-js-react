import React from 'react';
import { AuthButton } from '../AuthButton/auth-button';
import { ToggleThemeButton } from '../ToggleThemeButton/toggle-theme-button';

import styles from './header.module.css';


const Header = () => {
  return (
    <header>
      <div>
        <nav className={styles.header}>
          <a href='/'>Home</a>
          <ToggleThemeButton />
          <AuthButton />
        </nav>       
      </div>
    </header>
  );
};

export default Header;
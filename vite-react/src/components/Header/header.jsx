import React from 'react';
import { TabNav } from '../Tab/tab-nav';
import { AuthButton } from '../AuthButton/auth-button';
import { ToggleThemeButton } from '../ToggleThemeButton/toggle-theme-button';

import styles from './header.module.css';

const Header = () => {
  return (
    <header>
      <div>
        <nav className={styles.container}>
          <TabNav href={'/'}>Home</TabNav>
          <TabNav href={'/restaurants'}>Restauarants</TabNav>
          <ToggleThemeButton />
          <AuthButton />
        </nav>       
      </div>
    </header>
  );
};

export default Header;
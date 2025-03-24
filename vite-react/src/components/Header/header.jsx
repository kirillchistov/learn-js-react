import React from 'react';
import { AuthButton } from '../AuthButton/auth-button';
import { ToggleThemeButton } from '../ToggleThemeButton/toggle-theme-button';

import HeaderStyle from './header.module.css';


const Header = () => {
  return (
    <header className={HeaderStyle.header}>
      <div>
        <nav>
          <a href='/'>Home</a>
        </nav>
        <ToggleThemeButton />
        <AuthButton />
      </div>
    </header>
  );
};

export default Header;
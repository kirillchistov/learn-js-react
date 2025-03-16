import React from 'react';
import HeaderStyle from './header.module.css';


const Header = () => {
  return (
    <header className={HeaderStyle.header}>
      <div>
        <nav>
          <a href='/'>Home</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
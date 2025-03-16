import React from 'react';
import FooterStyle from './footer.module.css';

const Footer = () => {
  return (
    <footer className={FooterStyle.footer}>
      {/* get year */}
      <p>{new Date().getFullYear()} Learn React now and again.</p>
    </footer>
  );
};

export default Footer;
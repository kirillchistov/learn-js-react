import React from 'react';

const Footer = () => {
  return (
    <footer>
      // get year
      <p>{new Date().getFullYear()} Learn React now and again.</p>
    </footer>
  );
};

export default Footer;
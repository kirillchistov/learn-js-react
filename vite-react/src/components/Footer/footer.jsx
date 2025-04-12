import React from 'react';
import styles from './footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>{new Date().getFullYear()} Learn React now and again.</p>
    </footer>
  );
};

export default Footer;
import React from 'react';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import { Cart } from '../Cart/cart';
import { ProgressBar } from '../ProgressBar/progress-bar';
import styles from './layout.module.css';

export const Layout = ({ title, children }) => {
  return (
    <div className={styles.layout}>
      <ProgressBar />
      <Header />
      <main>
        <h1>{title}</h1>
        <section>{children}</section>
      </main>
      <Cart />
      <Footer />
    </div>
  );
};
'use client'

import Header from '../Header/header';
import Footer from '../Footer/footer';
import { CartContainer } from '../Cart/cart-container';
import { ProgressBar } from '../ProgressBar/progress-bar';
import { Outlet } from 'react-router';
import styles from './layout.module.css';

export const Layout = ({ title, children }) => {
  return (
    <div className={styles.layout}>
      <ProgressBar />
      <Header />
      <main>
        <h1>{title}</h1>
        <section>{children}</section>
        <Outlet />
      </main>
      <CartContainer />
      <Footer />
    </div>
  );
};
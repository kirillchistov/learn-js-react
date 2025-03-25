import React from 'react';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import { ProgressBar } from '../ProgressBar/progress-bar';
import LayoutStyle from './layout.module.css';

export const Layout = ({ title, children }) => {
  return (
    <div className={LayoutStyle.layout}>
      <ProgressBar />
      <Header />
      <main>
        <h1>{title}</h1>
        <section>{children}</section>
      </main>
      <Footer />
    </div>
  );
};

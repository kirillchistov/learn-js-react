import React from 'react';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import LayoutStyle from './layout.module.css';

// Передаем в пропсы заголовок и детей
export const Layout = ({ title, children }) => {
  return (
    <div className={LayoutStyle.layout}>
      <Header />
      <main>
        <h1>{title}</h1>
        <section>{children}</section>
      </main>
      <Footer />
    </div>
  );
};

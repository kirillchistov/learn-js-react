import React from 'react';
import Header from './Header';
import Footer from './Footer';

// Передаем в пропсы заголовок и детей
const Layout = ({ title, children }) => {
  return (
    <>
      <Header />
      <h1>{title}</h1>
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
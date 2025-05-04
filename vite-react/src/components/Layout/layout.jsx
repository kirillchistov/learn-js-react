
import Header from '../Header/header';
import Footer from '../Footer/footer';
import { CartContainer } from '../Cart/cart-container';
import { ProgressBar } from '../ProgressBar/progress-bar';
import styles from './layout.module.css';

export const Layout = ({ title, children }) => {
  return (
    <div className={styles.layout}>
      <ProgressBar />
      <Header />
      <main className={styles.main}>
        <h1>{title}</h1>
        <section>{children}</section>
      </main>
      <CartContainer />
      <Footer />
    </div>
  );
};
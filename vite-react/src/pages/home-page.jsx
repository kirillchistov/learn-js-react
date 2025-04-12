import { Link } from 'react-router';
import { Modal } from '../components/Modal/modal';
import heroImage from '../assets/images/hero-image.jpg';
import styles from './home.module.css';

export const HomePage = () => {
  return (
    <div className={styles.container}>
      <h2>Home Page</h2>
      <Link to='/restaurants'>All restaurants</Link>
      <Modal>
        <div className={styles.modalOverlay}>
          {/* <div className={styles.modalContainer}> */}
            <h3 className={styles.modalHeader}>Modal is visible</h3>
          {/* </div> */}
        </div>
      </Modal>
      <img 
        className={styles.heroImage}
        src={heroImage} 
        alt='Restaurants of New Orleans' 
      />
    </div>
  );
};
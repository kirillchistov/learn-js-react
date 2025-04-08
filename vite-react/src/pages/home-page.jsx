import { Link } from 'react-router';
import { Modal } from '../components/Modal/modal';
import heroImage from '../assets/images/hero-image.jpg';
import styles from './home.module.css';

export const HomePage = () => {
  return (
    <div className={styles.container}>
      <h2>Home Page</h2>
      <Link to='/restaurants'>All restaurants</Link>
      {/* <Link to='/reviews'>All reviews</Link>
      <Link to='/favorites'>Favorites</Link> */}
      <Modal> 
        <div>modal</div>
      </Modal>
      <img 
        className={styles.heroImage}
        src={heroImage} 
        alt='Restaurants of New Orleans' 
      />
    </div>
  );
};
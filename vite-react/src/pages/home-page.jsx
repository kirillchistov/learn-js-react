import { Link } from 'react-router';
import { Modal } from '../components/Modal/modal';

export const HomePage = () => {
  return (
    <div>
      <h2>Home Page</h2>
      <Link to='/restaurants'>All restaurants</Link>
      {/* <Link to='/reviews'>All reviews</Link>
      <Link to='/favorites'>Favorites</Link> */}
      <Modal> 
        <div>modal</div>
      </Modal>
    </div>
  );
};
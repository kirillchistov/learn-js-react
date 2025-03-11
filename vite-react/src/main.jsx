import { createRoot } from 'react-dom/client';
import './index.css';
import { restaurants } from './materials/mock';

const root = document.getElementById('root');
const reactRoot = createRoot(root);

reactRoot.render(
  <div>
    {
      restaurants.map((restaurant) => (
        <div key={restaurant.id} className='divRed'>
          <h2 className='headGreen'>{restaurant.name}</h2>
          <h3 className='headBlue'>Menu</h3>
          <ul>
            {
              restaurant.menu.map((item) => (
                <li key={item.id}>{item.name}</li>
              ))
            }
          </ul>
          <h3 className='headRed'>Reviews</h3>
          <ul>
            {
              restaurant.reviews.map((review) => (
                <li key={review.id}>{review.text}</li>
              ))
            }
          </ul>
        </div>
      ))
    }
  </div>
)

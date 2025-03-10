// import { createElement } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { restaurants } from './materials/mock';
// import App from './App.jsx';

const root = document.getElementById('root');
const reactRoot = createRoot(root);

// console.log(restaurants);

reactRoot.render(
  <div>
    {
      restaurants.map((restaurant) => (
        <div key={restaurant.id} className='divRed'>
          <h2 className='headGreen'>{restaurant.name}</h2>
          <h3 className='headBlue'>Меню</h3>
          <ul>
            {
              restaurant.menu.map((item) => (
                <li key={item.id}>{item.name}</li>
              ))
            }
          </ul>
          <h3 className='headRed'>Обзоры</h3>
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





// reactRoot.render(
//   <div>
//     {restaurants.map((place) => (
//       <div key={place.id}>
//         <h2>{place.name}</h2>
//         console.log(place.id, place.name);
//         <h3>Меню</h3>
//         <ul className='ulGreen'>
//           {restaurants.menu.map((item) => (
//             <li key={item.id}>
//               {item.name}
//             </li>
//           ))}
//         </ul>
//         <h3>Отзывы</h3>
//         <ul className='ulBlue'>
//           {restaurants.reviews.map((review) => (
//             <li key={review.id}>
//               {review.text}
//             </li>
//           ))}
//         </ul>
//       </div>
//     ))}
//   </div>
// );

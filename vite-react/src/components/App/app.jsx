import { Layout } from '../Layout/layout';
import { RestaurantsPage } from '../RestaurantsPage/restaurants-page';
import { HomePage } from '../../pages/home-page';
import { RestaurantPage } from '../../pages/restaurant-page';
import { MenuPage } from '../../pages/menu-page';
import { DishPage } from '../../pages/dish-page';
import { ReviewPage } from '../../pages/review-page';

import { ThemeContextProvider } from '../../theme-context/theme-context';
import { AuthContextProvider } from '../../auth-context/auth-context';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router';
import { store } from '../../redux/store';
import './app.module.css';

export const App = () => {
  return (
    <Provider store={store}>
      <AuthContextProvider>
        <ThemeContextProvider>
          <BrowserRouter>
            <Routes>
              <Route element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path='/restaurants' element={<RestaurantsPage />}>
                  <Route path=':restaurantId' element={<RestaurantPage />}>
                    <Route index element={<Navigate to='menu' />} />
                    <Route path='menu' element={<MenuPage />} />
                    <Route path='reviews' element={<ReviewPage />} />
                  </Route>
                </Route> 
                <Route path='/dish' element={<DishPage />}>
                  <Route path=':dishId' element={<DishPage />}></Route>
                </Route>
                <Route path='*' element={<div>Page not found</div>} />
              </Route>
              <Route path='*' element={<Navigate to='/' />} />
            </Routes>
          </BrowserRouter>
        </ThemeContextProvider>
      </AuthContextProvider>
    </Provider>
  );
};
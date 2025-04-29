import { Layout } from '../Layout/layout';
import { RestaurantsPage } from '../pages/restaurants-page';
import { HomePage } from '../pages/home-page';
import { RestaurantPage } from '../pages/restaurant-page';
import { MenuPage } from '../pages/menu-page';
import { DishPage } from '../pages/dish-page';
import { ReviewsPage } from '../pages/reviews-page';
import { ThemeContextProvider } from '../../theme-context/theme-context';
import { AuthContextProvider } from '../../auth-context/auth-context';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router';
import { store } from '../../redux/store';
import './app.css';
import './reset.css';

export const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AuthContextProvider>
          <ThemeContextProvider>
            <Routes>
              <Route element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path='/restaurants' element={<RestaurantsPage />}>
                  <Route path=':restaurantId' element={<RestaurantPage />}>
                    <Route index element={<Navigate to='menu' replace />} />
                    <Route path='menu' element={<MenuPage />} />
                    <Route path='reviews' element={<ReviewsPage />} />
                  </Route>
                </Route> 
                <Route path='/dish/:dishId' element={<DishPage />}></Route>
                <Route path='*' element={<div>Page not found</div>} />
              </Route>
              <Route path='*' element={<Navigate to='/' />} />
            </Routes>
          </ThemeContextProvider>
        </AuthContextProvider>
      </Provider>
    </BrowserRouter>
  );
};
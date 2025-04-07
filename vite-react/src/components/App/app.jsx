import { Layout } from '../Layout/layout';
import { RestaurantsPage } from '../RestaurantsPage/restaurants-page';
import { ThemeContextProvider } from '../../theme-context/theme-context';
import { AuthContextProvider } from '../../auth-context/auth-context';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';
import './app.module.css';

export const App = ({ title }) => {
  return (
    <Provider store={store}>
      <AuthContextProvider>
        <ThemeContextProvider>
          <Layout title={title}>
            <RestaurantsPage />
          </Layout>
        </ThemeContextProvider>
      </AuthContextProvider>
    </Provider>
  );
};
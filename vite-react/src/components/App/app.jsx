import { Layout } from '../Layout/layout';
import { Restaurants } from '../Restaurants/restaurants';
import './app.module.css';
import { ThemeContextProvider } from '../../theme-context/theme-context';
import { AuthContextProvider } from '../../auth-context/auth-context';


export const App = ({ title }) => {
  return (
    <AuthContextProvider>
      <ThemeContextProvider>
        <Layout title={title}>
          <Restaurants />
        </Layout>
      </ThemeContextProvider>
    </AuthContextProvider>
  );
};
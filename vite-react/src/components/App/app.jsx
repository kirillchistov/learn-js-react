
import { Layout } from '../Layout/layout';
import { ThemeContextProvider } from '../../theme-context/theme-context';
import { AuthContextProvider } from '../../auth-context/auth-context';
import { ReduxProvider } from '../../redux/services/provider';
import './app.css';
import './reset.css';

export const App = ({ children }) => {
  return (
      <ReduxProvider>
        <AuthContextProvider>
          <ThemeContextProvider>
            <Layout>{children}</Layout>
          </ThemeContextProvider>
        </AuthContextProvider>
      </ReduxProvider>
  );
};

export default App;
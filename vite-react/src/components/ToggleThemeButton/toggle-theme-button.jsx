import { use } from 'react';
import { ThemeContext } from '../../theme-context';
import { Button } from '../Button/button';

export const ToggleThemeButton = () => {
  const { theme, toggleTheme } = use(ThemeContext);

  return (
    <Button
      onClick={toggleTheme}
      title={theme === 'dark' ? 'Light' : 'Dark'}
    />
  );
};
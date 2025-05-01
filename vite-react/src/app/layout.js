import { App } from '../components/app/app';
export const metadata = {
  title: 'Next js app',
  description: 'Next js app',
};

const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
      <head>
        <link rel='icon' type='image/svg+xml' href='/vite.svg' />
      </head>
      <body>
        <App>{children}</App>
        <div id='modal'></div>
      </body>
    </html>
  );
};

export default RootLayout;

import { App } from '../components/App/app'

export const metadata = {
  title: 'Next JS Restaurants',
  description: 'Restaurant App',
};

const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
      <head>
        <link rel='icon' type='image/svg+xml' href='https://assets.vercel.com/image/upload/front/favicon/vercel/favicon.ico' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='anonymous' />
        <link
          href='https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap'
          rel='stylesheet'
        />
      </head>
      <body>
        <App>{children}</App>
        <div id='modal'></div>
      </body>
    </html>
  );
};

export default RootLayout;
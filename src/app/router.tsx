import { createBrowserRouter } from 'react-router-dom';

// pages
import { MainPage } from '../page/MainPage';
import { AuthPage } from '../page/AuthPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },

  {
    path: 'auth',
    element: <AuthPage />,
  },
]);

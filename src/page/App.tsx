import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { WithStore } from '../app/providers/WithStore';
import { AuthPage } from './AuthPage';
import { MainPage } from './MainPage';
import { CookiesProvider } from 'react-cookie';
import { ProtectedRoute } from '../feature/ProtectedRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ProtectedRoute.Main>
        <MainPage />
      </ProtectedRoute.Main>
    ),
  },

  {
    path: 'auth',
    element: (
      <ProtectedRoute.Auth>
        <AuthPage />
      </ProtectedRoute.Auth>
    ),
  },
]);

export function App() {
  return (
    <CookiesProvider>
      <WithStore>
        <RouterProvider router={router} />
      </WithStore>
    </CookiesProvider>
  );
}

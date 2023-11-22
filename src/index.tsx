import ReactDOM from 'react-dom/client';
import { router } from './app/router';

// styles
import './app/styles/vars.css';
import './app/styles/global.scss';

// components
import { CookiesProvider } from 'react-cookie';
import { WithStore } from './app/providers/WithStore';
import { RouterProvider } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <CookiesProvider>
    <WithStore>
      <RouterProvider router={router} />
    </WithStore>
  </CookiesProvider>,
);

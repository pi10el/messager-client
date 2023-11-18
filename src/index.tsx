import ReactDOM from 'react-dom/client';

// styles
import './app/styles/vars.css';
import './app/styles/global.scss';

// components
import { WithStore } from './app/providers/WithStore';
import { MainPage } from './page/MainPage';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <WithStore>
    <MainPage />
  </WithStore>,
);

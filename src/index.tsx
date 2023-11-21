import ReactDOM from 'react-dom/client';

// styles
import './app/styles/vars.css';
import './app/styles/global.scss';

// components
import { App } from './page/App';

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);

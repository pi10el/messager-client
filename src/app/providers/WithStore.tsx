import { Provider } from 'react-redux';
import { setupStore } from '../store';

interface Props {
  children: React.ReactNode;
}

export function WithStore({ children }: Props) {
  return <Provider store={setupStore()}>{children}</Provider>;
}

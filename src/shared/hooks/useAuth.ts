import { useCookies } from 'react-cookie';

export function useAuth() {
  const [cookie] = useCookies(['token']);
  return cookie.token ? true : false;
}

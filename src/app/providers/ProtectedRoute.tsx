import { useCookies } from 'react-cookie';
import { Navigate } from 'react-router-dom';

interface Props {
  path: string;
  children: React.ReactNode;
}

export function ProtectedRoute({ path, children }: Props) {
  const [cookie] = useCookies(['token']);

  if (!cookie.token) return <Navigate to={path} replace />;

  return children;
}

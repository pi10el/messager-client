import { useCookies } from 'react-cookie';
import { Navigate } from 'react-router-dom';

interface Props {
  children: React.ReactNode;
}

export const ProtectedRoute = {
  Main: ({ children }: Props) => {
    const [cookie] = useCookies(['token']);

    if (!cookie.token) return <Navigate to="auth" replace />;

    return <>{children}</>;
  },

  Auth: ({ children }: Props) => {
    const [cookie] = useCookies(['token']);

    if (cookie.token) return <Navigate to="/" replace />;

    return <>{children}</>;
  },
};

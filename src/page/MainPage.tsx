import { Navigate } from 'react-router-dom';
import { useAuth } from '../shared/hooks/useAuth';

// components
import { Chat } from '../widgets/Chat';
import { Tabs } from '../widgets/Tabs';

export function MainPage() {
  const isAuth = useAuth();

  if (!isAuth) return <Navigate to="auth" replace />;

  return (
    <main>
      <Tabs />
      <Chat />
    </main>
  );
}

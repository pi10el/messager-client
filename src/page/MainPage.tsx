// components
import { Chat } from '../widgets/Chat';
import { Tabs } from '../widgets/Tabs';
import { ProtectedRoute } from '../app/providers/ProtectedRoute';
import { useConnectSocket } from '../shared/hooks/useConnectSocet';
import { Loader } from '../feature/Loader';
import { Alerts } from '../widgets/Alerts';

export function MainPage() {
  const status = useConnectSocket();

  if (!status) return <Loader />;

  return (
    <ProtectedRoute path="auth">
      <main>
        <Tabs />
        <Chat />
      </main>
      <Alerts />
    </ProtectedRoute>
  );
}

import { Navigate } from 'react-router-dom';

// styles
import styles from './styles.module.scss';

//components
import { TempAccountBtn } from '../feature/TempAccountBtn';
import { AuthForms } from '../widgets/AuthForms';
import { useAuth } from '../shared/hooks/useAuth';

export function AuthPage() {
  const isAuth = useAuth();

  if (isAuth) return <Navigate to="/" replace />;

  return (
    <div className={styles.content}>
      <AuthForms />
      <TempAccountBtn />
    </div>
  );
}

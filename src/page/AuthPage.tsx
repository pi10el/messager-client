import useAppSelector from '../shared/hooks/useAppSelector';

// styles
import styles from './styles.module.scss';

//components
import { AnimatePresence } from 'framer-motion';
import { LoginForm, RegisterForm } from '../widgets/AuthForms';
import { TempAccountBtn } from '../feature/TemAccountBtn';

export function AuthPage() {
  const form = useAppSelector((s) => s.app.selectedForm);

  return (
    <div className={styles.content}>
      <AnimatePresence initial={false}>
        {form === 'login' && (
          <LoginForm
            initial={{ opacity: 0, y: 150 }}
            animate={{ opacity: 1, y: 0 }}
          />
        )}
        {form === 'signin' && (
          <RegisterForm
            initial={{ opacity: 0, y: 150 }}
            animate={{ opacity: 1, y: 0 }}
          />
        )}
      </AnimatePresence>
      <TempAccountBtn />
    </div>
  );
}

import { AnimatePresence } from 'framer-motion';

// state
import useAppSelector from '../../../shared/hooks/useAppSelector';

// components
import { LoginForm } from './LoginForm';
import { RegisterForm } from './RegisterForm';

export function AuthForms() {
  const form = useAppSelector((s) => s.app.selectedForm);

  return (
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
  );
}

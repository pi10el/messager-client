import { AnimatePresence, motion } from 'framer-motion';

// state
import useAppSelector from '../../../../shared/hooks/useAppSelector';
import useAppDispatch from '../../../../shared/hooks/useAppDispatch';

// styles
import styles from './styles.module.scss';

interface Props {
  children: React.ReactNode;
}

export function Wrapper({ children }: Props) {
  const isOpen = useAppSelector((s) => s.app.isSidebar);
  const { toggleSidebar } = useAppDispatch();

  return (
    <AnimatePresence>
      {isOpen && (
        <section className={styles.sidebar}>
          <motion.div
            transition={{
              type: 'spring',
              stiffness: 700,
              damping: 45,
            }}
            initial={{ opacity: 0, x: -350 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -350 }}
          >
            {children}
          </motion.div>
          <motion.button
            type="button"
            className={styles.overlay}
            onClick={() => toggleSidebar()}
            transition={{
              type: 'tween',
              duration: 0.2,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        </section>
      )}
    </AnimatePresence>
  );
}

// state
import useAppSelector from '../../../shared/hooks/useAppSelector';
import useAppDispatch from '../../../shared/hooks/useAppDispatch';

// frame motion
import { motion, AnimatePresence } from 'framer-motion';

// styles
import styles from './styles.module.scss';

// components
import { LogoutIcon } from '../../../shared/components/icons/LogoutIcon';
import { MoreIcon } from '../../../shared/components/icons/MoreIcon';
import { PaletteColorIcon } from '../../../shared/components/icons/PaletteColorIcon';
import { SwitchTheme } from '../../../feature/SwitchTheme';
import { EmptyPhoto } from '../../../entities/EmptyPhoto';

export function Sidebar() {
  const isOpen = useAppSelector((s) => s.app.isSidebar);
  const { toggleSidebar } = useAppDispatch();

  return (
    <AnimatePresence>
      {isOpen && (
        <section className={styles.sidebar}>
          <motion.div
            className={styles.content}
            transition={{
              type: 'spring',
              stiffness: 700,
              damping: 45,
            }}
            initial={{ opacity: 0, x: -350 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -350 }}
          >
            <div className={styles.header}>
              <div className={styles.image}>
                {/* <img src={empty} alt="profile logo" /> */}
                <EmptyPhoto />
                <h1>Username</h1>
              </div>
              <button type="button">
                <MoreIcon />
              </button>
            </div>
            <div className={styles.part}>
              <span>Аккаунт</span>
              <button type="button" className={styles.accountBtn}>
                <p>#Pi10el</p>
                <span>Ник пользователя</span>
              </button>
              <button type="button" className={styles.accountBtn}>
                <p>Я добрый человек</p>
                <span>О себе</span>
              </button>
            </div>
            <div className={styles.part}>
              <span>Настройки</span>
              <div className={styles.theme}>
                <div className={styles.settingsBtn}>
                  <PaletteColorIcon />
                  <span>Выбор темы</span>
                </div>
                <SwitchTheme />
              </div>
              <button type="button" className={styles.settingsBtn}>
                <LogoutIcon />
                <span>Выход</span>
              </button>
            </div>
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

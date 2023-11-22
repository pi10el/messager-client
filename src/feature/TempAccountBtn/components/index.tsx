import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

// styles
import styles from './styles.module.scss';

//components
import { QuestionIcon } from '../../../shared/components/icons/QuestionIcon';

export function TempAccountBtn() {
  const [isDropdown, setDropdown] = useState(false);

  const toggleDropdown = () => setDropdown(!isDropdown);

  return (
    <div className={styles.buttons}>
      <button type="button" className={styles.accountBtn}>
        Временный аккаунт
      </button>
      <button
        type="button"
        className={styles.questionBtn}
        onClick={toggleDropdown}
      >
        <QuestionIcon />
      </button>
      <AnimatePresence>
        {isDropdown && (
          <>
            <motion.div
              className={styles.dropdown}
              initial={{ opacity: 0, y: -250 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -250 }}
            >
              <span>
                Создается временный аккаунт активный в течении 12 часов, избегая
                этап регистрации. Данный аккаунт имеет доступ к полному
                функционалу приложения.
              </span>
            </motion.div>
            <motion.button
              type="button"
              className={styles.overlay}
              onClick={toggleDropdown}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

// styles
import styles from './styles.module.scss';

// components
import { MoreIcon } from '../../../../shared/components/icons/MoreIcon';
import { DownloadIcon } from '../../../../shared/components/icons/DownloadIcon';

export function MoreButton() {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [isDropdown, setIsDropdown] = useState(false);

  useEffect(() => {
    const clickHandler = (e: MouseEvent) => {
      const isContent = contentRef.current?.contains(e.target as Node);
      if (!isContent) setIsDropdown(false);
    };

    window.addEventListener('click', clickHandler);
    return () => {
      window.removeEventListener('click', clickHandler);
    };
  }, []);

  return (
    <div ref={contentRef} className={styles.content}>
      <button
        type="button"
        className={isDropdown ? styles.open : ''}
        onClick={() => setIsDropdown(!isDropdown)}
      >
        <MoreIcon />
      </button>
      <AnimatePresence>
        {isDropdown && (
          <motion.div
            className={styles.dropdown}
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
          >
            <button type="button">
              <DownloadIcon />
              Загрузить фото
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

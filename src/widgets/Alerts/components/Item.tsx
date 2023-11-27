import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

// styles
import styles from './styles.module.scss';
import CheckIcon from '../../../shared/components/icons/CheckIcon';
import WarningIcon from '../../../shared/components/icons/WarningIcon';

interface Props {
  id: number;
  status: boolean;
  message: string;
  callback: (id: number) => void;
}

export function Item({ id, message, status, callback }: Props) {
  const [isVisible, setIsVisible] = useState(false);

  const color = (status: boolean) =>
    status ? styles.alert_check : styles.alert_warning;

  useEffect(() => {
    setTimeout(() => {
      callback(id);
    }, 5400);

    setTimeout(() => {
      setIsVisible(true);
    }, 5000);
  }, []);

  return (
    <AnimatePresence>
      {!isVisible && (
        <motion.div
          className={`${styles.alert} ${color(status)}`}
          transition={{ duration: 0.3, type: 'spring' }}
          initial={{ x: 300 }}
          animate={{ x: 0 }}
          exit={{ x: 300 }}
        >
          <p>{message}</p>
          {status ? <CheckIcon /> : <WarningIcon />}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

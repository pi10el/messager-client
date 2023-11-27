import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

// socket
import SocketClient from '../../../../shared/api/socket.api';

// styles
import styles from './styles.module.scss';

// components
import { RefreshIcon } from '../../../../shared/components/icons/RefreshIcon';

interface Props {
  field: 'username' | 'about';
  label: string;
  value: string;
}

export function ProfileField({ field, value, label }: Props) {
  const [inputValue, setInputValue] = useState(value);

  const isValidUsername = field === 'username' && inputValue.length < 4;

  const onSubmit = () => {
    if (value !== inputValue && !isValidUsername)
      SocketClient.emit('profile:update', { [field]: inputValue });
  };

  return (
    <div className={styles.field}>
      <div>
        <input
          id={`profileFieldInput_${field}`}
          type="text"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') onSubmit();
          }}
        />
        <AnimatePresence>
          {value !== inputValue && !isValidUsername && (
            <motion.button
              type="button"
              onClick={onSubmit}
              initial={{ opacity: 0, rotateZ: 180 }}
              animate={{ opacity: 1, rotateZ: 0 }}
              exit={{ opacity: 0, rotateZ: 180 }}
            >
              <RefreshIcon />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
      <label htmlFor={`profileFieldInput_${field}`}>{label}</label>
    </div>
  );
}

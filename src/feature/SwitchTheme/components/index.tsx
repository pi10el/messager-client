import { useState } from 'react';
import { motion } from 'framer-motion';

// styles
import styles from './styles.module.scss';

// comnponents
import { MoonIcon } from '../../../shared/components/icons/MoonIcon';
import { SunIcon } from '../../../shared/components/icons/SunIcon';

export function SwitchTheme() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  const toogleSwitch = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  return (
    <button className={styles.switchtheme} onClick={toogleSwitch}>
      <motion.div
        className={styles[theme]}
        layout
        transition={{
          type: 'spring',
          stiffness: 700,
          damping: 35,
        }}
      >
        {theme === 'dark' ? <MoonIcon /> : <SunIcon />}
      </motion.div>
    </button>
  );
}

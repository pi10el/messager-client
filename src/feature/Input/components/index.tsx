import { forwardRef, useState } from 'react';

// styles
import styles from './styles.module.scss';

// components
import { EyeHideIcon } from '../../../shared/components/icons/EyeHideIcon';
import { EyeShowIcon } from '../../../shared/components/icons/EyeShowIcon';

type Props = {
  uniqueName: string;
  icon?: JSX.Element;
  error?: string | undefined;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, Props>(
  ({ uniqueName, icon, type, error, ...other }, ref) => {
    const [typePass, setTypePass] = useState<'text' | 'password'>('password');

    const handlerClick = () =>
      setTypePass(typePass === 'password' ? 'text' : 'password');

    return (
      <div className={`${styles.input} ${error ? styles.error : ''}`}>
        <div className={styles.container}>
          {icon && <label htmlFor={uniqueName}>{icon}</label>}
          <input
            {...other}
            ref={ref}
            type={type !== 'password' ? type : typePass}
            id={uniqueName}
          />

          {type === 'password' && (
            <button type="button" onClick={handlerClick}>
              {typePass === 'text' ? <EyeHideIcon /> : <EyeShowIcon />}
            </button>
          )}
        </div>
        {error && <span>{error}</span>}
      </div>
    );
  },
);

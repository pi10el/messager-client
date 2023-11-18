// styles
import styles from './styles.module.scss';

// components
import { PencilIcon } from '../../../shared/components/icons/PencilIcon';
import useAppDispatch from '../../../shared/hooks/useAppDispatch';

export function NewChatBtn() {
  const { setTab } = useAppDispatch();

  const clickHandler = () => setTab('users');

  return (
    <button className={styles.btn} onClick={clickHandler}>
      <PencilIcon />
    </button>
  );
}

// styles
import styles from './styles.module.scss';

// components
import { UserIcon } from '../../../shared/components/icons/UserIcon';

export function EmptyPhoto() {
  return <UserIcon className={styles.empty} />;
}

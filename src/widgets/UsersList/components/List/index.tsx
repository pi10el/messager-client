import { EmptyPhoto } from '../../../../entities/EmptyPhoto';

// styles
import styles from './styles.module.scss';

export function List() {
  return (
    <div className={styles.list}>
      <button className={styles.item}>
        {/* <img src={empty} alt="profile logo" /> */}
        <EmptyPhoto />
        <span>Username</span>
      </button>
      <button className={styles.item}>
        {/* <img src={empty} alt="profile logo" /> */}
        <EmptyPhoto />
        <span>Username</span>
      </button>
    </div>
  );
}

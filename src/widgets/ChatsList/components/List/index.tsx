// styles
import styles from './styles.module.scss';

// components
import { EmptyPhoto } from '../../../../entities/EmptyPhoto';

export function List() {
  return (
    <div className={styles.users}>
      <button type="button" className={`${styles.item} ${styles.active}`}>
        {/* <img src={empty} alt="profile logo" /> */}
        <EmptyPhoto />
        <div>
          <span>Username</span>
          <p>
            Да не парься Кирилл все нормально все люди все все понимают ни кто и
            слово не говорит сегодня они завтра ты так что все хорошо
          </p>
        </div>
      </button>
      <button type="button" className={styles.item}>
        {/* <img src={empty} alt="profile logo" /> */}
        <EmptyPhoto />
        <div>
          <span>Username</span>
          <p>
            Да не парься Кирилл все нормально все люди все все понимают ни кто и
            слово не говорит сегодня они завтра ты так что все хорошо
          </p>
        </div>
      </button>
    </div>
  );
}

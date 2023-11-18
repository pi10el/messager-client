// styles
import styles from './styles.module.scss';

export function Messages() {
  return (
    <div className={styles.messages}>
      <div className={`${styles.bubble} ${styles.right}`}>
        <div className={styles.message}>
          <span>Ага)</span>
        </div>
        <div className={styles.message}>
          <span>
            Буська а можно я просто тебе на такси отправлю и чуть больше
            поработаю)
          </span>
        </div>
      </div>
      <div className={`${styles.bubble} ${styles.left}`}>
        <div className={styles.message}>
          <span>Спасибо пусь</span>
        </div>
        <div className={styles.message}>
          <span>Окей</span>
        </div>
      </div>
    </div>
  );
}

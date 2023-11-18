// styles
import styles from './styles.module.scss';

// components
import { SendMessage } from '../../../feature/SendMessage';
import { Messages } from '../../../entities/Messages';
import { Navbar } from './Navbar';

export function Chat() {
  return (
    <div className={styles.content}>
      <Navbar />
      <div className={styles.chat}>
        <Messages />
        <SendMessage />
      </div>
    </div>
  );
}

import { AnimatePresence } from 'framer-motion';

// state
import useAppSelector from '../../../shared/hooks/useAppSelector';

// styles
import styles from './styles.module.scss';

// components
import { Tab } from './Tab';
import { NewChatBtn } from '../../../feature/NewChatBtn';
import { ChatsList } from '../../ChatsList';
import { Sidebar } from '../../Sidebar';
import { UsersList } from '../../UsersList';

export function Tabs() {
  const tab = useAppSelector((s) => s.app.tab);

  return (
    <div className={styles.tabs}>
      <AnimatePresence initial={false}>
        <div className={styles.content}>
          <Tab
            transitionX={-350}
            condition={[tab, 'chats']}
            className={styles.tab}
          >
            <ChatsList />
            <Sidebar />
            <NewChatBtn />
          </Tab>

          <Tab
            transitionX={350}
            condition={[tab, 'users']}
            className={styles.tab}
          >
            <UsersList />
          </Tab>
        </div>
      </AnimatePresence>
    </div>
  );
}

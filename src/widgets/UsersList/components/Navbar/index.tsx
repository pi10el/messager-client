// state
import useAppDispatch from '../../../../shared/hooks/useAppDispatch';

// styles
import styles from './styles.module.scss';

// components
import { Conatainer } from '../../../../entities/Container';
import { Search } from '../../../../feature/Search';
import { ArrowIcon } from '../../../../shared/components/icons/ArrowIcon';

export function Navbar() {
  const { setTab } = useAppDispatch();

  const clickHandler = () => setTab('chats');

  return (
    <Conatainer tag="section" variant="navbar">
      <div className={styles.content}>
        <button type="button" className={styles.back} onClick={clickHandler}>
          <ArrowIcon />
        </button>
        <Search />
      </div>
    </Conatainer>
  );
}

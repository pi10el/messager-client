// state
import useAppDispatch from '../../../../shared/hooks/useAppDispatch';

// styles
import styles from './styles.module.scss';

// components
import { Conatainer } from '../../../../entities/Container';
import { BurgerIcon } from '../../../../shared/components/icons/BurgerIcon';

export function Navbar() {
  const { toggleSidebar } = useAppDispatch();

  return (
    <Conatainer tag="section" variant="navbar">
      <div className={styles.content}>
        <button
          type="button"
          className={styles.burgerBtn}
          onClick={() => toggleSidebar()}
        >
          <BurgerIcon />
        </button>
      </div>
    </Conatainer>
  );
}

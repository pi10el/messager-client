// styles
import styles from './styles.module.scss';

// components
import { Conatainer } from '../../../../entities/Container';
import { EmptyPhoto } from '../../../../entities/EmptyPhoto';
import { ArrowIcon } from '../../../../shared/components/icons/ArrowIcon';
import { MoreIcon } from '../../../../shared/components/icons/MoreIcon';

export function Navbar() {
  return (
    <Conatainer tag="section" variant="navbar">
      <div className={styles.content}>
        <div>
          <button type="button" className={styles.backBtn}>
            <ArrowIcon />
          </button>
          <button type="button" className={styles.profileBtn}>
            {/* <img src={empty} alt="profile photo" /> */}
            <EmptyPhoto />
            <span>Username</span>
          </button>
        </div>
        <button type="button" className={styles.optionsBtn}>
          <MoreIcon />
        </button>
      </div>
    </Conatainer>
  );
}

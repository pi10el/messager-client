// styles
import styles from './styles.module.scss';

// components
import { SearchIcon } from '../../../shared/components/icons/SearchIcon';

export function Search() {
  return (
    <label htmlFor="inputSearch" className={styles.search}>
      <SearchIcon />
      <input type="text" id="inputSearch" placeholder="Поиск" />
    </label>
  );
}

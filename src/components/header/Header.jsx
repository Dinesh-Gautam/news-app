import { CategoryList } from "./Category";
import styles from "./header.module.css";
import { Search } from "./Search";

export function Header() {
  return (
    <header className={styles.container}>
      <div>
        <h1>Latest News</h1>
        <CategoryList />
      </div>
      <Search />
    </header>
  );
}

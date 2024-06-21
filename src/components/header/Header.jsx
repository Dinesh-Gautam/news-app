import styles from "./header.module.css";

export function Header({ children }) {
  return <header className={styles.container}>{children}</header>;
}

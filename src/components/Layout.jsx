import styles from "./layout.module.css";

function FlexContainer({ children }) {
  return <div className={styles.flexContainer}>{children}</div>;
}

export const Layout = {
  FlexContainer,
};

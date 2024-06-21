import styles from "./layout.module.css";

function FlexContainer({ children }) {
  return <div className={styles.flexContainer}>{children}</div>;
}

function GridContainer({ children }) {
  return <div className={styles.gridContainer}>{children}</div>;
}

export const Layout = {
  FlexContainer,
  GridContainer,
};

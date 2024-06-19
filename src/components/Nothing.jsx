import React from "react";
import styles from "./nothing.module.css";

function Nothing({ message }) {
  return (
    <div className={styles.container}>
      <pre className={styles.message}>{message || "Nothing to show"}</pre>
    </div>
  );
}

export default Nothing;

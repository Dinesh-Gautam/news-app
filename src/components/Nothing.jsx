import React from "react";
import styles from "./nothing.module.css";

function Nothing({ message }) {
  return (
    <div className={styles.container}>
      <p className={styles.message}>{message || "Nothing to show"}</p>
    </div>
  );
}

export default Nothing;

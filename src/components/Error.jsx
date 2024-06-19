import React from "react";
import styles from "./error.module.css";
function Error({ message }) {
  return (
    <div className={styles.container}>
      <p className={styles.message}>{message || "Some error occurred!"}</p>
      <div>
        <button>Visit Home page</button>
      </div>
    </div>
  );
}

export default Error;

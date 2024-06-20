import { useNavigate } from "react-router-dom";
import React from "react";
import styles from "./error.module.css";
import { isHomePage } from "../utils/common";

function Error({ message }) {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <p className={styles.message}>{message || "Some error occurred!"}</p>
      <div>
        {!isHomePage() ? (
          <button onClick={() => navigate("/")}>Visit Home page</button>
        ) : (
          <button onClick={() => window.location.reload()}>Reload</button>
        )}
      </div>
    </div>
  );
}

export default Error;

import React from "react";
import { PATHS } from "../constants";
import styles from "./nav.module.css";

function Nav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <a href={PATHS.HOME}>Home</a>
        </li>
        <li>
          <a href={PATHS.FAVORITES}>Favorites</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;

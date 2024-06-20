import React from "react";
import styles from "./pagination.module.css";
import Icons from "./Icons";

function Pagination({ maxPages, currentPage, onPageChange }) {
  function changePage(direction) {
    if (direction === "next") {
      onPageChange(parseInt(currentPage) + 1);
    } else if (direction === "prev") {
      onPageChange(parseInt(currentPage) - 1);
    }
  }

  return (
    <div className={styles.container}>
      <button disabled={currentPage < 1} onClick={() => changePage("prev")}>
        <Icons.Left />
        <span>Prev</span>
      </button>

      <span>
        Page {currentPage || 1} of {maxPages || 1}
      </span>

      <button
        disabled={currentPage >= maxPages}
        onClick={() => changePage("next")}
      >
        <span>Next</span>
        <Icons.Right />
      </button>
    </div>
  );
}

export default Pagination;

import React, { useState } from "react";
import styles from "./pagination.module.css";

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
        prev
      </button>

      <span>
        Page {currentPage || 1} of {maxPages || 1}
      </span>

      <button
        disabled={currentPage >= maxPages}
        onClick={() => changePage("next")}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;

import React, { useState } from "react";
import styles from "./pagination.module.css";
import Icons from "./Icons";

function Pagination({ maxPages, currentPage, onPageChange }) {
  const [value, setValue] = useState(currentPage || 1);

  function changePage(direction) {
    if (direction === "next") {
      return onPageChange(parseInt(currentPage) + 1);
    }

    if (direction === "prev") {
      return onPageChange(parseInt(currentPage) - 1);
    }

    return onPageChange(parseInt(value));
  }

  return (
    <div className={styles.container}>
      <button disabled={currentPage < 2} onClick={() => changePage("prev")}>
        <Icons.Left />
        <span>Prev</span>
      </button>

      <span>
        Page{" "}
        <input
          type="number"
          min={1}
          max={maxPages}
          onBlur={() => changePage()}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              changePage();
            }
          }}
          onChange={(e) => {
            if (e.target.value > maxPages || e.target.value < 1);
            setValue(e.target.value);
          }}
          value={value}
        />{" "}
        of {maxPages || 1}
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

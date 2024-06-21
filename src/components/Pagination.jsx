import React, { useState } from "react";
import styles from "./pagination.module.css";
import Icons from "./Icons";
import { getValidPageValue } from "../utils/common";

function Pagination({ maxPages, currentPage, onPageChange }) {
  const [value, setValue] = useState(
    getValidPageValue(1, currentPage || 1, maxPages)
  );

  const setStateValue = (value) =>
    setValue(getValidPageValue(1, value, maxPages));

  function changePage(direction) {
    if (direction === "next") return onPageChange(value + 1);

    if (direction === "prev") return onPageChange(value - 1);

    return parseInt(currentPage) !== value && onPageChange(value);
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
          onKeyDown={(event) => event.key === "Enter" && changePage()}
          onChange={(e) =>
            (e.target.value < maxPages || e.target.value > 1) &&
            setStateValue(e.target.value)
          }
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

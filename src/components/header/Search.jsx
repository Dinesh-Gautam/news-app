import { useState } from "react";
import useSearchParamsActions from "../../hooks/useSearchParamsActions";
import Icons from "../Icons";
import styles from "./search.module.css";

export function Search() {
  const { changeParam, getParam, deleteParam } = useSearchParamsActions();
  const [value, setValue] = useState(getParam("keyword") || "");

  function keywordRemoveClickHandler() {
    setValue("");
    deleteParam("keyword");
  }

  function keywordClickHandler(keyword) {
    if (keyword) changeParam("keyword", keyword);
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        keywordClickHandler(value);
      }}
      className={styles.search}
    >
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="text"
        placeholder="Search Keyword"
      />
      {value && (
        <button type="button" onClick={() => keywordRemoveClickHandler()}>
          <Icons.Cross />
        </button>
      )}
      <button type="submit">
        <Icons.Search />
      </button>
    </form>
  );
}

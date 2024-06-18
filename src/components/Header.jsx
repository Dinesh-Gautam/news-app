import { useState } from "react";
import useSearchParamsActions from "../hooks/useSearchParamsActions";

import styles from "./header.module.css";

export function Header() {
  return (
    <header className={styles.container}>
      <div>
        <h1>Latest News</h1>
        <CategoryList />
      </div>
      <Search />
    </header>
  );
}

const categories = [
  {
    label: "Entertainment",
    uri: "news/Arts_and_Entertainment",
  },
  {
    label: "Business",
    uri: "news/Business",
  },
  {
    label: "Environment",
    uri: "news/Environment",
  },
  {
    label: "Health",
    uri: "news/Health",
  },
  {
    label: "Politics",
    uri: "news/Politics",
  },
  {
    label: "Science",
    uri: "news/Science",
  },
  {
    label: "Sports",
    uri: "news/Sports",
  },
];

function CategoryList() {
  const { changeParam, getParam } = useSearchParamsActions();

  function categoryClickHandler(category) {
    changeParam("category", category);
  }

  function isActive(uri) {
    return getParam("category") === uri;
  }

  return (
    <div className={styles.categories}>
      {categories.map(({ uri, label }) => (
        <button
          className={isActive(uri) ? styles.active : ""}
          onClick={() => categoryClickHandler(uri)}
          key={uri}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

function Search() {
  const { changeParam, getParam } = useSearchParamsActions();
  const [value, setValue] = useState(getParam("keyword") || "");

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
      <button type="submit">Go</button>
    </form>
  );
}

import { useState } from "react";
import { useStore } from "../contexts/Store";
import { useSearchParams } from "react-router-dom";

export function Header() {
  const { setSearchParams } = useStore();

  return (
    <header>
      <h1>Latest News</h1>
      <CategoryList />
      <Search />
    </header>
  );
}

const categories = ["Business", "Sports", "World", "Politics", "Breaking"];
function CategoryList() {
  const [searchParams, setSearchParams] = useSearchParams();

  function categoryClickHandler(category) {
    console.log(searchParams);

    setSearchParams(searchParams.append("category", category));
  }

  return (
    <div>
      {categories.map((category) => (
        <button onClick={() => categoryClickHandler(category)} key={category}>
          {category}
        </button>
      ))}
    </div>
  );
}

function Search() {
  return (
    <div>
      <input type="text" placeholder="Search" />
      <button>Go</button>
    </div>
  );
}

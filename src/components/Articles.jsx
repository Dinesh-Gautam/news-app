import { useEffect } from "react";
import { useNewsApi } from "../hooks/useNewsApi";

export function Articles() {
  const articles = useNewsApi();

  return (
    <div>
      hello
      {/* {articles.map((article) => (
        <Article key={article.title} {...article} />
      ))} */}
    </div>
  );
}

function Article({ title, content }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
}

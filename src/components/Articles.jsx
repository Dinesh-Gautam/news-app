import { actions, useNewsApi } from "../hooks/useNewsApi";
import useSearchParamsActions from "../hooks/useSearchParamsActions";
import { isArrayEmpty } from "../utils/common";

export function Articles() {
  const { searchParams } = useSearchParamsActions();
  const { data, loading, error } = useNewsApi(actions.GET_ARTICLES);
  const { pages, results } = data?.articles || {};

  if (error.error) {
    return <div>{error.message || "Something went wrong!"}</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  console.log(data);

  return (
    <div>
      {results && !isArrayEmpty(results) ? (
        results.map((article) => <Article key={article.uri} {...article} />)
      ) : (
        <div>Nothing to show</div>
      )}
    </div>
  );
}

function Article({ title, body }) {
  return (
    <div>
      <h6>{title}</h6>
      <p>{body}</p>
    </div>
  );
}

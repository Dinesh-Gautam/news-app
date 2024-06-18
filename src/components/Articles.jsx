import { actions, useNewsApi } from "../hooks/useNewsApi";
import useSearchParamsActions from "../hooks/useSearchParamsActions";
import { cn, isArrayEmpty } from "../utils/common";
import styles from "./articles.module.css";

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
    <div className={styles.container}>
      {results && !isArrayEmpty(results) ? (
        results.map((article, index) => (
          <Article key={article.uri} banner={index === 0} {...article} />
        ))
      ) : (
        <div>Nothing to show</div>
      )}
    </div>
  );
}

function Article({ title, body, image, date, banner }) {
  return (
    <div>
      <div className={cn(styles.article, banner && styles.banner)}>
        {image && (
          <div className={styles.imageContainer}>
            <img src={image} alt="title" />
          </div>
        )}
        <div className={styles.content}>
          <h2>{title}</h2>
          <span>{date}</span>
          <p>{body}</p>
        </div>
        <div className={styles.buttons}>
          <button>Favorite</button>
          <button>Read More</button>
        </div>
      </div>
    </div>
  );
}

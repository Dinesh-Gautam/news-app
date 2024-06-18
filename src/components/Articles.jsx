import { actions, useNewsApi } from "../hooks/useNewsApi";
import useSearchParamsActions from "../hooks/useSearchParamsActions";
import { cn, isArrayEmpty } from "../utils/common";
import Pagination from "./Pagination";
import styles from "./articles.module.css";

export function Articles() {
  const { searchParams, changeParam, getParam } = useSearchParamsActions();
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
    <>
      <Pagination
        onPageChange={(pageNo) => changeParam("page", pageNo)}
        currentPage={getParam("page") || 1}
        maxPages={pages}
      />
      <div className={styles.container}>
        {results && !isArrayEmpty(results) ? (
          results.map((article, index) => (
            <Article key={article.uri} isBanner={index === 0} {...article} />
          ))
        ) : (
          <div>Nothing to show</div>
        )}
      </div>
    </>
  );
}

function Article({ title, body, image, date, isBanner }) {
  return (
    <div>
      <div className={cn(styles.article, isBanner && styles.banner)}>
        {image && (
          <div className={styles.imageContainer}>
            <img loading="lazy" src={image} alt="title" />
          </div>
        )}
        <div className={styles.content}>
          <h2>{title}</h2>
          <span>{date}</span>
          <div className={styles.paragraph}>
            <p>{body}</p>
          </div>
        </div>
        <div className={styles.buttons}>
          <button>Favorite</button>
          <button>Read More</button>
        </div>
      </div>
    </div>
  );
}

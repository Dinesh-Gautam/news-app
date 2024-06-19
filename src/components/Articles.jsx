import { Link } from "react-router-dom";
import { actions, useNewsApi } from "../hooks/useNewsApi";
import useSearchParamsActions from "../hooks/useSearchParamsActions";
import { cn, isArrayEmpty } from "../utils/common";
import Error from "./Error";
import Pagination from "./Pagination";
import styles from "./articles.module.css";
import Nothing from "./Nothing";
import Skeleton from "./Skeleton";

export function Articles() {
  const { data, loading, error } = useNewsApi(actions.GET_ARTICLES);
  const { changeParam, getParam } = useSearchParamsActions();
  const { pages, results } = data?.articles || {};

  if (error.error) {
    return <Error message={error.message} />;
  }

  if (loading || !results) {
    return <SkeletonLoading />;
  }

  if (isArrayEmpty(results)) return <Nothing message="No Articles found" />;

  return (
    <>
      <Pagination
        onPageChange={(pageNo) => changeParam("page", pageNo)}
        currentPage={getParam("page") || 1}
        maxPages={pages}
      />
      <div className={styles.container}>
        {results.map((article, index) => (
          <Article key={article.uri} isBanner={index === 0} {...article} />
        ))}
      </div>
      <Pagination
        onPageChange={(pageNo) => changeParam("page", pageNo)}
        currentPage={getParam("page") || 1}
        maxPages={pages}
      />
    </>
  );
}

function SkeletonLoading() {
  return (
    <div className={styles.container}>
      <SkeletonLoadingArticleTemplate banner />
      {Array.from({ length: 10 }, (_, i) => (
        <SkeletonLoadingArticleTemplate key={i} />
      ))}
    </div>
  );
}

function SkeletonLoadingArticleTemplate({ banner }) {
  return (
    <div style={{ pointerEvents: "none" }}>
      <div className={cn(styles.article, banner && styles.banner)}>
        <div className={styles.imageContainer}>
          <Skeleton.Image />
        </div>
        {!banner && (
          <div className={styles.content}>
            {/* <Skeleton.Title /> */}
            {/* <Skeleton.Span /> */}
            <Skeleton.Paragraph />
          </div>
        )}
      </div>
    </div>
  );
}

function Article({ title, body, image, date, isBanner, uri }) {
  return (
    <div className={cn(styles.article, isBanner && styles.banner)}>
      <Link to={"/detail?id=" + uri}>
        {image && (
          <div className={styles.imageContainer}>
            <img loading="lazy" src={image} alt={title} />
          </div>
        )}
        <div className={styles.content}>
          <h2>{title}</h2>
          <span>{date}</span>
          <div className={styles.paragraph}>
            <p>{body}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

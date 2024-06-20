import { Link } from "react-router-dom";
import { cn } from "../utils/common";
import styles from "./article.module.css";
import articlesStyle from "./articles.module.css";
import Skeleton from "./Skeleton";

export function Article({ title, body, image, date, isBanner, uri }) {
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

export function SkeletonLoading() {
  return (
    <div className={articlesStyle.container}>
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
            <Skeleton.Paragraph />
          </div>
        )}
      </div>
    </div>
  );
}

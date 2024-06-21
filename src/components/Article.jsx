import { Link } from "react-router-dom";
import { cn, getFormattedTime } from "../utils/common";
import { Layout } from "./Layout";
import Skeleton from "./Skeleton";
import styles from "./article.module.css";
import SeparatedValues from "./utils/SeparatedValues";

export function Article({ title, body, image, dateTime, isBanner, uri }) {
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
          <SeparatedValues
            values={[<span>{getFormattedTime(dateTime)}</span>]}
          />
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
    <Layout.FlexContainer>
      <SkeletonLoadingArticleTemplate banner />
      {Array.from({ length: 10 }, (_, i) => (
        <SkeletonLoadingArticleTemplate key={i} />
      ))}
    </Layout.FlexContainer>
  );
}

function SkeletonLoadingArticleTemplate({ banner }) {
  return (
    <div
      style={{ pointerEvents: "none" }}
      className={cn(styles.article, banner && styles.banner)}
    >
      <div className={styles.imageContainer}>
        <Skeleton.Image />
      </div>
      {!banner && (
        <div className={styles.content}>
          <Skeleton.Paragraph />
        </div>
      )}
    </div>
  );
}

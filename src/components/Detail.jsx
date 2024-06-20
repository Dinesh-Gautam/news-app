import React, { useMemo } from "react";
import Error from "../components/Error";
import Nothing from "../components/Nothing";
import Skeleton from "../components/Skeleton";
import { actions, useNewsApi } from "../hooks/useNewsApi";
import useSearchParamsActions from "../hooks/useSearchParamsActions";
import { calculateReadTime, isEmpty } from "../utils/common";
import styles from "./detail.module.css";

export function Detail() {
  const { getParam } = useSearchParamsActions();
  const { data, loading, error } = useNewsApi(actions.GET_ARTICLE_DETAIL);

  if (error.error) return <Error message={error.message} />;

  if (loading || !data) return <SkeletonLoading />;

  if (isEmpty(data)) return <Nothing />;

  const { title, body, image, categories, authors, date, location, source } =
    data && data[parseInt(getParam("id"))]?.info;

  return (
    <div className={styles.container}>
      <div></div>
      <div className={styles.main}>
        <div className={styles.header}>
          <Category categories={categories} />
        </div>
        <div className={styles.top}>
          <Info
            authors={authors}
            date={date}
            body={body}
            country={location.country.label.eng}
          />
          <h1>{title}</h1>
          {image && (
            <div className={styles.imageContainer}>
              <img loading="lazy" src={image} alt={title} />
            </div>
          )}
          <div className={styles.additionalInfo}>
            <button>Add to Favorite</button>
            <a href={"https://" + source.uri}>Source</a>
          </div>
        </div>
        <div className={styles.content}>
          <p>{body}</p>
        </div>
      </div>
    </div>
  );
}
function SkeletonLoading() {
  return (
    <div className={styles.container}>
      <div></div>
      <div className={styles.main}>
        <div className={styles.header}>
          <Skeleton.Span
            style={{ "--height": "var(--font-size-xll)", margin: 0 }}
          />
        </div>
        <div className={styles.top}>
          <div style={{ paddingBlock: "var(--padding)" }}>
            <Skeleton.Span
              style={{
                maxWidth: "80%",
                marginTop: "var(--padding)",
                marginInline: "auto",
              }}
            />
          </div>
          <Skeleton.Title
            style={{
              maxWidth: "80%",
              marginInline: "auto",
            }}
          />
          <Skeleton.Title style={{ maxWidth: "40%", marginInline: "auto" }} />
          <Skeleton.Image />
          <div className={styles.additionalInfo}>
            <Skeleton.Button />
            <Skeleton.Span />
          </div>
        </div>
        <div className={styles.content}>
          <Skeleton.Paragraph />
        </div>
      </div>
    </div>
  );
}
function Category({ categories }) {
  const category = useMemo(
    () =>
      categories
        .filter((c) => c.uri.startsWith("news"))
        .reduce((a, b) => (a = b.wgt > a.wgt ? b : a), { wgt: 0 }),
    [categories]
  );

  return (
    <div className={styles.category}>
      {category && <span>{category.label}</span>}
    </div>
  );
}

function Info({ authors, date, body, country }) {
  return (
    <div className={styles.info}>
      <span>
        By
        <span className={styles.authorsName}>
          {authors.map((a) => a.name).join(", ")}
        </span>
      </span>
      <span> • </span>
      <span>
        {new Date(date).toLocaleDateString(undefined, {
          weekday: undefined,
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </span>
      <span> • </span>
      <span>{country}</span>
      <div className={styles.readTime}>
        <span>{calculateReadTime(body)} min Read</span>
      </div>
    </div>
  );
}

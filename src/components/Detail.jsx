import React, { useMemo } from "react";
import Error from "../components/Error";
import Nothing from "../components/Nothing";
import Skeleton from "../components/Skeleton";
import useFavorite from "../hooks/useFavorite";
import { actions, useNewsApi } from "../hooks/useNewsApi";
import useSearchParamsActions from "../hooks/useSearchParamsActions";
import { calculateReadTime, isEmpty } from "../utils/common";
import { Layout } from "./Layout";
import styles from "./detail.module.css";
import ProxyImage from "./utils/ProxyImage";
import SeparatedValues from "./utils/SeparatedValues";

export function Detail() {
  const { data, loading, error } = useNewsApi(actions.GET_ARTICLE_DETAIL);
  const { getParam } = useSearchParamsActions();

  if (error.error) return <Error message={error.message} />;

  if (loading || !data) return <SkeletonLoading />;

  if (isEmpty(data)) return <Nothing />;

  const article = data && data[parseInt(getParam("id"))]?.info;

  return (
    <Layout.GridContainer className={styles.container}>
      <div></div>
      <div className={styles.main}>
        {!isEmpty(article.categories) && (
          <div className={styles.header}>
            <Category categories={article.categories} />
          </div>
        )}
        <div className={styles.top}>
          <Info
            authors={article.authors}
            date={article.date}
            body={article.body}
            location={article.location}
          />
          <h1>{article.title}</h1>
          {article.image && (
            <div className={styles.imageContainer}>
              <ProxyImage src={article.image} alt={article.title} />
            </div>
          )}
          <div className={styles.additionalInfo}>
            <FavoriteButton data={article} />
            <a href={"https://" + article.source.uri}>Source</a>
          </div>
        </div>
        <div className={styles.content}>
          <p>{article.body}</p>
        </div>
      </div>
    </Layout.GridContainer>
  );
}

function FavoriteButton(data) {
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorite();
  const { getParam } = useSearchParamsActions();
  const id = parseInt(getParam("id"));

  return isFavorite(id) ? (
    <button onClick={() => removeFromFavorites(id)}>
      Remove from Favorites
    </button>
  ) : (
    <button onClick={() => addToFavorites(id, data)}>Add to Favorites</button>
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

function Info({ authors, date, body, location }) {
  const country =
    location && (location.country.label.eng ?? location.label.eng);
  return (
    <div className={styles.info}>
      <SeparatedValues
        values={[
          !isEmpty(authors) && (
            <span>
              By{" "}
              <span className={styles.authorsName}>
                {authors.map((a) => a.name).join(", ")}
              </span>
            </span>
          ),
          date && (
            <span>
              {new Date(date).toLocaleDateString(undefined, {
                weekday: undefined,
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          ),
          country && <span>{country}</span>,
        ]}
      />
      <div className={styles.readTime}>
        <span>{calculateReadTime(body)} min Read</span>
      </div>
    </div>
  );
}

function SkeletonLoading() {
  return (
    <Layout.GridContainer>
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
    </Layout.GridContainer>
  );
}

import { actions, useNewsApi } from "../hooks/useNewsApi";
import useSearchParamsActions from "../hooks/useSearchParamsActions";
import { isEmpty } from "../utils/common";
import { Article, SkeletonLoading } from "./Article";
import Error from "./Error";
import { Layout } from "./Layout";
import Nothing from "./Nothing";
import Pagination from "./Pagination";

export function Articles() {
  const { data, loading, error } = useNewsApi(actions.GET_ARTICLES);
  const { changeParam } = useSearchParamsActions();
  const { page, pages, results } = data?.articles || {};

  if (error.error) return <Error message={error.message} />;

  if (loading || !results) return <SkeletonLoading />;

  if (isEmpty(results)) return <Nothing message="No Articles found" />;

  return (
    <>
      <Pagination
        onPageChange={(pageNo) => changeParam("page", pageNo)}
        currentPage={page}
        maxPages={pages}
      />
      <Layout.FlexContainer>
        {results.map((article, index) => (
          <Article key={article.uri} isBanner={index === 0} {...article} />
        ))}
      </Layout.FlexContainer>
      <Pagination
        onPageChange={(pageNo) => changeParam("page", pageNo)}
        currentPage={page}
        maxPages={pages}
      />
    </>
  );
}

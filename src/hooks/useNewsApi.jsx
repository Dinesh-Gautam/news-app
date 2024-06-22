import { useEffect, useState } from "react";
import { getArticleDetails, getArticles } from "../helpers/newsApi";
import useSearchParamsActions from "./useSearchParamsActions";

export const actions = {
  GET_ARTICLES: 0,
  GET_ARTICLE_DETAIL: 1,
};

const initialState = {
  DATA: null,
  LOADING: false,
  ERROR: { error: false, message: "" },
};

export function useNewsApi(action) {
  const [data, setData] = useState(initialState.DATA);
  const [loading, setLoading] = useState(initialState.LOADING);
  const [error, setError] = useState(initialState.ERROR);

  const { searchParams, getParam } = useSearchParamsActions();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(handleRequest, [searchParams]);

  function resetState() {
    setData(initialState.DATA);
    setLoading(initialState.LOADING);
    setError(initialState.ERROR);
  }

  function handleRequest() {
    resetState();
    setLoading(true);

    let response;

    switch (action) {
      case actions.GET_ARTICLES:
        response = getArticles({
          keyword: getParam("keyword"),
          category: getParam("category"),
          page: getParam("page"),
        });
        break;

      case actions.GET_ARTICLE_DETAIL:
        response = getArticleDetails({
          id: getParam("id"),
        });
        break;

      default:
        response = null;
        break;
    }

    if (response) {
      const { controller, promise } = response;

      promise
        .then((data) => setData(data))
        .catch(
          (error) =>
            !controller.signal.aborted && setError({ error: true, ...error })
        )
        .finally(() => setLoading(false));

      return () => controller?.abort();
    }
  }

  return { data, loading, error };
}

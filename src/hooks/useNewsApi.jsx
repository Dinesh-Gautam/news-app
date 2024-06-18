import { useEffect, useMemo, useState } from "react";
import { getArticles } from "../helpers/newAPI";
import useSearchParamsActions from "./useSearchParamsActions";

export const actions = {
  GET_ARTICLES: 0,
};

const initialState = {
  data: null,
  loading: false,
  error: { error: false, message: "" },
};

export function useNewsApi(action) {
  const [data, setData] = useState(initialState.data);
  const [loading, setLoading] = useState(initialState.loading);
  const [error, setError] = useState(initialState.error);

  const { searchParams } = useSearchParamsActions();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(handleRequest, [searchParams]);

  function resetState() {
    setData(initialState.data);
    setLoading(initialState.loading);
    setError(initialState.error);
  }

  function handleRequest() {
    resetState();
    setLoading(true);

    let response;

    if (action === actions.GET_ARTICLES) {
      response = getArticles({
        keyword: searchParams.get("keyword"),
        category: searchParams.get("category"),
        page: searchParams.get("page"),
      });
    }

    if (response) {
      const { controller, promise } = response;

      promise
        .then((data) => setData(data))
        .catch((error) => setError({ error: true, ...error }))
        .finally(() => setLoading(false));

      return () => controller && controller.abort();
    }
  }

  return { data, loading, error };
}

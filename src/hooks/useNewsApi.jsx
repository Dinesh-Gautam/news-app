import { useEffect, useMemo, useState } from "react";
import { getArticles } from "../helpers/newAPI";

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

  useEffect(handleRequest, []);

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
      response = getArticles();
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

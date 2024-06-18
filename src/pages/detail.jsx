import React from "react";
import { actions, useNewsApi } from "../hooks/useNewsApi";

function Detail() {
  const { data, loading, error } = useNewsApi(actions.GET_ARTICLE_DETAIL);
  console.log(data, loading, error);
  if (loading) return <p>Loading...</p>;
  if (error.error) return <p>Error</p>;

  return <div>Details page</div>;
}

export default Detail;

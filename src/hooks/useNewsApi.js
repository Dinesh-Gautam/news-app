import { useEffect } from "react";

export function useNewsApi() {
  const url = `https://www.newsapi.ai/api/v1/article/getArticles`;

  async function getArticles() {
    const data = {};

    const res = await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
    }).then((e) => e.json());
    console.log(res);
  }
  useEffect(() => {
    getArticles();
  }, []);
}

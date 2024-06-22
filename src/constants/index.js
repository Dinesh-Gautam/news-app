/**
 * API KEYS
 */
export const NEWS_API_KEY = process.env.REACT_APP_NEWS_API_KEY;

if (!NEWS_API_KEY) {
  throw new Error("NEWS_API_KEY is required in the .env file");
}

/**
 * PATHS - Define the application's route paths.
 */
export const PATHS = {
  HOME: "/",
  DETAIL: "/detail",
  FAVORITES: "/favorites",
};

/**
 * LOCAL STORAGE KEYS
 */
export const FAVORITE_LS_KEY = "favorites";

/**
 * END POINTS
 */
export const ENDPOINTS = {
  PROXY: `https://www.newsapi.ai/api/v1/proxy`,
  GET_ARTICLE_DETAIL: `https://www.newsapi.ai/api/v1/article/getArticle`,
  GET_ARTICLES: `https://www.newsapi.ai/api/v1/article/getArticles`,
};

/**
 * MISC
 */
export const FALLBACK_IMAGE_URL = `https://thumbs.dreamstime.com/b/newspaper-line-news-icon-press-article-paper-journal-212522658.jpg`;

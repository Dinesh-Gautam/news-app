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

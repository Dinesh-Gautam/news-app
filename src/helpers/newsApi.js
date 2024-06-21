import { NEWS_API_KEY, ENDPOINTS } from "../constants";
import { customFetch } from "../utils/fetch";

const defaultQueryParameters = {
  apiKey: NEWS_API_KEY,
  articleBodyLen: "300",
  articlesConceptLang: "eng",
  articlesCount: "100",
  articlesPage: "1",
  articlesSortBy: "date",
  includeArticleConcepts: "true",
  includeArticleImage: "true",
  includeArticleSentiment: "true",
  includeArticleShares: "true",
  resultType: "articles",
};

/**
 * Fetches articles based on the provided keyword, category, and page number.
 *
 * @param {Object} options - Options for fetching articles.
 * @param {string} [options.keyword] - Keyword to search for in article titles.
 * @param {string} [options.category] - Category URI to filter articles by category.
 * @param {number} [options.page] - Page number for pagination.
 * @returns {Promise} - Promise representing the fetched articles.
 */
export function getArticles({ keyword, category, page }) {
  const query = {
    $query: {
      lang: "eng",
      locationUri: "http://en.wikipedia.org/wiki/India",
    },
    $filter: { forceMaxDataTimeWindow: "31", isDuplicate: "skipDuplicates" },
  };

  const temp = [];

  if (category) {
    temp.push({
      categoryUri: category,
    });
  }

  if (keyword) {
    temp.push({
      keyword,
      keywordLoc: "title",
    });
  }

  if (temp.length > 1) {
    query.$query.$and = temp;
  } else {
    query.$query = { ...query.$query, ...temp[0] };
  }

  const params = new URLSearchParams({
    ...defaultQueryParameters,
    articlesPage: page || 1,
    query: JSON.stringify(query),
  });

  return customFetch(ENDPOINTS.GET_ARTICLES, params);
}

/**
 * Fetches details of an article based on the provided article ID.
 *
 * @param {Object} options - Options for fetching article details.
 * @param {string} options.id - uri of the article to fetch details for.
 * @returns {Promise} - Promise representing the fetched article details.
 */
export function getArticleDetails({ id }) {
  const params = new URLSearchParams({
    articleUri: [id],
    resultType: "info",
    includeArticleConcepts: true,
    includeArticleCategories: true,
    includeArticleLocation: true,
    includeArticleVideos: true,
    includeArticleImage: true,
    apiKey: defaultQueryParameters.apiKey,
  });

  return customFetch(ENDPOINTS.GET_ARTICLE_DETAIL, params);
}

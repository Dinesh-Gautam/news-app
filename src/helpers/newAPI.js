import { customFetch } from "../utils/fetch";

const endPoints = {
  GET_ARTICLE_DETAIL: `https://www.newsapi.ai/api/v1/article/getArticle`,
  GET_ARTICLES: `https://www.newsapi.ai/api/v1/article/getArticles`,
};

const defaultQueryParameters = {
  apiKey: "4271398c-d71a-4b4f-b294-0796541a1384",
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
    articlesPage: page || 2,
    query: JSON.stringify(query),
  });

  return customFetch(endPoints.GET_ARTICLES, params);
}

export function getArticleDetails({ id }) {
  const params = new URLSearchParams({
    articleUri: [id],
    resultType: "info",
    includeArticleImage: true,
    apiKey: defaultQueryParameters.apiKey,
  });

  return customFetch(endPoints.GET_ARTICLE_DETAIL, params);
}

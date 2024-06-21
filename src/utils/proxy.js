import { ENDPOINTS, NEWS_API_KEY } from "../constants";

/**
 * Give the proxy url for the given target
 *
 * @param {string} target URL
 */
export function getProxyUrl(target) {
  const endPoint = ENDPOINTS.PROXY;
  return (
    endPoint +
    "?" +
    new URLSearchParams({
      target,
      apiKey: NEWS_API_KEY,
    }).toString()
  );
}

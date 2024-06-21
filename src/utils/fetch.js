/**
 *  Custom fetch function to mimic network call
 * @param {string} endPoint - API end point
 * @param {object} params - url search parameters
 * @returns {object} - response or error
 */
export function customFetch(endPoint, params) {
  const fetchUrl = new URL(endPoint);
  if (params) {
    fetchUrl.search = params;
  }

  const controller = new AbortController();
  const signal = controller.signal;

  const promise = fetch(fetchUrl, signal).then(async (response) => {
    const json = await response.json();

    if (response.status === 200) {
      return Promise.resolve(json);
    } else {
      return Promise.reject(error(json.error || response.statusText));
    }
  });

  return { controller, promise };
}

export function error(message) {
  console.error(message);
  return { error: true, message };
}

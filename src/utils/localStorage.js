/**
 *  Gets data from local storage.
 * @param {string} key
 * @returns {data}
 */
export function getFromLocalStorage(key) {
  const data = localStorage.getItem(key);
  return data && JSON.parse(data);
}

/**
 * Saves the `data` to local storage.
 * @param {string} key
 * @param {*} data
 */
export function saveToLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

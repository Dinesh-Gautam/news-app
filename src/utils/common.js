/**
 * Checks if the given data is empty.
 *
 * @param {Object|Array|any} data - The data to check.
 * @returns {boolean} True if the data is empty, false otherwise.
 */
export function isEmpty(data) {
  if (typeof data === "object") {
    return Object.keys(data).length === 0;
  }

  if (Array.isArray(data)) {
    return data.length === 0;
  }

  return !!data;
}

/**
 * Joins the given class names into a single string.
 *
 * @param {...string} classNames - The class names to join.
 * @returns {string} The joined class names.
 */
export function cn(...classNames) {
  return classNames.filter((e) => e).join(" ");
}

/**
 * Calculates the estimated read time for the given content.
 *
 * @param {string} content - The content to calculate read time for.
 * @returns {number} The estimated read time in minutes.
 */
export function calculateReadTime(content) {
  const wordsPerMinute = 200;
  const words = content.split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}

/**
 * Checks if the current page is the home page.
 *
 * @returns {boolean} True if the current page is the home page, false otherwise.
 */
export function isHomePage() {
  return window.location.pathname === "/";
}

/**
 * Ensures a value is within a specified range.
 *
 * @param {number} min - The minimum value.
 * @param {number} value - The value to validate.
 * @param {number} max - The maximum value.
 * @returns {number} The validated value within the range.
 */
export function getValidPageValue(min, value, max) {
  if (value < min) return min;
  if (value > max) return max;
  return value;
}

/**
 * Formats a date string into a human-readable relative time.
 *
 * @param {string} dataTimeString - The date string to format.
 * @returns {string} The formatted relative time string.
 */
export function getFormattedTime(dataTimeString) {
  const date = new Date(dataTimeString);
  const now = new Date();
  const diff = now - date;

  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days > 0) return `${days} days ago`;
  if (hours > 0) return `${hours} hours ago`;
  if (minutes > 0) return `${minutes} minutes ago`;
  return `${seconds} seconds ago`;
}

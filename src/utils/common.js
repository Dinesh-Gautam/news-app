export function isArrayEmpty(arr) {
  return Array.isArray(arr) && arr.length === 0;
}

export function cn(...classNames) {
  return classNames.filter((e) => e).join(" ");
}

export function calculateReadTime(content) {
  const wordsPerMinute = 200;
  const words = content.split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}

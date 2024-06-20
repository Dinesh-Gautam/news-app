export function isEmpty(data) {
  if (typeof data === "object") return Object.keys(data).length === 0;
  if (Array.isArray(data)) return data.length === 0;

  return true;
}

export function cn(...classNames) {
  return classNames.filter((e) => e).join(" ");
}

export function calculateReadTime(content) {
  const wordsPerMinute = 200;
  const words = content.split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}

export function isHomePage() {
  return window.location.pathname === "/";
}
export function getValidPageValue(min, value, max) {
  if (value < min) return min;
  if (value > max) return max;
  return value;
}

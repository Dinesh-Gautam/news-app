export function isEmpty(data) {
  if (typeof data === "object") return Object.keys(data).length === 0;
  if (Array.isArray(data)) return data.length === 0;

  return !!data;
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

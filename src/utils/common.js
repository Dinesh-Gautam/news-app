export function isArrayEmpty(arr) {
  return Array.isArray(arr) && arr.length === 0;
}

export function cn(...classNames) {
  return classNames.filter((e) => e).join(" ");
}

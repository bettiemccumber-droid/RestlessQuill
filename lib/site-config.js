/** Paths read only to avoid reusing a static article slug. */
export const STATIC_SLUG_FILES = [
  "../js/main.js"
];

/**
 * Public path for one published article.
 * @param {string} slug
 * @returns {string}
 */
export function articlePath(slug) {
  return "/post-detail.html?slug=" + encodeURIComponent(slug);
}

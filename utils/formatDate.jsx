/**
 * Convert a Firebase Timestamp to a formatted date.
 * @param {object} timestamp - The Firebase Timestamp object.
 * @param {string} locale - The locale to use for formatting (default is "en-GB").
 * @returns {string} The formatted date in "25 Jul, 2025" format.
 */
export function formatDate(timestamp, locale = 'en-GB') {
  const eventDate = timestamp.toDate();
  return eventDate.toLocaleDateString(locale, {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
}

/**
 * Convert a Firebase Timestamp to a formatted time.
 * @param {object} timestamp - The Firebase Timestamp object.
 * @param {string} locale - The locale to use for formatting (default is "es-ES").
 * @returns {string} The formatted time in "14:30" format.
 */
export function formatTime(timestamp, locale = 'es-ES') {
  const eventDate = timestamp.toDate();
  return eventDate.toLocaleTimeString(locale, {
    hour: '2-digit',
    minute: '2-digit',
  });
}

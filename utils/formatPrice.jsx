/**
 * Format a given price to include two decimal places and a currency symbol.
 * @param {number} price - The price to be formatted.
 * @param {string} [currency='USD'] - The currency symbol to be used (default is USD).
 * @returns {string} The formatted price.
 */
export function formatPrice(price, currency = 'USD') {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(price);
}

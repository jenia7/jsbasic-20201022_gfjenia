/**
 * truncate
 * @param {string} str
 * @param {number} maxlength
 * @returns {string}
 */
function truncate(str, maxlength) {
  // ваш код...
  return str.length <= maxlength ? str : str.slice(0, maxlength - 1) + '\u2026';
}

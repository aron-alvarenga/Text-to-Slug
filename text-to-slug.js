/**
 * textToSlug - Converts a string into a URL-friendly slug.
 * @param {string} text - The string to be converted into a slug.
 * @returns {string} - The generated slug.
 */
function textToSlug(text) {
  if (!text) return "";

  // Remove accents and special characters
  const from = "áàâãäåçéèêëíìîïñóòôõöúùûüýÿæœß";
  const to = "aaaaaaceeeeiiiinooooouuuuyyoess";
  const mapping = new Map();
  for (let i = 0; i < from.length; i++) {
    mapping.set(from[i], to[i]);
  }

  const normalized = text
    .toLowerCase() // Convert to lowercase
    .split("") // Split into characters
    .map((char) => mapping.get(char) || char) // Replace special characters
    .join(""); // Rejoin the text

  // Replace invalid characters with hyphens
  return normalized
    .replace(/[^a-z0-9]+/g, "-") // Replace anything not a letter/number with hyphens
    .replace(/^-+|-+$/g, ""); // Remove extra hyphens at the start or end
}

// Export for Node.js usage
if (typeof module !== "undefined" && module.exports) {
  module.exports = textToSlug;
}

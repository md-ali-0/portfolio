// Utility functions for string operations

// Convert string to slug
export function toSlug(str: string): string {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

// Capitalize each word in a string
export function capitalizeWords(str: string): string {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

// Convert HTML to plain text
export function stripHtml(html: string): string {
  const tmp = document.createElement("div");
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText || "";
}

// Escape HTML characters
export function escapeHtml(unsafe: string): string {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// Truncate string with ellipsis
export function truncate(str: string, length: number, ending = "..."): string {
  if (str.length <= length) return str;
  return str.substring(0, length - ending.length) + ending;
}

// Convert camelCase to sentence case
export function camelToSentence(str: string): string {
  return str
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (str) => str.toUpperCase());
}

// Check if string contains only whitespace
export function isBlank(str: string): boolean {
  return !str || /^\s*$/.test(str);
}

// Remove extra whitespace from string
export function normalizeWhitespace(str: string): string {
  return str.replace(/\s+/g, " ").trim();
}
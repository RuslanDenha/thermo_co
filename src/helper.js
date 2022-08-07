export const toCapitalizedWords = (words) => (words.match(/[A-Za-z][a-z]*/g) || []).join(" ");

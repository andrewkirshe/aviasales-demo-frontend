import locale from "./locale.js";

export const translate = key => {
  return locale[key] ? locale[key] : key;
};

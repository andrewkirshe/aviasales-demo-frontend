import locale from "./locale.json";

export const translate = key => {
  return locale[key] ? locale[key] : key;
};

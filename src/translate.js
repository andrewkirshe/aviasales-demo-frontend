import locale from './locale.json';

export const translate = key => (locale[key] ? locale[key] : key);

export default translate;

import locale from './locale';

export const translate = key => (locale[key] ? locale[key] : key);

export default translate;

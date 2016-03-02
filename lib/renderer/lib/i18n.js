/**
 * Created by Administrator on 2016/3/2.
 */
const lang = require('./load-lang');

module.exports = function i18nFactory(hbs) {
  hbs.registerHelper('i18n', lang);
};

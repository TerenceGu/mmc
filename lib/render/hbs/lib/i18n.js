/**
 * Created by Administrator on 2016/3/2.
 */
const language = require('../../../../resources/i18n');

module.exports = function i18nFactory(hbs) {
  hbs.registerHelper('i18n', (name, data) => {
    const locale = data.data.root.lang;
    return language[locale][name] || name;
  });
};

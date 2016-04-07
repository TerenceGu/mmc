/**
 * Created by fed on 16/4/6.
 */
const objectToPlain = require('./lib/obj2plain');
const allLanguages = require('./lib/all-lang');

const plainLanguages = {};
Object.keys(allLanguages).forEach(locale => {
  plainLanguages[locale] = objectToPlain(allLanguages[locale]);
});

module.exports = plainLanguages;
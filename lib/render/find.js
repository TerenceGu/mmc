/**
 * Created by fed on 16/4/7.
 */
const cache = {};
const uri = require('../../config').uri;

module.exports = function findResourcesPath(name, lang) {
  if (!lang) {
    return uri.protocol + uri.baseUri + name;
  }
  if (!cache.hasOwnProperty(lang)) {
    cache[lang] = require(`../../resources/map/${lang}.json`);
  }
  if(cache[lang].hasOwnProperty(name)) {
    return uri.protocol + uri.baseUri + cache[lang][name];
  }
  else {
    return name;
  }
}
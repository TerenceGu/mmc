/**
 * Created by fed on 16/4/7.
 */
const cache = {};
const uri = require('../../config').uri;

module.exports = function findResourcesPath(name, lang, isCss) {
  if (!lang) {
    return uri.protocol + uri.baseUri + name;
  }
  if (!cache.hasOwnProperty(lang)) {
    cache[lang] = require(`../../resources/map/${lang}.json`);
  }
  const resource = cache[lang][name];
  if(Array.isArray(resource)) {
    return uri.protocol + uri.baseUri + resource[+!!isCss];
  }
  else if(resource) {
    return uri.protocol + uri.baseUri + resource;
  }
  else {
    return name;
  }
}
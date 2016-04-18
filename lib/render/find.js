/**
 * Created by fed on 16/4/7.
 */
const cache = {};
const { protocol, baseUri } = require('../../config').uri;

const base = protocol + baseUri;

function findName(name, lang, isCss) {
  if (!lang) {
    return name;
  }
  if (!cache.hasOwnProperty(lang)) {
    cache[lang] = require(`../../resources/map/${lang}.json`);
  }
  const resource = cache[lang][name];
  if (Array.isArray(resource)) {
    return resource[+!!isCss];
  }
  return resource;
}

module.exports = function findResourcesPath(name, lang, isCss) {
  if (!Array.isArray(name)) {
    return base + findName(name, lang, isCss);
  }
  return base + '??' + name.map(singleName => findName(singleName, lang, isCss)).join(',');
};

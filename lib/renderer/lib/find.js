/**
 * Created by Administrator on 2016/2/25.
 */
'use strict';
const config = require('../../../config');

const res = require(config.mapJson).res;
const uri = config.uri;

const keyValueMap = (function () {
  const result = {};
  Object.keys(res).forEach(item => {
    result[item] = res[item].uri;
  });
  return result;
}());

module.exports = name => keyValueMap.hasOwnProperty(name) ?
    [uri.protocol, uri.baseUri, keyValueMap[name], uri.suffix].join('') : name;

module.exports.combo = function combo(nameList) {
  const suffix = nameList.map(name => keyValueMap[name].slice(1)).join(',');
  return `${uri.protocol}${uri.baseUri}??${suffix}`;
}



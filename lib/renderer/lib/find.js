/**
 * Created by Administrator on 2016/2/25.
 */
'use strict';

const config = require('../../../config');

const map = require(config.mapJson);
const uri = map.uri;
const res = map.res;

const keyValueMap = (function () {
  const result = {};
  Object.keys(res).forEach(item => {
    result[item] = res[item].uri;
  });
  return result;
}());

//@TODO 没有资源时的处理
module.exports = name => [uri.protocol, uri.baseUri, keyValueMap[name], uri.suffix].join('');


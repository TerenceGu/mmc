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

//@TODO 没有资源时的处理
module.exports = name => keyValueMap.hasOwnProperty(name) ?
    [uri.protocol, uri.baseUri, keyValueMap[name], uri.suffix].join('') : name;


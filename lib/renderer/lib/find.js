/**
 * Created by Administrator on 2016/2/25.
 */
'use strict';

const config = require('../../../config');

const map = require(config.mapJson);

const keyValueMap = (function(){
  let result = {};
  Object.keys(map).forEach( item =>{

  });
  return result;
}());

module.exports = x => keyValueMap[x];

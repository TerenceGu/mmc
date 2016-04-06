/**
 * Created by Administrator on 2016/2/25.
 */
'use strict';
const config = require('../../../config');
const path = require('path');

const res = {};
['ru', 'www'].map(x => {
  res[x] =  require(path.join(config.mapJson, `map.${x}.json`));
});

module.exports = (name, lang) => {
  const map = res[lang];
  if(map.hasOwnProperty(name)) {
    return ['/', map[name]].join('');
  }
  else{
    return '';
  }
};




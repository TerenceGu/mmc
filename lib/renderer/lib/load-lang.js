/**
 * Created by Administrator on 2016/3/2.
 */
'use strict';
const yaml = require('js-yaml');
const fs = require('fs');

const lang = process.env.LANG || 'en';

const parsed = (function langParser() {
  const raw = yaml.safeLoad(require('../../../i18n'));
  const result = {};

  function obj2plain(obj, path, result) {
    Object.keys(obj).forEach(key => {
      if (typeof obj[key] === 'string') {
        result[`${path}${key}`] = obj[key];
      }
      else {
        obj2plain(obj[key], `${path}${key}.`, result);
      }
    });
  }

  obj2plain(raw, '', result);
  return result;
}());

module.exports = function (name) {
  if (parsed.hasOwnProperty(name)) {
    return parsed[name];
  }
  return name;
};

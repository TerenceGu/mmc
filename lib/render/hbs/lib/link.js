/**
 * Created by Administrator on 2016/3/1.
 */
'use strict';
// 奈何node不支持...

const config = require('../../../../config');

module.exports = function (hbs) {
  hbs.registerHelper('link', function () {
    const link = [].slice.call(arguments, 0, -1).join('');
    return `${config.domain}${link}`;
  });
  hbs.registerHelper('noscriptLink', function () {
    const link = [].slice.call(arguments, 0, -1).join('');
    return `${config.domain}noscript${link}`;
  });
};

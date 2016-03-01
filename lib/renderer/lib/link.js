/**
 * Created by Administrator on 2016/3/1.
 */
'use strict';

const config = require('../../../config');

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

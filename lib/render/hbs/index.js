/**
 * Created by Administrator on 2016/2/25.
 */
'use strict';

const hbs = require('./hbs');

const folder = './lib/';

['css', 'js', 'lang', 'meta', 'link', 'i18n'].forEach(name => {
  const component = require(`${folder}${name}`);
  component(hbs);
});

module.exports = hbs;

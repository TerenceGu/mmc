/**
 * Created by Administrator on 2016/2/25.
 */
'use strict';

const hbs = require('koa-hbs');

const folder = './lib/';

['css', 'js', 'lang', 'meta', 'link'].forEach(name => {
  const component = require(`${folder}${name}`);
  component(hbs);
});

module.exports = hbs;

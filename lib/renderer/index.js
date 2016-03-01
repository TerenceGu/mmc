/**
 * Created by Administrator on 2016/2/25.
 */
'use strict';

const hbs = require('koa-hbs');

const find = require('./lib/find');

hbs.registerHelper('list',
  (items, options) => {
      if(!items){
          return '<ul></ul>'
      }
    let out = '<ul>';
    items.forEach(item => {
      out += ['<li>', options.fn(item), '</li>'].join('');
    });

    return out.concat('</ul>');
  });

hbs.registerHelper('css', function () {
  const args = [].slice.call(arguments, 0, -1);

  return ['<link rel="stylesheet" href="', find(args.join('')), '">'].join('');
});

module.exports = hbs;

/**
 * Created by Administrator on 2016/2/25.
 */
'use strict';

const hbs = require('koa-hbs');

const find = require('./lib/find');

hbs.registerHelper('list', (items, options) => {
    let out = '<ul>';
    items.forEach(item => {
        out += ['<li>', options.fn(item), '</li>'].join('');
    });

    return out + '</ul>';
});

hbs.registerHelper('css', name => ['<link rel="stylesheets" href="', find(name), '">'].join(''));

module.exports = hbs;

/**
 * Created by Administrator on 2016/3/1.
 */
'use strict';
const find = require('../../find');

function cssFactory(hbs) {
  hbs.registerHelper('css', function (name, lang) {
    const link = find(name, lang);
    return `<link rel="stylesheet" href="${link}" crossorigin="anonymous">`;
  });
  const globalCss = '';
  hbs.registerHelper('globalCss',
      () => `<link rel="stylesheet" href="${globalCss}" crossorigin="anonymous">`);
  hbs.registerHelper('shimCss',
    name =>`<link rel="stylesheet" href="${find('shim/'+name)}" crossorigin="anonymous">`
  );
}

module.exports = cssFactory;

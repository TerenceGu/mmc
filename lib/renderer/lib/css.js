/**
 * Created by Administrator on 2016/3/1.
 */
'use strict';
const find = require('./find');

function cssFactory(hbs) {
  hbs.registerHelper('css', function () {
    const link = find([].slice.call(arguments, 0, -1).join(''));
    return `<link rel="stylesheet" href="${link}" crossorigin="anonymous">`;
  });

  hbs.registerHelper('cssCombo', function () {
    const args = [].slice.call(arguments, 0, -1);
    const link = find.combo(args);
    return `<link rel="stylesheet" href="${link}" crossorigin="anonymous">`;
  });
  const globalCss = '';
  hbs.registerHelper('globalCss',
      () => `<link rel="stylesheet" href="${globalCss}" crossorigin="anonymous">`);
}

module.exports = cssFactory;

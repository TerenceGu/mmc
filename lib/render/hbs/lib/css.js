/**
 * Created by Administrator on 2016/3/1.
 */
'use strict';
const find = require('../../find');
//  我真的好想好想用解构赋值

function genName(module, name) {
  return `${module}/${name}`;
}

function cssFactory(hbs) {
  hbs.registerHelper('css', (name, data) => {
    const lang = data.data.root.lang;
    const link = find(name, lang, true);
    return `<link rel="stylesheet" href="${link}" crossorigin="anonymous">`;
  });
  hbs.registerHelper('cssForPage',
    ({ data: { root: { __selfName, __componentsNames, lang } } }) => {
      const componentsPart = __componentsNames.map(name => `components/${name}`)
        .map(name => `<link rel="stylesheet"
        href="${find(name, lang, true)}" crossorigin="anonymous">`)
        .join('');

      const pagePart = `<link rel="stylesheet"
        href="${find(genName('pages', __selfName), lang, true)}" crossorigin="anonymous">`;
      return `${pagePart}\n${componentsPart}`;
    });
  hbs.registerHelper('shimCss',
    name => `<link rel="stylesheet" href="${find(genName('shim', name))}" crossorigin="anonymous">`
  );
}

module.exports = cssFactory;

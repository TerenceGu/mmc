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
  hbs.registerHelper('cssForPage', data => {
    const thisPageName = data.data.root.__selfName;
    const pages = data.data.root.__componentsNames;
    const lang = data.data.root.lang;
    const componentsPart = pages.map(name => `components/${name}`)
      .map(name => `<link rel="stylesheet"
        href="${find(name, lang, true)}" crossorigin="anonymous">`)
      .join('');
    const pagePart = `<link rel="stylesheet"
        href="${find(genName('pages', thisPageName), lang, true)}" crossorigin="anonymous">`;
    return `${pagePart}\n${componentsPart}`;
  });
  hbs.registerHelper('shimCss',
    name => `<link rel="stylesheet" href="${find(genName('shim', name))}" crossorigin="anonymous">`
  );
}

module.exports = cssFactory;
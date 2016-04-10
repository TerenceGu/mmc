/**
 * Created by Administrator on 2016/3/1.
 */
'use strict';
const find = require('../../find');

function genName(module, name) {
  return `${module}/${name}`;
}

function factory(hbs) {
  hbs.registerHelper('jsForPage', data => {
    const lang = data.data.root.lang;
    const name = genName('pages', data.data.root.__selfName);
    return `<script src="${find(name, lang)}" crossorigin="anonymous"></script>`;
  });

  hbs.registerHelper('js', (name, isAsync, data) => {
    // 找不到好名字了
    let reallyAsync = isAsync;
    let reallyData = data;
    if (!reallyData) {
      reallyData = isAsync;
      reallyAsync = false;
    }
    const lang = reallyData.data.root.lang;
    return `<script src="${find(name, lang)}"
        ${reallyAsync ? 'async="async"' : ''} crossorigin="anonymous"></script>`;
  });
  hbs.registerHelper('shimJs', name => `<script src="${find(genName('shim', name))}"
    crossorigin="anonymous"></script>`);
}

module.exports = factory;

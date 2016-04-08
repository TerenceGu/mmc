/**
 * Created by Administrator on 2016/3/1.
 */
'use strict';
const find = require('../../find');

function factory(hbs) {
  hbs.registerHelper('jsForPage', data => {
    const lang = data.data.root.lang;
    const name = `pages/${data.data.root.__selfName}`;
    console.log(name);
    return `<script src="${find(name, lang)}" crossorigin="anonymous"></script>`;
  });

  hbs.registerHelper('js', (name, isAsync, data) => {
    if (!data) {
      data = isAsync;
      isAsync = false;
    }
    const lang = data.data.root.lang;
    return `<script src="${find(name, lang)}" ${isAsync ? 'async="async"': ''} crossorigin="anonymous"></script>`;
  });
  
  hbs.registerHelper('shimJs', name => {
    return `<script src="${find('shim/' + name)}" crossorigin="anonymous"></script>`;
  });
}

module.exports = factory;
/**
 * Created by Administrator on 2016/3/1.
 */
'use strict';
const find = require('../../find');

function factory(hbs) {
  const globalJs = '';
  hbs.registerHelper('globalJs',
    () => `<script src="${globalJs}" crossorigin="anonymous"></script>`);

  hbs.registerHelper('js', (name, isAsync, data) => {
    if (!data) {
      data = isAsync;
      isAsync = false;
    }
    const lang = data.data.root.lang;
    return `<script src="${find(name, lang)}" ${isAsync ? 'async="async"': ''} crossorigin="anonymous"></script>`;
  });
  
  hbs.registerHelper('shimJs', name => {
    return `<script src="${find('shim/' + name)}" crossorigin="anonymous"></script>`
  });
}

module.exports = factory;
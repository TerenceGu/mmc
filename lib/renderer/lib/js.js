/**
 * Created by Administrator on 2016/3/1.
 */
'use strict';
const find = require('./find');

function factory(hbs) {
  const globalJs = '';
  hbs.registerHelper('globalJs',
    () => `<script src="${globalJs}" crossorigin="anonymous"></script>`);

  hbs.registerHelper('js', (name, lang) => `<script src="${find(name, lang)}" async="1"></script>`);
}

module.exports = factory;
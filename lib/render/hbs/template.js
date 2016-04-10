/**
 * Created by fed on 16/4/10.
 */
const path = require('path');
const fs = require('fs');
const config = require('../../../config').hbs;
const getLayout = require('./layout').getLayout;

const viewPath = config.viewPath;
const extName = '.hbs';


/* Capture the layout name; thanks express-hbs */
const rLayoutPattern = /{{!<\s+([A-Za-z0-9\._\-\/]+)\s*}}/;

const getTemplatePath = tpl => path.join(viewPath, `${tpl}${extName}`);

const templateCache = {};

const loadTemplate = exports.loadTemplate = tpl => new Promise((resolve, reject) => {
  fs.readFile(getTemplatePath(tpl), {
    encoding: 'utf8'
  }, (err, rs) => {
    if (err) return reject(err);
    return resolve(rs);
  });
});

exports.getTemplate = function *(tpl, handlebars) {
  if (!templateCache.hasOwnProperty(tpl) || config.disableCache) {
    const rawTemplate = yield loadTemplate(tpl);
    const layoutName = rLayoutPattern.exec(rawTemplate);
    templateCache[tpl] = {
      template: handlebars.compile(rawTemplate),
      layoutTemplate: yield getLayout(layoutName && layoutName[1], handlebars)
    };
  }
  return templateCache[tpl];
}

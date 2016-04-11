/**
 * Created by fed on 16/4/10.
 */
const path = require('path');
const fs = require('fs');
const config = require('../../../config').hbs;

const layoutsPath = config.layoutsPath;
const extName = '.hbs';

const layoutCache = {};

const getLayoutPath = layout => path.join(layoutsPath, `${layout}${extName}`);

const loadLayoutFile = layout => new Promise((resolve, reject) => {
  fs.readFile(getLayoutPath(layout), {
    encoding: 'utf8'
  }, (err, rs) => {
    if (err) return reject(err);
    return resolve(rs);
  });
});

exports.getLayout = function* getLayout(layout, handlebars) {
  if (!layout && !config.defaultLayout) {
    return handlebars.compile('{{{body}}}');
  }
  const layoutName = layout || config.defaultLayout;
  if (!layoutCache.hasOwnProperty(layoutName) || config.disableCache) {
    const rawLayout = yield loadLayoutFile(layout);
    layoutCache[layoutName] = handlebars.compile(rawLayout);
  }
  return layoutCache[layoutName];
};

/**
 * Created by fed on 16/4/10.
 */
'use strict';
const path = require('path');
const fs = require('fs');
const config = require('../../../config').hbs;

const glob = require('glob');

const partialsPath = config.partialsPath;
const extName = '.hbs';

const read = tpl => fs.readFileSync(tpl, {
  encoding: 'utf8'
});


module.exports = function registerPartials(handlebars) {
  function readdir(root) {
    return glob.sync(`*/*${extName}`, {
      cwd: root,
    });
  }

  try {
    const resultList = readdir(partialsPath);
    const files = [];
    const names = [];

    if (!resultList.length) {
      return;
    }

    // Generate list of files and template names
    resultList.forEach((result, i) => {
      result.forEach(file => {
        files.push(path.join(partialsPath[i], file));
        names.push(file.slice(0, -1 * extName.length));
      });
    });
    // Read all the partial from disk
    const partials = files.map(read);
    for (let i = 0; i !== partials.length; i++) {
      handlebars.registerPartial(names[i], partials[i]);
    }
  } catch (e) {
    console.error('Error caught while registering registerPartials');
    console.error(e);
  }
};


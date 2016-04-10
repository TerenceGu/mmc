/**
 * Created by fed on 16/4/6.
 */
'use strict';
const fs = require('fs');
const path = require('path');
const source = require('./config').source;


function getTargetList(targetClassify) {
  const fileList = fs.readdirSync(path.join(source, targetClassify));
  const targetList = {};
  const fileName = targetClassify === 'pages' ? 'entry.jsx' : 'component.jsx';
  fileList.forEach(name => {
    targetList[`${targetClassify}/${name}`] = `./${targetClassify}/${name}/${fileName}`;
  });
  return targetList;
}

module.exports = {
  components: getTargetList('components'),
  pages: getTargetList('pages')
};

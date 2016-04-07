/**
 * Created by fed on 16/4/7.
 */
const outdirBase = require('./lib/config').out;

const path = require('path');
const fs = require('fs');
const mkdirp = require('mkdirp');
const CleanCSS = require('clean-css');

const outdir = path.join(outdirBase, 'shim');

mkdirp.sync(outdir);

function ie8Shim() {
  fs.writeFileSync(path.join(outdir, 'ie8-shim.min.js'),
    fs.readFileSync(path.join(__dirname, 'extra', 'ie8-shim.js')));
}

function concatShimFromNodeModules(outputName, moduleName, fileList, fn) {
  fn = fn || (x => x);
 fs.writeFileSync(path.join(outdir, outputName),
    fn(fileList.map(x => 
      fs.readFileSync(path.join(__dirname, '..', 'node_modules', moduleName, x)).toString())
      .reduce((before, now) => before + '\n' + now, '')
  ));
}

function es5Shim() {
  const list = ['es5-shim.min.js', 'es5-sham.min.js'];
  concatShimFromNodeModules('es5-shim.min.js', 'es5-shim', list);
}

function normalizeShim() {
  const list = ['normalize.css'];
  concatShimFromNodeModules('normalize.min.css', 'normalize.css', list,
    x => new CleanCSS().minify(x).styles
  );
}

ie8Shim();
es5Shim();
normalizeShim();



/**
 * Created by fed on 16/4/7.
 */
const outdirBase = require('./lib/config').out;

const path = require('path');
const fs = require('fs');
const mkdirp = require('mkdirp');
const CleanCSS = require('clean-css');
const UglifyJS = require('uglify-js');

const outdir = path.join(outdirBase, 'shim');

mkdirp.sync(outdir);

function ie8Shim() {
  const code = UglifyJS.minify(path.join(__dirname, 'extra', 'ie8-shim.js')).code;
  fs.writeFileSync(path.join(outdir, 'ie8-shim.min.js'), code);
}

function concatShimFromNodeModules(outputName, moduleName, fileList, fn) {
  const afterFn = fn || (x => x);
  fs.writeFileSync(path.join(outdir, outputName),
    afterFn(fileList.map(x =>
      fs.readFileSync(path.join(__dirname, '..', 'node_modules', moduleName, x)).toString())
      .reduce((before, now) => `${before}\n ${now}`, '')
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

function es6Shim() {
  const base = path.join(__dirname, 'extra', 'es6-shim');
  const fileList = fs.readdirSync(base)
    .map(filename => path.join(base, filename));
  const result = UglifyJS.minify(fileList).code;
  fs.writeFileSync(path.join(outdir, 'es6-shim.min.js'), result);
}

ie8Shim();
es5Shim();
normalizeShim();
es6Shim();


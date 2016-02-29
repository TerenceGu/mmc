const config = require('../../config');

module.exports = {
  rootPath: '.',
  uriConfig: config.uri,
  ignore: [[], []],
  dir: ['images', 'css'],
  mapJsonPath: 'dist/map.json',
  outdir: 'dist',
  logLevel: 0
}

/**
 * Created by fed on 16/4/7.
 */
const path = require('path');
const uri = require('../../config').uri;

const base = path.join(__dirname, '..', '..');
module.exports = {
  source: path.join(base, 'src'),
  out: path.join(base, 'public'),
  map: path.join(__dirname, '..', '..', 'resources', 'map'),
  publicPath: '/'
};

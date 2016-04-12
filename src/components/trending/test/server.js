/**
 * Created by fed on 16/4/11.
 */

const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config.js');

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true
}).listen(3000, 'localhost', err => {
  if (err) return console.log(err);
  return console.log('Listening at http://localhost:3000/');
});

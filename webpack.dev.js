/**
 * Created by fed on 16/4/6.
 */
'use strict';
const path = require('path');

const webpack = require('webpack');
const I18nPlugin = require('i18n-webpack-plugin');
const languages = require('./i18n');

const outDir = 'dist';

module.exports = Object.keys(languages).map(locale => ({
  context: path.join(__dirname, 'fe', 'src'),
  entry: {
    hello: './page/hello/entry.jsx',
    first: './components/first/export.jsx',
    react: ['react', 'react-dom', 'redux']
  },
  output: {
    path: path.join(__dirname, 'fe', outDir),
    filename: path.join('bundle', locale, '[name].js'),
    publicPath: `/`,
    chunkFilename: "[name].[chunkhash].vendor.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel']
      },
      {
        test: /\.css$/,
        loaders: ['style-loader',
          'css-loader',
          'postcss-loader']
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader']
      },
      {
        test: /\.png$/,
        loader: 'file-loader?name=image/[name].[hash:8].[ext]'
      }
    ]
  },
  postcss() {
    return [require('autoprefixer')];
  },
  plugins: [
    new I18nPlugin(
      languages[locale]
    ),
    new webpack.DefinePlugin({
      'process.env': {
        LOCALE: JSON.stringify(locale)
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['first', 'react', 'manifest'],
      minChunks: Infinity,
      filename: path.join('component', locale,'[name].js')
    }),
    function() {
      this.plugin("done", function(stats) {
        require("fs").writeFileSync(
          path.join(__dirname, "fe/dist", `map.${locale}.json`),
          JSON.stringify(stats.toJson().assetsByChunkName));
      });
    }
  ]
}));
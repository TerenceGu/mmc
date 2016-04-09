/**
 * Created by fed on 16/4/7.
 */
'use strict';
const webpack = require('webpack');
const I18nPlugin = require('i18n-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require('path');
const mkdirp = require('mkdirp');

const target = require('./lib/list-target');
const languages = require('../resources/i18n');

const components = target.components;
const pages = target.pages;

const config = require('./lib/config');

const source = config.source;
const out = config.out;
const mapPath = config.map;
const publicPath = config.publicPath;

module.exports = Object.keys(languages).map(locale => ({
  context: source,
  entry: Object.assign({
      react: ['react', 'react-dom', 'redux', 'react-redux']
    },
    pages,
    components),
  output: {
    path: out,
    filename: path.join(locale, '[name].[chunkhash:8].js'),
    publicPath: publicPath
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
        loader: ExtractTextPlugin.extract('style-loader',
          'css-loader!postcss-loader')
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style-loader',
          'css-loader!postcss-loader!sass-loader')
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        loader: 'file-loader?name=image/[name].[hash:8].[ext]'
      },
      {
        test: /\.(eot|ttf|woff|svg)(.+)?$/,
        loader: 'file-loader?name=fonts/[name].[hash:8].[ext]'
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
        LOCALE: JSON.stringify(locale),
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development')
      }
    }),
    (function () {
      if (process.env.NODE_ENV === 'production') {
        return new webpack.optimize.UglifyJsPlugin({
          minimize: true,
          sourceMap: false
        });
      }
      else {
        return () => {};
      }
    })(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      names: Object.keys(components).concat(['react', 'manifest']),
      minChunks: Infinity,
      filename: path.join(locale,'[name].[chunkhash:8].js')
    }),
    new ExtractTextPlugin(path.join(locale, '[name].[contenthash:8].css')),
    function() {
      this.plugin("done", function(stats) {
        mkdirp(mapPath);
        require("fs").writeFileSync(
          path.join(mapPath, `${locale}.json`),
          JSON.stringify(stats.toJson().assetsByChunkName));
      });
    }
  ]
}));

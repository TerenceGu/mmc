/**
 * Created by Administrator on 2016/2/23.
 */
'use strict';

const path = require('path');

const port = process.env.PORT || 4000;
const hostname = process.env.HOST || '0.0.0.0';


module.exports = {
  port,
  mapJson: path.join(__dirname, 'fe', 'dist'),
  hostname,
  uri: {
    baseUri: process.env.STATIC_ADDRESS || `localhost:${port}/`,
    protocol: '//'
  },
  domain: process.env.ADDRESS || `//localhost:${port}/`,
  hbs: {
    viewPath: path.join(__dirname, 'views'),
    layoutsPath: path.join(__dirname, 'views', 'layout'),
    partialsPath: path.join(__dirname, 'views', 'registerPartials'),
    //  在非生产环境设定这个有利于动态修改模板
    disableCache: process.env.NODE_ENV !== 'production',
    templateOptions: {},
    locals: {
      
    }
  }
};

/**
 * Created by Administrator on 2016/2/23.
 */
'use strict';

const path = require('path');

const port = process.env.PORT || 4000;
const hostname = process.env.HOST || '0.0.0.0';

module.exports = {
  port,
  mapJson: path.join(__dirname, 'front', 'dist', 'map.json'),
  hostname,
  uri: {
    baseUri: process.env.STATIC_ADDRESS || `localhost:${port}`,
    protocol: '//',
    suffix: '',
  },
  domain: process.env.ADDRESS || `//localhost:${port}/`
};

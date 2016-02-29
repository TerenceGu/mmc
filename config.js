/**
 * Created by Administrator on 2016/2/23.
 */
'use strict';

const path = require('path');

module.exports = {
  port: 4000,
  mapJson: path.join(__dirname, 'front', 'dist', 'map.json'),
  hostname: '0.0.0.0',
  uri: {
    baseUri: process.env.address || 'localhost:4000',
    protocol: '//',
    suffix: '',
  },
};

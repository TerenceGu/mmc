/**
 * Created by fed on 16/4/15.
 */
const spawn = require('child_process').spawnSync;
const path = require('path');
const fs = require('fs');

const jsonName = 'qiniu.json';

const AccessKey = '';
const SecretKey = '';
const bucket = '';

const qiniuObject = {
  src: path.join(__dirname, '..', 'public'),
  dest: `qiniu:access_key=${AccessKey}&secret_key=${SecretKey}&bucket=${bucket}`,
  debug_level: 1
};

fs.writeFileSync(path.join(__dirname, jsonName), JSON.stringify(qiniuObject, null, 2));
spawn('./qrsync', [path.join(__dirname, jsonName)]);
fs.unlink(path.join(__dirname, jsonName));

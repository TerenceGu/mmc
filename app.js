/**
 * Created by Administrator on 2016/2/23.
 */
const koa = require('koa');
const path = require('path');

const router = require('./routes');
const hbs = require('./lib/renderer');
const logger = require('koa-logger');

const app = koa();

app.use(logger());

app.use(hbs.middleware({
  viewPath: path.join(__dirname, 'views'),
  layoutsPath: path.join(__dirname, 'views', 'layout'),
}));

app.use(router.routes());

app.use(function *() {
  this.body = 'Hello World';
});

module.exports = app;

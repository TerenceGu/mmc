/**
 * Created by Administrator on 2016/2/23.
 */
const koa = require('koa');

const router = require('./routes');

const app = koa();

app.use(router.routes());

app.use(function *() {
  this.body = 'Hello World';
});

module.exports = app;

/**
 * Created by Administrator on 2016/2/23.
 */
const koa = require('koa');
const path = require('path');

const logger = require('koa-logger');
const favicon = require('koa-favicon');

const router = require('./routes');
const bigPipe = require('./lib/render/big-pipe');


const app = koa();

app.use(logger());

app.use(favicon(path.join(__dirname, 'fe', 'favicon.ico')));

app.use(function *(next) {
  yield next;
  this.set('Access-Control-Allow-Origin', '*');
});

//  根据环境变量设定是否压缩html代码以及设定静态文件服务器
if (process.env.NODE_ENV === 'production') {
  app.use(require('koa-html-minifier')({
    collapseWhitespace: true,
    removeComments: true,
    removeCommentsFromCDATA: true,
    minifyJS: true
  }));
} else {
  app.use(require('koa-static')(path.join(__dirname, 'fe', 'dist')));
}

app.use(bigPipe);

app.use(function *(next) {
  this.state.url = this.url;
  yield next;
});


app.use(router.routes());

app.use(function *() {
  this.status = 404;
  this.render('404', {
    title: '404',
    nofollow: true
  });
});

module.exports = app;

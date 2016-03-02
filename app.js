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

//  根据环境变量设定是否压缩html代码以及设定静态文件服务器
if (process.env.NODE_ENV === 'production') {
  app.use(require('koa-html-minifier')({
    collapseWhitespace: true,
    removeComments: true,
    removeCommentsFromCDATA: true,
    minifyJS: true,
  }));
} else {
  app.use(require('koa-static')(path.join(__dirname, 'front', 'dist')));
}

// 设定模板文件的路径, 注意这个也是支持优先级获取的哟
const viewPath = [[__dirname, 'views', 'en'], [__dirname, 'views']].
  map(dirArr => path.join.apply(null, dirArr));

app.use(hbs.middleware({
  viewPath,
  layoutsPath: path.join(__dirname, 'views', 'layout'),
  partialsPath: path.join(__dirname, 'views', 'partials'),
  //  在非生产环境设定这个有利于动态修改模板
  disableCache: process.env.NODE_ENV !== 'production',
}));

app.use(function *(next) {
  this.state.url = this.url;
  yield next;
});


app.use(router.routes());

app.use(function *() {
  this.status = 404;
  yield this.render('404', {
    lang: 'en',
    title: '404',
    nofollow: true,
  });
});

module.exports = app;

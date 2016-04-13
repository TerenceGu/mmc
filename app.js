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

app.use(favicon(path.join(__dirname, 'resources', 'favicon.ico')));

app.use(function *(next) {
  this.state.footerLinks = [
    {
      title: 'customer care',
      links: [
        {
          link: '',
          name: 'faq'
        },
        {
          link: '',
          name: 'contact us'
        },
        {
          link: '',
          name: 'shipping'
        },
        {
          link: '',
          name: 'return & exchanges'
        },
        {
          link: '',
          name: 'size guide'
        },
        {
          link: '',
          name: 'payment methods'
        }
      ]
    },
    {
      title: 'membership',
      links: [
        {
          link: '',
          name: 'account login'
        },
        {
          link: '',
          name: 'track my order'
        },
        {
          link: '',
          name: 'manage tickets'
        },
        {
          link: '',
          name: 'shopping bag'
        },
        
      ]
    },
    {
      title: 'company',
      links: [
        {
          link: '',
          name: 'about us'
        },
        {
          link: '',
          name: 'terms & conditions'
        },
        {
          link: '',
          name: 'privacy policy'
        }
      ]
    }
  ];
  this.state.socialList = [
    {
      link: '',
      name: 'facebook',
      code: '&#xe906'
    },
    {
      link: '',
      name: 'twitter',
      code: '&#xe908'
    },
    {
      link: '',
      name: 'google',
      code: '&#xe905'
    },
    {
      link: '',
      name: 'youtube',
      code: '&#xe909'
    },
    {
      link: '',
      name: 'pinterest',
      code: '&#xe90b'
    },
    {
      link: '',
      name: 'instagram',
      code: '&#xe907'
    },
    {
      link: '',
      name: 'tumblr',
      code: '&#xe90a'
    }
  ];
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
  app.use(require('koa-static')(path.join(__dirname, 'public')));
}

app.use(bigPipe);

app.use(function *(next) {
  this.state.url = this.url;
  yield next;
});


app.use(router.routes());

app.use(function *() {
  this.state.lang = 'en';
  this.status = 404;
  this.body = '404';
});

module.exports = app;

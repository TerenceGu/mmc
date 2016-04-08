## 工程可能的目录结构

使用koa作web框架, 使用eslint + airbnb/javascript处理代码风格, mocha 单元测试框架,
chai做断言库

模板引擎采用handlebars

前端采用react+redux

由于react实现bigPipe相对方便, 因此也默认实现了bigpipe

首先要安装nodejs

测试运行: (windows尚未测试)
````
1. 安装nodejs，注意版本要高于4
2. git clone https://github.com/yujigali/sample.git 
3. cd sample && npm install
4. npm start
````
然后浏览器访问`http://localhost:4000/user/123`

工程目录结构大致说明
````
project
|---bin  存放可执行文件
|   |
|---|---www  shebang, 服务器的启动文件
|
|---fe 前端目录
|   |
|---|---dist 构建后的输出目录
|   |   |
|---|---|---image 图片
|   |   |
|---|---|---shim 各种js和css的shim
|   |   |
|---|---|---www(或者其他小语种) 组件以及页面代码
|   |   |   |
|---|---|---|---components 组件(视图以及连接全局变量)
|   |   |   |
|---|---|---|---pages 页面(数据部分),创建store
|   |   |   |
|---|---|---|---react.js,manifest.js...(特殊的chunk文件)
|   |
|---|---src 构建前的源文件
|   |   |
|---|---|---common 公共组件,可以被各个components引用
|   |   | 
|---|---|---components react组件以及其reducers
|   |   |
|---|---|---pages 组合reducers的逻辑
|   |   |
|---|---|---vendor 额外文件,后期会用npm模块替代
|
|---lib 一些封装的库，过大的话可能会独立成npm模块
|   |
|---|---render koa的render中间件
|
|---resources 语言包和最终生成的map.json,前后端公用!
|
|---routes 路由模块
|
|---services 后端的api封装
|
|---test 单元测试的文件
|
|---views 用于存放模板文件
|
|---.babelrc
|
|---.eslintrc eslint配置文件
|
|---.gitignore
|
|---app.js 入口文件
|
|---config.js 配置文件, 大致就是把环境变量读出来
|
|---package.json
|
|---README.md

````

可以施加影响的环境变量:
`PORT`: 影响监听的端口
`HOST`: 影响监听的网卡ip，默认是0.0.0.0
`STATIC_ADDRESS`: 静态文件的域名，默认是 127.0.0.1 + port,
`ADDRESS`: 当前服务的域名


工程约定(前端part):

1. 组件, 也就是components下的一个子文件夹, 是最小复用单位, 并且约定
, 每个组件必须要有两个文件, 分别是`index.js`和`component.jsx`.
其中`component.jsx`必须自己解决在页面中的挂载问题(也就是要自己调用render),
并且如果想要拥有共享状态的话, 必须使用挂载在全局上redux的store; 而`index.js`
必须导出reducers, 供pages中的js组合reducer, 如果没有则导出一个空对象.
另外,
 component之间不能有依赖, 只能依赖common或者node——modules中的东西.

2. 页面, 也就是`pages`下的一个文件夹, 必须有一个`entry.jsx`, 主要是用于
引入需要的reducer, 之后创建一个store挂载到全局`window`上. page的布局文件可以就近书写.

3. 在增加一个页面时, 分为两部分. 第一部分是用于定位的模板文件(用于存放首屏以及header需要
的东西); 第二部分是各个组件, 组件一般都需要一个初始化数据, 约定其actionType为`{NAME}_INIT`.
最终写的渲染代码可能如下:
````
this.render('hello'//模板的名字 ,
 {
    name: 'ii'
  },//模板中的local变量,当然模板会隐式包含this.state的变量
  {
    first://组件的名字 new Promise(resolve=>{
      setTimeout(() => {
        resolve({
          text: 123
        });
      }, 0);
    })//该组件初始化需要的数据(强制需要promise)
  }//组件列表
  );
````

````
root
|
|---bin  存放可执行文件
|   |
|---|---www  shebang, 服务器的启动文件
|
|---public 构建后的输出目录
|   |
|---|---image 图片
|   |   |
|---|---shim 各种js和css的shim
|   |   |
|---|---www(或者其他小语种) 组件以及页面代码
|   |   |   |
|---|---|---components 组件(视图以及连接全局变量)
|   |   |   |
|---|---|---pages 页面(数据部分),创建store
|   |   |   |
|---|---|---react.js,manifest.js...(特殊的chunk文件)
|
|---src 构建前的前端源文件
|   |
|---|---common 公共组件,可以被各个components引用,  包括公用容器组件和公用css及字体
|   |
|---|---components react组件以及其reducers
|   |
|---|---pages 组合reducers的逻辑
|   |
|---|---vendor 额外文件,后期会用npm模块替代
|
|---lib 一些封装的库，过大的话可能会独立成npm模块
|   |
|---|---render render中间件, hbs + bigpipe
|
|---resources
|   |
|---|--- i18n 语言包资源
|   |
|---|--- map 构建生成的资源表
|   |
|---|--- favicon.ico
|
|---build 用于构建任务的文件
|
|---routes 路由模块
|
|---services 后端的api封装
|
|---test 单元测试的文件
|
|---views 用于存放模板文件
|   |
|---|--- layout 存放layout文件(其实就是页面框架, 最后可以接受一个body参数)
|   |
|---|---partials
|   |
|---|--- hello.hbs等, 对应于page的模板
|
|
|---app.js koa应用中间件的组合文件
|
|---config.js 配置文件, 大致就是把环境变量读出来
|
|---package.json
|
|---README.md

````
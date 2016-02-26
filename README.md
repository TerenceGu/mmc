## 工程可能的目录结构

使用koa作web框架, 使用eslint + airbnb/javascript处理代码风格, mocha 单元测试框架,
chai做断言库

模板引擎采用handlebars

测试运行:
````

npm install
npm run build (windows上这步有点问题，要把生成的front/dist/map.json 里面的\\全部改成 /)
npm start
````
然后浏览器访问`http://localhost:4000/user/123`

工程目录结构大致说明
````
project
|---bin  存放可执行文件
|   |
|---|---www  shebang, 服务器的启动文件
|
|---front 前端目录
|   |
|---|---dist 构建后的输出目录
|   |   |
|---|---|---map.json 构建后的映射表
|
|---src 构建前的源文件
|   |
|---|---vendor 稳定的一些文件,以及第三方模块
|   |
|---|---sass
|   |
|---|---images
|   |
|---|---js
|
|---lib 一些封装的库，过大的话可能会独立成npm模块
|   |
|---|---util 
|
|---routes 路由模块
|
|---services 后端的api封装
|
|---test 单元测试的文件
|
|---views 用于存放模板文件, !!! 这个文件夹的位置不太确定， 可能之后会放在front/src 下
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


## 工程说明

#### 运行:
````
1. 安装nodejs，注意版本要高于4
2. git clone https://github.com/lt-fed/react-redux-bigpipe.git
3. cd sample && npm install
4. npm start (windows请运行 npm start-dev)
````
然后浏览器访问`http://localhost:4000/www`

#### 技术选型

| 类别 | 框架/库 | 说明 |
|:--------------:|:----------------------:|:---------------------------:|
| node层后端 | koa | 优雅健壮 |
| 模板引擎 | handlebars | helper实现简单轻松，缩写hbs |
| node层测试框架 | mocha + chai | 业界标配 |
| 前端视图框架 | react | 强制组件化，大红大紫 |
| 前端数据层框架 | redux | 与react配合很合适 |
| 渲染方式 | hbs直出 ＋ 组件bigPipe | 兼顾性能和扩展性 |

#### 目录结构

[工程目录结构大致说明](doc/structure.md)

#### 可选环境变量

| 环境变量名 | 含义 | 值 | 默认 |
|:--------------:|:----------------------------:|:-------------:|:--------------:|
| PORT | 要监听的端口 |  | 400 |
| HOST | 监听的网卡ip |  | 0.0.0.0 |
| STATIC_ADDRESS | 静态文件服务器的地址 | 注意末尾要加/ | host:port/ |
| ADDRESS | 当前服务的域名, 用于链接地址 |  | localhost:4000 |

#### 开发时的约定(规范)

**主要原则在于约定大于配置**

[前端部份的约定](doc/fe.md)


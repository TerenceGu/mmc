## 前端(**src**目录)中的开发约定

> 基本上依照[airbnb的javascript规范](https://github.com/airbnb/javascript)(除了取消comma-damgle)做就行了

#### 命名

> 清晰, 少歧义, 注意兼容性

文件以及文件夹的名字**必须全部小写**, 如果是多个单词组成, 除了在组件的名字用下划线连接以外,
 一律用`-`连接

css选择器尽量使用**驼峰**命名, 在涉及i18n的情况下, 使用`-`, 例如阿拉伯语的
标题选择器可以写为 `navTitle-ar`

### 组件
>组件, 也就是components下的一个子文件夹, 是最小复用单位

#### 约定
A. 每个组件有**两**个public的接口, 分别是**index.js**和**component.jsx**;


**index.js** 的作用是导出**reducer**, 以供**page**以组合reducer, 例如, 在组件 `todo_list`中

````
import todoList from './reducers';

export default {
  todo_list: todoList
};

````

**component.jsx** 的作用则是负责组件的挂载, 以及组件数据源的绑定, 例如, 在组件`todo_list`中

````
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import TodoComponent from './views/todo-container.jsx';

render(
  <Provider store={window.reduxState}> // store从全局变量中获取
    <TodoComponent />
  </Provider>
  , document.getElementById('todo_listComponent')); // 挂载的容器必须符合命名`{组件名}Component`
````

B. 每个组件需要的**store**需要从全局变量获取, 名字是**window.reduxState**

C. 组件之间不可有依赖, 只能依赖**common**或者**node_modules**中的东西

D. view组件只能依赖**actions**, 禁止依赖**reducer** (非常容易做到)
### 页面
>页面, 由pages下的一个子文件夹和views中的**同名模板**文件组成, 是一个完整的页面

#### 约定
A. 必须有一个**entry.js**文件, 其作用是初始化页面所有组件需要的数据模型, 以及引入布局文件, 例如`pages/hello.jsx` :

````
import { createStore, combineReducers } from 'redux';

import todoListReducers from '../../components/todo_list';
import firstReducers from '../../components/first';

import './style.scss';

const reducer = combineReducers(Object.assign(
  {},
  todoListReducers,
  firstReducers
));

window.reduxState = createStore(reducer); // 将store导出到全局
````

B. 对应的模板文件, 至少需要有id和组件名字对应的容器, **js和css不用手动引入**, 例如 `hello.hbs`中:

````
{{!< default }} //设定基本的layout, 本页所有内容渲染之后将会填入layout的body



<h1 class="nav-title">
    Hello, {{name}}!
</h1>

<div id="firstComponent">

</div>

<div id="todo_listComponent">

</div>
````

C. 在路由文件中要如是使用页面(以`pages/hello`为例):

````
router.get('/www', function* () {
  this.state.lang = 'www';
  this.render('hello' //page的名字
  , {
    name: 'www user',
    title: 'hello, world!'
  }// page的模板中,直出需要的一些变量
   ,{
    todo_list //组件名 : new Promise(resolve => {
      resolve({
        todoList: [
          'Drink a cup of coffee',
          'Call wife'
        ]
      });
    }// 书写组件以及组件的初始化数据, 需要用promise给出数据
    )
  });
});
````




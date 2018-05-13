# 练习vue——webpack模板的笔记

新建项目并运行
======
```
//全局安装vue-cli
npm install -g vue-cli

//初始化webpack
vue init webpack my-project

//进入新建项目的文件夹
cd my-project

//运行项目
npm run dev
```
路由切换
=======

* 在文件夹'/src/component'下新建'user.vue'和'article.vue'文件，
* 在文件'/src/router/index.js'中注册文件对应的路由
* 在文件'App.vue'中添加`<router-link to="路由的name">必须添加内容，以使其在页面正常显示</router-link>`

父子组件通信
====
* 新建文件'list.vue'和'list_item.vue'
* 利用属性`this.$attrs`传递数据给子组件
* 利用属性`props`传递数据给子组件
* 利用`this.$emit('绑定的fn', arg)`传递数据给父组件

数据交互
====
* 利用koa框架构建本地服务器，提供数据，详见server文件夹
* 数据交互方法
    * axios
        * 局部引用-哪里要用就在那里引用
        * 全局引用-`Vue.prototype.axios = axios`、在vue中注册、`this.axios.get(url)`就可以全局使用了
    * fetch-`let items = await (await fetch(url)).json();`

统一状态管理--vuex
====

* 安装
```
npm i vuex -S
```

* 引用--`import Vuex from 'vuex'`
* 注册
```javascript
Vue.use(Vuex);

new Vue({
    ...
    store,
    ...
})
```
* 创建
```javascript
const store = new Vuex.Store({
    strict: true,
    state: {},
    mutations: {
        fn(state, arg){
            //todosomething
        }
    },
    actions:{
        fn(store, arg){
            //todosomething
        }
    },
    getters: {

    }
})
```
* 在用到数据的组件里--`this.$store.dispatch('actions里定义的函数', arg)`
['module.exports'和'exports'的区别](https://cnodejs.org/topic/5231a630101e574521e45ef8)

## webpack入门
1. npm init
2. cnpm i webpack webpack-cli -D
3. 新建文件"webpack.config.js"
4. 在文件'package.json'中配置webpack启动脚本"webpack --config webpack.config.js"
5. 新建文件夹“js”，新建文件“1.js”和“2.js”
//1.js
```javascript
export default {
    a : 1,
    show: function (){
        console.log('i know how to use webpack');
    }
}
```
//2.js
```javascript
import mod1 from './1'

mod1.show();
console.log(mod1.a);
```
此时，在终端直接执行`node .\js\2.js`是会报错的，需经过webpack打包编译后才能执行
6. 配置文件"webpack.config.js"
//webpack.config.js
```javascript
const pathlib = require('path')

module.exports = {
    mode: 'development',
    entry: './js/2.js'，
    output: {
        path: pathlib.resolve('dest'),
        filename: 'bundle.js'
    }
}
```
7. 在终端执行命令`npm run dev`，成功后，文件夹‘dest’下会生成文件'bundle.js'
8. 此时再执行命令`node .\dest\bundle.js`就能看到正确结果了
```
i know how to use webpack
1
```

## dev-server
1. 安装dev-server   `npm i webpack-dev-server -D`
2. 新建'dev-server-webpack.config.js'，它的作用就跟"webpack.config.js"一样，是配置文件
3. 在文件'package.json'的'script'中配置dev-server启动脚本"webpack-dev-server --watch --inline --config dev-server-webpack.config.js"，
4. 在'js'文件夹中新建文件夹'common.js'和'index.js'
5. 配置文件"dev-server-webpack.config.js"
```javascript
const pathlib = require('path')
const Webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',       //模式，有两种开发和生产，这里选开发
    entry: './js/index.js',    //入口文件，还能配置多入口
    output: {                  //输出文件路径和文件名
        path: pathlib.resolve('dest'),
        filename: 'bundleDev.js'
    },
    plugins:[
        new Webpack.HotModuleReplacementPlugin(), //插件，热更新插件，配合启动脚本使用
    ],
    devServer: {                                  //dev-server配置
        contentBase: pathlib.resolve('static'),   //静态文件目录路径
        port: 8090,                               //启动端口号
        hot: true,                                //热更新配置
        historyApiFallback: true,                 //404全部重定向到入口html文件
        watchContentBase: true                    //html保存后自动更新，或者不加这个选项，直接在启动脚本中加参数“--watch-content-base”
    }
}
```
6. 配置完成后，在终端输入"npm start", start是文件'package.json'的'script'的一个属性
7. 在浏览器启动端口“http://localhost:8090/index.html”，就可以看到起作用的页面了

## loader的简单使用方法

待续
const pathlib = require('path')
const Webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: './js/index.js',
    output: {
        path: pathlib.resolve('dest'),
        filename: 'bundleDev.js'
    },
    plugins:[
        new Webpack.HotModuleReplacementPlugin(),
    ],
    devServer: {
        contentBase: pathlib.resolve('static'),
        port: 8090,
        hot: true,
        historyApiFallback: true,
        watchContentBase: true
    }
}
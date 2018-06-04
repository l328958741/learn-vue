const pathlib = require('path')

module.exports = {
    mode: 'development',
    entry: {
        test: './js/2.js',
        index: './js/index.js'
    },
    output: {
        path: pathlib.resolve('dest'),
        filename: '[name].bundle.js'
    }
}
const pathlib = require('path')

module.exports = {
    mode: 'development',
    entry: './js/es6_demo',
    output: {
        path: pathlib.resolve('dest'),
        filename: 'bundle_babel.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loadr: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            }
        ]
    }
}
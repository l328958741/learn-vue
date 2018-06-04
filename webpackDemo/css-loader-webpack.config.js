const pathlib = require('path')

module.exports = {
    mode: 'development',
    entry: './js/css_demo',
    output: {
        path: pathlib.resolve('dest'),
        filename: 'bundle_css.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: 'css-loader'
            }
        ]
    }
}
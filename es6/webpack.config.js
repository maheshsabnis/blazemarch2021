var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './es6modules/consumer.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'main.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                rules: [
                    presets: ['es2015']
                ]
                
            }
        ]
    },
    stats: {
        colors: true
    },
    devtool: 'source-map'
};
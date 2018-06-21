
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');

const resolve = function(dir){
    return path.resolve(__dirname, '..', dir);
};

module.exports = merge(webpackBaseConfig, {
    devtool: 'eval-source-map',

    // 入口
    entry: {
        main: resolve('examples/main'),
        vendors: ['vue', 'vue-router']
    },
    // 输出
    output: {
        path: path.join(__dirname, '../dist'),
        publicPath: '',
        filename: '[name].js',
        chunkFilename: '[name].chunk.js'
    },
    resolve: {
        alias: {
            kui : resolve('src/index'),
            vue : 'vue/dist/vue.esm.js'
            // vue: 'vue/dist/vue.runtime.js'
        }
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({ name: 'vendors', filename: 'vendor.bundle.js' }),
        new HtmlWebpackPlugin({
            inject: true,
            filename: resolve('dist/index.html'),
            template: resolve('examples/index.html')
        }),
        new FriendlyErrorsPlugin()
    ]
});

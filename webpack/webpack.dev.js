const path = require('path')
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
module.exports = merge(common, {
    plugins: [
        new OptimizeCssAssetsPlugin({
            cssProcessorOptions: {
              safe: false,
              map: {inline: true}
            }
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000,
        host:'localhost',
        hot: true
    },
    devtool: 'source-map'
});
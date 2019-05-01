const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const CleanWebpackPlugin = new require('clean-webpack-plugin')
const UglifyJSPlugin = new require('uglifyjs-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
module.exports = merge(common, {
    mode:'production',
    plugins: [
        new UglifyJSPlugin(),
        new CleanWebpackPlugin(),
        new OptimizeCssAssetsPlugin({
            cssProcessorOptions: {
              safe: false,
              map: {inline: true}
            }
        })
    ]
});
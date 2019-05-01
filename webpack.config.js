const path = require('path')
const webpack = require('webpack');
const HtmlWebpackPlugin = new require('html-webpack-plugin')
const CleanWebpackPlugin = new require('clean-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
module.exports = {
    mode: 'development',
    entry: './main.js',
    output: {
        filename: 'js/[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                exclude: /node_modules/,
                use: 'vue-loader'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
              test: '/\.less$/',
              exclude: /node_modules/,
              use: [
                'vue-style-loader',
                'css-loader',
                'less-loader'
              ]
            }
        ]
    },
    plugins: [
        new webpack.BannerPlugin('一个菜鸡前端'),
        new VueLoaderPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        new ProgressBarPlugin(),
        new MiniCssExtractPlugin({
            filename: "css/[hash][name].xiaobai.css", 
            chunkFilename: "css/[hash][id].xiaobai.css"
        }),
        new OptimizeCssAssetsPlugin({
            cssProcessorOptions: {
              safe: false,
              map: {inline: false} // 样式文件用map 设置为 false可以取消
            }
        })
    ],
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js',
            '@': path.resolve(__dirname, '../src')
        }
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000,
        host:'localhost',
        hot: true
    },
    stats: {
        colors: true,
        modules: false,
        children: false,
        chunks: true,
        chunkModules: false
    },
    devtool: 'source-map'
}
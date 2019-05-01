const path = require('path')
const webpack = require('webpack');
const HtmlWebpackPlugin = new require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJSPlugin = new require('uglifyjs-webpack-plugin')
// const CleanWebpackPlugin = new require('clean-webpack-plugin')
// const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
module.exports = {
    // mode: 'development',
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
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                ["env",{
                                    "targets": {
                                        "chrome": 52,
                                        "browsers": ["last 2 versions","safari 7"]
                                    }
                                }]
                            ]
                        }
                    }
                ]
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
        new UglifyJSPlugin(),
        new webpack.BannerPlugin('一个菜鸡前端'),
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        new ProgressBarPlugin(),
        new MiniCssExtractPlugin({
            filename: "css/[hash][name].xiaobai.css", 
            chunkFilename: "css/[hash][id].xiaobai.css"
        })
    ],
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js',
            '@': path.resolve(__dirname, '../src')
        }
    },
    stats: {
        colors: true,
        modules: false,
        children: false,
        chunks: true,
        chunkModules: false
    }
}
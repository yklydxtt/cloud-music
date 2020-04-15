const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.base.js');
const clientConfig = {
    entry: "./src/client/",
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "index.js",
    },
    module: {
        rules: [{
            test: /\.css$/,
            include: [
                path.resolve(__dirname, "src")
            ],
            use: [
                'style-loader',
                {
                    loader: 'css-loader',
                    options: {
                        importLoaders: 1,
                        modules: true,
                        localIdentName: '[name]__[local]--[hash:base64:5]',
                    }
                },
            ]
        }, {
            test: /\.scss$/,
            use: [{
                loader: "style-loader" // 将 JS 字符串生成为 style 节点
            }, {
                loader: "css-loader" // 将 CSS 转化成 CommonJS 模块
            }, {
                loader: "sass-loader", // 将 Sass 编译成 CSS,
                options: {
                    includePaths: [
                        path.resolve(__dirname, 'node_modules')
                    ]
                }
            }]
        }, {
            test: /\.(png|jpeg|jpg|gif|svg)?$/,
            loader: 'url-loader',
            options: {
                limit: 8000,
                publicPath: '/'
            }
        }]
    }
}
module.exports = merge(common, clientConfig)
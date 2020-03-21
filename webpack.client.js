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
        },{
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
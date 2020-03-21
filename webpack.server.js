const path = require('path');
const nodeExternals = require('webpack-node-externals')
const merge = require('webpack-merge');
const common = require('./webpack.base.js');
const serverConfig={
    target:'node',
    externals: [nodeExternals()],
    entry: "./src/server/",
    output:{
        path: path.resolve(__dirname, "build"),
        filename: "bundle.js",
    },
    module: {
        rules: [{
            test: /\.css$/,
            include: [
                path.resolve(__dirname, "src")
            ],
            use: [
                'isomorphic-style-loader',
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
				outputPath: '../public/',
				publicPath: '/'
			}
		}]
    }
}
module.exports=merge(common,serverConfig)
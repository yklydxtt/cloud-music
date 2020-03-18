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
    }
}
module.exports=merge(common,serverConfig)
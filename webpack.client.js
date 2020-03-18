const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.base.js');
const clientConfig={
    entry: "./src/client/",
    output:{
        path: path.resolve(__dirname, "public"),
        filename: "index.js",
    }
}
module.exports=merge(common,clientConfig)
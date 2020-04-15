const path = require('path');
module.exports = {
  mode: "development",
  module: {
    rules: [{
      test: /\.jsx?$/,
      include: [
        path.resolve(__dirname, "src")
      ],
      loader: "babel-loader",
      options: {
        presets: ["@babel/preset-env", "@babel/preset-react", "@babel/preset-typescript"],
        plugins: [
          ["@babel/plugin-proposal-class-properties", { "loose": true }]
        ]
      },
    }, {
      test: /\.less$/,
      loader: 'less-loader' // 将 Less 编译为 CSS
    }, {
      test: /\.(png|jpg|gif)$/,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 8192
          }
        }]
    }
}
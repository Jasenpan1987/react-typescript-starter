const webpack = require("webpack");
const root = require("./hepers").root;
const merge = require("webpack-merge");
const common = require("./common");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const devConfigs = {
  mode: "development",
  devtool: 'source-map',
  devServer: {
    contentBase: "/",
    port: 3000,
    hot: true,
    open: true,
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
  ]
}

module.exports = merge(common, devConfigs)
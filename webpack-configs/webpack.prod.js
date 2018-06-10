const webpack = require("webpack");
const merge = require("webpack-merge");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const root = require("./hepers").root;
const common = require("./common");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const prodConfigs = {
  mode: "development",
  output: {
    path: root("dist"),
    publicPath: '/',
    chunkFilename: "[name].js",
    filename: "[name].js"
  },
  devtool: 'source-map',
  optimization: {
    runtimeChunk: {
      name: "vendors"
    },
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          priority: -20,
          chunks: "all"
        }
      }
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      minify: true
    }),
    new UglifyJsPlugin()
  ]
}

module.exports = merge(common, prodConfigs)
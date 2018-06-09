const path = require("path")
const root = require("./hepers").root;
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: root("src", "index.tsx"),
  output: {
    path: root("dist"),
    filename: "[name].js",
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        enforce: 'pre',
        use: 'tslint-loader'
      },
      {
        test: /tsx?/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader",
          options: {
            configFile: "tsconfig.json"
          }
        },
      },
      {
        test: /scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      Helpers: root("src", "helpers"),
      UI: root("src", "ui"),
      shared: root("src", "shared"),
      store: root("src", "store")
    }
  },
}

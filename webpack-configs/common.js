const root = require("./hepers").root;
const path = require("path")

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
        use: [
          {
            loader: "awesome-typescript-loader",
          },
          {
            loader: "babel-loader"
          }
        ],
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
      'babel-core': path.resolve(
        path.join(__dirname, './node_modules/@babel/core'),
      ),
      Helpers: root("src", "helpers"),
      UI: root("src", "ui"),
      shared: root("src", "shared"),
      store: root("src", "store")
    }
  }
}

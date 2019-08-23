const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/app.js",
  watch: true,
  devServer: {
    contentBase: "./dist",
    port: 3000,
    hot: true,
    watchContentBase: true,
    compress: true
  },
  mode: "development",
  devtool: "inline-source-map",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  }
};

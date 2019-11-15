const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: ["@babel/polyfill","./src/index.js"],
  output: {
    path: path.resolve(__dirname, "build/"),
    filename: "index_bindle.js"
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc)ss$/,
        use: [
          { loader: "style-loader" },
          {
            loader: "css-loader",
            options: {
              modules: false
            }
          },
          { loader: "sass-loader" }
        ]
      },
      { test: /\.(js)$/, use: "babel-loader" },
      { test: /\.css$/, use: ["style-loader", "css-loader"] }
    ]
  },
  mode: "development",
  node: {
    fs: "empty"
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ],
  devServer: {
    historyApiFallback: true
  }
};
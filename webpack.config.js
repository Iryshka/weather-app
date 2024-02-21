const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "./src/index.js"),
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "bundle.main.js",
    clean: true,
  },
  resolve: {
    alias: {
      assets: path.resolve(__dirname, "src/components"),
      extensions: [".js", ".jsx"],
    },
  },
  devServer: {
    port: "3000",
    static: path.resolve(__dirname, "src"),
    host: "0.0.0.0",
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.js|jsx$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          babelrc: true,
        },
      },
      {
        test: /.css$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.jpg$/,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./public/template.html"),
      filename: "index.html",
    }),
  ],
};

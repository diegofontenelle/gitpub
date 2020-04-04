const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = function (_env, argv) {
  const isProduction = argv.mode === "production"
  const isDevelopment = !isProduction

  return {
    entry: path.resolve(__dirname, "src", "index.js"),
    output: {
      filename: "[name].[contenthash:8].bundle.js",
      path: path.resolve(__dirname, "dist"),
    },
    module: {
      rules: [
        {
          test: /\.js?/,
          exclude: /node_modules/,
          loader: "babel-loader",
        },
        {
          test: /\.(png|jpg|gif)$/i,
          use: {
            loader: "url-loader",
            options: {
              limit: 8192,
              name: "public/assets/[name].[hash:8].[ext]",
            },
          },
        },
      ],
    },
    devtool: isDevelopment && "inline-source-map",
    devServer: {
      compress: true,
      historyApiFallback: true,
      open: true,
      overlay: true,
    },
    optimization: {
      minimize: isProduction,
      splitChunks: {
        chunks: "all",
        minSize: 0,
        maxInitialRequests: 10,
        maxAsyncRequests: 10,
      },
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "public", "index.html"),
      }),
    ],
  }
}

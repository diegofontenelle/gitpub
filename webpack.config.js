const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const fileLoader = require.resolve('file-loader')

module.exports = (_env, argv) => {
  const isProduction = argv.mode === 'production'
  const isDevelopment = !isProduction

  return {
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
      filename: '[name].[contenthash:8].bundle.js',
      publicPath: '/',
      path: path.resolve(__dirname, 'dist'),
    },
    module: {
      rules: [
        {
          test: /\.js?/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            cacheCompression: false,
            envName: isProduction ? 'production' : 'development',
          },
        },
        {
          test: /\.css$/,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
            'css-loader',
          ],
        },
        {
          test: /\.(eot|otf|ttf|woff|woff2)$/,
          loader: fileLoader,
          options: {
            name: 'static/media/[name].[contenthash:8].[ext]',
          },
        },
        {
          test: /\.svg$/,
          use: ['@svgr/webpack'],
        },
        {
          test: /\.(png|jpg|gif)$/i,
          use: {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: 'public/assets/[name].[hash:8].[ext]',
            },
          },
        },
      ],
    },
    devtool: isDevelopment && 'inline-source-map',
    devServer: {
      compress: true,
      historyApiFallback: true,
      open: true,
      overlay: true,
    },
    optimization: {
      minimize: isProduction,
      splitChunks: {
        chunks: 'all',
        minSize: 0,
        maxInitialRequests: 10,
        maxAsyncRequests: 10,
      },
    },
    plugins: [
      isProduction &&
        new MiniCssExtractPlugin({
          filename: 'assets/css/[name].[contenthash:8].css',
          chunkFilename: 'assets/css/[name].[contenthash:8].chunk.css',
        }),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'public', 'index.html'),
      }),
    ].filter(Boolean),
  }
}

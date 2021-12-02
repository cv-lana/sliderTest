const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const mode = process.env.NODE_ENV;
const isDev = mode === 'development';
const generateFilename = ext => isDev ?
  `[name].${ext}` :
  `[name].[contenthash].${ext}`;

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: './index.js',
  output: {
    filename: `./js/${generateFilename('js')}`,
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: '[path][name][ext][query]',
    environment: {
      arrowFunction: false,
    },
    clean: true,
  },
  mode,
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      minify: {
        collapseWhitespace: !isDev,
      },
    }),
    new MiniCssExtractPlugin({
      filename: `./css/${generateFilename('css')}`,
    }),
    new CopyPlugin({
      patterns: [
        { from: 'img', to: 'img' },
        { from: 'favicon.ico', to: 'favicon.ico' },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          },
        },
      },
      {
        test: /\.(c|sa|cs)ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../',
            },
          },
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
    ],
  },
  devServer: {
    static: './dist',
    port: 3000,
    hot: true,
    compress: true,
    client: {
      overlay: true,
    },
    historyApiFallback: true,
  },
  devtool: isDev && 'source-map'
};
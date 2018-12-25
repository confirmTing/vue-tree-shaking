const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/main.js',
  // entry: './src/vue.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.vue$/,
        loader: [
          {
            loader: 'vue-loader',
          },
        ],
      },
      { test: /\.css$/, use: [
        'vue-style-loader',
        'css-loader'
      ]},
    ]
  },
  plugins: [
    new CleanWebpackPlugin([
      'dist/',
    ], {
      root: path.resolve(),
    }),
    new HtmlWebpackPlugin({template: './src/index.html'}),
    new VueLoaderPlugin(),
    new UglifyJsPlugin()
  ]
};

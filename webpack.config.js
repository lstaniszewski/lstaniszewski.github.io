'use strict'

var webpack = require('webpack'),
path = require('path');

var APP = __dirname;

module.exports = {
  context: APP,
  entry: {
    app: ['webpack/hot/dev-server', './src/core/bootstrap.js']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new webpack.optimize.UglifyJsPlugin({minimize: true})
  ],
  output: {
    path: APP,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: 'style!css!sass'
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.js$/,
        loader: 'ng-annotate!jshint',
        exclude: /node_modules|bower_components|vendor/
      }
    ]
  }
};

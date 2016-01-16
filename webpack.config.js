const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const Clean = require('clean-webpack-plugin');

const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build')
};

module.exports = {
  entry: PATHS.app,

  output: {
    path: PATHS.build,
    filename: 'bundle-[hash].js'
  },

  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader"),
        include: PATHS.app
      },
      {
        test: /\.png$/,
        loader: "url-loader?mimetype=image/png",
        include: PATHS.app
      }
    ]
  },

  plugins: [

    new ExtractTextPlugin("style-[hash].css", {
      allChunks: true
    }),

    new Clean(['build']),

    new HtmlWebpackPlugin({
      title: 'Webpack Playground',
      foo: 'custom text from webpack config',
      template: 'templates/my-svg-laden-page.html',
      inject: 'body'
    })
  ]
};


const path = require('path');
// const customABLoader = require('./customABLoader.js');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
  },
  resolveLoader: {
    alias: {
      customABLoader: path.resolve(__dirname, './customABLoader'),
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          'babel-loader',
          {
            loader: 'customABLoader',
            options: {
              version: 'b',
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {loader: 'css-loader', options: {modules: true, importLoaders: 1}},
          'postcss-loader',
          {
            loader: 'customABLoader',
            options: {
              version: 'b',
            },
          },
        ],
      },
    ],
  },
};

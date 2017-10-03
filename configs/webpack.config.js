const path = require('path');
// const customABLoader = require('./customABLoader.js');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          'babel-loader',
          {
            loader: 'file-switch-loader',
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
            loader: 'file-switch-loader',
            options: {
              version: 'b',
            },
          },
        ],
      },
    ],
  },
};

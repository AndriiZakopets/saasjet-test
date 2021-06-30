const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  watch: process.argv.indexOf('--no-watch') <= -1,
  entry: {
    entry: path.resolve('./index.js'),
  },
  output: {
    filename: 'bundled.[name].js',
    path: path.resolve('../public/dist'),
  },
};

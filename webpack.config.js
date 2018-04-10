const path = require('path');

const publicDir = path.join(__dirname, 'public');
module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: publicDir,
    filename: 'bundle.js',
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      options: {
        presets: ['react', 'env'],
      },
    }, {
      test: /\.s?css$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader',
      ],
    }],
  },
  devServer: {
    historyApiFallback: true,
    contentBase: publicDir,
  },
};

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      title: 'IBM',
      template: './src/index.html',
      filename: 'index.html',
      inject: 'body'
    })
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  output: {
    clean: true
  }
};
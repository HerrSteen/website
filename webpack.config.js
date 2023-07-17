const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  mode: 'development',
  entry: {
    editor: ['./app/main.js', './styles/editor/editor-main.scss'],
    reddit: ['./app/main.js', './styles/reddit/reddit-main.scss'],
    tradingview: ['./app/main.js', './styles/tradingview/tradingview-main.scss'],
  },
  output: {
    path: path.resolve(__dirname, 'public/compiled'),
    filename: '[name].js',
    clean: true,
  },
  resolve: {
    extensions: ['.jsx', '.js', '.scss'],
  },
  plugins: [new MiniCssExtractPlugin({
    filename: '[name].css',
  })],
  module: {
    rules: [
        {
            test: /\.(js|jsx)$/,
            loader: 'babel-loader',
            exclude: '/node_modules/'
        },
        {
          test: /\.(s(a|c)ss)$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader',
          ],
        }
      ]
    }
}

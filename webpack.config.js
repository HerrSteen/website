const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: ['./app/main.js', './styles/editor/main.scss'],
  output: {
    path: path.resolve(__dirname, 'public/compiled'),
    filename: '[name].js',
  },
  plugins: [new MiniCssExtractPlugin({
    filename: "[name].css",
  })],  
  module: {
    rules: [
        {
            test: /\.js?$/,
            loader: "babel-loader",
            exclude: /node_modules/
        },
        {
          test: /\.(s(a|c)ss)$/,
          use: [
            MiniCssExtractPlugin.loader,
            "css-loader",
            "sass-loader",
          ],
        }        
      ] 
    }
};
const path = require('path')
const rootDir = path.resolve(__dirname, '../')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: path.resolve(rootDir, 'src/index.js'),
  output: {
    path: rootDir,
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: rootDir,
    compress: true,
    hot: true,
    open: true,
    host: '0.0.0.0',
    port: 8321
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    filename: 'index.html',
    template: path.resolve(rootDir, 'public/template.html')
  })]
}
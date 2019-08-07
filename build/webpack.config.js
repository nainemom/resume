const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const rootDir = path.resolve(__dirname, '../')

module.exports = {
  entry: path.join(rootDir, 'src/index.js'),
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
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(css|scss|sass)$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader'
          }
        ],
      },
      {
        test: /\.htm$/,
        use: [
          {
              loader: "html-loader"
          }
        ]
      },
      {
        test: /\.(jpg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              path: rootDir,
              name: '[name].[ext]?[hash]',
            }
          }
        ],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Amir Momenian - Resume',
      filename: 'index.html',
      template: path.join(rootDir, 'public/template.html')
    })
  ]
}
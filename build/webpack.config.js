const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const PrerenderSPAPlugin = require('prerender-spa-plugin')
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer
const rootDir = path.resolve(__dirname, '../')

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
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader/url'
          },
          {
            loader: 'file-loader',
            options: {
              path: rootDir,
              name: '[name].[ext]?[hash]',
            }
          }
        ],
      }
    ]
  },
  plugins: [
    new PrerenderSPAPlugin({
      staticDir: rootDir,
      routes: ['/'],
      renderer: new Renderer({
        renderAfterDocumentEvent: 'prerender-ready'
      })
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(rootDir, 'public/template.html')
    })
  ]
}
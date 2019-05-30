const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const PrerenderSPAPlugin = require('prerender-spa-plugin')
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer
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
        test: /\.md$/,
        use: [
            {
                loader: "html-loader"
            },
            {
                loader: "markdown-loader"
            }
        ]
      },
      {
        test: /\.(jpg)$/,
        use: [
          {
            loader: 'file-loader',
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
      title: 'Salam',
      filename: 'index.html',
      template: path.join(rootDir, 'public/template.html')
    }),
    new PrerenderSPAPlugin({
      staticDir: rootDir,
      outputDir: rootDir,
      routes: ['/'],
      renderer: new Renderer({
        renderAfterDocumentEvent: 'prerender-ready'
      })
    })
  ]
}
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: [
    './src/js/index.js',
    './src/scss/main.scss'
  ],
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'js/bundle.js'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      },
      {
        test: /\.(scss)$/,
        loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
      }
    ]
  },
  plugins: [
    // Specify output file name and path
    new ExtractTextPlugin({

      filename: 'css/main.css'
    })
  ]
}

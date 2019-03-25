const path = require('path')

module.exports = {
  watch: true,
  mode: 'development',
  entry: './src/js/index.js',
  output: {
    filename: 'main.js',
    path: path.join(__dirname, 'docs/js')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  stats: 'minimal'
}
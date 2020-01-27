const path = require('path');

module.exports = {

  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'build.js',
    path: path.resolve(__dirname, 'build')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
      },
      {
        test: /\.js/,
        exclude: /(node_modules|bower_components)/,
        use: [{
            loader: 'babel-loader'
        }]
    },
    ],
  }
}

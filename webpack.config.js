const path = require('path');
const { CheckerPlugin } = require('awesome-typescript-loader');

module.exports = {
  devServer: {
    // index: './src/index.ts',
    // contentBase: path.join(__dirname, "dist")
  },
  entry: './example/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
      }
    ]
  },
  plugins: [
    new CheckerPlugin()
  ]
};
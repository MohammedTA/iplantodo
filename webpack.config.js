const path = require('path');
var __dirname = path.dirname('./');
console.error(__dirname);

module.exports = {
  entry: './app/main.ts',
  output: {
    filename: './wwwroot/js/bundle.js',
    path: path.resolve(__dirname, "wwwroot/dist"),
  },
  devServer: {
    contentBase: "./",
    //publicPath: "./wwwroot",
    compress: true,
    port: 9000
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'ts-loader']
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: "source-map-loader"
      },
      {
        enforce: 'pre',
        test: /\.ts$/,
        use: "source-map-loader"
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".js"]
  },
  devtool: 'inline-source-map'
};
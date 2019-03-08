const path = require(`path`);
const HtmlWebpackPlugin = require(`html-webpack-plugin`);
const CopyWebpackPlugin = require(`copy-webpack-plugin`);

module.exports = {
  mode: `development`,
  entry: `./src/js/main.js`,
  output: {
    filename: `bundle.js`,
    path: path.join(__dirname, `public`),
  },
  devtool: `source-map`,
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: `babel-loader`,
          options: {
            presets: [`@babel/preset-env`],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `./src/index.html`,
    }),
    new CopyWebpackPlugin([
      {
        from: `src/css`,
        to: `./css`,
      }
    ]),
  ],
  devServer: {
    contentBase: path.join(__dirname, `public`),
    publicPath: `http://localhost:8080/`,
    hot: true,
    compress: true,
  },
};

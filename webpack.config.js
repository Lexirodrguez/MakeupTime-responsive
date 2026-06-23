const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

  entry: './src/datos.js', 
  
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
    },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/Tendencias.html',
      filename: 'Tendencias.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/Dupes.html',
      filename: 'Dupes.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/formulario.html',
      filename: 'formulario.html',
    }),
  ],


  devServer: {
    static: './dist',
    port: 3000,
    open: true,
  },
  
  mode: 'development',
};
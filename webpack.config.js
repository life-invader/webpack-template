const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env) => {
  const mode = env.NODE_ENV || 'development';
  const isDevMode = mode === 'development';
  const devtool = isDevMode ? 'inline-source-map' : undefined;

  return {
    mode: 'development',
    devtool,
    devServer: {
      static: path.resolve(__dirname, 'build'),
      hot: true,
    },
    entry: {
      index: path.resolve(__dirname, 'src'),
    },
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'js/[name].[contenthash].js',
      clean: true,
    },
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: [isDevMode ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader'],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'images/[name].[ext]',
          },
        },
        {
          test: /\.(woff|woff2)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'fonts/[name].[ext]',
          },
        },
        {
          test: /\.html$/i,
          loader: 'html-loader',
        },
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'css/style.[contenthash].css',
      }),
      new HtmlWebpackPlugin({
        title: 'Шаблон Frontend',
        template: path.resolve(__dirname, 'src', 'pages', 'index.html'),
        filename: '[name].html',
        favicon: '',
      }),
      new HtmlWebpackPlugin({
        title: 'Контакты',
        template: path.resolve(__dirname, 'src', 'pages', 'contacts.html'),
        filename: 'contacts.html',
        favicon: '',
      }),
      new HtmlWebpackPlugin({
        title: 'О сайте',
        template: path.resolve(__dirname, 'src', 'pages', 'about.html'),
        filename: 'about.html',
        favicon: '',
      }),
    ],
    resolve: {
      alias: {
        '#public': path.resolve(__dirname, 'public'),
        '#images': path.resolve(__dirname, 'public', 'assets', 'images'),
      },
    },
  };
};

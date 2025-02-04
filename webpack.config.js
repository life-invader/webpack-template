const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const getPages = () => {
  const pages = fs.readdirSync(path.resolve(__dirname, 'src', 'pages'));
  
  return pages.map(
    (page) =>
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'src', 'pages', page),
        filename: page,
        favicon: '',
      }),
  );
};

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
      ...getPages(),
    ],
    resolve: {
      alias: {
        '#public': path.resolve(__dirname, 'public'),
        '#images': path.resolve(__dirname, 'public', 'assets', 'images'),
        '#icons': path.resolve(__dirname, 'public', 'assets', 'icons'),
      },
      mainFiles: ['index'],
    },
  };
};

import { dirname, resolve } from 'path';
import { readdirSync } from 'fs';
import { fileURLToPath } from 'url';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const __dirname = dirname(fileURLToPath(import.meta.url));

const getPages = () => {
  const pages = readdirSync(resolve(__dirname, 'src', 'pages'));

  return pages.map(
    (page) =>
      new HtmlWebpackPlugin({
        template: resolve(__dirname, 'src', 'pages', page),
        filename: page,
        favicon: '',
      }),
  );
};

export default (env) => {
  const mode = env.NODE_ENV || 'development';
  const isDevMode = mode === 'development';
  const devtool = isDevMode ? 'inline-source-map' : undefined;

  return {
    mode: 'development',
    devtool,
    devServer: {
      static: resolve(__dirname, 'build'),
      hot: true,
    },
    entry: {
      index: resolve(__dirname, 'src'),
    },
    output: {
      path: resolve(__dirname, 'build'),
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
        '#public': resolve(__dirname, 'public'),
        '#images': resolve(__dirname, 'public', 'assets', 'images'),
        '#icons': resolve(__dirname, 'public', 'assets', 'icons'),
      },
      mainFiles: ['index'],
    },
  };
};

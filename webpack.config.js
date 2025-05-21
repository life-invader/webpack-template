import { dirname, resolve, basename, extname } from "path";
import { readdirSync } from "fs";
import { fileURLToPath } from "url";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import EslintPlugin from "eslint-webpack-plugin";
import StylelintPlugin from "stylelint-webpack-plugin";
import CssMinimizerPlugin from "css-minimizer-webpack-plugin";
import CopyWebpackPlugin from "copy-webpack-plugin";

const __dirname = dirname(fileURLToPath(import.meta.url));

const getPages = () => {
  const pages = readdirSync(resolve(__dirname, "src", "pages")).filter(
    (item) => extname(item) === ".jsx",
  );
  const pageNamesNoExt = pages.map((item) => basename(item, extname(item)));

  return pageNamesNoExt.map(
    (page) =>
      new HtmlWebpackPlugin({
        template: resolve(__dirname, "src", "pages", `${page}.jsx`),
        filename: `${page}.html`,
      }),
  );
};

export default (env) => {
  const mode = env.NODE_ENV || "development";
  const isDevMode = mode === "development";
  const devtool = isDevMode ? "eval-source-map" : undefined;

  return {
    mode: mode,
    devtool,
    devServer: {
      watchFiles: ["src/**/*"],
      port: "auto",
      hot: true,
    },
    entry: {
      index: resolve(__dirname, "src", "app", "app.js"),
    },
    output: {
      path: resolve(__dirname, "build"),
      filename: "js/bundle.[contenthash].js",
      clean: true,
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              targets: "defaults",
              presets: [
                "@babel/preset-env",
                ["@babel/preset-react", { runtime: "automatic" }],
              ],
            },
          },
        },
        {
          test: /\.css$/i,
          use: [
            isDevMode ? "style-loader" : MiniCssExtractPlugin.loader,
            "css-loader",
            {
              loader: "postcss-loader",
              options: {
                postcssOptions: {
                  plugins: [["autoprefixer"]],
                },
              },
            },
          ],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
          type: "asset/resource",
          generator: {
            filename: "images/[name][ext]",
          },
          parser: {
            dataUrlCondition: {
              maxSize: 10 * 1024, // Сохраняет картинки инлайн в base64, если < 10Кб
            },
          },
        },
        {
          test: /\.(woff|woff2)$/i,
          type: "asset/resource",
          generator: {
            filename: "fonts/[name][ext]",
          },
        },
        {
          test: /\.html$/i,
          loader: "html-loader",
        },
      ],
    },
    plugins: [
      new StylelintPlugin({}),
      new EslintPlugin({
        configType: "flat",
        fix: true,
      }),
      new MiniCssExtractPlugin({
        filename: "css/style.[contenthash].css",
      }),
      new CopyWebpackPlugin({
        patterns: [
          {
            from: "public/assets/icons",
            to: "icons",
          },
          { from: "public/**/*.ico", to: "[name][ext]" },
          { from: "public/**/manifest.json", to: "[name][ext]" },
        ],
      }),
      ...getPages(),
    ],
    resolve: {
      alias: {
        "@public": resolve(__dirname, "public"),
        "@images": resolve(__dirname, "public", "assets", "images"),
        "@icons": resolve(__dirname, "public", "assets", "icons"),
        "@widgets": resolve(__dirname, "src", "widgets"),
        "@shared": resolve(__dirname, "src", "shared"),
      },
      mainFiles: ["index"],
      extensions: [".js"],
    },
    optimization: {
      minimizer: ["...", new CssMinimizerPlugin()],
    },
  };
};

const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development', // webpack4에서 추가되었습니다. mode가 development면 개발용, production이면 배포용입니다. 배포용 일 경우에는 알아서 최적화가 적용됩니다. 따라서 기존 최적화플러그인들이 대량으로 호환되지 않습니다.
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'index.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        // mini-css-extract-plugin로 대체하여 sass를 내부 style로 번들시키지 않고 css 파일로 별도 분리시켜준다.
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              limit: 8192,
              publicPath: '/public/assets/images/',
              name: 'assets/images/[name].[hash:8].[ext]', // 이름, 해시, 확장자
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/fonts/[name].[hash:8].[ext]', // 이름, 해시, 확장자
            },
          },
        ],
      },
    ]
  },
  devtool: 'source-map',
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
    ],
    // 개발 중에도 실행하려면 해당 minimize 값을 넣어준다.
    minimize: true,
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.BannerPlugin({
      banner: `Study build time : ${new Date().toLocaleTimeString()}`,
    }),
    // 컴파일 + 번들링 CSS 파일이 저장될 경로와 이름 지정
    new MiniCssExtractPlugin({ filename: 'assets/css/style.css' }),
    new ImageMinimizerPlugin({
      minimizer: {
        implementation: ImageMinimizerPlugin.squooshMinify,
        options: {
          encodeOptions: {
            mozjpeg: {
              // That setting might be close to lossless, but it’s not guaranteed
              // https://github.com/GoogleChromeLabs/squoosh/issues/85
              quality: 100,
            },
            webp: {
              lossless: 1,
            },
            avif: {
              // https://github.com/GoogleChromeLabs/squoosh/blob/dev/codecs/avif/enc/README.md
              cqLevel: 0,
            },
          },
        },
      },
    }),
  ]
};
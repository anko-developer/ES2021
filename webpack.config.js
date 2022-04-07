const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HandlebarsPlugin = require('handlebars-webpack-plugin');

module.exports = {
  mode: 'production', // webpack4에서 추가되었습니다. mode가 development면 개발용, production이면 배포용입니다. 배포용 일 경우에는 알아서 최적화가 적용됩니다. 따라서 기존 최적화플러그인들이 대량으로 호환되지 않습니다.
  entry: {
    app: './src/index.js',
    vendor: [
      'jquery'
    ]
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].js',
    clean: true
  },
  devServer: {
    port: 9000
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader, 
          'css-loader', 
          'sass-loader',
        ]
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpe?g|gif|webp)$/i,
        type: 'asset',
        generator: {
          filename: 'assets/images/[name][ext]'
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset',
        generator: {
          filename: 'assets/fonts/[name][ext]'
        }
      },
      {
        test: /\.svg$/,
        loader: 'svg-sprite-loader'
      }
    ]
  },
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(), 
      new TerserPlugin()
    ],
    // 개발 중에도 실행하려면 해당 minimize에 true값을 넣어준다 default는 false 값이다
    // minimize: true
  },
  plugins: [
    new webpack.BannerPlugin({
      banner: `Study build time : ${new Date().toLocaleTimeString()}`
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
              quality: 75
            },
            webp: {
              lossless: 1
            },
            avif: {
              // https://github.com/GoogleChromeLabs/squoosh/blob/dev/codecs/avif/enc/README.md
              cqLevel: 0
            }
          }
        }
      }
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
    new HtmlWebpackPlugin({
      title: 'main',
      template: path.join(path.resolve(__dirname, 'src'), 'index.html')
    }),
    new HandlebarsPlugin({
      entry: path.join(process.cwd(), 'src', 'handlebars', '**', '*.hbs'),
      output: path.join(process.cwd(), 'public', 'pages', '[path]', '[name].html'),
      data: path.join(__dirname, 'handlebars.json'),
      partials: [path.join(process.cwd(), 'src', 'partials', '**', '*.hbs')],
      helpers: {
        isActive: function (value) {
          return value == ".";
        }
      }
    }),
  ],
  devtool: 'source-map'
};

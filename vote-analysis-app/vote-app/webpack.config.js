const { NxWebpackPlugin } = require('@nx/webpack');  // NxWebpackPlugin 추가
const { join } = require('path');

module.exports = {
  output: {
    path: join(__dirname, './build'),
    filename: '[name].[contenthash].js',  // 빌드 시 해싱 추가
    clean: true,  // 이전 빌드 파일 정리
  },
  devServer: {
    port: 4200,
    historyApiFallback: {
      index: '/index.html',
      disableDotRule: true,
      htmlAcceptHeaders: ['text/html', 'application/xhtml+xml'],
    },
  },
  plugins: [
    new NxWebpackPlugin({
      tsConfig: join(__dirname, './tsconfig.app.json'),
      main: join(__dirname, './src/main.tsx'),
      index: join(__dirname, './src/index.html'),
      assets: [join(__dirname, './src/favicon.ico'), join(__dirname, './src/assets')],
      styles: [join(__dirname, './src/styles.css')],
      outputHashing: process.env['NODE_ENV'] === 'production' ? 'all' : 'none',
      optimization: process.env['NODE_ENV'] === 'production',
    }),
    // 추가된 NxWebpackPlugin 사용을 통해 최적화
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'babel-loader',  // TSX 파일에 babel-loader 사용
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],  // CSS 로더 추가
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
};
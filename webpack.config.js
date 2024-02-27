import { ProvidePlugin } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin, { loader as _loader } from 'mini-css-extract-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';

export const mode = 'development';
export const entry = {
  main: './src/main.ts',
  polyfills: './src/polyfills.ts',
  app: './src/app/app.module.ts',
};
export const resolve = {
  extensions: ['.ts', '.js'],
  fallback: {
    util: require.resolve('util/'),
    os: require.resolve('os-browserify/browser'),
    stream: require.resolve('stream-browserify'),
    crypto: require.resolve('crypto-browserify'),
    timers: require.resolve('timers-browserify'),
    zlib: require.resolve('browserify-zlib'),
    process: require.resolve('process/browser'),
    http: require.resolve('stream-http'),
    https: require.resolve('https-browserify'),
    assert: require.resolve('assert/'),
  },
};
export const plugins = [
  new ProvidePlugin({
    process: 'process/browser',
    Buffer: ['buffer', 'Buffer'],
  }),
  new HtmlWebpackPlugin(),
  new NodePolyfillPlugin(),
  new MiniCssExtractPlugin(),
  new CleanWebpackPlugin(),
];
export const optimization = {
  minimize: false,
};
export const performance = {
  hints: false,
};
export const module = {
  rules: [
    {
      test: /node_modules[\\/]class-validator[\\/].*\.(js|ts)$/,
      loader: 'webpack-conditional-loader',
      options: {
        skipProduction: true,
      },
    },
    {
      test: /\.tsx?$/,
      exclude: /node_modules/,
      use: {
        loader: 'ts-loader',
      },
    },
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
        },
      },
    },
    {
      test: /\.css$/,
      use: [
        _loader,
        'css-loader',
      ],
    },
    {
      test: /\.(png|jpg|jpeg|gif|svg)$/,
      type: 'asset/resource',
    },
    {
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      type: 'asset/resource',
    },
  ],
};

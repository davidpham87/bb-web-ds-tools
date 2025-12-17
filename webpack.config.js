const path = require('path');
const webpack = require('webpack');
const { PyodidePlugin } = require("@pyodide/webpack-plugin");

const commonConfig = {
  mode: 'development',
  resolve: {
    alias: {
      "process/browser": require.resolve("process/browser"),
    },
    fallback: {
      "process": require.resolve("process/browser"),
      "fs": false,
      "assert": false,
      "buffer": false,
      "console": false,
      "constants": false,
      "crypto": false,
      "domain": false,
      "events": false,
      "http": false,
      "https": false,
      "os": false,
      "path": false,
      "punycode": false,
      "querystring": false,
      "stream": false,
      "string_decoder": false,
      "sys": false,
      "timers": false,
      "tty": false,
      "url": false,
      "util": false,
      "vm": false,
      "zlib": false
    }
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
    new PyodidePlugin(),
  ],
  ignoreWarnings: [
    (warning) =>
      warning.module &&
      warning.module.resource &&
      warning.module.resource.includes("sqlite3.mjs") &&
      warning.message.includes("Critical dependency"),
  ],
  module: {
    rules: [
      {
        test: /\.m?js/,
        resolve: {
          fullySpecified: false
        }
      },
      {
        test: /\.css$/i,
        oneOf: [
          {
            resourceQuery: /raw/,
            type: 'asset/source',
          },
          {
            use: ["style-loader", "css-loader"],
          }
        ]
      },
      {
        resourceQuery: /text/,
        type: 'asset/source',
      },
      {
        test: /\.svg$/,
        type: 'asset/inline',
      },
      {
        test: /\.whl$/,
        type: 'asset/resource',
        generator: {
          filename: 'pypi/[name][ext]'
        }
      },
      {
        test: /\.json$/,
        include: /pypi/,
        type: 'asset/resource',
        generator: {
          filename: 'pypi/[name][ext]'
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[hash][ext][query]'
        }
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[hash][ext][query]'
        }
      },
      {
        test: /sqlite3\.wasm$/,
        type: 'asset/resource',
        generator: {
          filename: '[name][ext]'
        }
      }
    ],
  },
};

module.exports = [
  Object.assign({}, commonConfig, {
    name: 'app',
    entry: './target/index.js',
    output: {
      path: path.resolve(__dirname, 'docs/js'),
      filename: 'libs.js',
      library: 'libs',
      libraryTarget: 'var'
    },
  }),
  Object.assign({}, commonConfig, {
    name: 'test',
    entry: './target/test/npm-index.js',
    output: {
      path: path.resolve(__dirname, 'target/test'),
      filename: 'libs.js',
      library: 'libs',
      libraryTarget: 'var'
    },
  })
];

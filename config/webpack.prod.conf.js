const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const path = require('node:path')
const { VueLoaderPlugin } = require('vue-loader')
module.exports = {
  mode: 'production',
  entry: {
    main: path.resolve(__dirname, '../src/main.js'),
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].js',
  },
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserPlugin(),
    ]
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
      test: /\.s(c|a)ss$/,
      use: [
        'vue-style-loader',
        'css-loader',
        {
          loader: 'sass-loader',
          options: {
            implementation: require('sass'),
            indentedSyntax: true
          }
        }
      ]
    }]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}
